/**
 * 
 */
package com.neo.kttvwebadmin.handler;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.stereotype.Service;

@Service
public class CustomLogoutHandler implements LogoutHandler {

	private Logger log = LoggerFactory.getLogger(getClass());

	@Override
	public void logout(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {
		HttpSession session = request.getSession();
		session.removeAttribute("account");
 		session.removeAttribute("balance");
 		response.setHeader("Cache-Control", "no-cache"); // Forces caches to obtain a new copy of the page from the
 															// origin server
 		response.setHeader("Cache-Control", "no-store"); // Directs caches not to store the page under any circumstance
 		response.setDateHeader("Expires", 0); // Causes the proxy cache to see the page as "stale"
 		response.setHeader("Pragma", "no-cache"); // HTTP 1.0 backward compatibility
 		String userName = (String) session.getAttribute("account");
 		if (null == userName) {
 			request.setAttribute("Error", "Session has ended.  Please login.");
 		}
 		session.invalidate();
 		Cookie[] cookies = request.getCookies();
 		if (cookies != null) {
 			for (Cookie cookie : cookies) {
 				cookie.setValue("");
 				cookie.setPath("/login");
 				cookie.setMaxAge(0);
 				response.addCookie(cookie);
 			}
 		}
 		log.info("CustomLogoutHandler: Logout thanh cong");
	}
}