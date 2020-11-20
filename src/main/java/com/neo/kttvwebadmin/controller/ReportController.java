package com.neo.kttvwebadmin.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.neo.kttvwebadmin.entity.ParameterChartMapping;
import com.neo.kttvwebadmin.entity.ParameterChartMappingAndData;
import com.neo.kttvwebadmin.exception.KTTVException;
import com.neo.kttvwebadmin.services.ReportService;
import com.neo.kttvwebadmin.utils.DateUtils;
import com.neo.kttvwebadmin.utils.TimeSeriesDataDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;
import java.util.Calendar;
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

    @Autowired
    private ObjectMapper objectMapper;

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

    @GetMapping("/station")
    public String getStationReportPage(@RequestParam String stationCode, HttpServletRequest httpServletRequest, Model model) throws JsonProcessingException {
        String[] listParameterTypeId = reportService.getListParameterTypeIdDisplayChart(stationCode, String.valueOf(httpServletRequest.getSession().getAttribute("token")));
        model.addAttribute("listParameterTypeId", listParameterTypeId);
        model.addAttribute("stationCode", stationCode);
        model.addAttribute("endDate", DateUtils.getStringDateFormat("dd/MM/yyyy HH:mm"));
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.DAY_OF_YEAR, - 7);
        model.addAttribute("startDate", DateUtils.getStringDateFormat(calendar.getTime(), "dd/MM/yyyy HH:mm"));
        return "report/station_report";
    }
}
