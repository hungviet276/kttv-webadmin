package com.neo.kttvwebadmin.services;

import com.neo.kttvwebadmin.entity.ParameterChartMappingAndData;
import com.neo.kttvwebadmin.exception.KTTVException;
import com.neo.kttvwebadmin.utils.TimeSeriesDataDTO;

import java.util.List;

/**
 * @author thanglv on 11/14/2020
 * @project NBD
 */
public interface ReportService {
    ParameterChartMappingAndData getParameterChartMappingAndData(String stationCode, String parameterTypeId, String type,String startDate, String endDate, String token) throws KTTVException;

    List<TimeSeriesDataDTO> getStationReportData(String stationCode, String token);

    String[] getListParameterTypeIdDisplayChart(String stationCode, String token);
}
