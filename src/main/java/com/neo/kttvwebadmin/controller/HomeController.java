package com.neo.kttvwebadmin.controller;

import com.neo.kttvwebadmin.dto.NotificationToDayDTO;
import com.neo.kttvwebadmin.services.WarningMangerStationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
@RequestMapping("/")
public class HomeController {

    @Autowired
    private WarningMangerStationService warningMangerStationService;

    @GetMapping
    public String getHomePage(HttpServletRequest httpServletRequest, Model model) {
        String token = String.valueOf(httpServletRequest.getSession().getAttribute("token"));
        System.out.println("TOKEN_RECEIVE: {}"+ token);
        List<NotificationToDayDTO> notificationToDayDTOList = warningMangerStationService.getListNotificationToday(token);
        System.out.println(notificationToDayDTOList);
        model.addAttribute("listNotify", notificationToDayDTOList);
        return "index";
    }
}
