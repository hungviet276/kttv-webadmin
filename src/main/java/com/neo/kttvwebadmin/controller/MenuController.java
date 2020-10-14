package com.neo.kttvwebadmin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/menu-manage")
public class MenuController {

    @GetMapping
    public String getMenuManagePage() {
        return "menu_manage";
    }

}
