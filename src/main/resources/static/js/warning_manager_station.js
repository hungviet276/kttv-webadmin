//constant
var icons = [
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
        {"data": "stationName", "render": $.fn.dataTable.render.text()},
        {"data": "warningCode", "render": $.fn.dataTable.render.text()},
        {"data": "warningName", "render": $.fn.dataTable.render.text()},
        {"data": "icon", "render": $.fn.dataTable.render.text()},
        {"data": "createDate", "render": $.fn.dataTable.render.text()}
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
                    "createDate": responseJson.content[i].createDate
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

var contentWarningAdd = '';
$(document).ready(function() {
    contentWarningAdd = CKEDITOR.replace('contentWarningAdd');
});
//end form add

$('#thresholdWarning').select2({

});
$('#cancelWarning').select2({

});

$('#btncancer').click(function () {
    // disabled_right();
    $("#id").val("");
    $("#btnsave").css("display", "none");
    $("#btnDelete").css("display", "none");
    $("#btnResetUpdate").css("display", "none");
    $("#btncancer").css("display", "none");
    $("#btnDonew").attr("disabled", false);
    // validator.resetForm();
    // validatorhorizontal.resetForm();
    //var rowDt = tableConfigValueType.rows('.selected').data()[0];
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

    $("#id").val("");
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
    $("#btnDelete").prop( "disabled", true );
    $("#btnsaveEdit").hide();
    $("#btnResetUpdate").hide();
    validator.resetForm();
    validWarningThreshold.resetForm();
    tableWarningThreshold
         .clear()
         .draw();
});

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
$('#tableValueTypeConfig thead th').each(function () {
    var title = $(this).text();
    var dataId = $(this).attr("data-id");
    if (dataId != null && dataId != undefined) {
        $(this).html('<input class="table-data-input-search" id="'+ dataId +'" type="text" placeholder="Search ' + title + '" autocomplete="off"/>');
    }
});

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
// table thêm yếu tố
function genSelectThreshold(data, row, functionCallChange){
    let dataSelect = [
            {value : "1",text :"1", selected : ""}
            ,{value : "2",text :"2", selected : ""}
            ,{value : "3",text :"3", selected : ""}
            ,{value : "4",text :"4", selected : ""}
            ,{value : "5",text :"5", selected : ""}
        ];
    for(let i =0; i< dataSelect.length; i++){
        if(dataSelect[i].value==data){
            dataSelect[i].selected="selected";
        }
    }
    let strError = " style=\" width: 230px;\"";
    let messageError = "<label><\label>";
    if(row.thresholdId==row.thresholdCancelID){
        strError = " style=\" border-color: red; width: 230px;\"";
        messageError = "<label id=\"threshold2-error\" class=\"error\" for=\"threshold2\">Giá trị cảnh báo và hủy cảnh báo phải khác nhau</label>";
    }

    var str = `<select name="thresholdCancelID" id="thresholdCancelID" onchange="`+functionCallChange+`('`+row.warningThresholdCode+`',this)"`+strError+`>`

    for(let i =0; i< dataSelect.length ; i++){
        let strTmp = `<option value="`+dataSelect[i].value+`" `+dataSelect[i].selected+`>`+dataSelect[i].text+`</option>`;
        str+=strTmp;
    }
    str+=`</select>`;
    str+=messageError;
    return str;

}
var tableWarningThreshold = $('#tableWarningThreshold').DataTable({
    columns: [
        {"data": "warningThresholdCode"},
        {"data": "idParameter"},
        {"data": "nameParameter"},
        {
            data: "thresholdId",
            render: function ( data, type, row, meta ) {
                let functionCallChange = "changeThresholdId";
                return genSelectThreshold(data,row, functionCallChange);
            }
        },

        {
            data: "thresholdCancelID",
            render: function ( data, type, row, meta ) {
                let functionCallChange = "changeThresholdCancelID";
                return genSelectThreshold(data,row, functionCallChange);
            }

        },
        {
            data: "status",
            render: function ( data, type, row, meta ) {
                let valueSelect ="";
                let valueUnSelect ="";
                if(data==1){
                    valueSelect = "Hoạt động";
                    valueUnSelect = "Dừng hoạt động";
                } else{
                    valueSelect = "Dừng hoạt động";
                    valueUnSelect = "Hoạt động";
                }
                let dataUnselect = 0;
                if(data == 0){
                    dataUnselect = 1;
                }
                return `
                    <select name="status" id="status" onchange="changeStatus('`+row.warningThresholdCode+`')">
                        <option value="`+data+`" selected>`+valueSelect+`</option>
                        <option value="`+dataUnselect+`">`+valueUnSelect+`</option>
                    </select>
                `;
            }
        },
        {
            data: null,
            className: "center",
            defaultContent: '<a href="" class="editor_remove">Delete</a>'
        }
    ]
});
function changeStatus(obj){
    let dataTable = tableWarningThreshold.rows().data();
    for(let i =0 ; i< dataTable.length ; i++){
        if(dataTable[i].warningThresholdCode == obj){
            if(dataTable[i].status == "1"){
                dataTable[i].status = "0"
            }else{
                dataTable[i].status = "1"
            }
        }
    }
    tableWarningThreshold
        .clear()
        .draw();
     for(let i =0 ; i< dataTable.length ; i++){
         tableWarningThreshold.row.add(dataTable[i]).draw( true );
     }
}
function changeThresholdCancelID(obj,data){
    let dataTable = tableWarningThreshold.rows().data();
    for(let i =0 ; i< dataTable.length ; i++){
        if(dataTable[i].warningThresholdCode == obj){
            dataTable[i].thresholdCancelID = data.value;
        }
    }
    tableWarningThreshold
        .clear()
        .draw();
    for(let i =0 ; i< dataTable.length ; i++){
        tableWarningThreshold.row.add(dataTable[i]).draw( true );
    }
}
function changeThresholdId(obj,data){
    let dataTable = tableWarningThreshold.rows().data();
    for(let i =0 ; i< dataTable.length ; i++){
        if(dataTable[i].warningThresholdCode == obj){
            dataTable[i].thresholdId = data.value;
        }
    }
    tableWarningThreshold
        .clear()
        .draw();
    for(let i =0 ; i< dataTable.length ; i++){
        tableWarningThreshold.row.add(dataTable[i]).draw( true );
    }
}
tableWarningThreshold.on('click', 'a.editor_remove', function (e) {
    e.preventDefault();
    var table = $('#tableWarningThreshold').DataTable();
    table
        .row( $(this).parents('tr') )
        .remove().draw();
});
$("#btnsaveStationValueType").click(function () {

    let submit = $("#formWarningThreshold").valid();
    if(submit){
        validWarningThreshold.resetForm();
    } else{
        return;
    }
    var codeCheck= $("#thresholdCode").val();
    $.ajax({
        headers: {
            'Authorization': token
        },
        "url": apiUrl + "warning-threshold-station/duplicate-code-threshold-warning?code="+codeCheck,
        "method": "GET",
        "contentType": "application/json",
        "success": function (response) {
            if(response.status == 0){
                // kiểm tra xem nếu đã tồn tại trong bảng rồi thì thông báo ra không thêm nữa
                var dataTableWarningThreshold = {};
                dataTableWarningThreshold.idParameter=$("#value-type-station").val();
                dataTableWarningThreshold.nameParameter=$("#value-type-station").select2('val');
                dataTableWarningThreshold.warningThresholdCode=$("#thresholdCode").val();
                dataTableWarningThreshold.thresholdId = $("#thresholdWarning").val();
                dataTableWarningThreshold.thresholdCancelID = $("#cancelWarning").val();
                dataTableWarningThreshold.status = $("#status").val();
                var formData  = tableWarningThreshold.rows().data();
                let insert = true;
                $.each( formData, function( key, value ) {
                    if(value.warningThresholdCode==dataTableWarningThreshold.warningThresholdCode){
                        insert = false;
                    }
                });
                if(insert == false){
                    toastr.error('Lỗi', "Bản ghi đã tồn tại");
                    insert = true;
                    return;
                }
                tableWarningThreshold.row.add(dataTableWarningThreshold).draw( true );

            }
            else{
                toastr.error('Lỗi', response.message);
            }
        },
        "error": function (error) {
            toastr.error('Lỗi', error.responseJSON.message);
        }
    });
    // var dataStation = $('#stationSpatial').select2('data');
    // var dataValueType = $('#valueTypeSpatial').select2('data');
    // if(dataStation[0]==null || dataStation[0] == undefined || dataValueType[0]== null || dataValueType[0] == undefined){
    //     return;
    // }
    // var dataValueTypeText = dataValueType[0].text;
    // var dataValueTypeTexts = dataValueTypeText.split("-");
    // if(submit == false) {
    //     if (dataStation.length == 0) {
    //         $('#stationSpatial').select2('open');
    //         return;
    //     }
    //     if (dataValueType.length == 0) {
    //         $('#valueTypeSpatial').select2('open');
    //         return;
    //     }
    //     return;
    // }

    // $.ajax({
    //     headers: {
    //         'Authorization': token
    //     },
    //     "url": apiUrl + "config-value-type/get-station-value-type-spatial?idStation="+ dataStation[0].id+"&idValueType="+dataValueType[0].id+"&code="+dataValueTypeTexts[2],
    //     "method": "GET",
    //     "contentType": "application/json",
    //     "success": function (response) {
    //         // kiểm tra xem nếu đã tồn tại trong bảng rồi thì thông báo ra không thêm nữa
    //         var formData  = tableStationSpatial.rows().data();
    //         let insert = true;
    //         $.each( formData, function( key, value ) {
    //             if(dataStation[0].id == value.stationId && dataValueType[0].id == value.valueTypeId&& dataValueTypeTexts[2]==value.code){
    //                 insert = false;
    //             }
    //         });
    //         if(insert == false){
    //             toastr.warning('Lỗi', "Bản ghi đã tồn tại");
    //             return;
    //         }
    //         tableStationSpatial.row.add(response).draw( true );
    //
    //     },
    //     "error": function (error) {
    //         toastr.error('Lỗi', error.responseJSON.message);
    //     }
    // });

});
// Delete a record
// tableStationSpatial.on('click', 'a.editor_remove', function (e) {
//     e.preventDefault();
//     var table = $('#tableStationSpatial').DataTable();
//     table
//         .row( $(this).parents('tr') )
//         .remove().draw();
// });

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
    console.log("trước khi chạy qua")
    if($("#id").val()==""||$("#id").val()== null || $("#id").val()==undefined){

    } else {
        return;
    }
    console.log("sau khi chạy qua");
    // console.log("aaaaaa");
    // console.log($("#id").val())
    tableWarningThreshold
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
            //
            // var rowDt = tableConfigValueType.rows('.selected').data()[0];
            // if(rowDt!=""&& rowDt!=null&& rowDt!=undefined)
            //     showDetailData(rowDt);

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

    tableWarningThreshold.clear()
        .draw();
});
var validWarningThreshold = $("#formWarningThreshold").validate({
    rules : {
        thresholdCode : {
            required : true,
            maxlength : 15
        },
        thresholdWarning : {
            required : true,
            validEmpty : true,
            validEqual : "#cancelWarning"
        },
        cancelWarning : {
            required : true,
            validEmpty : true
        },
        status : {
            required : true
        }
    },
    messages: {
        thresholdCode: {
            required: "Hãy nhập mã cảnh báo",
            maxlength  : "Code vượt quá độ dàin 15 ký tự"
        },
        thresholdWarning: {
            required: "Hãy chọn mức cảnh báo",
            validEmpty : "Hãy chọn mức cảnh báo",
            validEqual :"Mức cảnh báo và mức hủy cảnh báo không được giống nhau"
        },
        cancelWarning : {
            required: "Hãy chọn mức hủy cảnh báo",
            validEmpty : "Hãy chọn mức hủy cảnh báo"
        },
        status : {
            required : "Hãy chọn trạng thái"
        }
    },
    errorPlacement : function(error, element) {
        error.insertAfter(element.parents("div.insertError"));
    }
});
$.validator.addMethod("validEmpty",function(value,element){
    if(value=="-1") return false;
    return true;
},"Please input a reason");
jQuery.validator.addMethod('validEqual', function (value, element, param) {
    return  value != $(param).val();
}, 'Invalid value');
var validator = $("#form_input").validate({
    rules : {
        threshold1 : {
            required : true,
            min : 0,
            max : 1000000000000
        },
        threshold2 : {
            required : true,
            min : 0,
            max : 1000000000000,
            validThreshold1: "#threshold1"
        },
        threshold3 : {
            required : true,
            min : 0,
            max : 1000000000000,
            validThreshold2 : "#threshold2"
        },
        threshold4 : {
            required : true,
            min : 0,
            max : 1000000000000,
            validThreshold3 : "#threshold3",
        },
        threshold5 : {
            required : true,
            min : 0,
            max : 1000000000000,
            validThreshold4 : "#threshold4",
        },
        station_add : {
            required : true,
        },
        value_type_station : {
            required : true
        },

    },
    messages: {
        threshold1: {
            required: "Bắt buộc nhập ngưỡng cảnh báo",
            min : "Giá trị không được âm",
            max : "Giá trị nhập phải nhỏ hơn 1000000000000",
            number : "Giá trị phải là số"
        },
        threshold2: {
            required: "Bắt buộc nhập ngưỡng cảnh báo",
            min : "Giá trị không được âm",
            max : "Giá trị nhập phải nhỏ hơn 1000000000000",
            number : "Giá trị phải là số",
            validThreshold1 : "Ngưỡng cảnh báo 2 phải lớn hơn ngưỡng cảnh báo 1"
        },
        threshold3 : {
            required: "Bắt buộc nhập ngưỡng cảnh báo",
            min : "Giá trị không được âm",
            max : "Giá trị nhập phải nhỏ hơn 1000000000000",
            number : "Giá trị phải là số",
            validThreshold2 : "Ngưỡng cảnh báo 3 phải lớn hơn ngưỡng cảnh báo 2"
        },
        threshold4 : {
            required: "Bắt buộc nhập ngưỡng cảnh báo",
            min : "Giá trị không được âm",
            max : "Giá trị nhập phải nhỏ hơn 1000000000000",
            number : "Giá trị phải là số",
            validThreshold3 : "Ngưỡng cảnh báo 4 phải lớn hơn ngưỡng cảnh báo 3"
        },
        threshold5 : {
            required: "Bắt buộc nhập ngưỡng cảnh báo",
            min : "Giá trị không được âm",
            max : "Giá trị nhập phải nhỏ hơn 1000000000000",
            number : "Giá trị phải là số",
            validThreshold4 :"Ngưỡng cảnh báo 5 phải lớn hơn ngưỡng cảnh báo 4"
        },
        station_add : {
            required: "Bắt buộc nhập trạm",
        },
        value_type_station : {
            required: "Bắt buộc chọn yếu tố",
        }
    },
    errorPlacement : function(error, element) {
        error.insertAfter(element.parents("div.insertError"));
    }
});
jQuery.validator.addMethod('validThreshold4', function (value, element, param) {
    return this.optional(element) || parseFloat(value) > parseFloat($(param).val());
}, 'Invalid value');

