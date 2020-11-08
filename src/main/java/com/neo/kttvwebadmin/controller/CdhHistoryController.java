package com.neo.kttvwebadmin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/cdh_history")
public class CdhHistoryController {
    @GetMapping
    public String getHomePage() {
        return "cdh_history/index";
    }
}
