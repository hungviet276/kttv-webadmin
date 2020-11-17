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
// Add event listener to fire on selection
var select = document.querySelector('select[name="chart-selector"]');
select.addEventListener('change', function() {
    if (event.target.value == 'h2o') {
        zingchart.exec('myChart', 'setseriesdata', {
            graphid: 0,
            data: [
                { values: chart.dataH2O ,lineColor: '#af7e67',text: 'H2O (ppm)' },
            ]

        });
    } else if (event.target.value == 'o3') {
        zingchart.exec('myChart', 'setseriesdata', {
            graphid: 0,
            data: [
                { values: chart.dataO3, lineColor: '#34251b',text: 'O3 (ppm)' },
            ]

        });
    } else if (event.target.value == 'co2') {
        zingchart.exec('myChart', 'setseriesdata', {
            graphid: 0,
            data: [
                { values: chart.dataCO2, lineColor: '#65af66',text: 'CO2 (ppm)' },
            ]

        });
    } else if (event.target.value == 'co') {
        zingchart.exec('myChart', 'setseriesdata', {
            graphid: 0,
            data: [
                { values: chart.dataCO, lineColor: '#1742af',text: 'CO (ppm)' },
            ]

        });
    } else if (event.target.value == 'ch4') {
        zingchart.exec('myChart', 'setseriesdata', {
            graphid: 0,
            data: [
                { values: chart.dataCH4, lineColor: '#af0932',text: 'CH4 (ppb)' },
            ]

        });
    } else if(event.target.value == '') {
        zingchart.exec('myChart', 'setseriesdata', {
            graphid: 0,
            data: [
                { values: [] },
            ]

        });
    }
});
// Chart
let today = Date.parse(new Date());
const chart = {
    time: [],
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
    },
    getTime: function () {
        this.time = [today, 1563800400000, 1563804000000, 1563807600000,1563907600000,1564807600000 ];
        return this.time;
    }


};
//Lấy dữ liệu test
chart.getTime();
chart.getDataH2O();
chart.getDataO3();
chart.getDataCO2();
chart.getDataCO();
chart.getDataCH4();

ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"];
let chartConfig = {

    title: {
        text: 'Biểu Đồ Biến Đổi Thành Phần Khí Quyển'
    },
    subtitle: {
        text: ''
    },
    plot: {
        tooltip: {
            visible: false
        },
        cursor: 'hand'
    },

    crosshairX: {},
    type: 'line',
    plot: {
        animation:{
            effect: 4,
            method: 0,
            speed: 500,
            sequence: 1
        }
    },
    scaleY: {
        // values: '0:14:2'
    },
    scaleX: {
        markers: [],
        offsetEnd: '75px',
        // labels: chart.time,
        transform: {
            type: 'date',
            "all":"%dd/%mm/%Y"+"<br>"+"%h:%i %A"
        },
    },
    series: [
        {
            // values: chart.dataH2O
        }
    ]
};

zingchart.render({
    id: 'myChart',
    data: chartConfig,
    height: '100%',
    width: '100%',
});

/*
 * define Marker class to construct
 * markers on the fly easier.
 */
function Marker(_index) {
    return {
        type: 'line',
        flat: false,
        lineColor: '#424242',
        lineWidth: '1px',
        range: [_index]
    }
}

/*
 * define Label class to construct
 * labels on the fly easier.
 */
function Label(_text, _id, _offsetX, _offsetY) {
    return {
        id: _id,
        text: _text,
        angle: 0,
        padding: '5px 10px 5px 10px',
        backgroundColor: '#eeeeee',
        cursor: 'pointer',
        flat: false,
        fontSize: '13px',
        fontStyle: 'bold',
        offsetX: _offsetX,
        offsetY: _offsetY ? _offsetY : 0,
        textAlign: 'left',
        wrapText: true
    }
}