jQuery.validator.addMethod('validThreshold3', function (value, element, param) {
    return this.optional(element) || parseFloat(value) > parseFloat($(param).val());
}, 'Invalid value');

jQuery.validator.addMethod('validThreshold2', function (value, element, param) {
    return this.optional(element) || parseFloat(value) > parseFloat($(param).val());
}, 'Invalid value');
jQuery.validator.addMethod('validThreshold1', function (value, element, param) {
    return this.optional(element) || parseFloat(value) > parseFloat($(param).val());
}, 'Invalid value');

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
     // lấy dữ liệu từ input

    var $form = $("#form_input");
    var dataParrent = getFormData($form);

    let dataAll  = tableWarningThreshold.rows().data();

    let dataThresholdWarning = true;
    //console.log(dataAll);
    for(let i =0; i< dataAll.length ; i++){
        if(dataAll[i].thresholdId == dataAll[i].thresholdCancelID){
            dataThresholdWarning = false;
            break;
        }
    }
    if(!dataThresholdWarning){
        toastr.error('Lỗi',"Cấu hình mức cảnh báo chưa hợp lệ");
        return;
    }
    let dataSend = [];
    for(let i =0; i< dataAll.length ; i++){
        let tmp ={};
        tmp.idParameter = dataAll[i].idParameter;
        tmp.status = dataAll[i].status;
        tmp.thresholdCancelID = dataAll[i].thresholdCancelID;
        tmp.thresholdId = dataAll[i].thresholdId;
        tmp.warningThresholdCode = dataAll[i].warningThresholdCode;
        dataSend.push(tmp);
    }

    dataParrent.dataThreshold = dataSend;
    //console.log(dataParrent);
    $.ajax({
        headers: {
            'Authorization': token
        },
        "url": apiUrl + "warning-threshold-station",
        "method": "POST",
        "contentType": "application/json",
        "data" : JSON.stringify(dataParrent),
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
           console.log(error);
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

$("#btnDetail").click(function () {
    $("#btnDelete").prop( "disabled", false );
    var rowDt = tableConfigValueType.rows('.selected').data()[0];
    //console.log(rowDt);
    $("#id").val(rowDt.id);
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
    $("#station_add").empty();
    var newOption = new Option(rowDt.stationName, rowDt.stationId, true, true);
    $('#station_add').empty();
    $('#station_add').append(newOption).trigger('change');
    //validatorhorizontal.resetForm();
    showDetailData(rowDt);

});

function showDetailData(rowDt){

    $('#station_add').prop( "disabled", true );
    $('#value-type-station').prop( "disabled", true );
    $("#id").val(rowDt.id);
    $("#threshold1").val(rowDt.valueLevel1);
    $("#threshold2").val(rowDt.valueLevel2);
    $("#threshold3").val(rowDt.valueLevel3);
    $("#threshold4").val(rowDt.valueLevel4);
    $("#threshold5").val(rowDt.valueLevel5);
    //lấy ra yếu tố cài đặt cho select yếu tố
    $.ajax({
        headers: {
            'Authorization': token
        },
        "url": apiUrl + "warning-threshold-station/get-parameter-select?id="+rowDt.id,
        "method": "GET",
        "contentType": "application/json",
        "success": function (response) {
                $('#value-type-station').empty();
                var newOption = new Option(response.text, response.id, true, true);
                $('#value-type-station').append(newOption).trigger('change');
                //call hàm reload table ở đây để không bị lỗi
            $.ajax({
                headers: {
                    'Authorization': token
                },
                "url": apiUrl + "warning-threshold-station/warning-thresholds?thresholdValueId="+rowDt.id,
                "method": "GET",
                "contentType": "application/json",
                "success": function (response) {
                    for(let i =0; i< response.length; i++){
                        tableWarningThreshold.row.add(response[i]).draw(true);
                    }
                },
                "error": function (error) {
                    toastr.error('Lỗi', error.responseJSON.message);
                }
            });
        },
        "error": function (error) {
            toastr.error('Lỗi', error.responseJSON.message);
        }
    });
}
// $("#btnsaveEdit").click(function(){
//     var submit = $("#form_input").valid();
//     if(submit == false){
//         var dataStation = $('#station_add').select2('data');
//         var dataValueType = $('#value-type-station').select2('data');
//         if(dataStation.length == 0){
//             $('#station_add').select2('open');
//             return;
//         }
//         if(dataValueType.length == 0){
//             $('#value-type-station').select2('open');
//             return;
//         }
//         validator.focusInvalid();
//         return;
//     }
//     var $form = $("#form_input");
//     var dataParrent = getFormData($form);
//
//     let dataAll  = tableWarningThreshold.rows().data();
//
//     let dataThresholdWarning = true;
//     //console.log(dataAll);
//     for(let i =0; i< dataAll.length ; i++){
//         if(dataAll[i].thresholdId == dataAll[i].thresholdCancelID){
//             dataThresholdWarning = false;
//             break;
//         }
//     }
//     if(!dataThresholdWarning){
//         toastr.error('Lỗi',"Cấu hình mức cảnh báo chưa hợp lệ");
//         return;
//     }
//
//     let dataSend = [];
//     for(let i =0; i< dataAll.length ; i++){
//         let tmp ={};
//         tmp.idParameter = dataAll[i].idParameter;
//         tmp.status = dataAll[i].status;
//         tmp.thresholdCancelID = dataAll[i].thresholdCancelID;
//         tmp.thresholdId = dataAll[i].thresholdId;
//         tmp.warningThresholdCode = dataAll[i].warningThresholdCode;
//         dataSend.push(tmp);
//     }
//
//     dataParrent.dataThreshold = dataSend;
//     $.ajax({
//         headers: {
//             'Authorization': token
//         },
//         "url": apiUrl + "warning-threshold-station",
//         "method": "PUT",
//         "contentType": "application/json",
//         "data" : JSON.stringify(dataParrent),
//         "success": function (response) {
//             toastr.success('Thành công', response.message);
//             $("#btnsave").css("display", "none");
//             $("#btnDelete").css("display", "none");
//             $("#btnReset").css("display", "none");
//             $("#btncancer").css("display", "none");
//             $("#btnDonew").attr("disabled", false);
//             show_search();
//             tableConfigValueType.ajax.reload();
//             $("#btnDetail").prop( "disabled", true );
//             $("#btnDonew").prop("disabled", false);
//         },
//         "error": function (error) {
//             alert("lỗi to đùng");
//             toastr.error('Lỗi', error.responseJSON.message);
//         }
//     });
// });
// $("#btnDelete").click(function () {
//     if(confirm("Bạn có muốn xóa bản ghi")){
//
//     } else {
//         return;
//     }
//     $.ajax({
//         headers: {
//             'Authorization': token
//         },
//         "url": apiUrl + "warning-threshold-station?id="+$("#id").val(),
//         "method": "DELETE",
//         "contentType": "application/json",
//         "success": function (response) {
//             toastr.success('Thành công', response.message);
//             $("#btnsave").css("display", "none");
//             $("#btnDelete").css("display", "none");
//             $("#btnReset").css("display", "none");
//             $("#btncancer").css("display", "none");
//             $("#btnDonew").attr("disabled", false);
//             $("#btnDetail").prop("disabled",true);
//             show_search();
//             tableConfigValueType.ajax.reload();
//         },
//         "error": function (error) {
//             toastr.error('Lỗi', error.responseJSON.message);
//
//         }
//     });
// });
// $('#thresholdWarning').on('select2:opening', function (e) {
//     var dataStation = $('#station_add').select2('data');
//     if(dataStation.length == 0){
//         $( "#station_add" ).focus();
//         $('#station_add').select2('open');
//         toastr.error('Lỗi',"Chưa chọn trạm");
//         return false;
//     }
//     var dataValueType = $('#value-type-station').select2('data');
//     if(dataValueType.length == 0){
//         $( "#value-type-station" ).focus();
//         $('#value-type-station').select2('open');
//         toastr.error('Lỗi',"Chưa chọn yếu tố cho trạm");
//         return false;
//     }
// });
// $('#cancelWarning').on('select2:opening', function (e) {
//     var dataStation = $('#station_add').select2('data');
//     if(dataStation.length == 0){
//         $( "#station_add" ).focus();
//         $('#station_add').select2('open');
//         toastr.error('Lỗi',"Chưa chọn trạm");
//         return false;
//     }
//     var dataValueType = $('#value-type-station').select2('data');
//     if(dataValueType.length == 0){
//         $( "#value-type-station" ).focus();
//         $('#value-type-station').select2('open');
//         toastr.error('Lỗi',"Chưa chọn yếu tố cho trạm");
//         return false;
//     }
// });
// $('#valueTypeSpatial').on('select2:opening', function (e) {
//     var dataStation = $('#station_add').select2('data');
//     if(dataStation.length == 0){
//         $( "#station_add" ).focus();
//         $('#station_add').select2('open');
//         toastr.error('Lỗi',"hãy chọn trạm trước");
//         return false;
//     }
//     var dataValueType = $('#value-type-station').select2('data');
//     if(dataValueType.length == 0){
//         $( "#value-type-station" ).focus();
//         $('#value-type-station').select2('open');
//         toastr.error('Lỗi',"hãy chọn yếu tố trước");
//         return false;
//     }
// });
// $("#btnResetNew").click(function(){
//     $("#form_input").get(0).reset();
//     $('#station_add').val(null).trigger('change');
//     $('#station_add').empty();
//     $('#value-type-station').val(null).trigger('change');
//     $('#value-type-station').empty();
//     $('#stationSpatial').val(null).trigger('change');
//     $('#stationSpatial').empty();
//     $('#valueTypeSpatial').val(null).trigger('change');
//     $('#valueTypeSpatial').empty();
//     validator.resetForm();
//     //validatorhorizontal.resetForm();
//     tableStationSpatial
//         .clear()
//         .draw();
// });
// $("#btnResetUpdate").click(function(){
//     tableStationSpatial
//         .clear()
//         .draw();
//     $('#stationSpatial').val(null).trigger('change');
//     $('#stationSpatial').empty();
//     $('#valueTypeSpatial').val(null).trigger('change');
//     $('#valueTypeSpatial').empty();
//     validator.resetForm();
//     //validatorhorizontal.resetForm();
//     setTimeout(function(){
//         var rowDt = tableConfigValueType.rows('.selected').data()[0];
//         showDetailData(rowDt);
//     }, 200);
//
// });