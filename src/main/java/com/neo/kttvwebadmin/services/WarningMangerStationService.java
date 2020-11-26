package com.neo.kttvwebadmin.services;

import com.neo.kttvwebadmin.dto.NotificationToDayDTO;

import java.util.List;

/**
 * @author thanglv on 11/26/2020
 * @project NBD
 */
public interface WarningMangerStationService {
    List<NotificationToDayDTO> getListNotificationToday(String token);

    NotificationToDayDTO getNotificationById(String token, Long id);
}
