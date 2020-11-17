package com.neo.kttvwebadmin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/report_temperature_rainfall")
public class ReportTemperatureRainfallController {
    @GetMapping
    public String getReportPage() {
        return "report_temperature_rainfall/report_temperature_rainfall";
    }
}
