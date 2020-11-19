package com.neo.kttvwebadmin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/report_air_humidity")
public class ReportAirHumidityController {
    @GetMapping
    public String getReportPage() {
        return "report/report_air_humidity";
    }
}
