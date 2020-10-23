package com.neo.kttvwebadmin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/warning-threshold")
public class WarningThreshold {
    @GetMapping
    public String getHomePage() {
        return "warning_threshold/warning_threshold";
    }
}
