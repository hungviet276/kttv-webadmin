package com.neo.kttvwebadmin.services;

import com.neo.kttvwebadmin.entity.ParameterChartMappingAndData;
import com.neo.kttvwebadmin.exception.KTTVException;

/**
 * @author thanglv on 11/14/2020
 * @project NBD
 */
public interface ReportService {
    ParameterChartMappingAndData getParameterChartMappingAndData(String stationCode, String parameterTypeId, String startDate, String endDate) throws KTTVException;
}
