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
        url: apiUrl + "cdh-history/get_list_stations",
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
        url: apiUrl + "send-mail-history/getList_parameter_byStationId",
        data: "stationId=" + station_id,
        method: "GET",
        contentType: "application/json",
        success: function (data) {
            console.log("parameter_search data ===" + data);
            $("#warningType_Search").select2({data: data});
        },error: function (error) {
            console.log(error);
        }
    });
}

$('#btnDoSearch').on('click', function (e) {
    if(validateSearch()) {
        objSearch.s_fromdate = $("#start_date").val();
        objSearch.s_todate = $("#end_date").val();
        objSearch.s_stationId = $("#stations_search").val();
        objSearch.s_warningId = $("#warningType_Search").val();
        table.search(objSearch).draw();
    }
});

function validateSearch(){
    if($('#warningType_Search').val() == -1){
        toastr.error('Phải chọn loại cảnh báo!');
        $('#warningType_Search').focus();
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
        s_stationNo: '',
        s_stationName: '',
        s_warning_code: '',
        s_warning_name: '',
        s_note: '',
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
            {"data": "stationNo", "render": $.fn.dataTable.render.text()},
            {"data": "stationName", "render": $.fn.dataTable.render.text()},
            {"data": "warningNo","render": $.fn.dataTable.render.text()},
            {"data": "warningName", "render": $.fn.dataTable.render.text()},
            {"data": "groupMail", "render": $.fn.dataTable.render.text()},
            {"data": "description", "render": $.fn.dataTable.render.text()},
            {"data": "pushTimestampStr", "render": $.fn.dataTable.render.text()},

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
            "url": apiUrl + "send-mail-history/get_list_outputs",
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
                        "stationNo": responseJson.content[i].stationNo,
                        "stationName": responseJson.content[i].stationName,
                        "warningNo": responseJson.content[i].warningNo,
                        "warningName": responseJson.content[i].warningName,
                        "groupMail": responseJson.content[i].groupReMailName,
                        "description": responseJson.content[i].description,
                        "pushTimestampStr": responseJson.content[i].pushTimestampStr,
                    })
                }
                return JSON.stringify(dataRes);
            }
        }

    });

$('#btnExport').on('click', function (e) {
    if(validateSearch()) {
        let dataReq = {
            s_stationNo: $('#s_stationNo').val(),
            s_stationName: $('#s_stationName').val(),
            s_warning_code: $('#s_warning_code').val(),
            s_warning_name: $('#s_warning_name').val(),
            s_group_mail: $('#s_group_mail').val(),
            s_note: $('#s_note').val(),
            s_stationId: $('#stations_search').val(),
            s_warningId: $('#warningType_Search').val(),
            s_fromdate: $('#start_date').val(),
            s_todate: $('#end_date').val(),
        };

        console.log(JSON.stringify(dataReq));
        showLoading();
        $.ajax({
            headers: {
                'Authorization': token
            },
            url: apiUrl + 'send-mail-history/export',
            method: 'POST',
            data: JSON.stringify(dataReq),
            contentType: "application/json",
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data, textStatus, xhr) {
                var a = document.createElement('a');
                var url = window.URL.createObjectURL(data);
                a.href = url;
                a.download = xhr.getResponseHeader("content-disposition").replace("attachment; filename=", "");
                document.body.append(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(url);
                // disableLoading();
            },
            complete: function () {
                disableLoading();
            },
            always: function (dataOrjqXHR, textStatus, jqXHRorErrorThrown) {
                disableLoading();
            }
        });
    }
});

function showLoading() {
    $('.popup-loading').css('opacity', '1');
    $('.popup-loading').css('display', 'block');
    $('body').css('overflow', 'hidden');
}

function disableLoading() {
    $('.popup-loading').css('opacity', '0');
    $('.popup-loading').css('display', 'none');
    $('body').css('overflow', 'scroll');
}