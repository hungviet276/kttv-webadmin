const uuid = global.uuidv4();
const station =
    {
        clientAction: '',
        indexOfRow: -1,
        table: undefined,
        tableParamter: undefined,
        numOfInputSearch: 0,
        oldValue: undefined,
        keyUpTime: undefined,
        uuid: uuid,
        objSearch: {
            s_objectType: '',
            s_objectTypeName: '',
            s_stationCode: '',
            s_stationName: '',
            s_longtitude: '',
            s_latitude: '',
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
        parameter: {
            stationId: null,
            countryId: null,
            areaId: null,
            provinceId: null,
            districtId: null,
            wardId: null,
            siteId: null,
            riverId:null
        },
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
            global.showLoading();
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
                    $("#stationTypeIdControl").select2({data: data});
                    global.disableLoading();
                }
            });
        },
        getArea: function () {
            let countryId = 281;
            global.showLoading();
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
                    $("#areaId").empty();
                    $("#areaId").select2({data: data});
                    global.disableLoading();
                }
            });
        },
        getProvince: function (obj) {
            let areaId = $(obj).val();
            global.showLoading();
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
                    let emptyOptions = new Option("Lựa chọn", "-1", true, false);
                    $("#provinceId").empty();
                    $("#districtId").empty();
                    $("#districtId").append(emptyOptions).trigger('change');
                    let emptyOptions2 = new Option("Lựa chọn", "-1", true, false);
                    $("#wardId").empty();
                    $("#wardId").append(emptyOptions2).trigger('change');
                    $("#provinceId").select2({data: data});
                    if (station.clientAction === 'update') {
                        $('#provinceId').val(station.parameter.provinceId).trigger('change');
                    }
                    global.disableLoading();
                }
            });
        },
        getDistrict: function (obj) {
            let provinceId = $(obj).val();
            if (provinceId == -1) {
                return;
            }
            global.showLoading();
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
                    let emptyOptions = new Option("Lựa chọn", "-1", true, false);
                    $("#wardId").empty();
                    $("#wardId").append(emptyOptions).trigger('change');
                    $("#districtId").empty();
                    $("#districtId").select2({data: data});
                    if (station.clientAction === 'update') {
                        $('#districtId').val(station.parameter.districtId).trigger('change');
                    }
                    global.disableLoading();
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
            global.showLoading();
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
                    $("#wardId").empty();
                    $("#wardId").select2({data: data});
                    if (station.clientAction === 'update') {
                        $('#wardId').val(station.parameter.wardId).trigger('change');
                    }
                    global.disableLoading();
                }
            });
        },
        getRiver: function () {
            global.showLoading();
            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: apiUrl + "common/get-select-list-rivers",
                method: "GET",
                contentType: "application/json",
                success: function (data) {
                    console.log(data);
                    $("#riverId").empty();
                    $("#riverId").select2({data: data});
                    if (station.clientAction === 'update') {
                        $('#riverId').val(station.parameter.riverId).trigger('change');
                    }
                    global.disableLoading();
                }
            });
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
                    $("#unit").select2({data: data});
                    global.disableLoading();
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
            if(!station.validateParameter()){
                return false;
            }
            let tsConfigId = $("#tsConfigId").val();
            let stationId = station.parameter.stationId;
            let tsName = $("#tsName").val().trim();
            let note = $("#note").val();
            let data = {
                "tsConfigId": tsConfigId,
                "uuid": station.uuid,
                "tsName": tsName,
                "stationId": stationId
            }
            global.showLoading();
            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: apiUrl + "station-type/create-time-series",
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
            $("#tsConfigId").val('-1').trigger('change');
            $("#tsName").val('');
        },
        deleteParameter: function (id) {
            if (!confirm('Bạn thực sự muốn xóa ?')) {
                return ;
            }
            global.showLoading();
            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: apiUrl + "station-type/delete-time-series?stationParamterId=" + id,
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
        onChangeParameter: function (obj) {
            let parameterText = obj.options[obj.selectedIndex].text;
            let parameterId = obj.options[obj.selectedIndex].value;
            global.showLoading();
            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: apiUrl + "station-type/get-select-time-series-config",
                method: "GET",
                data: "parameterId=" + parameterId,
                success: function (data) {
                    $("#tsConfigId").empty();
                    $("#tsConfigId").select2({data: data});
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
            // let parameter = $("#parameter").val();
            // let timeseriesName = $("#timeseriesName").val();
            // let measure = $("#measure").val();
            let uuid = station.uuid;
            let stationTypeId = $("#stationTypeId").val().trim();
            let modeStationType = $("#modeStationType").val().trim();
            let stationCode = $("#stationCode").val().trim();
            let stationName = $("#stationName").val().trim();
            let longtitude = $("#longtitude").val().trim();
            let latitude = $("#latitude").val().trim();

            let areaId = $("#areaId").val().trim();
            let data = {
                // "parameter": parameter,
                // "timeseriesName": timeseriesName,
                // "measure":measure,
                "uuid": uuid,
                "stationTypeId": stationTypeId,
                "modeStationType": modeStationType,
                "stationCode": stationCode,
                "stationName": stationName,
                "longtitude": longtitude,
                "latitude": latitude,
                "countryId": 281,
                "areaId": areaId,
                "areaName":areaName,
                "provinceId": provinceId,
                "provinceName":provinceName,
                "districtId": districtId,
                "districtName":districtName,
                "wardId": wardId,
                "wardName":wardName,
                "address": address,
                "riverId": riverId,
                "riverName":riverName,
                "status": status,
                "username": global.username
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
                        //reset cac thong tin them moi
                        station.btnRefresh();
                        station.btnRefreshParameter();
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
            // let parameter = $("#parameter").val();
            // let timeseriesName = $("#timeseriesName").val();
            // let measure = $("#measure").val();
            let uuid = station.uuid;
            let stationTypeId = $("#stationTypeId").val().trim();
            let modeStationType = $("#modeStationType").val().trim();
            let stationCode = $("#stationCode").val().trim();
            let stationName = $("#stationName").val().trim();
            let longtitude = $("#longtitude").val().trim();
            let latitude = $("#latitude").val().trim();

            let areaId = $("#areaId").val().trim();
            let areaName = null;
            if(areaId !== "-1") {
                areaName = $("#areaId :selected").text().trim();
            }

            let provinceId = $("#provinceId").val().trim();
            let provinceName = null;
            if(provinceId !== "-1") {
                provinceName = $("#provinceId :selected").text().split("-")[1].trim();
            }
            let districtId = $("#districtId").val().trim();
            let districtName = null;
            if(districtId !== "-1") {
                districtName = $("#districtId :selected").text().split("-")[1].trim();
            }
            let wardId = $("#wardId").val().trim();
            let wardName = null;
            if(wardId !== "-1") {
                wardName = $("#wardId :selected").text().split("-")[1].trim();
            }
            let address = $("#address").val().trim();
            let riverId = $("#riverId").val();
            let riverName = null;
            if(riverId !== "-1" && riverId !== null) {
                riverName = $("#riverId :selected").text().split("-")[1].trim();
            }
            let status = $("#status").val().trim();
            riverId = (riverId === "-1" || riverId === null) ? null : riverId;
            let data = {
                // "parameter": parameter,
                // "timeseriesName": timeseriesName,
                "stationId": station.parameter.stationId,
                "uuid": uuid,
                "stationTypeId": stationTypeId,
                "modeStationType": modeStationType,
                "stationCode": stationCode,
                "stationName": stationName,
                "longtitude": longtitude,
                "latitude": latitude,
                "countryId": 281,
                "areaId": areaId,
                "areaName":areaName,
                "provinceId": provinceId,
                "provinceName":provinceName,
                "districtId": districtId,
                "districtName":districtName,
                "wardId": wardId,
                "wardName":wardName,
                "address": address,
                "riverId": riverId,
                "riverName":riverName,
                "status": status,
                "username": global.username
            }
            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: apiUrl + "station-type/update-station-time-series",
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
                        station.disabled_right();
                        $("#btnsave").css("display", "none");
                        $("#btnDelete").css("display", "none");
                        $("#btnReset").css("display", "none");
                        $("#btnCancel").css("display", "none");
                        $("#btnDoNew").attr("disabled", false);
                        if (station.indexOfRow > -1) {
                            station.table.row(station.indexOfRow).deselect();
                        }
                        station.show_search();
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
            $("#stationTypeId").val('-1').trigger('change');
            $("#modeStationType").val('1').trigger('change');
            $("#stationCode").val('');
            $("#stationName").val('');
            $("#longtitude").val('');
            $("#latitude").val('');

            $("#areaId").val('-1').trigger('change');
            $("#provinceId").val('-1').trigger('change');
            $("#districtId").val('-1').trigger('change');
            $("#wardId").val('-1').trigger('change');
            $("#address").val('');
            $("#riverId").val('-1').trigger('change');
            $("#status").val('1').trigger('change');
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
                url: apiUrl + "station-type/delete-station-time-series",
                method: "POST",
                // contentType: "application/json",
                data: jQuery.param({stationId: station.parameter.stationId}),
                success: function (data) {
                    if (data.status == 1) {
                        toastr.success('Thành công', data.message);
                        //reset cac thong tin them moi
                        station.btnRefresh();
                        station.btnRefreshParameter();
                        station.uuid = global.uuidv4();
                        station.table.ajax.reload();
                        station.disabled_right();
                        $("#btnsave").css("display", "none");
                        $("#btnDelete").css("display", "none");
                        $("#btnReset").css("display", "none");
                        $("#btnCancel").css("display", "none");
                        $("#btnDoNew").attr("disabled", false);
                        if (station.indexOfRow > -1) {
                            station.table.row(station.indexOfRow).deselect();
                        }
                        station.show_search();
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
        searchParameter: function () {
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

                        {"data": "indexCount","render": $.fn.dataTable.render.text()},
                        {"data": "parameterName","render": $.fn.dataTable.render.text()},
                        // {"data": "unitName"},
                        // {"data": "note"},
                        {"data": ""}
                    ],
                    initComplete: function () {
                    },
                    "ajax": {
                        headers: {
                            'Authorization': token
                        },
                        "url": apiUrl + "station-type/get-list-time-series-pagination",
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

                            for (let i = 0; i < responseJson.content.length; i++) {
                                dataRes.data.push({
                                    // "": "",
                                    "indexCount": i + 1,
                                    "uuid": responseJson.content[i].uuid,
                                    "stationParamterId": responseJson.content[i].stationParamterId,
                                    "paramterTypeId": responseJson.content[i].paramterTypeId,
                                    "parameterName": responseJson.content[i].parameterName,
                                    "stationId": responseJson.content[i].stationId,
                                    "": "<span class='fa fa-trash' onclick='station.deleteParameter(" + responseJson.content[i].stationParamterId + ")'></span>"
                                })
                            }
                            if (dataRes.data[0] !== undefined) {
                                station.uuid = dataRes.data[0].uuid;
                                station.objParameterSearch['s_uuid'] = station.uuid;
                            }
                            return JSON.stringify(dataRes);
                        }
                    }
                });
            } else {
                station.tableParameter.search(station.objParameterSearch).draw();
            }
        },
        rowSelect: function (e, dt, type, indexes) {
            // $('#btnCopy').removeAttr('disabled');
            // $('#btnDelete').removeAttr('disabled');

        },
        preEdit: function (indexes){
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
                $("#btnsave").css("display", "none");
                $("#btnDelete").css("display", "inline");
                $("#btnReset").css("display", "none");
                $("#btnCancel").css("display", "inline");
                $("#btnupdate").css("display", "inline");
                // $("#btnDoNew").attr("disabled", true);
                station.togle_search();

                $('#stationTypeId').val(rowData[0].stationTypeId).trigger('change');
                $("#stationTypeId").prop("disabled",true);
                $('#modeStationType').val(rowData[0].modeStationType);
                $('#stationCode').val(rowData[0].stationCode);
                $('#stationName').val(rowData[0].stationName);
                $('#longtitude').val(rowData[0].longtitude);
                $('#latitude').val(rowData[0].latitude);
                $('#areaId').val(rowData[0].areaId).trigger('change');

                station.parameter.stationId = rowData[0].stationId;
                station.parameter.provinceId = rowData[0].provinceId;
                station.parameter.districtId = rowData[0].districtId;
                station.parameter.wardId = rowData[0].wardId;
                station.parameter.siteId = rowData[0].siteId;
                station.parameter.riverId = rowData[0].riverId;

                // $('#districtId').val(rowData[0].districtId).trigger('change');
                // $('#wardId').val(rowData[0].wardId).trigger('change');
                $('#address').val(rowData[0].address);
                $('#riverId').val(rowData[0].riverId).trigger('change');
                $('#status').val(rowData[0].status).trigger('change');

                //lay thong tin list parameter
                station.parameter.stationId = rowData[0].stationId;
                station.objParameterSearch['s_stationId'] = rowData[0].stationId;
                station.objParameterSearch['s_uuid'] = null;
                if (station.tableParameter === undefined) {
                    station.searchParameter();
                } else {
                    station.tableParameter.search(station.objParameterSearch).draw();
                }
            }
        },
        rowDeselect: function (e, dt, type, indexes) {
            // $('#btnCopy').attr('disabled', 'true');
            // $('#btnDelete').attr('disabled', 'true');
            // $('#btnEdit').attr('disabled', 'true');
            // $('#form_data')[0].reset();
            // station.disabled_right();
            // $("#btnsave").css("display", "none");
            // $("#btnDelete").css("display", "none");
            // $("#btnReset").css("display", "none");
            // $("#btnCancel").css("display", "none");
            // $("#btnDoNew").attr("disabled", false);
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
            $("#box_info").hide(0);
            $("#box_search").show(500);
            $("#box_search").attr('class', 'col-sm-12');
            station.table.rows().deselect()
        },
        togle_search: function () {
            $("#box_info").show(500);
            $("#box_info").attr('class', 'col-sm-12');
            $("#box_search").hide(0);
            // $("#box_search").attr('class', 'col-sm-5');
        },
        formReset: function () {
            $('#form_data')[0].reset();
        },
        validate: function () {
            $('.help-block').html('');

            if ($('#stationTypeId').val().trim() === "-1") {
                $('#stationTypeId_error').html('Loại trạm không được để trống');
                $('#stationTypeId').focus();
                return false;
            }
            if ($('#modeStationType').val().trim() === "-1") {
                $('#modeStationType_error').html('Chế độ điều khiển không được để trống');
                $('#modeStationType').focus();
                return false;
            }
            if ($('#stationCode').val().trim().length < 1) {
                $('#stationCode_error').html('Mã trạm không được để trống');
                $('#stationCode').focus();
                return false;
            }
            if ($('#stationName').val().trim().length < 1) {
                $('#stationName_error').html('Tên trạm không được để trống');
                $('#stationName').focus();
                return false;
            }
            if ($('#longtitude').val().trim().length < 1) {
                $('#longtitude_error').html('Kinh độ không được để trống');
                $('#longtitude').focus();
                return false;
            }
            if ($('#latitude').val().trim().length < 1) {
                $('#latitude_error').html('Vĩ độ không được để trống');
                $('#latitude').focus();
                return false;
            }
            return true;
        },
        validateParameter:function (){
            $('.help-block').html('');

            if ($('#parameter').val().trim() === "-1") {
                $('#parameter_error').html('Yếu tố không được để trống');
                $('#parameter').focus();
                return false;
            }
            if ($('#tsName').val().trim().length < 1) {
                $('#tsName_error').html('Time series name không được để trống');
                $('#tsName').focus();
                return false;
            }
            if ($('#tsConfigId').val().trim() === "-1") {
                $('#tsConfigId_error').html('Time series config không được để trống');
                $('#tsConfigId').focus();
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
            $('.help-block').html('');
            $("#btnsave").css("display", "none");
            $("#btnDelete").css("display", "none");
            $("#btnReset").css("display", "none");
            $("#btnCancel").css("display", "none");
            $("#btnDoNew").attr("disabled", false);
            if (station.indexOfRow > -1) {
                station.table.row(station.indexOfRow).deselect();
            }
            station.show_search();
        },
        btnExport:function (){
            global.showLoading();
            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: apiUrl + 'station-type/export',
                data: JSON.stringify(station.objSearch),
                method: 'POST',
                contentType: "application/json",
                xhrFields: {
                    responseType: 'blob'
                },
                success: function (data, textStatus, xhr) {
                    global.disableLoading();
                    console.log(textStatus + "| " + xhr.getAllResponseHeaders());
                    var a = document.createElement('a');
                    var url = window.URL.createObjectURL(data);
                    console.log("url: "+ url);
                    a.href = url;
                    a.download = xhr.getResponseHeader("content-disposition");
                    document.body.append(a);
                    a.click();
                    // a.remove();
                    // window.URL.revokeObjectURL(url);
                }
            });
        }
    }

