$(document).ready(function () {
    show_search();
});
function show_search() {
    $("#box_info").hide(150);
    $("#box_search").show(250);
    $("#box_search").attr('class', 'col-sm-12');
}

$('#btncancer').click(function () {
    // disabled_right();
    $("#btnsave").css("display", "none");
    $("#btnDelete").css("display", "none");
    $("#btnResetUpdate").css("display", "none");
    $("#btncancer").css("display", "none");
    $("#btnDonew").attr("disabled", false);
    validator.resetForm();
    validatorhorizontal.resetForm();
    var rowDt = tableConfigValueType.rows('.selected').data()[0];
    show_search();
    if(rowDt!=undefined){
        $("#btnDonew").attr("disabled", true);
    }
});

function togle_search() {
    $("#box_info").show(150);
    $("#box_info").attr('class', 'col-sm-12');
    $("#box_search").hide(250);
    // $("#box_search").attr('class', 'col-sm-5');
}

$('#btnDonew').click(function () {
    // enabled_right();
    $('#action_info').val(1);
    togle_search();
    $("#btnsave").css("display", "inline");
    $("#btnDelete").css("display", "inline");
    $("#btnResetNew").css("display", "inline");
    $("#btncancer").css("display", "inline");
    $("#btnDonew").attr("disabled", true);
    $('.nav-tabs a[href="#menu2"]').tab('show');
    $("#form_input").get(0).reset();
    $("#station_add").empty();
    $("#value-type-station").empty();
    $("#station_add").prop( "disabled", false );
    $("#value-type-station").prop( "disabled", false );
    $("#btnsaveEdit").hide();
    validator.resetForm();
    validatorhorizontal.resetForm();
    tableStationSpatial
        .clear()
        .draw();
});

