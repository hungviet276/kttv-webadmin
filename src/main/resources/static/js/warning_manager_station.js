//constant
var icons = [
    {
        text : '--- Hãy chọn ---',
        value : " "
    },
    {
    text : '<i class="fas fa-bolt"></i>',
    value : '<i class="fas fa-bolt"></i>'
    },{
    text : '<i class="fas fa-wind"></i>',
    value : '<i class="fas fa-wind"></i>'
    },{
    text : '<i class="fas fa-smog"></i>',
    value : '<i class="fas fa-smog"></i>'
    },{
    text : '<i class="fas fa-cloud"></i>',
    value : '<i class="fas fa-cloud"></i>'
    },{
    text : '<i class="fas fa-sun"></i>',
    value : '<i class="fas fa-sun"></i>'
    },{
    text : '<i class="far fa-sun"></i>',
    value : '<i class="far fa-sun"></i>'
    },{
    text : '<i class="fas fa-umbrella"></i>',
    value : '<i class="fas fa-umbrella"></i>'
    },{
    text : '<i class="fas fa-rainbow"></i>',
    value : '<i class="fas fa-rainbow"></i>'
    },{
    text : '<i class="fas fa-poo-storm"></i>',
    value : '<i class="fas fa-poo-storm"></i>'
    },{
    text : '<i class="fas fa-cloud-sun-rain"></i>',
    value : '<i class="fas fa-cloud-sun-rain"></i>'
    },{
    text : '<i class="fas fa-cloud-sun"></i>',
    value : '<i class="fas fa-cloud-sun"></i>'
    },{
    text : '<i class="fas fa-cloud-showers-heavy"></i>',
    value : '<i class="fas fa-cloud-showers-heavy"></i>'
    },{
    text : '<i class="fas fa-cloud-rain"></i>',
    value : '<i class="fas fa-cloud-rain"></i>'
    },{
    text : '<i class="fas fa-cloud-moon-rain"></i>',
    value : '<i class="fas fa-cloud-moon-rain"></i>'
    },{
    text : '<i class="fas fa-cloud-meatball"></i>',
    value : '<i class="fas fa-cloud-meatball"></i>'
    },{
    text : '<i class="fas fa-temperature-low"></i>',
    value : '<i class="fas fa-temperature-low"></i>'
    },{
    text : '<i class="fas fa-temperature-high"></i>',
    value : '<i class="fas fa-temperature-high"></i>'
    },{
    text : '<i class="fas fa-snowflake"></i>',
    value : '<i class="fas fa-snowflake"></i>'
    },{
    text : '<i class="fas fa-cloud-moon"></i>',
    value : '<i class="fas fa-cloud-moon"></i>'
    },{
    text : '<i class="fas fa-moon"></i>',
    value : '<i class="fas fa-moon"></i>'
    },{
    text : '<i class="fas fa-water"></i>',
    value : '<i class="fas fa-water"></i>'
    },{
    text : '<i class="fas fa-backspace"></i>',
    value : '<i class="fas fa-backspace"></i>'
    },{
    text : '<i class="fas fa-car-crash"></i>',
    value : '<i class="fas fa-car-crash"></i>'
    },{
    text : '<i class="fas fa-first-aid"></i>',
    value : '<i class="fas fa-first-aid"></i>'
    }
];
//end constant
$('#iconWarningAdd').select2({
    minimumResultsForSearch: -1,
    escapeMarkup: function(markup) {
        return markup;
    },
    templateSelection: function(data) {
        return data.text;
    }
});
function getFormData($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}
(function (){
    for(let i =0 ; i < icons.length ; i++){
        var newOption = new Option(icons[i].text, icons[i].value, false, false);
        $('#iconWarningAdd').append(newOption).trigger('change');
    }
})();
//tìm kiếm
$(document).ready(function () {
    show_search();
});
function show_search() {
    $("#box_info").hide(150);
    $("#box_search").show(250);
    $("#box_search").attr('class', 'col-sm-12');
}

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

function dateToString(date) {
    let strDate = "";
    let month = date.getMonth() + 1;
    let dayTmp = date.getDate();
    let day ="";
    if(dayTmp< 10){
        day = "0"+ dayTmp;
    }
    let year = date.getFullYear();
    return strDate + day+"/"+month+"/"+year;
}

