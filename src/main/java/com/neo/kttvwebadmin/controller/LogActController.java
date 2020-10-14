package com.neo.kttvwebadmin.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author thanglv on 10/9/2020
 * @project NBD
 */
@Controller
@RequestMapping("/log-act")
public class LogActController {

    @GetMapping
    public String getLogActPage() {
        return "log_act";
    }
}
