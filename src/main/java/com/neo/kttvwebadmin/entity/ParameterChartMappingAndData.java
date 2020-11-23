package com.neo.kttvwebadmin.entity;

import com.neo.kttvwebadmin.utils.ObjectValue;
import com.neo.kttvwebadmin.utils.StationTimeSeries;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

/**
 * @author thanglv on 11/14/2020
 * @project NBD
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ParameterChartMappingAndData implements Serializable {
    private StationTimeSeries stationTimeSeries;

    private ParameterChartMapping chartMapping;

    private List<ObjectValue> data;
}
