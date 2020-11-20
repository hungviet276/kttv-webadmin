package com.neo.kttvwebadmin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/water-level")
public class WaterLevelController {
    @GetMapping
    public String getHomePage() {
        return "water_level/water_level";
    }

}
