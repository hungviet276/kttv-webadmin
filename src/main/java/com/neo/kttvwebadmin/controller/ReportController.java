package com.neo.kttvwebadmin.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.neo.kttvwebadmin.dto.ParameterDisplayChartDTO;
import com.neo.kttvwebadmin.entity.ParameterChartMapping;
import com.neo.kttvwebadmin.entity.ParameterChartMappingAndData;
import com.neo.kttvwebadmin.exception.KTTVException;
import com.neo.kttvwebadmin.services.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * @author thanglv on 11/14/2020
 * @project NBD
 */
@Controller
@RequestMapping("/report")
public class ReportController {

    @Autowired
    private ReportService reportService;

    @GetMapping("/parameter")
    public String getParameterReportPage(@RequestParam String stationCode, @RequestParam String parameterTypeId, @RequestParam(required = false) String type, @RequestParam String startDate, @RequestParam String endDate, HttpServletRequest httpServletRequest, Model model) throws KTTVException, JsonProcessingException {
        // call api get data report
        ParameterChartMappingAndData mappingAndData = reportService.getParameterChartMappingAndData(stationCode, parameterTypeId, type,startDate, endDate, String.valueOf(httpServletRequest.getSession().getAttribute("token")));
//        System.out.println(mappingAndData);
        if (mappingAndData != null) {
            ParameterChartMapping parameterChartMapping = mappingAndData.getChartMapping();
            if (parameterChartMapping != null && parameterChartMapping.getTemplateDir() != null)
                System.out.println("=====> data: " + mappingAndData.getData());
                model.addAttribute("data", mappingAndData.getData());
                model.addAttribute("unitCode", mappingAndData.getStationTimeSeries() == null? "": mappingAndData.getStationTimeSeries().getUnitCode());
                model.addAttribute("parameterTypeName", mappingAndData.getStationTimeSeries() == null? "": mappingAndData.getStationTimeSeries().getParameterTypeName());
                return parameterChartMapping.getTemplateDir();
        }
        return "page_not_found";
    }

    @GetMapping("/column-chart")
    public String getColumnChartPage() {
        return "report/report_column_chart";
    }

    @GetMapping("/report_spring_tides")
    public String getReportSpringTides(){
        return "report/report_spring_tides";
    }

    @GetMapping("/report_air_humidity")
    public String getReportAirHumidity(){
        return "report/report_air_humidity";
    }

    @GetMapping("/report_ozone")
    public String getReportOzone(){
        return "report/report_ozone";
    }

    @GetMapping("/report_salinity")
    public String getReportSalinity(){
        return "report/report_salinity";
    }

    @GetMapping("/report_sunny_time")
    public String getReportSunnyTime(){
        return "report/report_sunny_time";
    }

    @GetMapping("/report_temperature_rainfall")
    public String getReportTemperatureRainfall(){
        return "report/report_temperature_rainfall";
    }

    @GetMapping("/report_tides")
    public String getReportTides(){
        return "report/report_tides";
    }

    @GetMapping("/station-3h")
    public String getStationReportPage(@RequestParam String stationCode, HttpServletRequest httpServletRequest, Model model) throws JsonProcessingException {
        List<ParameterDisplayChartDTO> listParameterTypeId = reportService.getListParameterTypeIdDisplayChart(stationCode, String.valueOf(httpServletRequest.getSession().getAttribute("token")));
        System.out.println(listParameterTypeId);
        model.addAttribute("listParameterTypeId", listParameterTypeId);
        model.addAttribute("stationCode", stationCode);
        return "report/station_report_quick_view";
    }

    @GetMapping("/station-embedded")
    public String stationEmbedded(@RequestParam(required = false, name = "type") String objectType, Model model) {
        model.addAttribute("objectType", objectType);
        return "report/station_embedded";
    }
}