$(document).ready(function () {
    $('#tableDataView thead th').each(function () {
        var title = $(this).text();
        var dataId = $(this).attr("data-id");
        var is_select = $(this).attr("is_select");
        if (dataId != null && dataId != undefined) {
            if (is_select == null || is_select == undefined) {
                $(this).html('<input id="' + dataId + '" class="table-data-input-search" type="text" autocomplete="off" placeholder="Search ' + title + '" />');
            } else {
                $(this).html('<select class="select_table" id='+ dataId +'> <option value="">Hãy chọn</option><option value="1">Hoạt động</option> <option value="0">Không hoạt động</option> </select>');
            }
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
                // orderable: false,
                // className: 'select-checkbox',
                targets: 0,
                checkboxes: {
                    selectRow: true
                }
            }, {
                targets: 14,
                render: function (data, type, row) {
                    if (data === 1) {
                        return '<div class="status_green">Hoạt động</div>';
                    } else {
                        return '<div class="status_red">Không hoạt động</div>';
                    }
                }
            },
            // {"width": "25px", "targets": 0}
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
            {"data": ""},
            {"data": "indexCount","render": $.fn.dataTable.render.text()},
            {"data": "control"},
            {"data": "objectType","render": $.fn.dataTable.render.text()},
            {"data": "objectTypeName","render": $.fn.dataTable.render.text()},
            {"data": "stationCode","render": $.fn.dataTable.render.text()},
            {"data": "stationName","render": $.fn.dataTable.render.text()},
            {"data": "longtitude","render": $.fn.dataTable.render.text()},
            {"data": "latitude","render": $.fn.dataTable.render.text()},
            {"data": "provinceName","render": $.fn.dataTable.render.text()},
            {"data": "districtName","render": $.fn.dataTable.render.text()},
            {"data": "wardName","render": $.fn.dataTable.render.text()},
            {"data": "address","render": $.fn.dataTable.render.text()},
            {"data": "riverName","render": $.fn.dataTable.render.text()},
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
                $('.table-data-input-search').on('keyup onchange', function () {
                    // let id = $(this).attr("id");
                    // // if (that.search() !== this.value) {
                    // //
                    // // }
                    // station.objSearch[id] = this.value;
                    // station.numOfInputSearch++;
                    // if (station.numOfInputSearch > 11) {
                    //     that.search(JSON.stringify(station.objSearch)).draw();
                    //     station.numOfInputSearch = 0;
                    // }
                    station.oldValue = this.___value___;
                    this.___value___ = this.value;
                    if (station.oldValue == this.___value___) return;
                    station.keyUpTime = new Date().getTime();
                    let id = $(this).attr('id');
                    station.objSearch[id] = this.value;
                    setTimeout(function () {
                        if (new Date().getTime() - station.keyUpTime > 1000) {
                            station.table.search(station.objSearch).draw();
                            station.keyUpTime = new Date().getTime();
                        }
                        return;
                    }, 1100);
                });


            });
            $('.select_table').on('change', function () {
                let id = $(this).attr("id");
                station.objSearch[id] = this.value;
                station.table.search(JSON.stringify(station.objSearch)).draw();
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
                        "control": "<span class='fa fa-edit' title='Cập nhật'  onclick='station.preEdit(" + i + ")' style='cursor: pointer'></span> &nbsp;<span class='fa fa-wrench' title='Điều khiển'  onclick='station.preControl(" + i + ")' style='cursor: pointer'></span>",
                        "stationLongName": responseJson.content[i].stationLongName,
                        "objectType": responseJson.content[i].objectType,
                        "objectTypeName": responseJson.content[i].objectTypeName,
                        "stationId": responseJson.content[i].stationId,
                        "elevation": responseJson.content[i].elevation,
                        "trans_miss": responseJson.content[i].trans_miss,
                        "areaId": responseJson.content[i].areaId,
                        "provinceId": responseJson.content[i].provinceId,
                        "stationCode": responseJson.content[i].stationCode,
                        "stationName": responseJson.content[i].stationName,
                        "longtitude": responseJson.content[i].longtitude,
                        "latitude": responseJson.content[i].latitude,
                        "provinceName": responseJson.content[i].provinceName,
                        "districtName": responseJson.content[i].districtName,
                        "wardName": responseJson.content[i].wardName,
                        "address": responseJson.content[i].address,
                        "riverName": responseJson.content[i].riverName,
                        "stationHeight": responseJson.content[i].stationHeight,
                        "status": responseJson.content[i].status,
                        "riverId": (responseJson.content[i].riverId === null || responseJson.content[i].riverId === 0) ? -1 : responseJson.content[i].riverId,
                        "stationTypeId": responseJson.content[i].objectTypeId,
                        "districtId": responseJson.content[i].districtId,
                        "wardId": responseJson.content[i].wardId,
                        "siteId": responseJson.content[i].siteId,
                        "modeStationType": responseJson.content[i].modeStationType,
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

    $('#btnDoNew').click(function () {
        station.clientAction = 'insert';
        station.enabled_right();
        $("#btnsave").css("display", "inline");
        $("#btnDelete").css("display", "none");
        $("#btnupdate").css("display", "none");
        $("#btnReset").css("display", "inline");
        $("#btnCancel").css("display", "inline");
        $("#btnDoNew").attr("disabled", true);
        $("#stationTypeId").prop("disabled",false);
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
        $("#btnsave").css("display", "none");
        $("#btnDelete").css("display", "none");
        $("#btnReset").css("display", "none");
        $("#btnCancel").css("display", "none");
        $("#btnDoNew").attr("disabled", false);
        if (station.indexOfRow > -1) {
            station.table.row(station.indexOfRow).deselect();
        }
        station.show_search();
    });

});
