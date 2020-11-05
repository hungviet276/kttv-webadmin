package com.neo.kttvwebadmin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/management-station")
public class ManualInputStation {
    @GetMapping("manual-input.html")
    public String getIndex(Model model) {
//        model.addAttribute("a", 1);
        return "management-station/manual-input";
    }
}
