package com.neo.kttvwebadmin.utils;

import com.neo.kttvwebadmin.entity.ParameterChartMapping;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

/**
 * @author thanglv on 11/18/2020
 * @project NBD
 */

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TimeSeriesDataDTO implements Serializable {
    // thông tin để vẽ biểu đồ
    private ParameterChartMapping parameterChartMapping;
    // thông tin yếu tố của trạm
    private StationTimeSeries stationTimeSeries;
    // dữ liệu đo của yếu tố 7 ngày trước đến bây giờ
    private List<ObjectValue> data;
}
