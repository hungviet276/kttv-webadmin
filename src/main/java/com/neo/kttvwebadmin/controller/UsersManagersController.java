package com.neo.kttvwebadmin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/users_manager")
public class UsersManagersController {
    @GetMapping
    public String getHomePage(Model model) {
//        model.addAttribute("a", 1);
        return "users_manager/users_manager";
    }
}
