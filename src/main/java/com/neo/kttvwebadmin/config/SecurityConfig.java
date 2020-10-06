package com.neo.kttvwebadmin.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.neo.kttvwebadmin.handler.CustomAuthSuccessHandler;
import com.neo.kttvwebadmin.handler.CustomLogoutHandler;
import com.neo.kttvwebadmin.services.DomainUserDetailsService;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Value("${tokenValiditySecond}")
	private int tokenValiditySecond;
	
	@Autowired
	private DomainUserDetailsService userDetailsService;

	@Autowired
	private CustomLogoutHandler logoutHandler;

	@Autowired
	private CustomAuthSuccessHandler loginHandler;

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		// Cấu hình Remember Me.
		http.rememberMe().key("uniqueAndSecret").tokenValiditySeconds(tokenValiditySecond);
		http.cors().disable();
		http.csrf().disable().authorizeRequests()
				// .antMatchers("/admin/manage-account").hasAuthority("MANAGER")
				.antMatchers("/", "/register","/mail_group").permitAll().anyRequest().authenticated().and().formLogin()
				.defaultSuccessUrl("/index").successHandler(loginHandler).loginProcessingUrl("/j_spring_security_check")
				.loginPage("/login").usernameParameter("username").passwordParameter("password")
				.failureUrl("/login?error=true").and().logout().logoutUrl("/logout").addLogoutHandler(logoutHandler)
				.logoutSuccessUrl("/").and().exceptionHandling().accessDeniedPage("/403");
	}

	@Override
	public void configure(WebSecurity web) {
		web.ignoring().antMatchers("/css/**", "/js/**", "/admin_lte/**");
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

}
