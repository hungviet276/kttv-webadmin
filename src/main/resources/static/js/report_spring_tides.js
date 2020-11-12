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
function addDays(dateObj, numDays) {
    dateObj.setDate(dateObj.getDate() + numDays);
    return dateObj;
}
let today = Date.parse(new Date());
let nextday1 = Date.parse(addDays(new Date() , 1));
let nextday2 = Date.parse(addDays(new Date() , 2));
let nextday3 = Date.parse(addDays(new Date() , 3));
const chart = {
    time: [],
    dataSpringTides: [],
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
    getDataSpringTides: function (){
        this.dataSpringTides = [10, 26, 44, 63, 74, 145, 70, 33];
        return this.dataSpringTides;
    },
    getTime: function () {
        this.time = [1563796800000, 1563800400000, 1563804000000, 1563807600000, today, nextday1, nextday2, nextday3];
        return this.time;
    }
};
ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"]; // CHART CONFIG
// -----------------------------
let chartConfig = {
    type: 'line',
    globals: {
        fontFamily: 'Helvetica',
        shadow: false
    },
    labels: [
        // Label 1
        {
            text: '<br>Giá trị nhỏ nhất: ' + chart.getMin(chart.getDataSpringTides()) +'<b>m'
                + '</b>' + '<br>Giá trị lớn nhất: ' + chart.getMax(chart.getDataSpringTides()) +'<b>m'
                + '</b>' + '<br>Giá trị trung bình: ' + chart.getAverage(chart.getDataSpringTides()) +'<b>m</b>',
            'font-family': "Georgia",
            'font-size': "11",
            x: "70%",
            y: "0%"
        },],
    backgroundColor: '#fff',
    title: {
        text: 'Biểu Đồ Theo Dõi Triều Cường',
        padding: '15px 15px',
        backgroundColor: 'transparent',
        fontColor: '#5f5f5f',
        fontSize: '20px',
        textAlign: 'left'
    },
    legend: {
        marginTop: '30px',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        item: {
            fontColor: '#5f5f5f'
        },
        layout: 'float',
        marker: {
            borderColor: 'transparent',
            borderRadius: '50px'
        }
    },
    plot: {
        rules: [{
            "rule": "%k >"+ today,
            "line-color": "red"
        }],
        alphaArea: 1,
        animation: {
            delay: 500,
            effect: 'ANIMATION_SLIDE_TOP',
            method: 'ANIMATION_LINEAR',
            sequence: 'ANIMATION_BY_PLOT',
            speed: 700,
            delay: 500,
        },
        // aspect: 'spline',
        contourOnTop: false,
        // lineWidth: '2px',
        // marker: {
        //     visible: false
        // }

    },
    scaleX: {
        // Time trục x
        values: chart.getTime(),
        guide: {
            visible: false
        },
        item: {
            fontColor: '#5f5f5f'
        },
        lineColor: '#5f5f5f',
        lineWidth: '1px',
        // maxItems: 8,
        tick: {
            lineColor: '#5f5f5f',
            lineWidth: '1px'
        },
        transform: {
            type: 'date'
        },
        markers: [ //create marker array
            { //create n number of marker objects
                type: "line",
                range: [1563804000000],
                valueRange: true
            }
        ],

        zooming: true
    },
    scaleY: {
        //đơn vị m
        format: "%vm",
        guide: {
            lineColor: '#626262',
            lineStyle: 'solid'
        },
        item: {
            fontColor: '#dc130c'
        },
        lineColor: '#5f5f5f',
        lineWidth: '1px',
        tick: {
            lineColor: '#5f5f5f',
            lineWidth: '1px'
        }
        ,
        // Vùng cảnh báo
        markers: [{
            type: "area",
            range: [40,80],
            backgroundColor: "#a6d997",
            alpha: 0.5
        },
            {
                type: "area",
                range: [80, 120],
                backgroundColor: "#6c61a8",
                alpha: 0.5
            },
            {
                type: "area",
                range: [120, 160],
                backgroundColor: "#a83c3d",
                alpha: 0.5
            }
        ]

    },

    crosshairX: {
        plotLabel: {
            backgroundColor: '#434343',
            fontColor: '#FFF'
        },
        scaleLabel: {
            backgroundColor: '#fff',
            borderColor: '#333',
            borderRadius: '3px',
            borderWidth: '1px',
            fontColor: 'black'
        }
    },
    tooltip: {
        visible: false
    },
    // Giá trị
    series: [{
        text: 'Mực nước',
        values: chart.getDataSpringTides(),
        backgroundColor1: '#E84F28',
        backgroundColor2: '#E84F28',
        lineColor: '#7628e8'
    },
    ]
};

// RENDER CHARTS
// -----------------------------
zingchart.render({
    id: 'myChart',
    data: chartConfig,
    height: '100%',
    width: '100%',
});
