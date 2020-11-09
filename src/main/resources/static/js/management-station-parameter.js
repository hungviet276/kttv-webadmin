var uuid = global.uuidv4();
var station =
    {
        clientAction: '',
        indexOfRow: -1,
        table: undefined,
        tableParamter: undefined,
        listSeriesType:undefined,
        numOfInputSearch: 0,
        uuid: uuid,
        objSearch: {
            s_parameter: '',
            s_parameterDesc: '',
            s_unit: '',
            s_timeseries: '',
        },
        objParameterSearch: {
            s_uuid: uuid,//'ffaaf28d-58b9-4fb8-b5b8-d5120f3b0e53',//
            // s_stationParamterId: '',
            s_parameterName: '',
            s_unitName: ''
        },
        parameter: {
            stationId: null,
            countryId: null,
            areaId: null,
            provinceId: null,
            districtId: null,
            wardId: null,
            siteId: null
        },
        init: function () {
            // station.searchSeries();
            station.getUnit();
            station.getSeries();
            station.disabled_right();
            station.show_search();
        },
        getParameter: function () {
            global.showLoading();
            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: apiUrl + "common/get-select-list-parameter",
                method: "GET",
                contentType: "application/json",
                success: function (data) {
                    console.log(data);
                    $("#parameter").select2({data: data});
                    global.disableLoading();
                },
                error: function (err) {
                    global.disableLoading();
                    toastr.error("", "Lỗi thực hiện");
                }
            });
        },
        getSeries: function (data) {
            global.showLoading();
            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: apiUrl + "common/get-select-list-timeseries?" + data,
                method: "GET",
                // contentType: "application/json",
                // data : data,
                success: function (data) {
                    console.log(data);
                    $("#timeSeries").empty();
                    $("#timeSeries").select2({data: data});
                    global.disableLoading();
                },
                error: function (err) {
                    global.disableLoading();
                    toastr.error("", "Lỗi thực hiện");
                }
            });
        },
        getUnit: function () {
            global.showLoading();
            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: apiUrl + "common/get-select-list-unit",
                method: "GET",
                contentType: "application/json",
                success: function (data) {
                    console.log(data);
                    $("#unitId").select2({data: data});
                    global.disableLoading();
                },
                error: function (err) {
                    global.disableLoading();
                    toastr.error("", "Lỗi thực hiện");
                }
            });
        },
        btnAddSeries: function () {
            if(!station.validateSeries()){
                return ;
            }
            let timeTypeId = $("#timeSeries").val().trim();
            let tsConfigName = $("#tsConfigName").val().trim();
            let storage = $("#storage").val();
            let data = {
                "timeTypeId": timeTypeId,
                "tsConfigName": tsConfigName,
                "uuid": station.uuid,
                "storage":storage
            }
            global.showLoading();
            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: apiUrl + "station-type/create-time-series-config",
                method: "POST",
                contentType: "application/json",
                data: JSON.stringify(data),
                success: function (data) {
                    if (data.status == 1) {
                        toastr.success('Thành công', data.message);
                    } else {
                        toastr.error('', data.message);
                    }
                    //station.table.ajax.reload();
                    station.objParameterSearch['s_stationId'] = '';
                    station.objParameterSearch['s_uuid'] = station.uuid;
                    station.searchSeries();
                    global.disableLoading();
                },
                error: function (err) {
                    global.disableLoading();
                    toastr.error("", "Lỗi thực hiện");
                }
            });
        },
        btnRefreshSeries: function () {
            $('.help-block').html('');
            $("#timeSeries").val('-1').trigger('change');
            $("#tsConfigName").val('');
            $("#storage").val('');
        },
        deleteSeries: function (id) {
            if (!confirm('Bạn thực sự muốn xóa ?')) {
                return ;
            }
            global.showLoading();
            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: apiUrl + "station-type/delete-time-series-config?stationParamterId=" + id,
                method: "POST",
                contentType: "application/json",
                //data: {"stationParamterId" : id},
                success: function (data) {
                    if (data.status == 1) {
                        toastr.success('Thành công', data.message);
                    } else {
                        toastr.error('', data.message);
                    }
                    station.tableParameter.ajax.reload();
                    global.disableLoading();
                },
                error: function (err) {
                    global.disableLoading();
                    toastr.error("", "Lỗi thực hiện");
                }
            });
        },
        getFormValue: function () {

        },
        btnSave: function () {
            if (!station.validate()) {
                return;
            }
            global.showLoading();
            let uuid = station.uuid;
            let parameter = $("#parameter").val().trim();
            let parameterDesc = $("#parameterDesc").val().trim();
            let unitId = $("#unitId").val().trim();
            let data = {
                "uuid": uuid,
                "parameter": parameter,
                "parameterDesc": parameterDesc,
                "unitId": unitId,
                "username": global.username
            }
            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: apiUrl + "station-type/create-time-series-config-parameter",
                method: "POST",
                contentType: "application/json",
                data: JSON.stringify(data),
                success: function (data) {
                    if (data.status == 1) {
                        toastr.success('Thành công', data.message);
                        //reset cac thong tin them moi
                        station.btnRefresh();
                        station.btnRefreshSeries();
                        station.uuid = global.uuidv4();
                        station.table.ajax.reload();
                        station.closePopup();
                    } else {
                        toastr.error('', data.message);
                    }
                    global.disableLoading();
                },
                error: function (err) {
                    global.disableLoading();
                    toastr.error("", "Lỗi thực hiện");
                }
            });
        },
        btnUpdate: function () {
            if (!station.validate()) {
                return;
            }
            global.showLoading();
            let uuid = station.uuid;
            let parameter = $("#parameter").val().trim();
            let parameterDesc = $("#parameterDesc").val().trim();
            let unitId = $("#unitId").val().trim();
            let data = {
                "parameterId": station.parameter.stationId,
                "uuid": uuid,
                "parameter": parameter,
                "parameterDesc": parameterDesc,
                "unitId": unitId,
                "username": global.username
            }
            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: apiUrl + "station-type/update-time-series-config-parameter",
                method: "POST",
                contentType: "application/json",
                data: JSON.stringify(data),
                success: function (data) {
                    if (data.status == 1) {
                        toastr.success('Thành công', data.message);
                        station.table.ajax.reload();
                        //reset cac thong tin them moi
                        // station.btnRefresh();
                        // station.uuid = global.uuidv4();
                        station.closePopup();
                    } else {
                        toastr.error('', data.message);
                    }
                    global.disableLoading();
                },
                error: function (err) {
                    global.disableLoading();
                    toastr.error("", "Lỗi thực hiện");
                }
            });
        },
        btnRefresh: function () {
            $('.help-block').html('');
            $("#parameter").val('');
            $("#parameterDesc").val('');
            $("#unitId").val('-1').trigger('change');

            $("#timeSeries").val('-1').trigger('change');
        },
        btnDelete: function () {
            if (!confirm('Bạn thực sự muốn xóa ?')) {
                return ;
            }
            global.showLoading();
            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: apiUrl + "station-type/delete-time-series-config-parameter",
                method: "POST",
                // contentType: "application/json",
                data: jQuery.param({"parameterId": station.parameter.stationId}),
                success: function (data) {
                    if (data.status == 1) {
                        toastr.success('Thành công', data.message);
                        //reset cac thong tin them moi
                        station.btnRefresh();
                        station.btnRefreshSeries();
                        station.uuid = global.uuidv4();
                        station.table.ajax.reload();
                        station.closePopup();
                    } else {
                        toastr.error('', data.message);
                    }
                    global.disableLoading();
                },
                error: function (err) {
                    global.disableLoading();
                    toastr.error("", "Lỗi thực hiện");
                }
            });
        },
        searchSeries: function () {
            station.listSeriesType = [];
            if (station.tableParameter === undefined) {
                station.tableParameter = $('#tableDataParameter').DataTable({
                    columnDefs: [{
                        orderable: false,
                        // className: 'select-checkbox',
                        // targets: 0
                    }],
                    select: {
                        style: 'os',
                        selector: 'td:first-child',
                        type: 'single'
                    },
                    "pagingType": "full_numbers",
                    "lengthMenu": [
                        [10, 25, 50, 100],
                        [10, 25, 50, 100]
                    ],
                    "lengthChange": true,
                    "searchDelay": 1500,
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
                    // "select": {
                    //     "style": "single"
                    // },
                    "processing": true,
                    "serverSide": true,
                    "columns": [

                        {"data": "indexCount","render": $.fn.dataTable.render.text()},
                        {"data": "parameterName","render": $.fn.dataTable.render.text()},
                        {"data": "unitName","render": $.fn.dataTable.render.text()},
                        // {"data": "note"},
                        {"data": ""}
                    ],
                    initComplete: function () {
                        // Apply the search
                        // this.api().columns().every(function () {
                        //     var that = this;
                        //     $('.table-data-input-search parameter').on('keyup', function () {
                        //         let id = $(this).attr("id");
                        //         // if (that.search() !== this.value) {
                        //         //
                        //         // }
                        //         station.objParameterSearch[id] = this.value;
                        //         station.numOfInputSearch++;
                        //         if (station.numOfInputSearch > 3) {
                        //             that.search(JSON.stringify(station.objParameterSearch)).draw();
                        //             station.numOfInputSearch = 0;
                        //         }
                        //     });
                        //
                        // });
                    },
                    "ajax": {
                        headers: {
                            'Authorization': token
                        },
                        "url": apiUrl + "station-type/get-list-series-time-config-pagination",
                        "method": "POST",
                        "contentType": "application/json",
                        "data": function (d) {
                            console.log(d);
                            draw = d.draw;
                            return JSON.stringify({
                                "draw": d.draw,
                                "start": Math.round(d.start / d.length),
                                "length": d.length,
                                "search": JSON.stringify(station.objParameterSearch)
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
                            //reset lai lan nua list tim kiem time series
                            station.listSeriesType = [];
                            for (let i = 0; i < responseJson.content.length; i++) {
                                dataRes.data.push({
                                    // "": "",
                                    "indexCount": i + 1,
                                    "uuid": responseJson.content[i].uuid,
                                    "stationParamterId": responseJson.content[i].stationParamterId,
                                    "paramterTypeId": responseJson.content[i].paramterTypeId,
                                    "parameterName": responseJson.content[i].parameterName,
                                    "unitName": responseJson.content[i].unitName,
                                    "": "<span class='fa fa-trash' onclick='station.deleteSeries(" + responseJson.content[i].stationParamterId + ")'></span>"
                                });
                                station.listSeriesType.push(responseJson.content[i].paramterTypeId);
                            }
                            if (dataRes.data[0] !== undefined) {
                                station.uuid = dataRes.data[0].uuid;
                                // station.objParameterSearch['s_uuid'] = station.uuid;
                            }
                            //lay lai du lieu cua cac time series da config
                            let data = "tsTypeId="+ station.listSeriesType.toString();
                            station.getSeries(data);

                            return JSON.stringify(dataRes);
                        }
                    }
                });
            } else {
                station.tableParameter.search(station.objParameterSearch).draw();
            }
        },
        rowSelect: function (e, dt, type, indexes) {
            // station.clientAction = 'update';
            // station.indexOfRow = indexes;
            // let rowData = station.table.rows(indexes).data().toArray();
            // station.fillDataToForm(rowData);
        },
        preEdit: function (indexes) {
            station.clientAction = 'update';
            station.indexOfRow = indexes;
            let rowData = station.table.rows(indexes).data().toArray();
            station.fillDataToForm(rowData);
        },
        fillDataToForm: function (rowData) {
            $('.help-block').html('');
            if (rowData != null && rowData != undefined && rowData.length > 0) {
                console.log(rowData);
                station.enabled_right();
                $("#btnSave").css("display", "none");
                $("#btnDelete").css("display", "inline");
                $("#btnReset").css("display", "none");
                $("#btnCancel").css("display", "inline");
                $("#btnUpdate").css("display", "inline");
                // $("#btnDonew").attr("disabled", true);
                station.togle_search();

                // $('#stationTypeId').val(rowData[0].stationTypeId).trigger('change');
                //lay thong tin list parameter
                station.parameter.stationId = rowData[0].parameterTypeId;
                station.objParameterSearch['s_stationId'] = rowData[0].parameterTypeId;
                station.objParameterSearch['s_uuid'] = null;
                $('#parameter').val(rowData[0].parameterTypeName);
                $('#parameterDesc').val(rowData[0].parameterTypeDescription);
                $('#unitId').val(rowData[0].unitId).trigger('change');
                station.objParameterSearch['s_uuid'] = null;
                if (station.tableParameter === undefined) {
                    station.searchSeries();
                } else {
                    station.tableParameter.search(station.objParameterSearch).draw();
                }
            }
        },
        rowDeselect: function (e, dt, type, indexes) {
            // station.disabled_right();
            // $("#btnSave").css("display", "none");
            // $("#btnDelete").css("display", "none");
            // $("#btnReset").css("display", "none");
            // $("#btnCancel").css("display", "none");
            // $("#btnDonew").attr("disabled", false);
            // station.show_search();
        },
        disabled_right: function () {
            $("#form_input input:text").each(function () {
                $(this).prop("readonly", true);
            });
            $("#form_input input:password").each(function () {
                $(this).prop("readonly", true);
            });
            $("#form_input select").each(function () {
                $(this).attr("disabled", true);
            });
            $("#input_group_id").attr("disabled", true);
            $(".checkedGender").attr("disabled", true);
            $(".checkedQuyen").attr("disabled", true);
            station.btnRefreshSeries();
            station.btnRefresh();
        },
        enabled_right: function () {
            $("#form_input input:text").each(function () {
                $(this).prop("readonly", false);
            });
            $("#form_input input:password").each(function () {
                $(this).prop("readonly", false);
            });
            $("#form_input select").each(function () {
                $(this).attr("disabled", false);
            });
            $("#input_group_id").attr("disabled", false);
            $(".checkedGender").attr("disabled", false);
            $(".checkedQuyen").attr("disabled", false);
        },
        show_search: function () {
            $("#box_info").hide(300);
            $("#box_search").show(300);
            // $("#box_search").attr('class', 'col-sm-12');
        },
        togle_search: function () {
            $("#box_search").hide(300);
            $("#box_info").show(300);
            // $("#box_info").attr('class', 'col-sm-12');

            // $("#box_search").attr('class', 'col-sm-5');
        },
        formReset: function () {
            $('#form_data')[0].reset();
        },
        validate: function () {
            $('.help-block').html('');
            if ($('#parameter').val().trim().length < 1) {
                $('#parameter_error').html('Tên yếu không được để trống');
                $('#parameter').focus();
                return false;
            }
            if ($('#unitId').val().trim() === "-1") {
                $('#unitId_error').html('Đơn vị tính không được để trống');
                $('#unitId').focus();
                return false;
            }
            return true;
        },
        validateSeries: function () {
            $('.help-block').html('');
            if ($('#timeSeries').val().trim() === "-1") {
                $('#timeSeries_error').html('Time series không được để trống');
                $('#timeSeries').focus();
                return false;
            }
            if($('#storage').val().trim().length < 1){
                $('#storage_error').html('Storage không được để trống');
                $('#storage').focus();
                return false;
            }
            if ($('#tsConfigName').val().trim().length < 1) {
                $('#tsConfigName_error').html('Time series config name tính không được để trống');
                $('#tsConfigName').focus();
                return false;
            }
            return true;
        },
        stationCodeKeyPress: function (event) {
            let key = event.keyCode | event.which;
            if ((key > 47 && key < 58) || key === 8 || (key > 64 && key < 91) || (key > 96 && key < 123)) {
                return true;
            }
            return false;
        },
        stationCodeKeyUp: function (event) {
            let val = $("#stationCode").val().trim();
            $("#stationCode").val(val.toUpperCase());
        },
        preControl: function (index) {
            $("#commandControl").prop('disabled', false);
            //lay thong tin cua row data dang tuong tac
            let rowData = station.table.rows(index).data().toArray();
            console.log(JSON.stringify(rowData));
            $("#management-station-control").modal();
            $("#stationTypeIdControl").val(rowData[0].stationTypeId).trigger('change');
            $("#stationCodeControl").val(rowData[0].stationCode);
            $("#stationNameControl").val(rowData[0].stationName);
        },
        control: function () {
            let host = $("#hostControl").val().trim();
            let port = $("#portControl").val().trim();
            let command = $("#commandControl").val().trim();
            let commandText = $("#commandControl :selected").text().trim();
            let value = $("#valueInput").val().trim();
            let description = $("#description").val().trim();
            command = command + " " + value;
            if (host.length < 1) {
                toastr.error('', 'Bạn chưa nhập host điều khiển');
                $("#hostControl").focus();
                return;
            }
            if (port.length < 1) {
                toastr.error('', 'Bạn chưa nhập port điều khiển');
                $("#portControl").focus();
                return;
            }
            global.showLoading();
            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: apiUrl + "station-type/control",
                method: "POST",
                contentType: "application/json",
                data: JSON.stringify({"host": host, "port": port, "command": command, "description": description}),
                success: function (data) {
                    if (data.status == 1) {
                        toastr.success('', 'Thực hiện điều khiển "' + commandText + '" thành công');
                    } else {
                        toastr.error('Thực hiện thất bại', data.message);
                    }
                    global.disableLoading();
                },
                error: function (err) {
                    global.disableLoading();
                    toastr.error("", "Lỗi thực hiện");
                }
            });
        },
        checkConnect: function () {
            let host = $("#hostControl").val().trim();
            let port = $("#portControl").val().trim();
            if (host.length < 1) {
                toastr.error('', 'Bạn chưa nhập host điều khiển');
                $("#hostControl").focus();
                return;
            }
            if (port.length < 1) {
                toastr.error('', 'Bạn chưa nhập port điều khiển');
                $("#portControl").focus();
                return;
            }
            global.showLoading();
            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: "/management-station/check-connect",
                method: "POST",
                // contentType: "application/json",
                data: {"host": host, "port": port},
                success: function (data) {
                    if (data == 'OK') {
                        toastr.success('', 'Kết nối thành công');
                    } else {
                        toastr.error('Kết nối thất bại', data.message);
                    }
                    global.disableLoading();
                },
                error: function (err) {
                    global.disableLoading();
                    toastr.error("", "Lỗi thực hiện");
                }
            });
        },
        closePopup: function () {
            station.disabled_right();
            $("#btnSave").css("display", "none");
            $("#btnDelete").css("display", "none");
            $("#btnReset").css("display", "none");
            $("#btnCancel").css("display", "none");
            $("#btnDonew").attr("disabled", false);
            if (station.indexOfRow > -1) {
                station.table.row(station.indexOfRow).deselect();
            }
            station.show_search();
        }
    }

