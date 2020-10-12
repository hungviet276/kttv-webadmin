var uuid = global.uuidv4();
var station =
    {
        table: undefined,
        tableParamter: undefined,
        numOfInputSearch: 0,
        uuid: uuid,
        objSearch: {
            s_objectType: '',
            s_objectTypeName: '',
            s_stationCode: '',
            s_stationName: '',
            s_stationLong: '',
            s_stationLat: '',
            s_provinceName: '',
            s_districtName: '',
            s_wardName: '',
            s_address: '',
            s_riverName: '',
            // s_stationHeight: '',
            s_status: '',
            // s_parameterTypeName: '',
            // s_unitName: '',
            // s_device: '',
            // s_measure: '',
            // s_note: ''
        },
        objParameterSearch: {
            s_uuid: uuid,//'ffaaf28d-58b9-4fb8-b5b8-d5120f3b0e53',//
            s_parameterName: '',
            s_unitName: '',
            s_note: ''
        },
        parameter: [],
        init: function () {
            station.getStationType();
            station.getArea();
            // station.getProvince();
            // station.getRiver();
            station.getParameter();
            // station.searchParameter();
            station.disabled_right();
            station.show_search();
        },
        //lay loai tram
        getStationType: function () {
            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: apiUrl + "station-type/get-list-object-type",
                method: "GET",
                contentType: "application/json",
                success: function (data) {
                    console.log(data);
                    $("#stationType").select2({data: data});
                    $("#stationTypeId").select2({data: data});
                }
            });
        },
        getArea: function () {
            let countryId = 281;
            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: apiUrl + "common/get-select-list-areas",
                data: "countryId=" + countryId,
                method: "GET",
                contentType: "application/json",
                success: function (data) {
                    console.log(data);
                    $("#areaId").select2({data: data});
                }
            });
        },
        getProvince: function (obj) {
            let areaId = $(obj).val();
            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: apiUrl + "common/get-select-list-provinces",
                data: "areaId=" + areaId,
                method: "GET",
                contentType: "application/json",
                success: function (data) {
                    console.log(data);
                    $("#provinceId").select2({data: data});
                }
            });
        },
        getDistrict: function (obj) {
            let provinceId = $(obj).val();
            if (provinceId == -1) {
                return;
            }
            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: apiUrl + "common/get-select-list-district",
                data: "provinceId=" + provinceId,
                method: "GET",
                contentType: "application/json",
                success: function (data) {
                    console.log(data);
                    $("#districtId").select2({data: data});
                }
            });
        },
        getWard: function (obj) {
            let provinceId = $("#provinceId").val();
            let districtId = $(obj).val();
            if (provinceId == -1) {
                return;
            }
            if (districtId == -1) {
                return;
            }
            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: apiUrl + "common/get-select-list-ward",
                data: "provinceId=" + provinceId + "&districtId=" + districtId,
                method: "GET",
                contentType: "application/json",
                success: function (data) {
                    console.log(data);
                    $("#wardId").select2({data: data});
                }
            });
        },
        getRiver: function () {
            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: apiUrl + "common/get-select-list-rivers",
                method: "GET",
                contentType: "application/json",
                success: function (data) {
                    console.log(data);
                    $("#riverId").select2({data: data});
                }
            });
        },
        getParameter: function () {
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
                }
            });
        },
        getUnit: function () {
            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: apiUrl + "common/get-select-list-unit",
                method: "GET",
                contentType: "application/json",
                success: function (data) {
                    console.log(data);
                    $("#unit").select2({data: data});
                }
            });
        },
        checkStationType: function (obj) {
            let stationTypeText = obj.options[obj.selectedIndex].text;
            let stationTypeId = obj.options[obj.selectedIndex].value;
            console.log(stationTypeText);
            if (stationTypeText.startsWith("HV") || stationTypeId == -1) {
                $("#riverId").prop("disabled", false);
                station.getRiver();
            } else {
                $("#riverId").prop("disabled", true);
            }
        },
        btnAddParameter: function () {
            let parameter = $("#parameter").val();
            // let unit = $("#unit").val();
            let frequency = $("#frequency").val();
            let note = $("#note").val();
            let data = {
                "parameter": parameter,
                "uuid": station.uuid,
                "frequency": frequency,
                "note": note
            }
            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: apiUrl + "station-type/create-parameter",
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
                    station.searchParameter();
                    global.disableLoading();
                },
                error: function (err) {
                    global.disableLoading();
                    toastr.error("", "Lỗi thực hiện");
                }
            });
        },
        btnRefreshParameter: function () {
            $("#parameter").val('-1').trigger('change');
            // $("#unit").val('-1').trigger('change');
            $("#frequency").val('');
            // $("#note").val('');
        },
        deleteParameter : function (id){
            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: apiUrl + "station-type/delete-parameter",
                method: "POST",
                contentType: "application/json",
                data: "stationParamterId="+id,
                success: function (data) {
                    if (data.status == 1) {
                        toastr.success('Thành công', data.message);
                    } else {
                        toastr.error('', data.message);
                    }
                    station.table.ajax.reload();
                    global.disableLoading();
                },
                error: function (err) {
                    global.disableLoading();
                    toastr.error("", "Lỗi thực hiện");
                }
            });
        },
        btnSave: function () {
            global.showLoading();
            // let parameter = $("#parameter").val();
            // let frequency = $("#frequency").val();
            // let measure = $("#measure").val();
            let uuid = station.uuid;
            let stationTypeId = $("#stationTypeId").val();
            let modeStationType = $("#modeStationType").val();
            let stationCode = $("#modeStationType").val();
            let stationName = $("#stationName").val();
            let longtitude = $("#longtitude").val();
            let lattitude = $("#lattitude").val();

            let areaId = $("#areaId").val();
            let provinceId = $("#provinceId").val();
            let districtId = $("#districtId").val();
            let wardId = $("#wardId").val();
            let address = $("#address").val();
            let riverId = $("#riverId").val();
            let status = $("#status").val();
            let data = {
                // "parameter": parameter,
                // "frequency": frequency,
                // "measure":measure,
                "uuid":station.uuid,
                "stationTypeId": stationTypeId,
                "modeStationType": modeStationType,
                "stationCode": stationCode,
                "stationName": stationName,
                "longtitude": longtitude,
                "lattitude": lattitude,
                "countryId": 281,
                "areaId": areaId,
                "provinceId": provinceId,
                "districtId": districtId,
                "wardId": wardId,
                "address": address,
                "riverId": riverId,
                "status": status
            }
            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: apiUrl + "station-type/create-station-time-series",
                method: "POST",
                contentType: "application/json",
                data: JSON.stringify(data),
                success: function (data) {
                    if (data.status == 1) {
                        toastr.success('Thành công', data.message);
                    } else {
                        toastr.error('', data.message);
                    }
                    station.table.ajax.reload();
                    global.disableLoading();

                    //reset cac thong tin them moi
                    station.btnRefresh();
                    station.uuid = global.uuidv4();
                },
                error: function (err) {
                    global.disableLoading();
                    toastr.error("", "Lỗi thực hiện");
                }
            });
        },
        btnRefresh : function (){
            $("#stationTypeId").val('-1').trigger('change');
            $("#modeStationType").val('1').trigger('change');
            $("#stationCode").val('');
            $("#stationName").val('');
            $("#longtitude").val('');
            $("#lattitude").val('');

            $("#areaId").val('-1').trigger('change');
            $("#provinceId").val('-1').trigger('change');
            $("#districtId").val('-1').trigger('change');
            $("#wardId").val('-1').trigger('change');
            $("#address").val('');
            $("#riverId").val('-1').trigger('change');
            $("#status").val('1').trigger('change');
        },
        searchParameter: function () {
            if(station.tableParameter === undefined) {
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
                        [10, 25, 50, -1],
                        [10, 25, 50, "Tất cả"]
                    ],
                    "lengthChange": true,
                    "searchDelay": 1500,
                    "searching": false,
                    "ordering": false,
                    "info": true,
                    "autoWidth": true,
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

                        {"data": "indexCount"},
                        {"data": "parameterName"},
                        {"data": "unitName"},
                        {"data": "note"},
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
                        "url": apiUrl + "station-type/get-list-station-parameter-pagination",
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
                            station.objParameterSearch = {
                                s_uuid: station.uuid,
                                s_parameterName: '',
                                s_unitName: '',
                                s_note: ''
                            };
                            let responseJson = JSON.parse(response);
                            let dataRes = {
                                "draw": draw,
                                "recordsFiltered": responseJson.recordsTotal,
                                "recordsTotal": responseJson.recordsTotal,
                                "data": []
                            };

                            for (let i = 0; i < responseJson.content.length; i++) {
                                dataRes.data.push({
                                    // "": "",
                                    "indexCount": i + 1,
                                    // "tsId": responseJson.content[i].tsId,
                                    "parameterName": responseJson.content[i].parameterName,
                                    "unitName": responseJson.content[i].unitName,
                                    "note": responseJson.content[i].note,
                                    "": "<span class='fa fa-trash' onclick='station.deleteParameter(" + responseJson.content[i].stationParamterId + ")'></span>"
                                })
                            }

                            return JSON.stringify(dataRes);
                        }
                    }
                });
            }else{
                station.tableParameter.search(station.objParameterSearch).draw();
                // station.tableParameter.ajax({
                //         headers: {
                //             'Authorization': token
                //         },
                //         "url": apiUrl + "station-type/get-list-station-parameter-pagination",
                //         "method": "POST",
                //         "contentType": "application/json",
                //         "data": function (d) {
                //             console.log(d);
                //             draw = d.draw;
                //             return JSON.stringify({
                //                 "draw": d.draw,
                //                 "start": Math.round(d.start / d.length),
                //                 "length": d.length,
                //                 "search": JSON.stringify(station.objParameterSearch)
                //             });
                //         },
                //         "dataFilter": function (response) {
                //             station.objParameterSearch = {
                //                 s_uuid: station.uuid,
                //                 s_parameterName: '',
                //                 s_unitName: '',
                //                 s_note: ''
                //             };
                //             let responseJson = JSON.parse(response);
                //             let dataRes = {
                //                 "draw": draw,
                //                 "recordsFiltered": responseJson.recordsTotal,
                //                 "recordsTotal": responseJson.recordsTotal,
                //                 "data": []
                //             };
                //
                //             for (let i = 0; i < responseJson.content.length; i++) {
                //                 dataRes.data.push({
                //                     // "": "",
                //                     "indexCount": i + 1,
                //                     // "tsId": responseJson.content[i].tsId,
                //                     "parameterName": responseJson.content[i].parameterName,
                //                     "unitName": responseJson.content[i].unitName,
                //                     "note": responseJson.content[i].note,
                //                     "": "<span class='fa fa-trash' onclick='station.deleteParameter(" + responseJson.content[i].stationParamterId + ")'></span>"
                //                 })
                //             }
                //
                //             return JSON.stringify(dataRes);
                //         }
                //     }
                // ).draw();
            }
        },
        rowSelect :function(e, dt, type, indexes) {
            // $('#btnCopy').removeAttr('disabled');
            // $('#btnDelete').removeAttr('disabled');
            // $('#btnEdit').removeAttr('disabled');
            let rowData = station.table.rows(indexes).data().toArray();
            station.fillDataToForm(rowData);
        },
        fillDataToForm: function(rowData) {
            if (rowData != null && rowData != undefined && rowData.length > 0) {
                console.log(rowData);
                station.enabled_right();
                $("#btnsave").css("display", "inline");
                $("#btnDelete").css("display", "inline");
                $("#btnReset").css("display", "inline");
                $("#btncancer").css("display", "inline");
                $("#btnDonew").attr("disabled", true);
                station.togle_search();

                // $('#inputMailConfigId').val(rowData[0].id);
                // $('#inputIp').val(rowData[0].ip);
                // $('#inputPort').val(rowData[0].port);
                // $('#inputUsername').val(rowData[0].username);
                // $('#inputPassword').val(rowData[0].password);
                // $('#inputDomain').val(rowData[0].domain);
                // $('#inputSenderName').val(rowData[0].sender_name);
                // $('#inputEmailAddress').val(rowData[0].email);
                // $('#inputProtocol').val(rowData[0].protocol);
            }
        },
        rowDeselect: function(e, dt, type, indexes) {
            // $('#btnCopy').attr('disabled', 'true');
            // $('#btnDelete').attr('disabled', 'true');
            // $('#btnEdit').attr('disabled', 'true');
            // $('#form_data')[0].reset();
            station.disabled_right();
            $("#btnsave").css("display", "none");
            $("#btnDelete").css("display", "none");
            $("#btnReset").css("display", "none");
            $("#btncancer").css("display", "none");
            $("#btnDonew").attr("disabled", false);
            station.show_search();
        },
        disabled_right: function() {
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
        },
        enabled_right: function() {
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
        show_search: function() {
            $("#box_info").hide(500);
            $("#box_search").attr('class', 'col-sm-12');
        },
        togle_search: function() {
            $("#box_info").show(500);
            $("#box_info").attr('class', 'col-sm-7');
            $("#box_search").attr('class', 'col-sm-5');
        },
        formReset: function() {
            $('#form_data')[0].reset();
        }
    }

