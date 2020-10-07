package com.neo.kttvwebadmin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/users_manager")
public class users_managers {
    @GetMapping
    public String getHomePage() {
        return "/users_manager/users_manager";
    }
}
