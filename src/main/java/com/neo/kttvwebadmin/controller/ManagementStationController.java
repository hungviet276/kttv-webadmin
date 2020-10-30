package com.neo.kttvwebadmin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.*;
import java.net.Socket;
import java.net.UnknownHostException;

@Controller
@RequestMapping("/management-station")
public class ManagementStationController {
    @GetMapping("index.html")
    public String index() {
        return "management-station/index";
    }

    @GetMapping("parameter/index.html")
    public String parameterIndex() {
        return "management-station/parameter";
    }

    @ResponseBody
    @PostMapping("check-connect")
    public String checkConnect(@RequestParam String host, @RequestParam int port) {
        String result = "";
        try (Socket socketOfClient = new Socket(host, port)) {
            try (BufferedReader is = new BufferedReader(new InputStreamReader(socketOfClient.getInputStream()))) {
                String responseLine;
                while ((responseLine = is.readLine()) != null) {
                    System.out.println("Server: " + responseLine);
                    break;
                }
                result = "OK";
            }
        } catch (UnknownHostException e) {
            System.err.println("Don't know about host " + host);
            result = e.getMessage();
        } catch (IOException e) {
            System.err.println("Couldn't get I/O for the connection to " + host);
            result = e.getMessage();
        }
        return result;
    }

    @GetMapping("history.html")
    public String onSearchHistory() {
        return "management-station/history";
    }
}
