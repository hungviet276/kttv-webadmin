package com.neo.kttvwebadmin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/report_ozone")
public class ReportOzoneController {
    @GetMapping
    public String getReportPage() {
        return "report_ozone/report_ozone";
    }
}