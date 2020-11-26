package com.neo.kttvwebadmin.controller;

import com.neo.kttvwebadmin.dto.NotificationToDayDTO;
import com.neo.kttvwebadmin.services.WarningMangerStationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;

/**
 * @author thanglv on 11/26/2020
 * @project NBD
 */

@Controller
@RequestMapping("/notification")
public class NotificationController {

    @Autowired
    private WarningMangerStationService warningMangerStationService;

    @GetMapping("/detail")
    public String getDetailNotificationPage(@RequestParam Long id, HttpServletRequest request, Model model) {
        String token = String.valueOf(request.getSession().getAttribute("token"));
        NotificationToDayDTO notificationToDayDTO = warningMangerStationService.getNotificationById(token, id);
        model.addAttribute("notify", notificationToDayDTO);
        return "notification/detail_notification";
    }
}
