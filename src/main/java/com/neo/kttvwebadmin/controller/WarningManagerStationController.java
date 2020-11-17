package com.neo.kttvwebadmin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/warning-manager-station")
public class WarningManagerStationController {
    @GetMapping
    public String getHomePage() {
        return "warning_manager_station/warning_manager_station";
    }
}
