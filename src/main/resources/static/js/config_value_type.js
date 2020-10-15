$(document).ready(function () {
    show_search();
});
function show_search() {
    $("#box_info").hide(0);
    $("#box_search").show(500);
    $("#box_search").attr('class', 'col-sm-12');
}

$('#start_date').daterangepicker({
    timePicker: false,
    singleDatePicker: true,
    autoUpdateInput: false
}, function(choosen_date) {
    $('#start_date').val(choosen_date.format('DD/MM/YYYY'));
});

function show_search() {
    $("#box_info").hide(0);
    $("#box_search").show(500);
    $("#box_search").attr('class', 'col-sm-12');
}

$('#end_date').daterangepicker({
    timePicker: false,
    singleDatePicker: true,
    autoUpdateInput: false
}, function(choosen_date) {
    $('#end_date').val(choosen_date.format('DD/MM/YYYY'));
});

$('#station').select2({
    minimumInputLength: 0,
    delay: 350,
    ajax: {
        headers: {
            'Authorization': token
        },
        url: apiUrl + "station/station-select",
        contentType: 'application/json',
        method: "POST",
        quietMillis: 50,
        data: function (term) {
            if(term.term==null || term.term== undefined){
                term.term = null;
            }
            return JSON.stringify(term);

        },
        processResults: function (data) {
            var datas =  $('#station').val();
            return {
                results: $.map(data, function (item) {
                    return {
                        text: item.text,
                        id: item.id,
                        data: item
                    }
                })
            };
        }
    }
});