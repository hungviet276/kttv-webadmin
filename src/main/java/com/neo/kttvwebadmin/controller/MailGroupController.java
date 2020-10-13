package com.neo.kttvwebadmin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/mail_group")
public class MailGroupController {
    @GetMapping
    public String getHomePage() {
        return "mail_group/mail_group";
    }
}
