package com.neo.kttvwebadmin.utils;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * @author thanglv on 11/19/2020
 * @project NBD
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class StationTimeSeries implements Serializable {
    private Integer tsId;
    private String tsName;
    private String stationId;
    private Integer tsTypeId;
    private Integer parameterTypeId;
    private String parameterTypeName;
    private String parameterTypeDescription;
    private String stationNo;
    private String stationName;
    private String stationLongName;
    private Float stationLat;
    private Float stationLong;
    private Integer catchmentId;
    private String catchmentName;
    private Integer siteId;
    private String siteName;
    private Integer riverId;
    private String riverName;
    private Integer provinceId;
    private String provinceName;
    private Integer districtId;
    private String districtName;
    private Integer countryId;
    private String countryName;
    private Integer wardId;
    private String wardName;
    private Integer projectId;
    private String projectName;
    private String storage;
    private Integer status;
    private Integer unitId;
    private String unitName;
    private String unitCode;
    private String timeSeries;
    private String objectTypeShortName;
    private String prTimestamp;
    private Integer PrValue;
    private Integer PrWarning;
    private String PrCreatedUser;
    private String PrCreatedDate;
    private Long productId;
}
