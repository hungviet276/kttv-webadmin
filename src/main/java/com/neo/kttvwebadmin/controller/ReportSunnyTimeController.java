package com.neo.kttvwebadmin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/report_sunny_time")
public class ReportSunnyTimeController {
    @GetMapping
    public String getReportPage() {
        return "report/report_sunny_time";
    }
}
