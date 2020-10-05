/**
 * 
 */
package com.neo.kttvwebadmin.dto;

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
public class Menu {
	Integer id;
	String menuUrl;
}
