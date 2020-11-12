package com.neo.kttvwebadmin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/report_tides")
public class ReportTidesController {
    @GetMapping
    public String getReportPage() {
        return "report_tides/report_tides";
    }
}
