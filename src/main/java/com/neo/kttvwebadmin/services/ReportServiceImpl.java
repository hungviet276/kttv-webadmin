package com.neo.kttvwebadmin.services;

import com.neo.kttvwebadmin.entity.ParameterChartMappingAndData;
import com.neo.kttvwebadmin.exception.KTTVException;
import com.neo.kttvwebadmin.utils.Constants;
import com.neo.kttvwebadmin.utils.DateUtils;
import com.neo.kttvwebadmin.utils.GetParameterChartMappingAndDataVM;
import org.apache.logging.log4j.util.Strings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

/**
 * @author thanglv on 11/14/2020
 * @project NBD
 */

@Service
public class ReportServiceImpl implements ReportService {

    @Autowired
    @Qualifier("restTemplate")
    private RestTemplate restTemplate;

    @Value("${api_url}")
    private String apiUrl;

    @Override
    public ParameterChartMappingAndData getParameterChartMappingAndData(String stationCode, String parameterTypeId, String startDate, String endDate, String token) throws KTTVException {
        // validate request
        validateDataRequest(stationCode, parameterTypeId, startDate, endDate);
        // call api get data
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", token);
        headers.add("Accept", "application/json");
        headers.add("Content-Type", "application/json");

        GetParameterChartMappingAndDataVM request = GetParameterChartMappingAndDataVM.builder()
                .stationCode(stationCode)
                .parameterTypeId(parameterTypeId)
                .startDate(startDate)
                .endDate(endDate)
                .build();

        HttpEntity<GetParameterChartMappingAndDataVM> entity = new HttpEntity<>(request, headers);
        UriComponentsBuilder urlRequestBuilder = UriComponentsBuilder.fromHttpUrl(apiUrl + Constants.REPORT.URL_REQ_REPORT_API);
        ResponseEntity<ParameterChartMappingAndData> responseEntity = restTemplate
                .exchange(
                        urlRequestBuilder.toUriString(),
                        HttpMethod.POST,
                        entity,
                        ParameterChartMappingAndData.class);

        return responseEntity.getBody();
    }

    private void validateDataRequest(String stationCode, String parameterTypeId, String startDate, String endDate) throws KTTVException {
        String s = "%s - %s - %s - %s";
        s = String.format(s, stationCode, parameterTypeId, startDate, endDate);
        System.out.println(s);
        if (Strings.isEmpty(stationCode) || stationCode.length() > 50)
            throw new KTTVException(400, "stationCode không hợp lệ!");
        if (Strings.isEmpty(parameterTypeId) ||  parameterTypeId.length() > 20)
            throw new KTTVException(400, "parameterTypeId không hợp lệ!");
        try {
            Long.parseLong(parameterTypeId);
        } catch (Exception e) {
            throw new KTTVException(400, "parameterTypeId không hợp lệ!");
        }
        if (Strings.isEmpty(startDate) || startDate.length() > 20)
            throw new KTTVException(400, "startDate không hợp lệ!");
        if (Strings.isEmpty(endDate) || endDate.length() > 20)
            throw new KTTVException(400, "endDate không hợp lệ!");
        if (!DateUtils.isValid(startDate, "dd/MM/yyyy HH:mm"))
            throw new KTTVException(400, "startDate không hợp lệ!");
        if (!DateUtils.isValid(endDate, "dd/MM/yyyy HH:mm"))
            throw new KTTVException(400, "endDate không hợp lệ!");
    }
}
