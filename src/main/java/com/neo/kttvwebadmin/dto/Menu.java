/**
 * 
 */
package com.neo.kttvwebadmin.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
@JsonIgnoreProperties(ignoreUnknown = true)
public class Menu {

	private long id;

	private String detailFile;

	private String name;

	private long parentId;

	private String pictureFile;

	private int level;
}
