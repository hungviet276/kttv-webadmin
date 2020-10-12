package com.neo.kttvwebadmin.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

/**
 * @author thanglv on 10/12/2020
 * @project NBD
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TreeMenu {
    private long id;

    private String detailFile;

    private String name;

    private long parentId;

    private String pictureFile;

    private int level;

    private List<Menu> children;
}