$(document).ready(function () {
    $('#tableDataView thead th').each(function () {
        var title = $(this).text();
        var dataId = $(this).attr("data-id");

        if (dataId != null && dataId != undefined) {
            $(this).html('<input id="' + dataId + '" class="table-data-input-search" type="text" placeholder="Search ' + title + '" />');
            //     if (is_select == null || is_select == undefined) {
            //         $(this).html('<input id="' + dataId + '" class="table-data-input-search" type="text" placeholder="Search ' + title + '" />');
            //     } else {
            //         $(this).html('<select class="select_table" id="+ dataId +"> <option value="">Hãy chọn</option><option value=1>Hoạt động</option> <option value=0>Không hoạt động</option> </select>');
            //     }
        }
    });

    var search = $.fn.dataTable.util.throttle(
        function (val) {
            station.table.search(val).draw();
        },
        1000
    );

    global.showLoading();
    var draw = 0;
    station.table = $('#tableDataView').DataTable({
        columnDefs: [{
            orderable: false,
            checkboxes: {
                selectRow: true
            },
            // className: 'select-checkbox',
            targets: 0
        },
            {"width": "25px", "targets": 0}
        ],
        select: {
            style: 'multi',
            // selector: 'td:first-child',
            type: 'checkbox'
        },
        "pagingType": "full_numbers",
        "lengthMenu": [
            [10, 25, 50],
            [10, 25, 50]
        ],
        "lengthChange": true,
        "searchDelay": 1500,
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
        // "select": {
        //     "style": "single"
        // },
        "processing": true,
        "serverSide": true,
        "columns": [
            {"data": ""},
            {"data": "indexCount","render": $.fn.dataTable.render.text()},
            {"data": "control"},
            // {"data": "parameterTypeId"},
            {"data": "parameterTypeName","render": $.fn.dataTable.render.text()},
            {"data": "parameterTypeDescription","render": $.fn.dataTable.render.text()},
            {"data": "unitName","render": $.fn.dataTable.render.text()},
            {"data": "timeSeries","render": $.fn.dataTable.render.text()},
        ],
        initComplete: function () {
            // Apply the search
            this.api().columns().every(function () {
                var that = this;
                $('.table-data-input-search').on('keyup onchange', function () {
                    let id = $(this).attr("id");
                    // if (that.search() !== this.value) {
                    //
                    // }
                    station.objSearch[id] = this.value;
                    station.numOfInputSearch++;
                    if (station.numOfInputSearch > 4) {
                        that.search(JSON.stringify(station.objSearch)).draw();
                        station.numOfInputSearch = 0;
                    }
                });

            });
        },
        "ajax": {
            headers: {
                'Authorization': token
            },
            "url": apiUrl + "station-type/search-parameter-type",
            "method": "POST",
            "contentType": "application/json",
            "data": function (d) {
                console.log(d);
                draw = d.draw;
                return JSON.stringify({
                    "draw": d.draw,
                    "start": Math.round(d.start / d.length),
                    "length": d.length,
                    "search": JSON.stringify(station.objSearch)
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
                        "control":"<span class='fa fa-edit' title='Cập nhật'  onclick='station.preEdit(" + i + ")' style='cursor: pointer'></span>",
                        "parameterTypeId": responseJson.content[i].parameterTypeId,
                        "parameterTypeName": responseJson.content[i].parameterTypeName,
                        "parameterTypeDescription": responseJson.content[i].parameterTypeDescription,
                        "unitName": responseJson.content[i].unitName,
                        "timeSeries": responseJson.content[i].timeSeries,
                        "unitId": responseJson.content[i].unitId,
                    })
                }

                return JSON.stringify(dataRes);
            }
        }
    });
    station.init();
    global.disableLoading();

    station.table.on('select', station.rowSelect)
        .on('deselect', station.rowDeselect);
    //set action for button control
    $('#btnCreate').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        // set state for button control
        $('#btnCreate').css('display', 'none');
        $('#btnCopy').css('display', 'none');
        $('#btnDelete').css('display', 'none');
        $('#btnEdit').css('display', 'none');

        // set state for button save and back
        $('#btnSaveCreate').css('display', '');
        $('#btnBackCreate').css('display', '');

        // disable mouse click table
        $('#wrap_table_data').css('pointer-events', 'none');

        // clean form
        station.formReset();
    });

    $('#btnDonew').click(function () {
        station.clientAction = 'insert';
        station.enabled_right();
        $("#btnSave").css("display", "inline");
        $("#btnDelete").css("display", "none");
        $("#btnUpdate").css("display", "none");
        $("#btnReset").css("display", "inline");
        $("#btnCancel").css("display", "inline");
        $("#btnDonew").attr("disabled", true);
        station.parameter.stationId = null;
        if (station.tableParameter !== undefined) {
            station.uuid = global.uuidv4();
            station.objParameterSearch['s_uuid'] = station.uuid;
            station.objParameterSearch['s_stationId'] = station.parameter.stationId;
            station.tableParameter.clear().draw();
        }
        // station.table.row(':eq('+station.indexOfRow+')', { page: 'current' }).deselect();
        station.togle_search();
        station.btnRefresh();
    });

    $('#btnCancel').click(function () {
        station.disabled_right();
        $('.help-block').html('');
        $("#btnSave").css("display", "none");
        $("#btnDelete").css("display", "none");
        $("#btnReset").css("display", "none");
        $("#btnCancel").css("display", "none");
        $("#btnDonew").attr("disabled", false);
        if (station.indexOfRow > -1) {
            station.table.row(station.indexOfRow).deselect();
        }
        station.table.search(station.objSearch).draw();
        station.show_search();
    });

});
