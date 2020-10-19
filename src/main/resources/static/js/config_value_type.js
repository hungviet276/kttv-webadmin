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

$('#btncancer').click(function () {
    // disabled_right();
    $("#btnsave").css("display", "none");
    $("#btnDelete").css("display", "none");
    $("#btnReset").css("display", "none");
    $("#btncancer").css("display", "none");
    $("#btnDonew").attr("disabled", false);
    show_search();
});

function show_search() {
    $("#box_info").hide(0);
    $("#box_search").show(500);
    $("#box_search").attr('class', 'col-sm-12');
}

function show_search() {
    $("#box_info").hide(0);
    $("#box_search").show(500);
    $("#box_search").attr('class', 'col-sm-12');
}

function togle_search() {
    $("#box_info").show(500);
    $("#box_info").attr('class', 'col-sm-12');
    $("#box_search").hide(0);
    // $("#box_search").attr('class', 'col-sm-5');
}

$('#end_date').daterangepicker({
    timePicker: false,
    singleDatePicker: true,
    autoUpdateInput: false
}, function(choosen_date) {
    $('#end_date').val(choosen_date.format('DD/MM/YYYY'));
});

$('#btnDonew').click(function () {
    // enabled_right();
    $('#action_info').val(1);
    togle_search();
    $("#btnsave").css("display", "inline");
    $("#btnDelete").css("display", "inline");
    $("#btnReset").css("display", "inline");
    $("#btncancer").css("display", "inline");
    $("#btnDonew").attr("disabled", true);
    $('.nav-tabs a[href="#menu2"]').tab('show');
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

$('#valueTypeSpatial').select2({

});
$('#value-type-station').select2({

});

$('#stationSpatial').select2({
    minimumInputLength: 0,
    delay: 350,
    ajax: {
        headers: {
            'Authorization': token
        },
        url: apiUrl + "config-value-type/get-list-station",
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
            var datas =  $('#stationSpatial').val();
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
$('#value-type').select2({
    minimumInputLength: 0,
    delay: 350,
    ajax: {
        headers: {
            'Authorization': token
        },
        url: apiUrl + "value-type/get-value-type-select",
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
let objSearch = {
    s_id: '',
    s_station_id: '',
    s_value_type_id: '',
    s_station_name: '',
    s_value_type_name: '',
    s_min: '',
    s_max: '',
    s_variable_time: '',
    s_variable_spatial: '',
    s_start_apply_date: '',
    s_end_apply_date: ''
};
$('#tableValueTypeConfig thead th').each(function () {
    var title = $(this).text();
    var dataId = $(this).attr("data-id");
    if (dataId != null && dataId != undefined) {
        $(this).html('<input class="table-data-input-search" id="'+ dataId +'" type="text" placeholder="Search ' + title + '" autocomplete="off"/>');
    }
});
var tableConfigValueType = $('#tableValueTypeConfig').DataTable({
    columnDefs: [ {
        orderable: false,
        className: 'select-checkbox',
        targets:   0
    } ],
    select: {
        style:    'os',
        selector: 'td:first-child',
        type: 'single'
    },
    "pagingType": "full_numbers",
    "lengthMenu": [
        [10, 25, 50],
        [10, 25, 50]
    ],
    "lengthChange": true,
    "searchDelay": 500,
    "searching": false,
    "ordering": false,
    "info": true,
    "autoWidth": false,
    "scrollX": true,
    "responsive": false,
    language: {
        search: "_INPUT_",
        searchPlaceholder: "Nhập thông tin tìm kiếm",
    },
    "processing": true,
    "serverSide": true,
    "columns": [
        { "data":""},
        {"data": "indexCount", "render": $.fn.dataTable.render.text()},
        {"data": "id", "render": $.fn.dataTable.render.text()},
        {"data": "stationId", "render": $.fn.dataTable.render.text()},
        {"data": "valueTypeId", "render": $.fn.dataTable.render.text()},
        {"data": "stationName", "render": $.fn.dataTable.render.text()},
        {"data": "valueTypename", "render": $.fn.dataTable.render.text()},
        {"data": "min", "render": $.fn.dataTable.render.text()},
        {"data": "max", "render": $.fn.dataTable.render.text()},
        {"data": "variableTime", "render": $.fn.dataTable.render.text()},
        {"data": "variableSpatial", "render": $.fn.dataTable.render.text()},
        {"data": "startDate", "render": $.fn.dataTable.render.text()},
        {"data": "endDate", "render": $.fn.dataTable.render.text()}
    ],
    initComplete: function () {
        // Apply the search
        this.api().columns().every(function () {
            var that = this;
            $('.table-data-input-search').on('keyup', function () {
                oldValue = this.___value___;
                this.___value___ = this.value;
                if (oldValue == this.___value___) return;
                keyUpTime = new Date().getTime();
                let id = $(this).attr('id');
                objSearch[id] = this.value;
                setTimeout(function () {
                    if (new Date().getTime() - keyUpTime > 350) {
                        tableConfigValueType.search(objSearch).draw();
                        $('#station').val(null).trigger('change');
                        $('#value-type').val(null).trigger('change');
                        keyUpTime = new Date().getTime();
                    }
                    return;
                }, 350);

            });
        });
    },
    "ajax": {
        headers: {
            'Authorization': token
        },
        "url": apiUrl + "config-value-type/get-list-config-value-type",
        "method": "POST",
        "contentType": "application/json",
        "data": function (d) {
            draw = d.draw;
            return JSON.stringify({
                "draw": d.draw,
                "start": Math.round(d.start / d.length),
                "length": d.length,
                "search": JSON.stringify(objSearch)
            });
        },
        "dataFilter": function (response) {

            let responseJson = JSON.parse(response);
            let dataRes = {
                "draw": draw,
                "recordsFiltered": responseJson.recordsTotal,
                "recordsTotal": responseJson.recordsTotal,
                "data": []
            };

            for (let i = 0; i < responseJson.content.length; i++) {
                 let todayTime =new Date(responseJson.content[i].startDate)
                 let month = todayTime.getMonth() + 1;
                 let day = todayTime.getDate();
                 let year = todayTime.getFullYear();
                 let dateStart =  month + "/" + day + "/" + year;
                responseJson.content[i].startDate = dateStart;

                let todayTimeEnd =new Date(responseJson.content[i].endDate)
                let monthEnd = todayTimeEnd.getMonth() + 1;
                let dayEnd = todayTimeEnd.getDate();
                let yearEnd = todayTimeEnd.getFullYear();
                let dateEnd =  monthEnd + "/" + dayEnd + "/" + yearEnd;
                responseJson.content[i].endDate = dateEnd;

                dataRes.data.push({
                    "": "",
                    "indexCount": i + 1,
                    "id": responseJson.content[i].id,
                    "stationId": responseJson.content[i].stationId,
                    "valueTypeId": responseJson.content[i].valueTypeId,
                    "stationName": responseJson.content[i].stationName,
                    "valueTypename": responseJson.content[i].valueTypename,
                    "min": responseJson.content[i].min,
                    "max": responseJson.content[i].max,
                    "variableTime": responseJson.content[i].variableTime,
                    "variableSpatial": responseJson.content[i].variableSpatial,
                    "startDate": responseJson.content[i].startDate,
                    "endDate": responseJson.content[i].endDate
                })
            }

            return JSON.stringify(dataRes);
        }
    }
});


function stringToDate(_date,_format,_delimiter)
{
    let formatLowerCase=_format.toLowerCase();
    let formatItems=formatLowerCase.split(_delimiter);
    let dateItems=_date.split(_delimiter);
    let monthIndex=formatItems.indexOf("mm");
    let dayIndex=formatItems.indexOf("dd");
    let yearIndex=formatItems.indexOf("yyyy");
    let month=parseInt(dateItems[monthIndex]);
    month-=1;
    let formatedDate = new Date(dateItems[yearIndex],month,dateItems[dayIndex]);
    return formatedDate;
}

$("#btnSearch").click(function (event){
    event.preventDefault();
    event.stopPropagation();
    var inputSearch = $(".table-data-input-search");
    for(let i =0 ; i < inputSearch.length; i ++){
        $(inputSearch[i]).val("");
    }
    objSearch.s_station_id = $("#station").val();
    objSearch.s_value_type_id = $("#value-type").val();
    objSearch.s_start_apply_date = $("#start_date").val();
    objSearch.s_end_apply_date = $("#end_date").val();
    tableConfigValueType.search(objSearch).draw();

});
$("#stationSpatial").change(function () {
    $('#valueTypeSpatial').empty();
    $.ajax({
        headers: {
            'Authorization': token
        },
        "url": apiUrl + "config-value-type/get-list-value-type?idStation="+ $("#stationSpatial").val(),
        "method": "POST",
        "contentType": "application/json",
        "success": function (response) {
            $('#valueTypeSpatial').val(null).trigger('change');
            for (let i = 0; i < response.length; i++){
                var newOption = new Option(response[i].text, response[i].id, false, false);
                $('#valueTypeSpatial').append(newOption).trigger('change');
            }
        },
        "error": function (error) {
            toastr.error('Lỗi', data.message);
        }
    });
});
// table thêm yếu tố
var tableStationSpatial = $('#tableStationSpatial').DataTable({
    columns: [
        {"data": "id"},
        {"data": "stationId"},
        {"data": "valueTypeId"},
        {"data" : "stationCode"},
        {"data": "stationName"},
        {"data" : "valueTypeCode"},
        {"data": "valueTypeName"},
        {"data": "variableSpatial"},
        {
            data: null,
            className: "center",
            defaultContent: '<a href="" class="editor_remove">Delete</a>'
        }
    ]
});
$("#btnsaveStationValueType").click(function () {
    var dataStation = $('#stationSpatial').select2('data');
    var valueType = $('#valueTypeSpatial').select2('data')

    if(dataStation.length == 0){
        toastr.error('Lỗi', "Hãy chọn trạm");
        $('#stationSpatial').focus();
        return;
    }
    if(valueType.length == 0){
        toastr.error('Lỗi', "Hãy yếu tố");
        $('#valueTypeSpatial').focus();
        return;
    }

    // call ajax lấy thông tin config yếu tố
    $.ajax({
        headers: {
            'Authorization': token
        },
        "url": apiUrl + "config-value-type/get-station-value-type-spatial?idStation="+ dataStation[0].id+"&idValueType="+valueType[0].id,
        "method": "GET",
        "contentType": "application/json",
        "success": function (response) {
            // kiểm tra xem nếu đã tồn tại trong bảng rồi thì thông báo ra không thêm nữa
            var formData  = tableStationSpatial.rows().data();
            let insert = true;
            $.each( formData, function( key, value ) {
                if(dataStation[0].id == value.stationId && valueType[0].id == value.valueTypeId){
                    insert = false;
                }
            });
            if(insert == false){
                toastr.warning('Lỗi', "Bản ghi đã tồn tại");
                return;
            }
            tableStationSpatial.row.add(response).draw( true );

        },
        "error": function (error) {
            toastr.error('Lỗi', error.responseJSON.message);
        }
    });

});
// Delete a record
tableStationSpatial.on('click', 'a.editor_remove', function (e) {
    e.preventDefault();
    var table = $('#tableStationSpatial').DataTable();
    table
        .row( $(this).parents('tr') )
        .remove().draw();
});

$('#station_add').select2({
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
$("#station_add").change(function () {
    var dataStation = $('#station_add').select2('data');
    $.ajax({
        headers: {
            'Authorization': token
        },
        "url": apiUrl + "config-value-type/get-value-type-station-select?idStation="+dataStation[0].id,
        "method": "GET",
        "contentType": "application/json",
        "success": function (response) {
            $('#value-type-station').val(null).trigger('change');
            $('#value-type-station').empty();
            for (let i = 0; i < response.length; i++){
                var newOption = new Option(response[i].text, response[i].id, false, false);
                $('#value-type-station').append(newOption).trigger('change');
            }
        },
        "error": function (error) {
            toastr.error('Lỗi', error.responseJSON.message);
        }
    });
});

