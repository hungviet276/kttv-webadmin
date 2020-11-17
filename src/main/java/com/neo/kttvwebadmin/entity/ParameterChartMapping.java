package com.neo.kttvwebadmin.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;

/**
 * @author thanglv on 11/14/2020
 * @project NBD
 */

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ParameterChartMapping implements Serializable {
    private Long id;

    private Long parameterTypeId;

    private String templateDir;

    private String createdDate;

    private String createdBy;
}
