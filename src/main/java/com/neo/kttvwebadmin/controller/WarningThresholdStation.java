package com.neo.kttvwebadmin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/warning-threshold-station")
public class WarningThresholdStation {
    @GetMapping
    public String getHomePage() {
        return "warning_threshold_station/warning_threshold_station";
    }
}
