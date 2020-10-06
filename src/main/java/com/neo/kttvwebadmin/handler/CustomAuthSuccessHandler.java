/**
 * 
 */
package com.neo.kttvwebadmin.handler;

import java.io.IOException;
import java.security.Principal;
import java.util.Collection;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

@Component
public class CustomAuthSuccessHandler implements AuthenticationSuccessHandler {
	
	@Value("${api.url}")
	private String apiUrl;

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws IOException, ServletException {

		String userName = "";
		HttpSession session = request.getSession();
		Collection<GrantedAuthority> authorities = null;
		if (authentication.getPrincipal() instanceof Principal) {
			userName = ((Principal) authentication.getPrincipal()).getName();
			session.setAttribute("role", "none");
			System.out.println("apiUrl 1 "+ apiUrl);
		} else {
			User userSpringSecu = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
			session.setAttribute("role", String.valueOf(userSpringSecu.getAuthorities()));
			session.setAttribute("userBO", userSpringSecu);
			System.out.println("apiUrl 2 "+ apiUrl);
		}
		
		session.setAttribute("apiUrl", apiUrl);
		response.sendRedirect("/");
	}
}
