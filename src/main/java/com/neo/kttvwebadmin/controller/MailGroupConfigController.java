package com.neo.kttvwebadmin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/mail_group_config")
public class MailGroupConfigController {
    @GetMapping
    public String getHomePage() {
        return "mail_group_config/mail_group_config";
    }
}
