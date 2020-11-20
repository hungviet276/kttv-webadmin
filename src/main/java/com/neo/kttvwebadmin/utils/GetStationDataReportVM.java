package com.neo.kttvwebadmin.utils;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * @author thanglv on 11/19/2020
 * @project NBD
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GetStationDataReportVM implements Serializable {
    private String stationCode;
}
