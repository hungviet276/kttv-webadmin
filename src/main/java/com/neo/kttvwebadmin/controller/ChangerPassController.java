package com.neo.kttvwebadmin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/changerPass")
public class ChangerPassController {
    @GetMapping
    public String getHomePage(Model model) {
//        model.addAttribute("a", 1);
        return "changerPass/index";
    }
}
