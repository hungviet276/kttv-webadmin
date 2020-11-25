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
    $('.spring_tides').flexslider({
        animation: "slide",
        start: function (slider) {
            $("#box_info_spring_tides").css('display', 'none');
            $('body').removeClass('loading');
        }
    });

    $('.temperature_rainfall').flexslider({
        animation: "slide",
        start: function (slider) {
            $("#box_info_temperature_rainfall").css('display', 'none');
            $('body').removeClass('loading');
        }
    });
    $('.sunny_time').flexslider({
        animation: "slide",
        start: function (slider) {
            $("#box_info_sunny_time").css('display', 'none');
            $('body').removeClass('loading');
        }
    });
    $('.oceanographic_salinity').flexslider({
        animation: "slide",
        start: function (slider) {
            $("#box_info_oceanographic_salinity").css('display', 'none');
            $('body').removeClass('loading');
        }
    });
    $('.air_humidity').flexslider({
        animation: "slide",
        start: function (slider) {
            $("#box_info_air_humidity").css('display', 'none');
            $('body').removeClass('loading');
        }
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

// $("#sliderAll").css('display','none');

var select = document.querySelector('select[name="chart-selector"]');
select.addEventListener('change', function () {
    console.log(event.target.value);
    $("#sliderAll").css('display', '');
    if (event.target.value === 'spring_tides') {
        $("#box_info_spring_tides").css('display', 'inline');
        $("#box_info_temperature_rainfall").css('display', 'none');
        $("#box_info_sunny_time").css('display', 'none');
        $("#box_info_air_humidity").css('display', 'none');
        $("#box_info_oceanographic_salinity").css('display', 'none');
    } else if (event.target.value === 'tides') {
        $("#box_info_spring_tides").css('display', 'none');
        $("#box_info_temperature_rainfall").css('display', 'none');
        $("#box_info_sunny_time").css('display', 'none');
        $("#box_info_air_humidity").css('display', 'none');
        $("#box_info_oceanographic_salinity").css('display', 'none');
    } else if (event.target.value === 'sunny_time') {
        $("#box_info_spring_tides").css('display', 'none');
        $("#box_info_temperature_rainfall").css('display', 'none');
        $("#box_info_sunny_time").css('display', 'inline');
        $("#box_info_air_humidity").css('display', 'none');
        $("#box_info_oceanographic_salinity").css('display', 'none');
    } else if (event.target.value === 'temperature_rainfall') {
        $("#box_info_spring_tides").css('display', 'none');
        $("#box_info_temperature_rainfall").css('display', 'inline');
        $("#box_info_sunny_time").css('display', 'none');
        $("#box_info_air_humidity").css('display', 'none');
        $("#box_info_oceanographic_salinity").css('display', 'none');
    } else if (event.target.value === 'air_humidity') {
        $("#box_info_spring_tides").css('display', 'none');
        $("#box_info_temperature_rainfall").css('display', 'none');
        $("#box_info_sunny_time").css('display', 'none');
        $("#box_info_air_humidity").css('display', 'inline');
        $("#box_info_oceanographic_salinity").css('display', 'none');
    }else if (event.target.value === 'oceanographic_salinity') {
        $("#box_info_spring_tides").css('display', 'none');
        $("#box_info_temperature_rainfall").css('display', 'none');
        $("#box_info_sunny_time").css('display', 'none');
        $("#box_info_air_humidity").css('display', 'none');
        $("#box_info_oceanographic_salinity").css('display', 'inline');
    } else {
        $("#box_info_spring_tides").css('display', 'none');
        $("#box_info_temperature_rainfall").css('display', 'none');
        $("#box_info_sunny_time").css('display', 'none');
        $("#box_info_air_humidity").css('display', 'none');
        $("#box_info_oceanographic_salinity").css('display', 'none');
    }
});

