package com.neo.kttvwebadmin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/saline-intrusion-monitor")
public class SalineIntrusionMonitorController {
    @GetMapping("index.html")
    public String index() {
        return "management-station/index";
    }
}
