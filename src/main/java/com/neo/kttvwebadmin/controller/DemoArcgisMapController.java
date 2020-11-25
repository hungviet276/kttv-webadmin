package com.neo.kttvwebadmin.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author thanglv on 11/5/2020
 * @project NBD
 */

@Controller
@RequestMapping("/demo-arcgis")
public class DemoArcgisMapController {

    @GetMapping("/station")
    public String displayStationMap() {
        return "demo/demo_arcgis_station";
    }

    @GetMapping("/station-embedded")
    public String stationEmbedded() {
        return "report/station_embedded";
    }
}