$('#startDate').daterangepicker({
    "singleDatePicker": true,
    "linkedCalendars": false,
    "showCustomRangeLabel": false,
    "alwaysShowCalendars": false,
    "autoUpdateInput" : false,
    startDate: moment(),
    locale: {
        cancelLabel: 'Clear',
        format: 'DD/MM/YYYY'
    }
}, function(start, end, label) {
    console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
});
$('#startDate').on('cancel.daterangepicker', function(ev, picker) {
    $(this).val('');
});
$('#startDate').on('apply.daterangepicker', function(ev, picker) {
    $("#startDate").val(picker.startDate.format('DD/MM/YYYY'));
});

$('#endDate').daterangepicker({
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
    //console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
});
$('#endDate').on('cancel.daterangepicker', function(ev, picker) {
    $(this).val('');
});
$('#endDate').on('apply.daterangepicker', function(ev, picker) {
    $("#endDate").val(picker.startDate.format('DD/MM/YYYY'));
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
$('#btnDonew').click(function () {
    // enabled_right();

    $("#id").val("");
    $('#action_info').val(1);
    togle_search();
    $("#btnsave").css("display", "inline");
    $("#btnDelete").css("display", "inline");
    $("#btnResetNew").css("display", "inline");
    $("#btncancer").css("display", "inline");
    $("#btnDonew").attr("disabled", true);
    $('.nav-tabs a[href="#menu2"]').tab('show');
    $("#iconWarningAdd").val(" ").trigger('change');
    $("#form_input").get(0).reset();
    $("#station_add").empty();
    $("#value-type-station").empty();
    $("#station_add").prop( "disabled", false );
    $("#value-type-station").prop( "disabled", false );
    $("#btnDelete").prop( "disabled", true );
    $("#stationWarningAdd").prop( "disabled", false );
    $("#stationWarningAdd").empty();
    $("#btnsaveEdit").hide();
    $("#btnResetUpdate").hide();
    for ( instance in CKEDITOR.instances ){
        CKEDITOR.instances[instance].updateElement();
        CKEDITOR.instances[instance].setData('');
    }
    warningManagerStationValid.resetForm();
    //validWarningThreshold.resetForm();
    tableConditionWarning
        .clear()
        .draw();
});
//end tìm kiếm

// table search
let objSearch = {
    s_id: '',
    s_id_station: '',
    s_name_station: '',
    s_code_warning: '',
    s_name_warning: '',
    s_icon: '',
    s_start_date: '',
    s_end_date : ''
};
$('#tableWarningManagerStation thead th').each(function () {
    var title = $(this).text();
    var dataId = $(this).attr("data-id");
    if (dataId != null && dataId != undefined) {
        $(this).html('<input class="table-data-input-search" id="'+ dataId +'" type="text" placeholder="Search ' + title + '" autocomplete="off"/>');
    }
});
var tableWarningMangerStation = $('#tableWarningManagerStation').DataTable({
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
    "scrollX": false,
    "responsive": false,
    language: {
        search: "_INPUT_",
        searchPlaceholder: "Nhập thông tin tìm kiếm",
    },
    "processing": true,
    "serverSide": true,
    "columns": [
        {"data":""},
        {"data": "indexCount", "render": $.fn.dataTable.render.text()},
        {"data": "id", "render": $.fn.dataTable.render.text(),"visible": false},
        {"data": "stationId", "render": $.fn.dataTable.render.text(),"visible": false},
        {"data": "stationName", "render": $.fn.dataTable.render.text()},
        {"data": "warningCode", "render": $.fn.dataTable.render.text()},
        {"data": "warningName", "render": $.fn.dataTable.render.text()},
        {"data": "icon", "render": $.fn.dataTable.render.text(),"visible": false},
        {"data": "createDate", "render": $.fn.dataTable.render.text()},
        {"data": "description", "render": $.fn.dataTable.render.text(),"visible": false},
        {"data": "content", "render": $.fn.dataTable.render.text(),"visible": false},
        {"data": "color", "render": $.fn.dataTable.render.text(),"visible": false}
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
                    if (new Date().getTime() - keyUpTime > 500) {
                        tableWarningMangerStation.search(objSearch).draw();
                        keyUpTime = new Date().getTime();
                    }
                    return;
                }, 560);

            });
        });
    },
    "ajax": {
        headers: {
            'Authorization': token
        },
        "url": apiUrl + "warning-manager-station/get-list-warning-manager-station",
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
                if(responseJson.content[i].createDate!=null){
                    let todayTimeEnd =new Date(responseJson.content[i].createDate)
                    let monthEnd = todayTimeEnd.getMonth() + 1;
                    let dayEnd = todayTimeEnd.getDate();
                    let yearEnd = todayTimeEnd.getFullYear();
                    let dateEnd =  dayEnd + "/" + monthEnd + "/" + yearEnd;
                    responseJson.content[i].createDate = dateEnd;
                } else{
                    responseJson.content[i].createDate = "";
                }
                dataRes.data.push({
                    "": "",
                    "indexCount": i + 1,
                    "id": responseJson.content[i].id,
                    "stationId": responseJson.content[i].stationId,
                    "stationName": responseJson.content[i].stationName,
                    "warningCode": responseJson.content[i].warningCode,
                    "warningName": responseJson.content[i].warningName,
                    "icon": responseJson.content[i].icon,
                    "createDate": responseJson.content[i].createDate,
                    "description": responseJson.content[i].description,
                    "content": responseJson.content[i].content,
                    "color": responseJson.content[i].color
                })
            }

            return JSON.stringify(dataRes);
        }
    }
});


