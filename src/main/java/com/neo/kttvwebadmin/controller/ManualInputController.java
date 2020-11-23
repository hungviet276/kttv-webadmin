package com.neo.kttvwebadmin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/manual-input")
public class ManualInputController {
    @GetMapping("index.html")
    public String index() {
        return "manual-input/index";
    }

    @GetMapping("liss.html")
    public String liss() {
        return "manual-input/liss";
    }
}
