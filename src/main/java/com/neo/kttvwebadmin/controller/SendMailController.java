package com.neo.kttvwebadmin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/sendmail_history")
public class SendMailController {
    @GetMapping
    public String getHomePage() {
        return "sendmail_history/index";
    }
}
