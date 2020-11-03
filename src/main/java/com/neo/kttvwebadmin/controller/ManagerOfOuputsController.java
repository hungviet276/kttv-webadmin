package com.neo.kttvwebadmin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/management_of_outputs")
public class ManagerOfOuputsController {
    @GetMapping
    public String getHomePage(Model model) {
//        model.addAttribute("a", 1);
        return "management_of_outputs/index";
    }
}