$(document).ready(function () {
    $('#tableDataView thead th').each(function () {
        var title = $(this).text();
        var dataId = $(this).attr("data-id");
        var is_select = $(this).attr("is_select");
        if (dataId != null && dataId != undefined) {
            if(is_select==null || is_select == undefined){
                $(this).html('<input id="'+ dataId +'" class="table-data-input-search" type="text" placeholder="Search ' + title + '" />');
            }else{
                $(this).html('<select class="select_table" id="+ dataId +"> <option value="">Hãy chọn</option><option value=1>Hoạt động</option> <option value=0>Không hoạt động</option> </select>');
            }
        }
    });

    // $('#tableDataParameter thead th').each(function () {
    //     var title = $(this).text();
    //     var dataId = $(this).attr("data-id");
    //     if (dataId != null && dataId != undefined) {
    //         $(this).html('<input class="table-data-input-search parameter" id="' + dataId + '" type="text" placeholder="Search ' + title + '" />');
    //     }
    // });

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
            className: 'select-checkbox',
            targets: 0
        },{
            targets: 13,
            render : function (data,type,row){
                if(data === 1){
                    return '<div class="status_green">Hoạt động</div>';
                } else{
                    return '<div class="status_red">Không hoạt động</div>';
                }
            }
        },
        { "width": "25px", "targets": 0 }
        ],
        select: {
            style: 'os',
            selector: 'td:first-child',
            type: 'single'
        },
        "pagingType": "full_numbers",
        "lengthMenu": [
            [10, 25, 50, -1],
            [10, 25, 50, "Tất cả"]
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
            {"data": "indexCount"},
            {"data": "objectType"},
            {"data": "objectTypeName"},
            {"data": "stationCode"},
            {"data": "stationName"},
            {"data": "stationLong"},
            {"data": "stationLat"},
            {"data": "provinceName"},
            {"data": "districtName"},
            {"data": "wardName"},
            {"data": "address"},
            {"data": "riverName"},
            // {"data": "stationHeight"},
            {"data": "status"},
            // {"data": "parameterTypeName"},
            // {"data": "unitName"},
            // {"data": "device"},
            // {"data": "measure"},
            // {"data": "note"}
        ],
        initComplete: function () {
            // Apply the search
            this.api().columns().every(function () {
                var that = this;
                $('.table-data-input-search').on('keyup', function () {
                    let id = $(this).attr("id");
                    // if (that.search() !== this.value) {
                    //
                    // }
                    station.objSearch[id] = this.value;
                    station.numOfInputSearch++;
                    if (station.numOfInputSearch > 11) {
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
            "url": apiUrl + "station-type/get-list-station-pagination",
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
                station.objSearch = {
                    s_objectType: '',
                    s_objectTypeName: '',
                    s_stationCode: '',
                    s_stationName: '',
                    s_stationLong: '',
                    s_stationLat: '',
                    s_provinceName: '',
                    s_districtName: '',
                    s_wardName: '',
                    s_address: '',
                    s_riverName: '',
                    // s_stationHeight: '',
                    s_status: '',
                    // s_parameterTypeName: '',
                    // s_unitName: '',
                    // s_device: '',
                    // s_measure: '',
                    // s_note: ''
                };
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
                        // "tsId": responseJson.content[i].tsId,
                        "objectType": responseJson.content[i].objectType,
                        "objectTypeName": responseJson.content[i].objectTypeName,
                        "stationId": responseJson.content[i].stationId,
                        // "tsTypeId": responseJson.content[i].tsTypeId,
                        // "parameterTypeId": responseJson.content[i].parameterTypeId,
                        // "parameterTypeName": responseJson.content[i].parameterTypeName,
                        // "parameterTypeDescription": responseJson.content[i].parameterTypeDescription,
                        "stationCode": responseJson.content[i].stationCode,
                        "stationName": responseJson.content[i].stationName,
                        "stationLong": responseJson.content[i].stationLong,
                        "stationLat": responseJson.content[i].stationLat,
                        "provinceName": responseJson.content[i].provinceName,
                        "districtName": responseJson.content[i].districtName,
                        "wardName": responseJson.content[i].wardName,
                        "address": responseJson.content[i].address,
                        "riverName": responseJson.content[i].riverName,
                        // "stationHeight": responseJson.content[i].stationHeight,
                        "status": responseJson.content[i].status,
                        // "parameterTypeName": responseJson.content[i].parameterTypeName,
                        // "unitName": responseJson.content[i].unitName,
                        "districtId": responseJson.content[i].districtId,
                        // "measure": responseJson.content[i].measure,
                        // "note": responseJson.content[i].note
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
        station.enabled_right();
        $("#btnsave").css("display", "inline");
        $("#btnDelete").css("display", "inline");
        $("#btnReset").css("display", "inline");
        $("#btncancer").css("display", "inline");
        $("#btnDonew").attr("disabled", true);
        station.togle_search();
    });

    $('#btncancer').click(function () {
        station.disabled_right();
        $("#btnsave").css("display", "none");
        $("#btnDelete").css("display", "none");
        $("#btnReset").css("display", "none");
        $("#btncancer").css("display", "none");
        $("#btnDonew").attr("disabled", false);
        station.show_search();
    });
});
