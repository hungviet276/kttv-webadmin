package com.neo.kttvwebadmin.services;

import com.neo.kttvwebadmin.dto.NotificationToDayDTO;
import com.neo.kttvwebadmin.utils.Constants;
import com.neo.kttvwebadmin.utils.GetStationDataReportVM;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.ArrayList;
import java.util.List;

/**
 * @author thanglv on 11/26/2020
 * @project NBD
 */

@Service
public class WarningMangerStationServiceImpl implements WarningMangerStationService {

    @Autowired
    private RestTemplate restTemplate;

    @Value("${api_url}")
    private String apiUrl;

    @Override
    public List<NotificationToDayDTO> getListNotificationToday(String token) {
        // call api get data
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", token);
        headers.add("Accept", "application/json");
        headers.add("Content-Type", "application/json");

        UriComponentsBuilder urlRequestBuilder = UriComponentsBuilder.fromHttpUrl(apiUrl + Constants.NOTIFICATION.URL_GET_NOTIFICATION_TODAY);
        List<NotificationToDayDTO> notificationToDayDTOList = new ArrayList<>();
        try {
            HttpEntity entity = new HttpEntity<>(headers);
            ResponseEntity<List<NotificationToDayDTO>> responseEntity = restTemplate
                    .exchange(
                            urlRequestBuilder.toUriString(),
                            HttpMethod.GET,
                            entity,
                            new ParameterizedTypeReference<List<NotificationToDayDTO>>(){});
            if (responseEntity.getBody() != null)
                notificationToDayDTOList.addAll(responseEntity.getBody());
        } catch (Exception e) {
            e.printStackTrace();
        }
        return notificationToDayDTOList;
    }

    @Override
    public NotificationToDayDTO getNotificationById(String token, Long id) {
        // call api get data
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", token);
        headers.add("Accept", "application/json");
        headers.add("Content-Type", "application/json");

        UriComponentsBuilder urlRequestBuilder = UriComponentsBuilder.fromHttpUrl(apiUrl + Constants.NOTIFICATION.URL_GET_NOTIFICATION_BY_ID);
        urlRequestBuilder.queryParam("warningManagerStationId", id);
        NotificationToDayDTO  notificationToDayDTO = null;
        try {
            HttpEntity entity = new HttpEntity<>(headers);
            ResponseEntity<NotificationToDayDTO> responseEntity = restTemplate
                    .exchange(
                            urlRequestBuilder.toUriString(),
                            HttpMethod.GET,
                            entity,
                            NotificationToDayDTO.class);
            return responseEntity.getBody();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return notificationToDayDTO;
    }
}
