function show_search() {
    $("#box_info").hide(150);
    $("#box_search").show(250);
    $("#box_search").attr('class', 'col-sm-12');
}
show_search();
function getFormData($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'].trim();
    });

    return indexed_array;
}

$("#startDate").keyup(function () {
    $("#startDate").val("")
});
$("#endDate").keyup(function () {
    $("#endDate").val("")
});

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
    } else{
        day = dayTmp;
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
        return data.text;
    },
    ajax: {
        headers: {
            'Authorization': token
        },
        url: apiUrl + "station/station-select-water-level",
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


// table search
let objSearch = {
    s_id: '',
    s_ts_id: '',
    s_value: '',
    s_status: '',
    s_manual: '',
    s_warning: '',
    s_create_user : '',
    s_station_id : '',
    start_date : '',
    end_date : '',
    s_hours : ''
};
$('#tableWaterLevel thead th').each(function () {
    var title = $(this).text();
    var dataId = $(this).attr("data-id");
    var is_select = $(this).attr("is_select");
    if (dataId != null && dataId != undefined) {
        if(is_select==null || is_select == undefined) {
            $(this).html('<input class="table-data-input-search" id="' + dataId + '" type="text" placeholder="Search ' + title + '" autocomplete="off"/>');
         } else{
            $(this).html(`
                        <select class="select_table" id="`+ dataId +`">
                            <option value="">Hãy chọn</option>
                            <option value=1>Bình thường</option>
                            <option value=2>Nhỏ hơn min</option>
                            <option value=3>Lớn hơn max</option>
                            <option value=4>Vượt mức độ biến đổi theo theo gian</option>
                            <option value=5>Vượt mức độ biến đổi theo không gian</option>
                        </select>
                        `);
        }
    }
});
var tableWaterLevel = $('#tableWaterLevel').DataTable({
    columnDefs: [ {
        orderable: false,
        className: 'select-checkbox',
        targets:   0,
    } ],
    select: {
        selector: 'td:first-child',
        type: 'checkbox'
    },
    "pagingType": "full_numbers",
    "lengthMenu": [
        [10, 25, 50, 100, 150],
        [10, 25, 50, 100, 150]
    ],
    "lengthChange": true,
    "searchDelay": 500,
    "searching": false,
    "ordering": false,
    "info": true,
    "autoWidth": false,
    "scrollX": false,
    "responsive": false,
    "deferLoading": 0,
    language: {
        search: "_INPUT_",
        searchPlaceholder: "Nhập thông tin tìm kiếm",
    },
    //,"visible": false
    "processing": true,
    "serverSide": true,
    "columns": [
        {"data":""},
        {"data": "indexCount", "render": $.fn.dataTable.render.text()},
        {"data": "id", "render": $.fn.dataTable.render.text(),"visible": false},
        {"data": "tsId", "render": $.fn.dataTable.render.text(),"visible": false},
        {"data": "value", "render": $.fn.dataTable.render.text()},
        {"data": "status", "render": $.fn.dataTable.render.text(),"visible": false},
        {"data": "manual", "render": $.fn.dataTable.render.text()},
        {"data": "warning", "render": $.fn.dataTable.render.text()},
        {"data": "createUser", "render": $.fn.dataTable.render.text()},
        {"data": "timestamp", "render": $.fn.dataTable.render.text()},
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
                let dataStation = $('#station').select2('data');
                if( $("#endDate").val()==""){
                    toastr.error('Lỗi', "Hãy chọn ngày kết thúc");
                    $("#endDate").focus();
                    return;
                }
                if( $("#startDate").val()==""){
                    toastr.error('Lỗi', "Hãy chọn ngày bắt đầu");
                    $("#startDate").focus();
                    return;
                }
                objSearch.end_date = $("#endDate").val();
                objSearch.start_date = $("#startDate").val();
                let startDateTmp = stringToDate(objSearch.start_date, 'dd/mm/yyyy','/');
                let endDateTmp = stringToDate(objSearch.end_date, 'dd/mm/yyyy','/');
                if(startDateTmp >= endDateTmp){
                    toastr.error('Lỗi', "Ngày bắt đầu phải nhỏ hơn ngày kết thúc");
                    $("#startDate").focus();
                    return;
                }
                if(dataStation.length == 0){
                    toastr.error('Lỗi', "Hãy chọn trạm");
                    $('#station').select2('open');
                    return;
                }
                objSearch.s_station_id = dataStation[0].id;
                setTimeout(function () {
                    if (new Date().getTime() - keyUpTime > 500) {
                        tableWaterLevel.search(objSearch).draw();
                        keyUpTime = new Date().getTime();
                    }
                    return;
                }, 560);

            });
        });
        $('.select_table').on('keyup change clear', function () {
            let id = $(this).attr("id");
            objSearch[id] = this.value;
            let dataStation = $('#station').select2('data');
            objSearch.end_date = $("#endDate").val();
            objSearch.start_date = $("#startDate").val();
            let startDateTmp = stringToDate(objSearch.start_date, 'dd/mm/yyyy','/');
            let endDateTmp = stringToDate(objSearch.end_date, 'dd/mm/yyyy','/');
            if(startDateTmp >= endDateTmp){
                toastr.error('Lỗi', "Ngày bắt đầu phải nhỏ hơn ngày kết thúc");
                $("#startDate").focus();
                return;
            }
            if(dataStation.length == 0){
                toastr.error('Lỗi', "Hãy chọn trạm");
                $('#station').select2('open');
                return;
            }
            if( $("#endDate").val()==""){
                toastr.error('Lỗi', "Hãy chọn ngày kết thúc");
                $("#endDate").focus();
                return;
            }
            if( $("#startDate").val()==""){
                toastr.error('Lỗi', "Hãy chọn ngày bắt đầu");
                $("#startDate").focus();
                return;
            }
            objSearch.s_station_id = dataStation[0].id;
            tableWaterLevel
                .search(JSON.stringify(objSearch))
                .draw();
        });
    },
    "ajax": {
        headers: {
            'Authorization': token
        },
        "url": apiUrl + "water-level/get-water-level",
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
                dataRes.data.push({
                    "": "",
                    "indexCount": i + 1,
                    "id": responseJson.content[i].id,
                    "tsId": responseJson.content[i].tsId,
                    "value": responseJson.content[i].value,
                    "status": responseJson.content[i].status,
                    "manual": responseJson.content[i].manual,
                    "warning": responseJson.content[i].warning,
                    "createUser": responseJson.content[i].createUser,
                    "timestamp": responseJson.content[i].timestamp
                })
            }

            return JSON.stringify(dataRes);
        }
    }
});


