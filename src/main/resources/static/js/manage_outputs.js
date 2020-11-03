$( function() {
    getStations();
});

function getStations() {
    $.ajax({
        headers: {
            'Authorization': token
        },
        url: apiUrl + "management-of-outputs/get_list_stations",
        data: "username=" + username,
        method: "GET",
        contentType: "application/json",
        success: function (data) {
            console.log("getStations data ===" + data);
            $("#stations_search").select2({data: data});
        }
    });
}

function onchage_stations_select() {
    $('#parameter_search').empty();
    let  station_id = $('#stations_search').val();
    getParameter_by_stationId(station_id);
}

function getParameter_by_stationId(station_id) {
    $.ajax({
        headers: {
            'Authorization': token
        },
        url: apiUrl + "management-of-outputs/getList_parameter_byStationId",
        data: "stationId=" + station_id,
        method: "GET",
        contentType: "application/json",
        success: function (data) {
            console.log("parameter_search data ===" + data);
            $("#parameter_search").select2({data: data});
        }
    });
}

$('#btnSearch').on('click', function (e) {
    if(validateSearch()){
        get_sqlStatenment();
    }
});

function validateSearch(){
    // var patt = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    // if ($('#start_date').val() != '' && !patt.test($.trim($('#start_date').val()))) {
    //     toastr.error('Điều kiện tìm kiếm Từ ngày không đúng định dạng dd/mm/yyyy');
    //     $('#start_date').focus();
    //     return;
    // }
    //
    // var patt = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    // if ($('#end_date').val() != '' && !patt.test($.trim($('#end_date').val()))) {
    //     toastr.error('Điều kiện tìm kiếm đến ngày không đúng định dạng dd/mm/yyyy');
    //     $('#end_date').focus();
    //     return;
    // }
    return true;
}
function get_sqlStatenment() {
    let stationId = $('#stations_search').val();
    let parameterTypeId = $('#parameter_search').val();
    let fromDate = $('#start_date').val();
    let toDate = $('#end_date').val();
    $.ajax({
        headers: {
            'Authorization': token
        },
        url: apiUrl + "management-of-outputs/get_sqlStatement",
        data: "stationId=" + stationId +"&parameterTypeId="+parameterTypeId +"&fromDate="+fromDate+"&toDate="+toDate,
        method: "GET",
        contentType: "application/json",
        success: function (data) {
            console.log("get_sqlStatenment data ===" + data);
            if(data.indexof('false')==0){
                toastr.error('Có lỗi xảy ra + ' + data);
                return;
            }else{
                get_outputs_grid(data);
            }
        }
    });
}

function get_outputs_grid() {
    let objSearch = {
        s_station_type: '',
        s_stations_no: '',
        s_stations: '',
        s_valuetype_id: '',
        s_reponse: '',
        s_timereponse: '',
        s_area: '',
        s_warning: '',
        s_user_create: '',
    };
    $('#tableDataView thead th').each(function () {
        var title = $(this).text();
        var dataId = $(this).attr("data-id");
        var is_select = $(this).attr("is_select");
        if (dataId != null && dataId != undefined) {
            if (is_select == null || is_select == undefined) {
                $(this).html('<p style="text-align: center">' + title + '</p><input  id="' + dataId + '" class="table-data-input-search" type="text"  placeholder="Tìm kiếm ' + title + '" autocomplete="off" />');
            } else if (is_select == 1) {
                $(this).html('<p style="text-align: center">Ngày tạo</p>');
            } else if (is_select == 2) {
                $(this).html('<select class="select_table"  id="' + dataId + '"><option value="">Không chọn</option><option  value="1">Hoạt động</option><option value="0">Không hoạt động</option></select>');
            }else{
                $(this).html('<select  class="select_table" id="' + dataId + '"><option value="">Không chọn</option><option value="1">Nam</option><option value="0">Nữ</option></select>');
            }
        }
    });
    var indexRowDt = 0;
    var draw = 0;
    var table = $('#tableDataView').DataTable({
        columnDefs: [{
            orderable: false,
            className: 'select-checkbox',
            targets: 0,

        }],
        select: {
            style: 'os',
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
        "ordering": true,
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
            {"data": ""},
            {"data": "indexCount", "render": $.fn.dataTable.render.text()},
            {"data": "objectTypeShortName", "render": $.fn.dataTable.render.text()},
            {"data": "stationNo", "visible": false},
            {"data": "stationName", "render": $.fn.dataTable.render.text()},
            {"data": "parameterTypeName", "render": $.fn.dataTable.render.text()},
            {"data": "PrValue", "render": $.fn.dataTable.render.text()},
            {"data": "prTimestamp", "render": $.fn.dataTable.render.text()},
            {"data": "siteName", "visible": false},
            {"data": "PrWarning", "render": $.fn.dataTable.render.text()},
            {"data": "PrCreatedUser", "render": $.fn.dataTable.render.text()},
        ],
        initComplete: function () {
            // Apply the search
            this.api().columns().every(function () {
                var that = this;
                $('.table-data-input-search').on('keyup change clear', function () {
                    var that = this;
                    $('.table-data-input-search').on('keyup', function () {
                        oldValue = this.___value___;
                        this.___value___ = this.value;
                        if (oldValue == this.___value___) return;
                        keyUpTime = new Date().getTime();
                        let id = $(this).attr('id');
                        objSearch[id] = this.value;
                        setTimeout(function () {
                            if (new Date().getTime() - keyUpTime > 300) {
                                table.search(objSearch).draw();
                                keyUpTime = new Date().getTime();
                            }
                            return;
                        }, 300);

                    });
                });
            });
            $('.select_table').on('change', function () {
                let id = $(this).attr("id");
                objSearch[id] = this.value;
                table.search(JSON.stringify(objSearch)).draw();
            });
        },
        "ajax": {
            headers: {
                'Authorization': token
            },
            "url": apiUrl + "management-of-outputs/users_info_getlist",
            "method": "POST",
            "contentType": "application/json",
            "data": function (d) {
                console.log(d);
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
                        "objectTypeShortName": responseJson.content[i].objectTypeShortName,
                        "stationNo": responseJson.content[i].stationNo,
                        "stationName": responseJson.content[i].stationName,
                        "parameterTypeName": responseJson.content[i].parameterTypeName,
                        "PrValue": responseJson.content[i].PrValue,
                        "prTimestamp": responseJson.content[i].prTimestamp,
                        "siteName": responseJson.content[i].siteName,
                        "PrWarning": responseJson.content[i].PrWarning,
                        "PrCreatedUser": responseJson.content[i].PrCreatedUser,
                    })
                }

                return JSON.stringify(dataRes);
            }
        }
    });
}