package com.neo.kttvwebadmin.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.neo.kttvwebadmin.entity.ParameterChartMapping;
import com.neo.kttvwebadmin.entity.ParameterChartMappingAndData;
import com.neo.kttvwebadmin.exception.KTTVException;
import com.neo.kttvwebadmin.services.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;

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
    public String getReportPage(@RequestParam String stationCode, @RequestParam String parameterTypeId, @RequestParam String startDate, @RequestParam String endDate, HttpServletRequest httpServletRequest) throws KTTVException, JsonProcessingException {
        // call api get data report
        ParameterChartMappingAndData mappingAndData = reportService.getParameterChartMappingAndData(stationCode, parameterTypeId, startDate, endDate, String.valueOf(httpServletRequest.getSession().getAttribute("token")));
        System.out.println(mappingAndData);
        if (mappingAndData != null) {
            ParameterChartMapping parameterChartMapping = mappingAndData.getChartMapping();
            System.out.println(parameterChartMapping.getTemplateDir());
            if (parameterChartMapping != null && parameterChartMapping.getTemplateDir() != null)
                return parameterChartMapping.getTemplateDir();
        }
        return "page_not_found";
    }
}