tableWarningMangerStation
    .on('select', rowSelect)
    .on('deselect', rowDeselect);
function rowSelect(e, dt, type, indexes) { // load các thông tin của những cái bên trái ra
    $("#btnDetail").prop( "disabled", false );
    $("#btnDonew").attr("disabled", true);
}
$("#btnSearch").click(function (event){
    event.preventDefault();
    event.stopPropagation();

    $("#btnDetail").prop( "disabled", true );
    $("#btnDonew").attr("disabled", false);
    var inputSearch = $(".table-data-input-search");
    for(let i =0 ; i < inputSearch.length; i ++){
        $(inputSearch[i]).val("");
    }
    if($("#station").val()==-1){
        objSearch.s_id_station = null;
    } else{
        objSearch.s_id_station = $("#station").val();
    }
    let name = $("#nameWarning").val();
    let startDate = $("#startDate").val();
    let endDate = $("#endDate").val();
    let code = $("#codeWarning").val();

    objSearch.s_name_warning = name;
    objSearch.s_code_warning = code;
    objSearch.s_start_date = startDate;
    objSearch.s_end_date = endDate;
    tableWarningMangerStation.search(objSearch).draw();

});
function rowDeselect(e, dt, type, indexes) { // khóa các form bên trái
    $("#btnDetail").prop( "disabled", true );
    $("#btnDonew").attr("disabled", false);
}
// end table search
//start form add
$('#stationWarningAdd').select2({
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

$("#parameterWarningAdd").change(function () {
    $('#WarningThresholdCode').val(null).trigger('change');
});

$('#parameterWarningAdd').select2({
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
        url: apiUrl + "warning-manager-station/get-list-param-warning-config",
        contentType: 'application/json',
        method: "POST",
        quietMillis: 50,
        data: function (term) {
            if(term.term==null || term.term== undefined){
                term.term = null;
            }
            term.id = $("#stationWarningAdd").val();
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

$('#WarningThresholdCode').select2({
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
        url: apiUrl + "warning-manager-station/get-list-warning-config-threshold",
        contentType: 'application/json',
        method: "POST",
        quietMillis: 50,
        data: function (term) {
            if(term.term==null || term.term== undefined){
                term.term = null;
            }
            term.id = $("#parameterWarningAdd").val();
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

$("#stationWarningAdd").change(function () {
    $('#parameterWarningAdd').val(null).trigger('change');
    $('#WarningThresholdCode').val(null).trigger('change');
    $("#levelWarning").val("");
    $("#levelClear").val("");
    tableConditionWarning.clear().draw();
});

var contentWarningAdd = '';
$(document).ready(function() {
    contentWarningAdd = CKEDITOR.replace('contentWarningAdd');
});

$("#WarningThresholdCode").change(function(){
    if($("#WarningThresholdCode").val()==null || $("#WarningThresholdCode").val() == undefined || $("#WarningThresholdCode").val()==""){
        return;
    }
    $.ajax({
        headers: {
            'Authorization': token
        },
        "url": apiUrl + "warning-manager-station/get-info-warning-threshold?idThreshold="+$("#WarningThresholdCode").val(),
        "method": "GET",
        "contentType": "application/json",
        "success": function (response) {
            $("#levelWarning").val(response.warningThreshold);
            $("#levelClear").val(response.warningThresholdCancel);
        },
        "error": function (error) {
            toastr.error('Lỗi', error.responseJSON.message);
        }
    });

});

//table add thêm cảnh bảo

var tableConditionWarning = $('#tableConditionWarning').DataTable({
    columns: [
        {
            "data": "id",
             "visible": false,
        },
        {
            "data": "idParameter",
             "visible": false
        },
        {
            "data": "idWarningThreshold",
            "visible": false
        },
        {
            "data": "nameParameter"
        },
        {
            "data": "warningThresholdCode"
        },
        {
            "data": "warningThreshold",
            "visible": false
        },
        {"data": "warningThresholdCancel"},
        {"data": "createBy"},
        {"data": "createAt"},
        {
            data: null,
            className: "center",
            defaultContent: '<a href="" class="editor_remove"><i class="fa fa-trash" aria-hidden="true"></i></a>'
        }
    ]
});

$("#btnsaveStationValueType").click(function(){
    var dataParameter = $('#parameterWarningAdd').select2('data');
    var dataWarningcode = $("#WarningThresholdCode").select2('data');


    var data2 = $("#parameterWarningAdd").select2('data');
    if(data2.length == 0|| data2[0].id == "-1" || dataParameter == undefined){
        $('#parameterWarningAdd').select2('open');
        return;
    }

    var data = $("#WarningThresholdCode").select2('data');
    if(data.length == 0|| data[0].id == "-1" || dataWarningcode == undefined){
        $('#WarningThresholdCode').select2('open');
        return;
    }

    let dataInsertTable = {};
    var formData  = tableConditionWarning.rows().data();
    let insert = true;
    $.each( formData, function( key, value ) {
        if(dataWarningcode[0].text == value.warningThresholdCode){
            insert = false;
        }
    });
    if(insert == false){
        toastr.error('Lỗi', "Bản ghi đã tồn tại");
        return;
    }

    dataInsertTable.id = "";
    dataInsertTable.idParameter = dataParameter[0].id;
    dataInsertTable.nameParameter = dataParameter[0].text;
    dataInsertTable.warningThresholdCode = dataWarningcode[0].text;
    dataInsertTable.warningThreshold = $("#levelWarning").val();
    dataInsertTable.warningThresholdCancel = $("#levelClear").val();
    dataInsertTable.createBy = username;
    dataInsertTable.createAt = dateToString(new Date());
    dataInsertTable.idWarningThreshold = dataWarningcode[0].id;
    tableConditionWarning.row.add(dataInsertTable).draw(true);

    $('#parameterWarningAdd').val(null).trigger('change');
    $('#WarningThresholdCode').val(null).trigger('change');
    $("#levelWarning").val("");
    $("#levelClear").val("");
});

// Delete a record
tableConditionWarning.on('click', 'a.editor_remove', function (e) {
    e.preventDefault();
    var table = $('#tableConditionWarning').DataTable();
    table
        .row( $(this).parents('tr') )
        .remove().draw();
});

var warningManagerStationValid = $("#form_input").validate({
    rules : {
        codeWarning : {
            required : true,
            maxByteCode : true,
            validUtf8 : true
        },
        nameWarning : {
            required : true,
            maxlength : 100
        },
        descriptionWarning : {
            maxlength : 500
        },
        stationWarning : {
            required : true,
        }
    },
    messages: {
        codeWarning: {
            required: "Hãy nhập mã cảnh báo",
            maxlength  : "Code vượt quá độ dài 15 ký tự"
        },
        nameWarning : {
            required: "Hãy nhập tên cảnh báo",
            maxlength  : "Tên vượt quá độ dài 150 ký tự"
        },
        descriptionWarning : {
            maxlength : "Độ dài mô tả không được dài quá 500 ký tự"
        },
        stationWarning : {
            required :"Trạm không được để trống"
        }
    },
    errorPlacement : function(error, element) {
        error.insertAfter(element.parents("div.insertError"));
    }
});
// làm ra để đây để sau này dùng  chứ giờ chưa sử dụng
jQuery.validator.addMethod("validUtf8", function(value, element){
    var myRe = /[A-Z,1-9]+$/;
    var myArray = myRe.test(value);
    return myArray;
}, "Mã cảnh báo không được chứa ký tự đặc biệt hoặc số hoặc các chữ cái có dấu");

jQuery.validator.addMethod("maxByteCode", function(value, element){
    var utf8 = [];
    for (var i=0; i < value.length; i++) {
        var charcode = value.charCodeAt(i);
        if (charcode < 0x80) utf8.push(charcode);
        else if (charcode < 0x800) {
            utf8.push(0xc0 | (charcode >> 6),
                0x80 | (charcode & 0x3f));
        }
        else if (charcode < 0xd800 || charcode >= 0xe000) {
            utf8.push(0xe0 | (charcode >> 12),
                0x80 | ((charcode>>6) & 0x3f),
                0x80 | (charcode & 0x3f));
        }
        else {
            i++;
            charcode = 0x10000 + (((charcode & 0x3ff)<<10)
                | (str.charCodeAt(i) & 0x3ff));
            utf8.push(0xf0 | (charcode >>18),
                0x80 | ((charcode>>12) & 0x3f),
                0x80 | ((charcode>>6) & 0x3f),
                0x80 | (charcode & 0x3f));
        }
    }
    if(utf8.length > 50){
        return false;
    }
    return true;
}, "Độ dài mã cảnh báo vượt quá giới hạn");

$("#btnsave").click(function () {
    //warningManagerStationValid
    var submit = $("#form_input").valid();
    if(submit==false){
        return;
    }
    var data = $("#stationWarningAdd").select2('val');
    if(data == "-1"){
        $('#stationWarningAdd').select2('open');
        return;
    }

    var $form = $("#form_input");
    var dataParrent = getFormData($form);
    dataParrent.contentWarning = contentWarningAdd.getData();
    var formData  = tableConditionWarning.rows().data();
    var tableDatas = [];

    for(let i =0; i < formData.length ; i++){
        var tmp = {};
        tmp.id = "";
        tmp.warningThresholdId = formData[i].idWarningThreshold;
        tmp.createBy = formData[i].createBy;
        tableDatas.push(tmp);
    }
    dataParrent.dataWarning = tableDatas;
    dataParrent.createBy = username;
    $.ajax({
        headers: {
            'Authorization': token
        },
        "url": apiUrl + "warning-manager-station",
        "method": "POST",
        "contentType": "application/json",
        "data" : JSON.stringify(dataParrent),
        "success": function (response) {
             toastr.success('Thêm mới', response.message);
             show_search();
             $("#btnsave").css("display", "none");
             $("#btnDelete").css("display", "none");
             $("#btnReset").css("display", "none");
             $("#btncancer").css("display", "none");
             $("#btnDonew").attr("disabled", false);
             $("#btnDetail").attr("disabled", true);
            for ( instance in CKEDITOR.instances ){
                CKEDITOR.instances[instance].updateElement();
                CKEDITOR.instances[instance].setData('');
            }
            tableWarningMangerStation.ajax.reload();
        },
        "error": function (error) {
            console.log(error);
        }
    });

});
function togle_search() {
    $("#box_info").show(150);
    $("#box_info").attr('class', 'col-sm-12');
    $("#box_search").hide(250);
    // $("#box_search").attr('class', 'col-sm-5');
}
$("#btnDetail").click(function () {
    $("#btnDelete").prop( "disabled", false );
    var rowDt = tableWarningMangerStation.rows('.selected').data()[0];


    //console.log(rowDt);
    $("#id").val(rowDt.id);
    //$('#action_info').val(1);
    togle_search();
    $("#btnsave").css("display", "none");
    $("#btnDelete").css("display", "inline");
    $("#btnResetUpdate").css("display", "inline");
    $("#btncancer").css("display", "inline");
    $("#btnDonew").attr("disabled", true);
    $('.nav-tabs a[href="#menu2"]').tab('show');
    $("#btnsaveEdit").css("display", "inline");
    $("#btnResetNew").css("display", "none");
    warningManagerStationValid.resetForm();

    var newOption = new Option(rowDt.stationName, rowDt.stationId, true, true);
    $('#stationWarningAdd').empty();
    $('#stationWarningAdd').append(newOption).trigger('change');
    $("#stationWarningAdd").prop( "disabled", true );
    $('#id').val(rowDt.id);
     $("#codeWarningAdd").val(rowDt.warningCode);
    $("#nameWarningAdd").val(rowDt.warningName);
    $("#nameWarningAdd").val(rowDt.warningName);
    $("#iconWarningAdd").val(rowDt.icon).trigger('change');
    $("#colorWarningAdd").val(rowDt.color);
    $("#descriptionWarningAdd").val(rowDt.description);

    // for ( instance in CKEDITOR.instances ){
    //     CKEDITOR.instances[instance].updateElement();
    //     CKEDITOR.instances[instance].setData('');
    // }

    // CKEDITOR.instances.contentWarningAdd.updateElement();
    // CKEDITOR.instances.contentWarningAdd.setData('');
    CKEDITOR.instances.contentWarningAdd.updateElement();
    CKEDITOR.instances.contentWarningAdd.setData(rowDt.content);

    //validatorhorizontal.resetForm();
    showDetailData(rowDt);

});
function showDetailData(rowDt){
    //lấy ra yếu tố cài đặt cho select yếu tố
    $.ajax({
        headers: {
            'Authorization': token
        },
        "url": apiUrl + "warning-manager-station/get-warning-manager-detail?warningManageStationId="+rowDt.id,
        "method": "GET",
        "contentType": "application/json",
        "success": function (response) {
            console.log(response);
            for(let i = 0 ; i <response.length ; i++){
                tableConditionWarning.row.add(response[i]).draw(true);
            }
        },
        "error": function (error) {
            toastr.error('Lỗi', error.responseJSON.message);
        }
    });
}
$("#btnsaveEdit").click(function(){
    var submit = $("#form_input").valid();
    if(submit==false){
        return;
    }
    var $form = $("#form_input");
    var dataParrent = getFormData($form);
    dataParrent.contentWarning = contentWarningAdd.getData();
    var formData  = tableConditionWarning.rows().data();
    var tableDatas = [];

    for(let i =0; i < formData.length ; i++){
        var tmp = {};
        tmp.id = "";
        tmp.warningThresholdId = formData[i].idWarningThreshold;
        tmp.createBy = formData[i].createBy;
        tableDatas.push(tmp);
    }
    dataParrent.dataWarning = tableDatas;
    dataParrent.createBy = username;
    dataParrent.stationWarning = $("#stationWarningAdd").val();

    $.ajax({
        headers: {
            'Authorization': token
        },
        "url": apiUrl + "warning-manager-station",
        "method": "PUT",
        "contentType": "application/json",
        "data" : JSON.stringify(dataParrent),
        "success": function (response) {
             toastr.success('Sửa', response.message);
             show_search();
             $("#btnsave").css("display", "none");
             $("#btnDelete").css("display", "none");
             $("#btnReset").css("display", "none");
             $("#btncancer").css("display", "none");
             $("#btnDonew").attr("disabled", false);
             $("#btnDetail").attr("disabled", true);
             tableWarningMangerStation.ajax.reload();
            for ( instance in CKEDITOR.instances ){
                CKEDITOR.instances[instance].updateElement();
                CKEDITOR.instances[instance].setData('');
            }
        },
        "error": function (error) {
            toastr.error('Sửa', error.responseJSON.message);
        }
    });
});
$("#btnDelete").click(function () {
    if(confirm("Bạn có muốn xóa bản ghi")){

    } else {
        return;
    }
    $.ajax({
        headers: {
            'Authorization': token
        },
        "url": apiUrl + "warning-manager-station?id="+$("#id").val(),
        "method": "DELETE",
        "contentType": "application/json",
        "success": function (response) {
            toastr.success('Thành công', response.message);
            $("#btnsave").css("display", "none");
            $("#btnDelete").css("display", "none");
            $("#btnReset").css("display", "none");
            $("#btncancer").css("display", "none");
            $("#btnDonew").attr("disabled", false);
            $("#btnDetail").prop("disabled",true);
            show_search();
            tableWarningMangerStation.ajax.reload();
            for ( instance in CKEDITOR.instances ){
                CKEDITOR.instances[instance].updateElement();
                CKEDITOR.instances[instance].setData('');
            }
        },
        "error": function (error) {
            toastr.error('Lỗi', error.responseJSON.message);

        }
    });
});
$('#btncancer').click(function () {
    // disabled_right();
    $("#id").val("");
    $("#btnsave").css("display", "none");
    $("#btnDelete").css("display", "none");
    $("#btnResetUpdate").css("display", "none");
    $("#btncancer").css("display", "none");
    $("#btnDonew").attr("disabled", true);
    warningManagerStationValid.resetForm();
    var rowDt = tableWarningMangerStation.rows('.selected').data()[0];
    show_search();
    if(rowDt!=undefined){
        $("#btnDonew").attr("disabled", true);
    } else{
        $("#btnDonew").attr("disabled", false);
    }
});
