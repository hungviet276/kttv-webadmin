$( function() {
    getStations();

    var d = new Date();
    $('#start_date').daterangepicker({
        singleDatePicker: true,
        autoUpdateInput: false,
        timePicker: true,
        timePicker24Hour: true,
        maxDate:d,
        locale: {
            format: 'Clear'
        }
    });

    $('#start_date').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('DD/MM/YYYY HH:MM:SS'));
    });

    $('#start_date').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });

//------
    $('#end_date').daterangepicker({
        singleDatePicker: true,
        autoUpdateInput: false,
        timePicker: true,
        timePicker24Hour: true,
        maxDate:d,
        locale: {
            format: 'Clear'
        }
    });

    $('#end_date').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('DD/MM/YYYY HH:MM:SS'));
    });

    $('#end_date').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });
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
            console.log(data);
            $("#stations_search").select2({data: data});
        },error: function (error) {
            console.log(error);
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
        },error: function (error) {
            console.log(error);
        }
    });
}

$('#btnSearch').on('click', function (e) {

    var tablePrName = '';
    if(validateSearch()){

        let stationId = $('#stations_search').val();
        let parameterTypeId = $('#parameter_search').val();
        let fromDate = $('#start_date').val();
        let toDate = $('#end_date').val();
        alert(stationId);
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
                if(data.indexOf('false')==0){
                    // toastr.error('Có lỗi xảy ra + ' + data);
                    tablePrName ='';
                }else{
                    tablePrName = data;
                }
                // alert(tablePrName);
                objSearch.s_fromdate = $("#start_date").val();
                objSearch.s_todate = $("#end_date").val();
                objSearch.s_tableproductName =tablePrName;
                table.search(objSearch).draw();

            },error: function (error) {
                console.log(error);
            }
        });
    }
});

function validateSearch(){
    if($('#parameter_search').val() == -1){
        toastr.error('Phải chọn yếu tố!');
        $('#parameter_search').focus();
        return;
    }
    if($('#stations_search').val() == -1){
        toastr.error('Phải chọn trạm!');
        $('#stations_search').focus();
        return;
    }
    if ($('#start_date').val()=='') {
        toastr.error('Từ ngày không được bỏ trống!');
        $('#start_date').focus();
        return;
    }

    if ($('#end_date').val()=='') {
        toastr.error('Đến ngày không được bỏ trống!');
        $('#end_date').focus();
        return;
    }
    var pattern = new RegExp("^(3[01]|[12][0-9]|0[1-9])/(1[0-2]|0[1-9])/[0-9]{4} (2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$");
    if ($('#start_date').val().search(pattern)!=0) {
        toastr.error('Từ ngày không hợp lệ phải theo định dạng DD/MM/YYYY HH24:MM:SS');
        $('#start_date').focus();
        return;
    }

    if ($('#end_date').val().search(pattern)!=0) {
        toastr.error('Đến ngày không hợp lệ phải theo định dạng DD/MM/YYYY HH24:MM:SS');
        $('#end_date').focus();
        return;
    }
    if($('#start_date').data('daterangepicker').startDate > $('#end_date').data('daterangepicker').startDate){
        toastr.error('Từ ngày phải nhỏ hơn đến ngày !');
    }
    return true;

}

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
            }else if (is_select == 1) {
                $(this).html('<p style="text-align: center">' + title + '</p>');
            }
            // else if (is_select == 2) {
            //     $(this).html('<select class="select_table"  id="' + dataId + '"><option value="">Không chọn</option><option  value="1">Hoạt động</option><option value="0">Không hoạt động</option></select>');
            // }else{
            //     $(this).html('<select  class="select_table" id="' + dataId + '"><option value="">Không chọn</option><option value="1">Nam</option><option value="0">Nữ</option></select>');
            // }
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
            {"data": ""},
            {"data": "indexCount", "render": $.fn.dataTable.render.text()},
            {"data": "objectTypeShortName", "render": $.fn.dataTable.render.text()},
            {"data": "stationNo","render": $.fn.dataTable.render.text()},
            {"data": "stationName", "render": $.fn.dataTable.render.text()},
            {"data": "parameterTypeName", "render": $.fn.dataTable.render.text()},
            {"data": "prValue", "render": $.fn.dataTable.render.text()},
            {"data": "siteName", "render": $.fn.dataTable.render.text()},
            {
                "data": "prWarning", "render": function (data, type, row) {
                    if(data ==1)
                        return '<div style="width: 100%;text-align: center"><i class="fas fa-exclamation-triangle" style="color:red;" size="7px" title="Cảnh báo dữ liệu sai!"></i></div>';
                    else
                        return '<div style="width: 100%;text-align: center"><i class="fas fa-exclamation-circle" style="color:forestgreen;" size="7px" title="Dữ liệu bình thường!"></i></div>';
                },
            },
            // {"data": "prWarning", "render": $.fn.dataTable.render.text()},
            {"data": "prCreatedUser", "render": $.fn.dataTable.render.text()},
            {"data": "prTimestamp", "render": $.fn.dataTable.render.text()},
            {
                data: null,
                className: "center",
                defaultContent: '<i class="fas fa-edit"></i>   <i class="fas fa-trash-alt"></i>'
            }

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
            })
            // $('.select_table').on('change', function () {
            //     let id = $(this).attr("id");
            //     objSearch[id] = this.value;
            //     table.search(JSON.stringify(objSearch)).draw();
            // });
        },
        "ajax": {
            headers: {
                'Authorization': token
            },
            "url": apiUrl + "management-of-outputs/get_list_outputs",
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
                        "prValue": responseJson.content[i].prValue,
                        "prTimestamp": responseJson.content[i].prTimestamp,
                        "siteName": responseJson.content[i].siteName,
                        "prWarning": responseJson.content[i].prWarning,
                        "prCreatedUser": responseJson.content[i].prCreatedUser,
                    })
                }
                tablePrName = '';
                return JSON.stringify(dataRes);
            }
        }

    });
