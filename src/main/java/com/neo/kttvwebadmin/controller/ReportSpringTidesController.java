package com.neo.kttvwebadmin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/report_spring_tides")
public class ReportSpringTidesController {
    @GetMapping
    public String getReportPage() {
        return "report_spring_tides/report_spring_tides";
    }
}
