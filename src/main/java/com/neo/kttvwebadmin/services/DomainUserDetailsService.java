package com.neo.kttvwebadmin.services;

import java.util.*;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.neo.kttvwebadmin.dto.Menu;
import com.neo.kttvwebadmin.dto.TreeMenu;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.neo.kttvwebadmin.dto.Login;
import com.neo.kttvwebadmin.entity.UserInfo;
import com.neo.kttvwebadmin.utils.RetrofitManager;

import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import okhttp3.Headers;
import org.springframework.stereotype.Service;
import retrofit2.Response;
import retrofit2.Call;

/**
 * Authenticate a user from the database.
 */
@Service("userDetailsService")
@Slf4j
public class DomainUserDetailsService implements UserDetailsService {

    @Autowired
    private HttpServletRequest request;

    @Autowired
    private RetrofitManager retrofitManager;

    private UserService userSerice;


    @PostConstruct
    public void initUserService() {
        userSerice  = retrofitManager.createService(UserService.class);
    }

    /**
     * function get user_info by username from database
     *
     * @param username
     * @return
     */
    @SneakyThrows
    @Override
    public UserDetails loadUserByUsername(final String username) {
        String token = "";
        Login login = null;
        String password = request.getParameter("password");
        UserInfo userInfo = UserInfo.builder().build();
        userInfo.setUsername(username);
        userInfo.setPassword(password);

        Call<Login> callSync = userSerice.authenticate(userInfo);
        try {
            Response<Login> response = callSync.execute();
            Headers headers = response.headers();
            token = headers.get("authorization");

            login = response.body();

        } catch (Exception ex) {
            log.error(ex.getMessage());
        }

        if (login == null)
            throw new UsernameNotFoundException("User " + username + " was not found in the database");

        List<Menu> menuList = login.getMenus();
        Map<Long, TreeMenu> menuMap = getListTreeMenu(menuList);
        StringBuilder htmlMenu = new StringBuilder("");
        for (Map.Entry<Long, TreeMenu> item : menuMap.entrySet()) {
            TreeMenu treeMenu = item.getValue();
            if (treeMenu.getChildren().size() ==0) {
                htmlMenu.append("<li class='nav-item'><a href='")
                        .append(treeMenu.getDetailFile())
                        .append("' class='nav-link direct' style='white-space: ;display: flex !important;'><i class='nav-icon ")
                        .append(treeMenu.getPictureFile()).append("'></i><p>")
                        .append(treeMenu.getName())
                        .append("</p></a></li>");
            } else {
                htmlMenu.append("<li class='nav-item has-treeview' style='max-width: 100%;'><a href='").append((treeMenu.getDetailFile() != null) ? treeMenu.getDetailFile() : "#").append("' class='nav-link'><i class='nav-icon ").append(treeMenu.getPictureFile()).append("'></i><p>").append(treeMenu.getName()).append("<i class='right fas fa-angle-left'></i></p></a><ul class='nav nav-treeview'>");
                for (Menu menu : treeMenu.getChildren()) {
                    htmlMenu.append("<li class='nav-item'><a href='").append(menu.getDetailFile()).append("' class='nav-link direct' style='white-space: ;display: flex !important;'>&nbsp;&nbsp;&nbsp;&nbsp;<i class='").append(menu.getPictureFile()).append(" nav-icon'/><p>").append(menu.getName()).append("</p></a></li>");
                }
                htmlMenu.append("</ul></li>");
            }
        }

        HttpSession session = request.getSession();
        session.setAttribute("menus", login.getMenus());
        session.setAttribute("urlApi", login.getUrlApi());
        session.setAttribute("token", token);
        session.setAttribute("htmlMenu", htmlMenu);

        Set<SimpleGrantedAuthority> simpleGrantedAuthorities = new HashSet<>();
        return new User(login.getUserId(), login.getPassword(), simpleGrantedAuthorities);
    }

    private Map<Long, TreeMenu> getListTreeMenu(List<Menu> menuList) {
        Map<Long, TreeMenu> menuMap = new HashMap<>();
        List<Menu> menuClone = new ArrayList<>(menuList);
        for (Menu menu : menuClone) {
            if (menu.getLevel() == 0) {
                TreeMenu treeMenu = TreeMenu
                        .builder()
                        .id(menu.getId())
                        .detailFile(menu.getDetailFile())
                        .name(menu.getName())
                        .pictureFile(menu.getPictureFile())
                        .parentId(menu.getParentId())
                        .children(new ArrayList<>())
                        .build();
                menuMap.put(menu.getId(), treeMenu);
            } else
                break;
        }

        for (Menu menu : menuClone) {
            if (menu.getLevel() != 0) {
                TreeMenu treeMenu = menuMap.get(menu.getParentId());
                if (treeMenu != null) {
                    treeMenu.getChildren().add(menu);
                }
            }
        }
        return menuMap;
    }
}