$("#s_warning").select2({});
tableWaterLevel
    .on('select', rowSelect)
    .on('deselect', rowDeselect);
function rowSelect(e, dt, type, indexes) {
    $("#btnExec").prop( "disabled", true );
    $("#btnEdit").prop( "disabled", false );
}
function rowDeselect(e, dt, type, indexes) {
    // var rowDt = tableWaterLevel.rows('.selected').data()
    // console.log(rowDt)
    $("#btnEdit").prop( "disabled", true );
    $("#btnExec").prop( "disabled", false );

}
$("#btnSearch").click(function(){
    for (key in objSearch) {
        if (objSearch.hasOwnProperty(key)) {
            objSearch[key] = null;
        }
    }
    var submit = $("#form_data").valid();
    if(submit==false){
        return;
    }
    let dataStation = $('#station').select2('data');
    objSearch.end_date = $("#endDate").val();
    objSearch.start_date = $("#startDate").val();
    let startDateTmp = stringToDate(objSearch.start_date, 'dd/mm/yyyy','/');
    let endDateTmp = stringToDate(objSearch.end_date, 'dd/mm/yyyy','/');
    if(startDateTmp >= endDateTmp){
        toastr.error('Lỗi', "Ngày bắt đầu phải nhỏ hơn ngày kết thúc");
        $("#startDate").focus();
        return;
    }

    var radios = document.getElementsByName('hour');
    var hours = "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            // do whatever you want with the checked radio
            // alert(radios[i].value);
            hours = radios[i].value;
            // only one radio can be logically checked, don't check the rest
            break;
        }
    }

    if(dataStation.length == 0){
        toastr.error('Lỗi', "Hãy chọn trạm");
        $('#station').select2('open');
        return;
    }
    objSearch.s_station_id = dataStation[0].id;
    objSearch.end_date = $("#endDate").val();
    objSearch.start_date = $("#startDate").val();
    objSearch.s_hours = hours;
    $("#table-data-input-search").val("");
    tableWaterLevel.search(objSearch).draw();

});

