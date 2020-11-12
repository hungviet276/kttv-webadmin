package com.neo.kttvwebadmin.services;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.*;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.neo.kttvwebadmin.dto.Menu;
import com.neo.kttvwebadmin.dto.TreeMenu;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
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
    private static final String BEARER = "Bearer";

    private Key key;

    private long tokenValidityInMilliseconds;

    private String secret = "124f093edb90d9bd3c3bdf846a9069d654073b44473bae0794465923e593d9d8bb39278fa487681404e71e7cf45c45cd398d9f351055c22a95448b8d13706ce7";

    @Autowired
    private HttpServletRequest request;

    @Autowired
    private RetrofitManager retrofitManager;

    private UserService userSerice;

    @Autowired
    ObjectMapper objectMapper;

    @PostConstruct
    public void initUserService() {
        userSerice  = retrofitManager.createService(UserService.class);
        byte[] keyBytes = secret.getBytes(StandardCharsets.UTF_8);
        this.key = Keys.hmacShaKeyFor(keyBytes);
        this.tokenValidityInMilliseconds = 8640000;
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
        com.neo.kttvwebadmin.dto.UserInfo userBO = null;
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
            Claims claims = getClaims(token);
            if(claims != null){
//                Map<String,Object> map = (Map)claims.get("userBO");
//                userBO = (UserInfo)map.get("userBO");
                String s = (String)claims.get("userBO");
                userBO = objectMapper.readValue(s, com.neo.kttvwebadmin.dto.UserInfo.class);
            }
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
        session.setAttribute("userInfo",userBO);
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

    public Claims getClaims(String authToken) {
        Claims claims = null;
        try {
            authToken = authToken.replace(BEARER,"").trim();
            claims = Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(authToken).getBody();
            return claims;
        } catch (JwtException | IllegalArgumentException e) {
            log.info("Invalid JWT token.");
            log.trace("Invalid JWT token trace.", e);
        }
        return claims;
    }
}
