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

// Chart
let today = Date.parse(new Date());
const chart = {
    time: [],
    dataRainfall: [],
    dataTemperature: [],
    min: undefined,
    max: undefined,
    avg: undefined,

    getMin: function (arr) {
        this.min = Math.min(...arr);
        return this.min;
    },
    getMax: function (arr) {
        this.max = Math.max(...arr);
        return this.max;
    },
    getAverage: function (arr) {
        this.avg = Math.round((arr.reduce((sume, el) => sume + el, 0) / arr.length + Number.EPSILON) * 10) / 10;
        return this.avg;
    },
    getDataRainfall: function () {
        this.dataRainfall = [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4];
        return this.dataRainfall;
    },
    getDataTemperature: function () {
        this.dataTemperature = [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6];
        return this.dataTemperature;
    },
    getTime: function () {
        this.time = [today, 1563800400000, 1563804000000, 1563807600000,1563907600000,1564807600000 ];
        return this.time;
    },
    showSlider: function (){
        let valueAVGTemp = document.getElementsByClassName("value_avg_temp");
        let valueMINTemp = document.getElementsByClassName("value_min_temp");
        let valueMAXTemp = document.getElementsByClassName("value_max_temp");
        let valueAVGRain = document.getElementsByClassName("value_avg_rain");
        let valueMINRain  = document.getElementsByClassName("value_min_rain");
        let valueMAXRain  = document.getElementsByClassName("value_max_rain");
        for (let i = 0; i < valueAVGTemp.length; i++){
            valueAVGTemp[i].innerHTML  = this.getAverage(this.dataTemperature) +' °C';
            valueMINTemp[i].innerHTML  = this.getMin(this.dataTemperature) +' °C';
            valueMAXTemp[i].innerHTML  = this.getMax(this.dataTemperature) +' °C';
            valueAVGRain[i].innerHTML  = this.getAverage(this.dataRainfall) +' mm';
            valueMINRain[i].innerHTML  = this.getMin(this.dataRainfall) +' mm';
            valueMAXRain[i].innerHTML  = this.getMax(this.dataRainfall) +' mm';
        }
    }
};
// Lấy dữ liệu
chart.getTime();
chart.getDataRainfall();
chart.getDataTemperature();
chart.showSlider();

Highcharts.setOptions({
    time: {
        timezoneOffset: -7 * 60
    }
});

Highcharts.chart('container', {

    chart: {
        zoomType: 'xy'
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'Biểu Đồ Lượng Mưa Và Nhiệt Độ'
    },
    subtitle: {
        text: ''
    },
    xAxis: [{
        // categories: chart.getTime(),
        crosshair: true,
        type: 'datetime',
        categories: chart.time,
        // dateTimeLabelFormats: {
        //     hour: '%e. %b'
        // },
        labels: {
            formatter: function() {
                return Highcharts.dateFormat('%d/%m/%Y'+"<br>"+ '%I:%M %p', this.value);
            }
        }


    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}°C',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: 'Nhiệt Độ',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: 'Lượng Mưa',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        // phân vùng cảnh báo lượng mưa
        plotBands: [{
            color: 'rgba(170,255,77,0.25)', // Color value
            from: 0, // Start of the plot band
            to: 100 // End of the plot band
        }, {
            color: 'rgba(255,246,137,0.52)', // Color value
            from: 100, // Start of the plot band
            to: 200 // End of the plot band
        }, {
            color: 'rgb(206,153,176)', // Color value
            from: 200, // Start of the plot band
            to: 250 // End of the plot band
        }],
        labels: {
            format: '{value} mm',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        opposite: true
    }],
    tooltip: {
        xDateFormat: '%d/%m/%Y-%I:%M %p',
        shared: true
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        x: 120,
        verticalAlign: 'top',
        y: 100,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
    },
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            // Thoi gian bat dau truc X
            // pointStart: Date.UTC(2004, 1, 1)
        }
    },
    series: [{
        name: 'Lượng Mưa',
        type: 'column',
        yAxis: 1,
        data: chart.dataRainfall,
        tooltip: {
            valueSuffix: ' mm'
        },
        zones: [
            {
                value: 100,
                color: '#71fd7e'
            },
            {
                value: 200,
                color: '#ffee6c'
            },
            {
                value: 250,
                color: '#c16f94'
            }],


        // pointInterval: 24 * 3600 * 1000

    }, {
        name: 'Nhiệt Độ',
        type: 'spline',
        data: chart.dataTemperature,
        tooltip: {
            valueSuffix: '°C'
        },
        // pointInterval: 24 * 3600 * 1000
    }]
});


