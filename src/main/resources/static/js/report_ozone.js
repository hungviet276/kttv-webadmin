$(function () {
    $("#start_date").daterangepicker({
        "singleDatePicker": true,
        "linkedCalendars": false,
        "showCustomRangeLabel": false,
        "alwaysShowCalendars": true,
        "autoUpdateInput": false,
        locale: {
            cancelLabel: 'Clear',
            format: 'DD/MM/YYYY'
        }
    }, function (start, end, label) {
    });
    $('#start_date').on('cancel.daterangepicker', function (ev, picker) {
        $(this).val('');
    });

    $('#start_date').on('apply.daterangepicker', function (ev, picker) {
        $("#start_date").val(picker.startDate.format('DD/MM/YYYY'));
    });

    $('#end_date').daterangepicker({
        "singleDatePicker": true,
        "linkedCalendars": false,
        "showCustomRangeLabel": false,
        "alwaysShowCalendars": true,
        "autoUpdateInput": false,
        locale: {
            cancelLabel: 'Clear',
            format: 'DD/MM/YYYY'
        }
    }, function (start, end, label) {
    });
    $('#end_date').on('cancel.daterangepicker', function (ev, picker) {
        $(this).val('');

    });

    $('#end_date').on('apply.daterangepicker', function (ev, picker) {
        $("#end_date").val(picker.startDate.format('DD/MM/YYYY'));
    });
});

function validateSearch() {
    var patt = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if ($('#start_date').val() != '' && !patt.test($.trim($('#start_date').val()))) {
        toastr.error('Điều kiện tìm kiếm Từ ngày không đúng định dạng dd/mm/yyyy');
        $('#start_date').focus();
        return;
    }

    var patt = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if ($('#end_date').val() != '' && !patt.test($.trim($('#end_date').val()))) {
        toastr.error('Điều kiện tìm kiếm đến ngày không đúng định dạng dd/mm/yyyy');
        $('#end_date').focus();
        return;
    }
    return true;
}

// HighChart
const highChart = {
    dataH2O: [],
    dataO3: [],
    dataCO2: [],
    dataCO: [],
    dataCH4: [],
    min: undefined,
    max: undefined,
    avg: undefined,
    // Lay gia tri min cua mang
    getMin: function (arr) {
        this.min = Math.min(...arr);
        return this.min;
    },
    // Lay gia tri max cua mang
    getMax: function (arr) {
        this.max = Math.max(...arr);
        return this.max;
    },
    // Lay gia tri trung binh cua mang
    getAverage: function (arr) {
        this.avg = Math.round((arr.reduce((sume, el) => sume + el, 0) / arr.length + Number.EPSILON) * 10) / 10;
        return this.avg;
    },
    // Lay mang du lieu cua H2O
    getDataH2O: function (){
        this.dataH2O = [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6];
        return this.dataH2O;
    },
    // Lay mang du lieu cua O3
    getDataO3: function (){
        this.dataO3 = [7.0, 6.9, 9.5, 14.5, 20.2, 16.5, 12.2];
        return this.dataO3;
    },
    // Lay mang du lieu cua CO2
    getDataCO2: function (){
        this.dataCO2 = [10, 9, 8, 10.5, 11.2, 14.5, 16.2];
        return this.dataCO2;
    },
    // Lay mang du lieu cua CO
    getDataCO: function (){
        this.dataCO = [8, 7, 10, 12.5, 18.2, 10.5, 13.2];
        return this.dataCO;
    },
    // Lay mang du lieu cua CH4
    getDataCH4: function (){
        this.dataCH4 = [12, 10, 9.5, 5.5, 6.2, 10.5, 13.2];
        return this.dataCH4;
    }


};

Highcharts.chart('container', {
    chart: {
        type: 'column',
    },
    credits: {
        enabled: false
    },
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'Biểu Đồ Biến Đổi Thành Phần Khí Quyển'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        type: 'datetime',
        accessibility: {
            rangeDescription: 'Range: 2004 to 2020'
        },
        tickInterval: 24 * 3600 * 1000
    },
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value} ppm',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: 'O3, CO2, CO, CH4',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: 'Hơi Nước(H2O)',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        labels: {
            format: '{value} %V',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        opposite: true
    }],
    // Hien thi tooltip
    tooltip: {
        formatter: function () {
            let min;
            let max;
            let avg;
            switch (this.series.name) {
                case "Hơi Nước(H2O)":
                    min = highChart.getMin(highChart.getDataH2O());
                    max = highChart.getMax(highChart.getDataH2O());
                    avg = highChart.getAverage(highChart.getDataH2O());
                    break;
                case "O3"   :
                    min = highChart.getMin(highChart.getDataO3());
                    max = highChart.getMax(highChart.getDataO3());
                    avg = highChart.getAverage(highChart.getDataO3());
                    break;
                case "CO2"   :
                    min = highChart.getMin(highChart.getDataCO2());
                    max = highChart.getMax(highChart.getDataCO2());
                    avg = highChart.getAverage(highChart.getDataCO2());
                    break;
                case "CO"   :
                    min = highChart.getMin(highChart.getDataCO());
                    max = highChart.getMax(highChart.getDataCO());
                    avg = highChart.getAverage(highChart.getDataCO());
                    break;
                case "CH4"   :
                    min = highChart.getMin(highChart.getDataCH4());
                    max = highChart.getMax(highChart.getDataCH4());
                    avg = highChart.getAverage(highChart.getDataCH4());
                    break;

            }
            let string = this.series.name + '<b>:</b>' + this.y + '</b>' + '<br>Min: ' + min + '</b>' + '<br>Max: ' + max
                + '</b>' + '<br>Avg: ' + avg;
            return string;
        }
    },
    // Chu thich
    legend: {
        layout: 'vertical',
        align: 'left',
        x: 120,
        verticalAlign: 'top',
        y: 40,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,223,0)'
    },
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            // Thoi gian bat dau truc X
            pointStart: Date.UTC(2004, 1, 1)
        }
    },
    series: [{
        name: 'Hơi Nước(H2O)',
        type: 'column',
        yAxis: 1,
        data: highChart.getDataH2O(),
        tooltip: {
            valueSuffix: '%V'
        },
        pointInterval: 24 * 3600 * 1000 // interval of 1 day

    }, {
        name: 'O3',
        type: 'spline',
        data: highChart.getDataO3(),
        tooltip: {
            valueSuffix: 'ppm'
        },
        pointInterval: 24 * 3600 * 1000 // interval of 1 day
    }, {
        name: 'CO2',
        type: 'spline',
        data: highChart.getDataCO2(),
        tooltip: {
            valueSuffix: 'ppm'
        },
        pointInterval: 24 * 3600 * 1000 // interval of 1 day
    }, {
        name: 'CO',
        type: 'spline',
        data: highChart.getDataCO(),
        tooltip: {
            valueSuffix: 'ppm'
        },
        pointInterval: 24 * 3600 * 1000 // interval of 1 day
    }, {
        name: 'CH4',
        type: 'spline',
        data: highChart.getDataCH4(),
        tooltip: {
            valueSuffix: 'ppm'
        },
        pointInterval: 24 * 3600 * 1000 // interval of 1 day
    }]
});

