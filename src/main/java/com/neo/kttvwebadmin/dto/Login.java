/**
 * 
 */
package com.neo.kttvwebadmin.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author admin
 *
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Login {
	String userId;
	String password;
	List<Menu> menus;
	List<Api> urlApi;
}
