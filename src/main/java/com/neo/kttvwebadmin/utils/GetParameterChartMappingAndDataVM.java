package com.neo.kttvwebadmin.utils;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.io.Serializable;

/**
 * @author thanglv on 11/14/2020
 * @project NBD
 */

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GetParameterChartMappingAndDataVM implements Serializable {

    private String stationCode;

    private String parameterTypeId;

    private String type;

    private String startDate;

    private String endDate;
}
