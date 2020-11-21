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

// chart

const chart = {
    time: [],
    dataSunnyTime: [],
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
    // Lấy dữ liệu độ mặn
    getDataSunnyTime: function () {
        this.dataSunnyTime = [10, 26, 44, 63, 74, 33, 20, 47];
        return this.dataSunnyTime;
    },
    // lấy thời gian
    getTime: function () {
        this.time = [1563778800000, 1563782400000, 1563786000000, 1563789600000, 1563793200000, 1563796800000, 1563800400000, 1563804000000];
        return this.time;
    },
    showSlider: function () {
        let valueAVG = document.getElementsByClassName("value_avg");
        let valueMIN = document.getElementsByClassName("value_min");
        let valueMAX = document.getElementsByClassName("value_max");
        valueAVG[0].innerHTML = this.getAverage(this.dataSunnyTime) + ' phút';
        valueMIN[0].innerHTML = this.getMin(this.dataSunnyTime) + ' phút';
        valueMAX[0].innerHTML = this.getMax(this.dataSunnyTime) + ' phút';
    }
};
chart.getTime();
chart.getDataSunnyTime();
chart.showSlider();

ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"];
let chartConfig = {
    type: 'area',
    stacked: true,
    title: {
        text: 'Biểu Đồ Thể Hiện Thời Gian Nắng',
        adjustLayout: true,
        marginTop: '15px',
        fontColor: '#424242'
    },
    subtitle: {
        text: '',
        adjustLayout: true,
        marginTop: '45px',
        fontColor: '#616161'
    },
    plot: {
        alphaArea: 0.6,
        aspect: 'spline'
    },
    plotarea: {
        margin: 'dynamic'
    },
    scaleX: {
        item: {
            paddingTop: '5px',
            fontColor: '#616161'
        },
        label: {
            text: '',
            fontColor: '#616161'
        },
        labels: chart.time,
        lineColor: '#AAA5A5',
        // format time
        transform: {
            type: 'date',
            "all": "%dd/%mm/%Y"
        },
        tick: {
            lineColor: '#AAA5A5'
        }
    },
    scaleY: {
        // đơn vị trục Y
        format: "%v phút",
        guide: {
            lineColor: '#AAA5A5',
            lineStyle: 'dotted'
        },
        item: {
            paddingRight: '5px',
            fontColor: '#616161'
        },
        label: {
            text: 'Thời gian nắng',
            fontColor: '#616161'
        },
        lineColor: '#AAA5A5',
        short: true,
        tick: {
            lineColor: '#AAA5A5'
        }
    },
    crosshairX: {
        lineColor: '#AAA5A5',
        plotLabel: {
            backgroundColor: '#EBEBEC',
            borderColor: '#AAA5A5',
            borderRadius: '2px',
            borderWidth: '2px',
            fontColor: '#616161',
            thousandsSeparator: ','
        },
        scaleLabel: {
            backgroundColor: '#EBEBEC',
            borderColor: '#AAA5A5',
            fontColor: '#424242'
        }
    },
    tooltip: {
        visible: false
    },
    series: [
        {
            text: 'Thời gian',
            // Hiển thị dữ liệu độ mặn
            values: chart.dataSunnyTime,
            backgroundColor: 'white',
            lineColor: '#ff8e07',
            // marker: {
            //     backgroundColor: '#4CAF50',
            //     borderColor: '#4CAF50'
            // }
        }
    ]
};

zingchart.render({
    id: 'myChart',
    data: chartConfig,
    height: '100%',
    width: '100%'
});
