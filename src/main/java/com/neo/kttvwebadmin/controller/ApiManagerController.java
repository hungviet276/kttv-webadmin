package com.neo.kttvwebadmin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ApiManagerController {

    @GetMapping("/demo")
    public String loadConfig() {
        return "api/api_manager";
    }
}
