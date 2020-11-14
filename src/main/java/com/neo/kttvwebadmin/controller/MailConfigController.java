package com.neo.kttvwebadmin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author thanglv on 11/13/2020
 * @project NBD
 */

@Controller
@RequestMapping("/mail-config")
public class MailConfigController {

    @GetMapping
    public String getMailConfigPage() {
        return "mail_config";
    }
}
