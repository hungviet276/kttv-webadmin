package com.neo.kttvwebadmin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/config-value-type")
public class ConfigValueTypeController {
    @GetMapping
    public String getHomePage() {
        return "config_value_type/config_value_type";
    }
}
