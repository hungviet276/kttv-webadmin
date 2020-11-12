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
const chart = {
    dataHmax: [],
    time: [],
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
    getDataHmax: function () {
        this.dataHmax = [173, 195, 189, 213, 200, 190, 194, 215];
        return this.dataHmax;
    },
    getTime: function () {
        this.time = [1563778800000, 1563782400000, 1563786000000, 1563789600000, 1563793200000, 1563796800000, 1563800400000, 1563804000000];
        return this.time;
    }
};
let chartConfig = {
    type: 'area',
    stacked: true,
    title: {
        // Tên biểu đồ
        text: 'Biểu Đồ Cao Độ Mực Nước Thủy Triều',
        adjustLayout: true,
        marginTop: '15px',
        fontColor: '#424242'
    },
    labels: [
        // Label 1
        {
            text: '<br>Giá trị nhỏ nhất: ' + chart.getMin(chart.getDataHmax()) + '<b>cm'
                + '</b>' + '<br>Giá trị lớn nhất: ' + chart.getMax(chart.getDataHmax()) + '<b>cm'
                + '</b>' + '<br> Giá trị trung bình: ' + chart.getAverage(chart.getDataHmax()) + '<b>cm</b>',
            'font-family': "Helvetica",
            'font-size': "14",
            x: "80%",
            y: "0%"
        },],
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
        // Thời gian trục X
        labels: chart.getTime(),
        lineColor: '#AAA5A5',
        transform: {
            type: 'date'
        },
        tick: {
            lineColor: '#AAA5A5'
        }
    },
    scaleY: {
        //Định dạng dữ liệu trục Y
        format: "%vcm",
        guide: {
            lineColor: '#AAA5A5',
            lineStyle: 'dotted'
        },
        item: {
            paddingRight: '5px',
            fontColor: '#616161'
        },
        // Tên trục Y
        label: {
            text: 'Hmax (cm)',
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
    // Dữ liệu
    series: [
        {
            text: 'Mực nước',
            values: chart.getDataHmax(),
            backgroundColor: '#2478af',
            lineColor: '#0306af',
            marker: {
                backgroundColor: '#ff0001',
                borderColor: '#4CAF50'
            }
        }
    ]
};

zingchart.render({
    id: 'myChart',
    data: chartConfig,
    height: '100%',
    width: '100%'
});


