package com.neo.kttvwebadmin.services;

import java.util.HashSet;
import java.util.Set;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

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
//		userInfo.setId("admin");
//		userInfo.setPassword("$2a$10$vH7v9wGgrchknsumIOt2ve/tTA1D1M6nh0uLf3HyHozicvMQ9lEf.");
        if (login == null)
            throw new UsernameNotFoundException("User " + username + " was not found in the database");

        HttpSession session = request.getSession();
        session.setAttribute("menus", login.getMenus());
        session.setAttribute("urlApi", login.getUrlApi());
        session.setAttribute("token", token);

        Set<SimpleGrantedAuthority> simpleGrantedAuthorities = new HashSet<>();
        return new User(login.getUserId(), login.getPassword(), simpleGrantedAuthorities);
    }
}
