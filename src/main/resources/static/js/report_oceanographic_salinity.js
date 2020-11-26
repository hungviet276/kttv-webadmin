
// Chart
const chartSalinity = {
    time: [],
    dataSalinity: [],
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
    getDataSalinity: function () {
        this.dataSalinity = [10, 26, 44, 63, 74, 33, 20, 47];
        return this.dataSalinity;
    },
    // lấy thời gian
    getTime: function () {
        this.time = [1563778800000, 1563782400000, 1563786000000, 1563789600000, 1563793200000, 1563796800000, 1563800400000, 1563804000000];
        return this.time;
    },
    showSlider: function () {
        let valueAVG = document.getElementsByClassName("value_avg_salinity");
        let valueMIN = document.getElementsByClassName("value_min_salinity");
        let valueMAX = document.getElementsByClassName("value_max_salinity");
        valueAVG[0].innerHTML = this.getAverage(this.dataSalinity) + ' ‰';
        valueMIN[0].innerHTML = this.getMin(this.dataSalinity) + ' ‰';
        valueMAX[0].innerHTML = this.getMax(this.dataSalinity) + ' ‰';
    }
};
chartSalinity.getTime();
chartSalinity.getDataSalinity();
chartSalinity.showSlider();

let chartSalinityConfig = {
    type: 'area',
    stacked: true,
    title: {
        text: 'Biểu Đồ Biến Đổi Độ Mặn',
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
        labels: chartSalinity.time,
        lineColor: '#AAA5A5',
        // format time
        transform: {
            type: 'date',
            "all": "%dd/%mm/%Y" + "<br>" + "%h:%i %A"
        },
        tick: {
            lineColor: '#AAA5A5'
        }
    },
    scaleY: {
        // đơn vị trục Y
        format: "%v‰",
        guide: {
            lineColor: '#AAA5A5',
            lineStyle: 'dotted'
        },
        item: {
            paddingRight: '5px',
            fontColor: '#616161'
        },
        label: {
            text: 'Độ Mặn (‰)',
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
            text: 'Độ Mặn',
            // Hiển thị dữ liệu độ mặn
            values: chartSalinity.dataSalinity,
            backgroundColor: 'white',
            lineColor: '#4CAF50',
            // marker: {
            //     backgroundColor: '#4CAF50',
            //     borderColor: '#4CAF50'
            // }
        }
    ]
};

zingchart.render({
    id: 'myChartOceanographicSalinity',
    data: chartSalinityConfig,
    height: '100%',
    width: '100%'
});