var waterLevel = $("#form_data").validate({
    rules : {
        station : {
            required : true
        },
        startDate : {
            required : true
        },
        endDate : {
            required : true
        }
    },
    messages: {
        station: {
            required: "Hãy chọn trạm"
        },
        startDate : {
            required: "Hãy nhập ngày bắt đầu"
        },
        endDate : {
            required: "Hãy nhập ngày kết thúc"
        }
    },
    errorPlacement : function(error, element) {
        error.insertAfter(element.parents("div.insertError"));
    }
});
$("#btnEdit").click(function () {
    var rowDt = tableWaterLevel.rows('.selected').data()[0];
    $("#idWaterLevel").val(rowDt.id);
    $("#valueWaterLevel").val(rowDt.value);
});
$("#updateWaterLevel").click(function(){
    var rowDt = tableWaterLevel.rows('.selected').data()[0];
    let dataStation = $('#station').select2('data');
    let data = {};
    data.id = rowDt.id ;
    data.manual = rowDt.manual ;
    data.status = rowDt.status ;
    data.timestamp = rowDt.timestamp ;
    data.tsId = rowDt.tsId ;
    data.user = username ;
    data.value = parseFloat($("#valueWaterLevel").val());
    data.warning = rowDt.warning ;
    data.stationId= dataStation[0].id;
    $.ajax({
        headers: {
            'Authorization': token
        },
        "url": apiUrl + "water-level/update-water-level",
        "method": "POST",
        "contentType": "application/json",
        "data" : JSON.stringify(data),
        "success": function (response) {
           console.log(response)
        },
        "error": function (error) {
            toastr.error('Sửa', error.responseJSON.message);
        }
    });
});
$("#btnExec").click(function(){

    var submit = $("#form_data").valid();
    if(submit==false){
        return;
    }
    let dataStation = $('#station').select2('data');
    let startDateTmp = stringToDate($("#startDate").val(), 'dd/mm/yyyy','/');
    let endDateTmp = stringToDate($("#endDate").val(), 'dd/mm/yyyy','/');
    if(startDateTmp >= endDateTmp){
        toastr.error('Lỗi', "Ngày bắt đầu phải nhỏ hơn ngày kết thúc");
        $("#startDate").focus();
        return;
    }
    if(dataStation.length == 0){
        toastr.error('Lỗi', "Hãy chọn trạm");
        $('#station').select2('open');
        return;
    }
    var radios = document.getElementsByName('hour');
    var hours = "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            hours = radios[i].value;
            break;
        }
    }
    if(hours == ""){
        toastr.error('Lỗi', "Hãy chọn khoảng thời gian thực hiện");
        return;
    }
    var data = {};
    data.stationId = dataStation[0].id;
    data.startDate = $("#startDate").val();
    data.endDate = $("#endDate").val();
    data.hours = hours;
    $("#table-data-input-search").val("");

    $.ajax({
        headers: {
            'Authorization': token
        },
        "url": apiUrl + "water-level/execute-water-level",
        "method": "POST",
        "contentType": "application/json",
        "data" : JSON.stringify(data),
        "success": function (response) {
            let str = response.message;
            var res =  str.replaceAll(" ", "&nbsp;");
            document.getElementById("innertText").innerHTML = res;

            $('#modelResponse').modal('show');
        },
        "error": function (error) {
            console.log(error)
            toastr.error('Sửa', error.responseJSON.message);
        }
    });
});

$.ajax({
    headers: {
        'Authorization': token
    },
    "url": apiUrl + "water-level/file-out-put-info",
    "method": "GET",
    "contentType": "application/json",
    "success": function (response) {
        console.log(response)
    },
    "error": function (error) {
    }
});