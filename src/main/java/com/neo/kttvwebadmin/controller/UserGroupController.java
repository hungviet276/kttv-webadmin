package com.neo.kttvwebadmin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user_group")
public class UserGroupController {

    @GetMapping({"", "index"})
    public String getPage() {
        return "user_group/index";
    }
}
