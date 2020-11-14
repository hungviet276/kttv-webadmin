package com.neo.kttvwebadmin.services;

import com.neo.kttvwebadmin.entity.ParameterChartMappingAndData;
import com.neo.kttvwebadmin.exception.KTTVException;
import com.neo.kttvwebadmin.utils.DateUtils;
import org.apache.logging.log4j.util.Strings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ResponseStatusException;

/**
 * @author thanglv on 11/14/2020
 * @project NBD
 */

@Service
public class ReportServiceImpl implements ReportService {

    @Autowired
    @Qualifier("restTemplate")
    private RestTemplate restTemplate;

    @Override
    public ParameterChartMappingAndData getParameterChartMappingAndData(String stationCode, String parameterTypeId, String startDate, String endDate) throws KTTVException {
        validateDataRequest(stationCode, parameterTypeId, startDate, endDate);
        return null;
    }

    private void validateDataRequest(String stationCode, String parameterTypeId, String startDate, String endDate) throws KTTVException {
        if (Strings.isEmpty(stationCode) || stationCode.length() > 50)
            throw new KTTVException(400, "stationCode không hợp lệ!");
        if (Strings.isNotEmpty(parameterTypeId) ||  parameterTypeId.length() > 20)
            throw new KTTVException(400, "parameterTypeId không hợp lệ!");
        try {
            Long.parseLong(parameterTypeId);
        } catch (Exception e) {
            throw new KTTVException(400, "parameterTypeId không hợp lệ!");
        }
        if (Strings.isNotEmpty(startDate) || startDate.length() > 10)
            throw new KTTVException(400, "startDate không hợp lệ!");
        if (Strings.isNotEmpty(endDate) || endDate.length() > 10)
            throw new KTTVException(400, "endDate không hợp lệ!");
        if (!DateUtils.isValid(startDate, "dd/mm/yyyy"))
            throw new KTTVException(400, "startDate không hợp lệ!");
        if (!DateUtils.isValid(endDate, "dd/mm/yyyy"))
            throw new KTTVException(400, "endDate không hợp lệ!");
    }
}