$('#station').select2({
    minimumInputLength: 0,
    delay: 350,
    templateSelection: function (data) {
        if (data.id === '' || data.id == null || data.id == undefined) {
            return '---- hãy chọn ----';
        }

        return data.text;
    },
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
            data = [{id: -1,text : '----hãy chọn----'}].concat(data);
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
// $('#station').select2.defaults.set("theme", "classic");q

$('#valueTypeSpatial').select2({

});
$('#value-type-station').select2({

});

$('#stationSpatial').select2({
    minimumInputLength: 0,
    delay: 350,
    templateSelection: function (data) {
        if (data.id === '' || data.id == null || data.id == undefined) {
            return '---- hãy chọn ----';
        }

        return data.text;
    },
    ajax:{
        headers: {
            'Authorization': token
        },
        url: apiUrl + "config-value-type/get-list-station-other",
        contentType: 'application/json',
        method: "POST",
        quietMillis: 50,
        data: function (term) {
            if(term.term==null || term.term== undefined){
                term.term = null;
            }
            term.station = $("#station_add").val();
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
            data = [{id: -1,text : '----hãy chọn----'}].concat(data);
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
    s_code: '',
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
        {"data": "code", "render": $.fn.dataTable.render.text()},
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
                 if(responseJson.content[i].startDate!=null){
                     let todayTime =new Date(responseJson.content[i].startDate)
                     let month = todayTime.getMonth() + 1;
                     let day = todayTime.getDate();
                     let year = todayTime.getFullYear();
                     let dateStart =  month + "/" + day + "/" + year;
                     responseJson.content[i].startDate = dateStart;
                 } else{
                     responseJson.content[i].startDate = "";
                 }
                 if(responseJson.content[i].endDate!=null){
                     let todayTimeEnd =new Date(responseJson.content[i].endDate)
                     let monthEnd = todayTimeEnd.getMonth() + 1;
                     let dayEnd = todayTimeEnd.getDate();
                     let yearEnd = todayTimeEnd.getFullYear();
                     let dateEnd =  monthEnd + "/" + dayEnd + "/" + yearEnd;
                     responseJson.content[i].endDate = dateEnd;
                 } else{
                     responseJson.content[i].endDate = "";
                 }

                dataRes.data.push({
                    "": "",
                    "indexCount": i + 1,
                    "id": responseJson.content[i].id,
                    "stationId": responseJson.content[i].stationId,
                    "valueTypeId": responseJson.content[i].valueTypeId,
                    "stationName": responseJson.content[i].stationName,
                    "valueTypename": responseJson.content[i].valueTypename,
                    "code": responseJson.content[i].code,
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
    if($("#station").val()==-1){
        objSearch.s_station_id = null;
    } else{
        objSearch.s_station_id = $("#station").val();
    }

    if($("#value-type").val()==-1){
        objSearch.s_value_type_id = null;
    } else{
        objSearch.s_value_type_id = $("#value-type").val();
    }
    objSearch.s_start_apply_date = $("#start_date").val();
    objSearch.s_end_apply_date = $("#end_date").val();
    tableConfigValueType.search(objSearch).draw();

});
$("#stationSpatial").change(function () {
    $('#valueTypeSpatial').empty();

    let dataStation = $("#stationSpatial").val();
    let dataValueType = $("#value-type-station").val();
    if(dataStation == null || dataValueType == null){
        return;
    }

    $.ajax({
        headers: {
            'Authorization': token
        },
        "url": apiUrl + "config-value-type/get-list-value-type?idStation="+ $("#stationSpatial").val()+"&valueTypeId="+$("#value-type-station").val(),
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
            console.log(error);
            toastr.error('Lỗi', error.statusText);
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
        {"data": "code"},
        {"data": "variableSpatial"},
        {
            data: null,
            className: "center",
            defaultContent: '<a href="" class="editor_remove">Delete</a>'
        }
    ]
});
$("#btnsaveStationValueType").click(function () {
    var submit = $("#formStationSpatial").valid();
    var dataStation = $('#stationSpatial').select2('data');
    var dataValueType = $('#valueTypeSpatial').select2('data');
    if(dataStation[0]==null || dataStation[0] == undefined || dataValueType[0]== null || dataValueType[0] == undefined){
        return;
    }
    var dataValueTypeText = dataValueType[0].text;
    var dataValueTypeTexts = dataValueTypeText.split("-");
    if(submit == false) {
        if (dataStation.length == 0) {
            $('#stationSpatial').select2('open');
            return;
        }
        if (dataValueType.length == 0) {
            $('#valueTypeSpatial').select2('open');
            return;
        }
        return;
    }

    $.ajax({
        headers: {
            'Authorization': token
        },
        "url": apiUrl + "config-value-type/get-station-value-type-spatial?idStation="+ dataStation[0].id+"&idValueType="+dataValueType[0].id+"&code="+dataValueTypeTexts[2],
        "method": "GET",
        "contentType": "application/json",
        "success": function (response) {
            // kiểm tra xem nếu đã tồn tại trong bảng rồi thì thông báo ra không thêm nữa
            var formData  = tableStationSpatial.rows().data();
            let insert = true;
            $.each( formData, function( key, value ) {
                if(dataStation[0].id == value.stationId && dataValueType[0].id == value.valueTypeId&& dataValueTypeTexts[2]==value.code){
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
    $('#value-type-station').val(null).trigger('change');
    $('#value-type-station').empty();

    $('#stationSpatial').val(null);
    $('#stationSpatial').empty();

    $('#valueTypeSpatial').val(null);
    $('#valueTypeSpatial').empty();
    if(dataStation[0]==undefined){
        return;
    }
    tableStationSpatial
        .clear()
        .draw();

    $.ajax({
        headers: {
            'Authorization': token
        },
        "url": apiUrl + "config-value-type/get-value-type-station-select?idStation="+dataStation[0].id,
        "method": "GET",
        "contentType": "application/json",
        "success": function (response) {

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

$("#value-type-station").change(function () {

    $('#stationSpatial').val(null).trigger('change');
    $('#stationSpatial').empty();

    $('#valueTypeSpatial').val(null).trigger('change');
    $('#valueTypeSpatial').empty();

    tableStationSpatial
        .clear()
        .draw();
});

// form thêm mới sửa xóa
    $('#start_date').daterangepicker({
    "singleDatePicker": true,
    "linkedCalendars": false,
    "showCustomRangeLabel": false,
    "alwaysShowCalendars": false,
    "autoUpdateInput" : false,
    locale: {
        cancelLabel: 'Clear',
        format: 'DD/MM/YYYY'
    }
}, function(start, end, label) {
    console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
});
$('#start_date').on('cancel.daterangepicker', function(ev, picker) {
    $(this).val('');
});
$('#start_date').on('apply.daterangepicker', function(ev, picker) {
    $("#start_date").val(picker.startDate.format('DD/MM/YYYY'));
});
$('#end_date').daterangepicker({
    "singleDatePicker": true,
    "linkedCalendars": false,
    "showCustomRangeLabel": false,
    "alwaysShowCalendars": false,
    "autoApply" : false,
    "autoUpdateInput" : false,
    locale: {
        cancelLabel: 'Clear',
        format: 'DD/MM/YYYY'
    }
}, function(start, end, label) {

});
var validatorhorizontal = $("#formStationSpatial").validate({
    rules : {
        stationSpatial : {
            required : true,
        },
        valueTypeSpatial : {
            required : true,
        }
    },
    messages: {
        stationSpatial: {
            required: "Hãy chọn trạm",
        },
        valueTypeSpatial: {
            required: "Hãy chọn yếu tố",
        }
    },
    errorPlacement : function(error, element) {
        error.insertAfter(element.parents("div.insertError"));
    }
});
$('#end_date').on('cancel.daterangepicker', function(ev, picker) {
    $(this).val('');
});

$('#end_date').on('apply.daterangepicker', function(ev, picker) {
    $("#end_date").val(picker.startDate.format('DD/MM/YYYY'));
});

$("#startDateApply").daterangepicker({
    "singleDatePicker": true,
    "linkedCalendars": false,
    "showCustomRangeLabel": false,
    "alwaysShowCalendars": false,
    "autoApply" : false,
    "autoUpdateInput" : false,
    locale: {
        cancelLabel: 'Clear',
        format: 'DD/MM/YYYY'
    }
}, function(start, end, label) {

});
$('#startDateApply').on('cancel.daterangepicker', function(ev, picker) {
    $(this).val('');
});
$('#startDateApply').on('apply.daterangepicker', function(ev, picker) {
    $("#startDateApply").val(picker.startDate.format('DD/MM/YYYY'));
});

$("#endDateApply").daterangepicker({
    "singleDatePicker": true,
    "linkedCalendars": false,
    "showCustomRangeLabel": false,
    "alwaysShowCalendars": false,
    "autoApply" : false,
    "autoUpdateInput" : false,
    locale: {
        cancelLabel: 'Clear',
        format: 'DD/MM/YYYY'
    }
}, function(start, end, label) {
});
$('#endDateApply').on('cancel.daterangepicker', function(ev, picker) {
    $(this).val('');
});

$('#endDateApply').on('apply.daterangepicker', function(ev, picker) {
    $("#endDateApply").val(picker.startDate.format('DD/MM/YYYY'));
});


var validator = $("#form_input").validate({
    rules : {
        min : {
            required : true,
            maxlength : 15,
            min : 0
        },
        max : {
            required : true,
            maxlength : 15,
            validMin : "#min",
            min : 0
        },
        station_add : {
            required : true,
        },
        value_type_station : {
            required : true
        },
        variableTime : {
            required : true,
            min : 0
        },
        variableSpatial : {
            required : true,
            min : 0
        },
        startDateApply : {
            validDate : "#endDateApply"
        },
        endDateApply : {
            validDateStart : "#startDateApply"
        },
        code : {
            required : true,
        }
    },
    messages: {
        min: {
            required: "Bắt buộc nhập min",
            maxlength: "Nhập tối đa 15 ký tự",
            min : "Giá trị không được âm",
            number : "Giá trị phải là số"
        },
        max: {
            required: "Bắt buộc nhập max",
            maxlength: "Nhập tối đa 15 ký tự",
            validMin : "Giá trị max chưa hợp lệ",
            min : "Giá trị không được âm",
            number : "Giá trị phải là số"
        },
        station_add : {
            required: "Bắt buộc nhập trạm",
        },
        value_type_station : {
            required: "Bắt buộc chọn yếu tố",
        },
        variableTime : {
            required: "Bắt buộc nhập giá trị biến đổi theo thời gian",
            min : "Giá trị không được âm",
            number : "Giá trị phải là số"
        },
        variableSpatial : {
            required: "Bắt buộc nhập giá trị biến đổi theo không gian",
            min : "Giá trị không được âm",
            number : "Giá trị phải là số"
        },
        startDateApply : {
            validDate :"Ngày bắt đầu phải nhỏ hơn ngày kết thúc"
        },
        endDateApply : {
            validDateStart : "Ngày kết thúc phải lớn hơn ngày hiện tại"
        },
        code : {
            required: "Bắt buộc nhập mã code",
        }
    },
    errorPlacement : function(error, element) {
        error.insertAfter(element.parents("div.insertError"));
    }
});
jQuery.validator.addMethod('validMin', function (value, element, param) {
    return this.optional(element) || parseFloat(value) > parseFloat($(param).val());
}, 'Invalid value');

jQuery.validator.addMethod('validDate', function (value, element, param) {
    if(value=="" || value == null || value == undefined||$(param).val()==null || $(param).val() == null || $(param).val() == undefined){
        return true;
    }
    var start = stringToDate(value,"dd/MM/yyyy","/");
    var end =  stringToDate($(param).val(),"dd/MM/yyyy","/");

    return start.getTime() < end.getTime();
}, 'Invalid value');

jQuery.validator.addMethod('validDateStart', function (value, element, param) {
    var end = value
    var start =  $(param).val();
    var currentDate = new Date();
    var strDate = currentDate.getDate()+"/"+currentDate.getMonth()+"/"+currentDate.getFullYear();
    var dateCompare =  stringToDate(strDate,"dd/MM/yyyy","/");
    if(end!=""&& start==""){
        let dateEndCompare = stringToDate(end,"dd/MM/yyyy","/");
        if(dateEndCompare.getTime()>dateCompare.getTime()){
            return false;
        }
    }
    return true
}, 'Ngày kết thúc không hợp lệ');

function stringToDate(_date,_format,_delimiter) {
    var formatLowerCase=_format.toLowerCase();
    var formatItems=formatLowerCase.split(_delimiter);
    var dateItems=_date.split(_delimiter);
    var monthIndex=formatItems.indexOf("mm");
    var dayIndex=formatItems.indexOf("dd");
    var yearIndex=formatItems.indexOf("yyyy");
    var year = parseInt(dateItems[yearIndex]);
    // adjust for 2 digit year
    if (year < 100) { year += 2000; }
    var month=parseInt(dateItems[monthIndex]);
    month-=1;
    var formatedDate = new Date(year,month,dateItems[dayIndex]);
    return formatedDate;
}

$("#btnsave").click(function () {
    var submit = $("#form_input").valid();
    if(submit == false){
        var dataStation = $('#station_add').select2('data');
        var dataValueType = $('#value-type-station').select2('data');
        if(dataStation.length == 0){
            $('#station_add').select2('open');
            return;
        }
        if(dataValueType.length == 0){
            $('#value-type-station').select2('open');
            return;
        }
        validator.focusInvalid();
        return;
    }
    var $form = $("#form_input");
    var data = getFormData($form);
    //.log(data);
    //láy ra toàn bộ sanh sách trong table

    var formData  = tableStationSpatial.rows().data();
    let insert = [];
    $.each( formData, function( key, value ) {
        insert.push(value.id);
    });
    data.stationSpatial = insert;
    data.id = null;
    data.startDateApply= $('#startDateApply').data('daterangepicker').startDate._d;
    data.endDateApply =  $('#endDateApply').data('daterangepicker').startDate._d;
    if($("#startDateApply").val()==""){
        data.startDateApply=null;
    }
    if($("#endDateApply").val()==""){
        data.endDateApply=null;
    }
    $.ajax({
        headers: {
            'Authorization': token
        },
        "url": apiUrl + "config-value-type",
        "method": "POST",
        "contentType": "application/json",
        "data" : JSON.stringify(data),
        "success": function (response) {
            toastr.success('Thành công', response.message);
            show_search();
            $("#btnsave").css("display", "none");
            $("#btnDelete").css("display", "none");
            $("#btnReset").css("display", "none");
            $("#btncancer").css("display", "none");
            $("#btnDonew").attr("disabled", false);
            $("#btnDetail").attr("disabled", true);
            show_search();
            tableConfigValueType.ajax.reload();
        },
        "error": function (error) {
            toastr.error('Lỗi', error.responseJSON.message);
        }
    });

});

function getFormData($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}


$("#endDateApply").val("");
$("#startDateApply").val("");
$("#start_date").val("");
$("#end_date").val("");
$("#endDateApply").keyup(function () {
    $("#endDateApply").val("")
});
$("#startDateApply").keyup(function () {
    $("#startDateApply").val("")
});
$("#start_date").keyup(function () {
    $("#start_date").val("")
});
$("#end_date").keyup(function () {
    $("#end_date").val("");
});
//làm chức năng thêm sửa xóa
// chức năng sửa
tableConfigValueType
    .on('select', rowSelect)
    .on('deselect', rowDeselect);
function rowSelect(e, dt, type, indexes) { // load các thông tin của những cái bên trái ra
    $("#btnDetail").prop( "disabled", false );
    $("#btnDonew").attr("disabled", true);
}
function rowDeselect(e, dt, type, indexes) { // khóa các form bên trái
    $("#btnDetail").prop( "disabled", true );
    $("#btnDonew").attr("disabled", false);
}
$("#btnDetail").click(function () {
    var rowDt = tableConfigValueType.rows('.selected').data()[0];
    $('#action_info').val(1);
    togle_search();
    $("#btnsave").css("display", "none");
    $("#btnDelete").css("display", "inline");
    $("#btnResetUpdate").css("display", "inline");
    $("#btncancer").css("display", "inline");
    $("#btnDonew").attr("disabled", true);
    $('.nav-tabs a[href="#menu2"]').tab('show');
    $("#btnsaveEdit").css("display", "inline");
    $("#btnResetNew").css("display", "none");
    validator.resetForm();
    validatorhorizontal.resetForm();
    showDetailData(rowDt);

});

function setDataTableSpatial(rowDt){
    $.ajax({
        headers: {
            'Authorization': token
        },
        "url": apiUrl + "config-value-type/get-list-station-value-type-spatial?idConfigValueType="+rowDt.id,
        "method": "GET",
        "contentType": "application/json",
        "success": function (response) {
            for(let i =0; i< response.length; i++){
                tableStationSpatial.row.add(response[i]).draw( true );
            }
        },
        "error": function (error) {
            toastr.error('Lỗi', error.responseJSON.message);
        }
    });
}

function showDetailData(rowDt){
    $("#station_add").empty();
    var newOption = new Option(rowDt.stationName, rowDt.stationId, true, true);
    $('#station_add').append(newOption).trigger('change');
    $('#station_add').prop( "disabled", true );
    $("#id").val(rowDt.id);
    $("#min").val(rowDt.min);
    $("#max").val(rowDt.max);
    $("#startDateApply").val(rowDt.startDate);
    $("#endDateApply").val(rowDt.endDate);
    $("#variableTime").val(rowDt.variableTime);
    $("#variableSpatial").val(rowDt.variableSpatial);
    $("#code").val(rowDt.code);
    $.ajax({
        headers: {
            'Authorization': token
        },
        "url": apiUrl + "config-value-type/get-value-type-station-value-type?idStation="+rowDt.stationId+"&idValueType="+rowDt.valueTypeId,
        "method": "GET",
        "contentType": "application/json",
        "success": function (response) {
            $("#value-type-station").empty();
            var newOption = new Option(response.text, response.id, true, true);
            $('#value-type-station').append(newOption).trigger('change');
            $('#value-type-station').prop( "disabled", true );
            setDataTableSpatial(rowDt);
        },
        "error": function (error) {
            toastr.error('Lỗi', error.responseJSON.message);
        }
    });
}
$("#btnsaveEdit").click(function(){
    var submit = $("#form_input").valid();
    if(submit == false){
        var dataStation = $('#station_add').select2('data');
        var dataValueType = $('#value-type-station').select2('data');
        if(dataStation.length == 0){
            $('#station_add').select2('open');
            return;
        }
        if(dataValueType.length == 0){
            $('#value-type-station').select2('open');
            return;
        }
        validator.focusInvalid();
        return;
    }
    var $form = $("#form_input");
    var data = getFormData($form);
    //.log(data);
    //láy ra toàn bộ sanh sách trong table

    var formData  = tableStationSpatial.rows().data();
    let insert = [];
    $.each( formData, function( key, value ) {
        insert.push(value.id);
    });
    data.stationSpatial = insert;
    data.startDateApply= $('#startDateApply').data('daterangepicker').startDate._d;
    data.endDateApply =  $('#endDateApply').data('daterangepicker').startDate._d;
    //console.log(data);
    $.ajax({
        headers: {
            'Authorization': token
        },
        "url": apiUrl + "config-value-type",
        "method": "PUT",
        "contentType": "application/json",
        "data" : JSON.stringify(data),
        "success": function (response) {
            toastr.success('Thành công', response.message);
            $("#btnsave").css("display", "none");
            $("#btnDelete").css("display", "none");
            $("#btnReset").css("display", "none");
            $("#btncancer").css("display", "none");
            $("#btnDonew").attr("disabled", false);
            show_search();
            tableConfigValueType.ajax.reload();
            $("#btnDetail").prop( "disabled", true );
            $("#btnDonew").attr("disabled", true);
        },
        "error": function (error) {
            toastr.error('Lỗi', error.responseJSON.message);
        }
    });
});
$("#btnDelete").click(function () {
    $.ajax({
        headers: {
            'Authorization': token
        },
        "url": apiUrl + "config-value-type?id="+$("#id").val(),
        "method": "DELETE",
        "contentType": "application/json",
        "success": function (response) {
            toastr.success('Thành công', response.message);
            $("#btnsave").css("display", "none");
            $("#btnDelete").css("display", "none");
            $("#btnReset").css("display", "none");
            $("#btncancer").css("display", "none");
            $("#btnDonew").attr("disabled", false);
            show_search();
            tableConfigValueType.ajax.reload();
        },
        "error": function (error) {
            toastr.error('Lỗi', error.responseJSON.message);

        }
    });
});
$('#stationSpatial').on('select2:opening', function (e) {
    var dataStation = $('#station_add').select2('data');
    if(dataStation.length == 0){
        $( "#station_add" ).focus();
       $('#station_add').select2('open');
       toastr.error('Lỗi',"Chưa chọn trạm");
       return false;
    }
    var dataValueType = $('#value-type-station').select2('data');
    if(dataValueType.length == 0){
        $( "#value-type-station" ).focus();
        $('#value-type-station').select2('open');
        toastr.error('Lỗi',"Chưa chọn yếu tố cho trạm");
        return false;
    }
});
$('#valueTypeSpatial').on('select2:opening', function (e) {
    var dataStation = $('#station_add').select2('data');
    if(dataStation.length == 0){
        $( "#station_add" ).focus();
        $('#station_add').select2('open');
        toastr.warning('Lỗi',"hãy chọn trạm trước");
        return false;
    }
    var dataValueType = $('#value-type-station').select2('data');
    if(dataValueType.length == 0){
        $( "#value-type-station" ).focus();
        $('#value-type-station').select2('open');
        toastr.warning('Lỗi',"hãy chọn yếu tố trước");
        return false;
    }
});
$("#btnResetNew").click(function(){
    $("#form_input").get(0).reset();
    $('#station_add').val(null).trigger('change');
    $('#station_add').empty();
    $('#value-type-station').val(null).trigger('change');
    $('#value-type-station').empty();
    $('#stationSpatial').val(null).trigger('change');
    $('#stationSpatial').empty();
    $('#valueTypeSpatial').val(null).trigger('change');
    $('#valueTypeSpatial').empty();
    validator.resetForm();
    validatorhorizontal.resetForm();
    tableStationSpatial
        .clear()
        .draw();
});
$("#btnResetUpdate").click(function(){
    tableStationSpatial
        .clear()
        .draw();
    $('#stationSpatial').val(null).trigger('change');
    $('#stationSpatial').empty();
    $('#valueTypeSpatial').val(null).trigger('change');
    $('#valueTypeSpatial').empty();
    validator.resetForm();
    validatorhorizontal.resetForm();
    setTimeout(function(){
        var rowDt = tableConfigValueType.rows('.selected').data()[0];
        showDetailData(rowDt);
    }, 200);

});