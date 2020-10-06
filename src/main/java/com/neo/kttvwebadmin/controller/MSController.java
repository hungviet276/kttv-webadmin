package com.neo.kttvwebadmin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/management-station")
public class MSController {
    @GetMapping("index.html")
    public String index() {
        return "management-station/index";
    }
}
