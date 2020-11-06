var station =
    {
        clientAction: '',
        indexOfRow: -1,
        table: undefined,
        oldValue: undefined,
        keyUpTime: undefined,
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
            s_status: '',
        },
        parameter: {
            stationId: null,
            countryId: null,
            areaId: null,
            provinceId: null,
            districtId: null,
            wardId: null,
            siteId: null,
            riverId: null
        },
        objStation: {},
        init: function () {
            station.getStationCode();
            // station.getArea();
            // station.getProvince();
            // station.getDistrict();
            // station.getRiver();
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
                    $("#stationTypeIdP").select2({data: data});
                    $("#stationTypeIdC").select2({data: data});
                    $("#stationTypeId").select2({data: data});
                    global.disableLoading();
                }
            });
        },
        getStationCode: function () {
            global.showLoading();
            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: apiUrl + "station-type/get-list-select-station",
                method: "GET",
                contentType: "application/json",
                success: function (data) {
                    console.log(data);
                    $("#stationCode").select2({data: data});
                    $("#stationCodeN").select2({data: data});
                    global.disableLoading();
                },
                error: function (data){
                    if(data.status === 401){
                        window.location.href = "/logout";
                    }
                    //console.log(data);
                }
            });
        },
        getStation: function (stationId) {
            global.showLoading();
            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: apiUrl + "station-type/get-list-station-pagination",
                data: "stationId=" + stationId,
                method: "GET",
                async:false,
                contentType: "application/json",
                success: function (data) {
                    console.log(data);
                    station.objStation['address'] = data[0].address;
                    station.objStation['areaId'] = data[0].areaId;
                    station.objStation['countryId'] = data[0].countryId;
                    station.objStation['districtId'] = data[0].districtId;
                    station.objStation['districtName'] = data[0].districtName;
                    station.objStation['elevation'] = data[0].elevation;
                    station.objStation['latitude'] = data[0].latitude;
                    station.objStation['longtitude'] = data[0].longtitude;
                    station.objStation['modeStationType'] = data[0].modeStationType;
                    station.objStation['objectType'] = data[0].objectType;
                    station.objStation['objectTypeId'] = data[0].objectTypeId;
                    station.objStation['objectTypeName'] = data[0].objectTypeName;
                    station.objStation['provinceId'] = data[0].provinceId;
                    station.objStation['provinceName'] = data[0].provinceName;
                    station.objStation['riverId'] = data[0].riverId;
                    station.objStation['riverName'] = data[0].riverName;
                    station.objStation['stationCode'] = data[0].stationCode;
                    station.objStation['stationId'] = data[0].stationId;
                    station.objStation['stationLongName'] = data[0].stationLongName;
                    station.objStation['stationName'] = data[0].stationName;
                    station.objStation['stationTypeId'] = data[0].stationTypeId;
                    station.objStation['status'] = data[0].status;
                    station.objStation['trans_miss'] = data[0].trans_miss;
                    station.objStation['wardId'] = data[0].wardId;
                    station.objStation['wardName'] = data[0].wardName;
                    console.log(station.objStation);

                    $('#stationTypeIdC').val(station.objStation.stationTypeId).trigger('change');
                    $('#modeStationTypeC').val(station.objStation.modeStationType);
                    $('#stationCodeC').val(station.objStation.stationCode);
                    $('#stationNameC').val(station.objStation.stationName);
                    $('#longtitudeC').val(station.objStation.longtitude);
                    $('#latitudeC').val(station.objStation.latitude);
                    $('#areaIdC').val(station.objStation.areaId).trigger('change');
                    // $('#provinceIdP').val(rowData[0].areaId).trigger('change');
                    // $('#districtIdP').val(rowData[0].districtId).trigger('change');
                    // $('#wardIdP').val(rowData[0].wardId).trigger('change');
                    $('#addressC').val(station.objStation.address);
                    $('#riverIdC').val(station.objStation.riverId).trigger('change');
                    // console.log("rowData[0].status",rowData[0].status)
                    $('#statusC').val(station.objStation.status);

                    global.disableLoading();
                }
            });
        },
        preViewDatail: function (index) {
            $("#management-station-control").modal();
            let rowData = station.table.rows(index).data().toArray();
            if (rowData != null && rowData != undefined && rowData.length > 0) {
                console.log(rowData);

                $('#stationTypeIdP').val(rowData[0].stationTypeId).trigger('change');
                $('#modeStationTypeP').val(rowData[0].modeStationType);
                $('#stationCodeP').val(rowData[0].stationCode);
                $('#stationNameP').val(rowData[0].stationName);
                $('#longtitudeP').val(rowData[0].longtitude);
                $('#latitudeP').val(rowData[0].latitude);
                $('#areaIdP').val(rowData[0].areaId).trigger('change');
                // $('#provinceIdP').val(rowData[0].areaId).trigger('change');
                // $('#districtIdP').val(rowData[0].districtId).trigger('change');
                // $('#wardIdP').val(rowData[0].wardId).trigger('change');
                $('#addressP').val(rowData[0].address);
                $('#riverIdP').val(rowData[0].riverId).trigger('change');
                // console.log("rowData[0].status",rowData[0].status)
                $('#statusP').val(rowData[0].status);

                station.getStation(rowData[0].stationId);

                station.parameter.stationId = rowData[0].stationId;
                station.parameter.provinceId = rowData[0].provinceId;
                station.parameter.districtId = rowData[0].districtId;
                station.parameter.wardId = rowData[0].wardId;
                station.parameter.siteId = rowData[0].siteId;
                station.parameter.riverId = rowData[0].riverId;
                station.clientAction = 'update';
            }
        },

        onSearch: function () {
            let stationTypeId = $("#stationTypeId").val();
            let inputFromDate = $("#inputFromDate").val();
            let inputToDate = $("#inputToDate").val();
            // station.objSearch['stationTypeId']
            for (let key in station.objSearch) {
                station.objSearch[key] = '';
            }
            station.objSearch['stationTypeId'] = stationTypeId;
            station.objSearch['inputFromDate'] = inputFromDate;
            station.objSearch['inputToDate'] = inputToDate;
            station.table.search(station.objSearch).draw();
        },
        btnExport: function () {
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
                    console.log("url: " + url);
                    a.href = url;
                    a.download = xhr.getResponseHeader("content-disposition");
                    document.body.append(a);
                    a.click();
                    // a.remove();
                    // window.URL.revokeObjectURL(url);
                }
            });
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
        },
        togle_search: function () {
            $("#box_info").show(500);
            $("#box_info").attr('class', 'col-sm-12');
            $("#box_search").hide(0);
            // $("#box_search").attr('class', 'col-sm-5');
        },
        btnRefresh: function () {
            $("#stationCodeN").val('-1').trigger('change');
            $("#statusN").val('-1');
            $("#timestampN").val('');
            $("#salinity").val('');
            $("#water_temperature").val('');
            $("#conductivity").val('');
        },
        validate: function () {
            $('.help-block').html('');

            if ($('#stationCodeN').val().trim() === "-1") {
                $('#stationCodeN_error').html('Mã trạm không được để trống');
                $('#stationCodeN').focus();
                return false;
            }
            if ($('#timestampN').val().trim() === "-1") {
                $('#timestampN_error').html('Ngày giờ không được để trống');
                $('#timestampN').focus();
                return false;
            }
            if ($('#statusN').val().trim().length < 1) {
                $('#statusN_error').html('Trạng thái không được để trống');
                $('#statusN').focus();
                return false;
            }
            if ($('#salinity').val().trim().length < 1) {
                $('#salinity_error').html('Tên trạm không được để trống');
                $('#salinity').focus();
                return false;
            }
            if ($('#water_temperature').val().trim().length < 1) {
                $('#water_temperature_error').html('Nhiệt độ nước không được để trống');
                $('#water_temperature').focus();
                return false;
            }
            if ($('#conductivity').val().trim().length < 1) {
                $('#conductivity_error').html('Vĩ độ không được để trống');
                $('#conductivity').focus();
                return false;
            }
            return true;
        },
        closePopup: function () {
            station.disabled_right();
            $('.help-block').html('');
            $("#btnSave").css("display", "none");
            $("#btnDelete").css("display", "none");
            $("#btnReset").css("display", "none");
            $("#btnCancer").css("display", "none");
            $("#btnDoNew").attr("disabled", false);
            if (station.indexOfRow > -1) {
                station.table.row(station.indexOfRow).deselect();
            }
            station.show_search();
        },
        btnSave: function (){
            if(station.validate()){
                global.showLoading();
                let stationCodeN = $("#stationCodeN").val().trim();
                let timestampN = $("#timestampN").val().trim();
                let statusN = $("#statusN").val().trim();
                let salinity = $("#salinity").val().trim();
                let water_temperature = $("#water_temperature").val().trim();
                let conductivity = $("#conductivity").val().trim();
                let pSalinity = $("#pSalinity").val().trim();
                let pWT = $("#pWT").val().trim();
                let pConductivity = $("#pConductivity").val().trim();

                let data = {
                    "stationCodeN": stationCodeN,
                    "timestampN": timestampN,
                    "statusN": statusN,
                    "salinity": salinity,
                    "waterTemperature": water_temperature,
                    "conductivity": conductivity,
                    "pSalinity": pSalinity,
                    "pWT": pWT,
                    "pConductivity": pConductivity,
                    "username": global.username
                }
                $.ajax({
                    headers: {
                        'Authorization': token
                    },
                    url: apiUrl + "station-type/create-manual-parameter",
                    method: "POST",
                    contentType: "application/json",
                    data: JSON.stringify(data),
                    success: function (data) {
                        if (data.status == 1) {
                            toastr.success('Thành công', data.message);
                            //reset cac thong tin them moi
                            station.btnRefresh();
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
            }
        }
    }

$(document).ready(function () {
    $('#timestamp').daterangepicker({
        timePicker: false,
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 2020,
        format:'DD/MM/YYYY',
        autoUpdateInput: false,
        autoApply: true,
        autoClose: true,
        showOtherMonths: true,
        alwaysShowCalendars: false,
        useCurrent: false,
        // minDate: new Date().setHours(0,0,0,0),
    });
    $('#timestamp').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('DD/MM/YYYY'));
    });

    $('#timestampN').daterangepicker({
        timePicker: true,
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 2020,
        format:'DD/MM/YYYY HH:mm',
        autoUpdateInput: false,
        autoApply: true,
        autoClose: true,
        showOtherMonths: true,
        alwaysShowCalendars: false,
        useCurrent: false,
        // minDate: new Date().setHours(0,0,0,0),
    });
    $('#timestampN').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('DD/MM/YYYY HH:mm'));
    });

    $('#tableDataView thead th').each(function () {
        var title = $(this).text();
        var dataId = $(this).attr("data-id");
        var is_select = $(this).attr("is_select");
        if (dataId != null && dataId != undefined) {
            if (is_select == null || is_select == undefined) {
                $(this).html('<input id="' + dataId + '" class="table-data-input-search" type="text" placeholder="Search ' + title + '" />');
            } else {
                $(this).html('<select class="select_table" id=' + dataId + '> <option value="">Hãy chọn</option><option value="1">Hoạt động</option> <option value="0">Không hoạt động</option> </select>');
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
            // targets: 0
        }
        ],
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
            {"data": "indexCount", "render": $.fn.dataTable.render.text()},
            {"data": "objectType", "render": $.fn.dataTable.render.text()},
            {"data": "stationCode", "render": $.fn.dataTable.render.text()},
            {"data": "stationName", "render": $.fn.dataTable.render.text()},
            {"data": "createdAt", "render": $.fn.dataTable.render.text()},
            {"data": "createById", "render": $.fn.dataTable.render.text()},
            {"data": "detail"},
        ],
        initComplete: function () {
            // Apply the search
            this.api().columns().every(function () {
                var that = this;
                $('.table-data-input-search').on('keyup onchange', function () {
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
            "url": apiUrl + "station-type/get-list-station-his-pagination",
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
                        "control": "<span class='fa fa-wrench' title='Điều khiển'  onclick='station.preControl(" + i + ")' style='cursor: pointer'></span>",
                        "id": responseJson.content[i].id,
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
                        "createdAt": responseJson.content[i].createdAt,
                        "createById": responseJson.content[i].createById,
                        "detail": "<i class='fas fa-eye' onclick='station.preViewDatail(" + i + ")'></i>",
                    })
                }

                return JSON.stringify(dataRes);
            }
        }
    });

    $('#btnDoNew').click(function () {
        clientAction = 'insert';
        station.enabled_right();
        $("#btnSave").css("display", "inline");
        $("#btnDelete").css("display", "none");
        $("#btnUpdate").css("display", "none");
        $("#btnReset").css("display", "inline");
        $("#btnCancer").css("display", "inline");
        $("#btnDoNew").attr("disabled", true);
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
    $('#btnCancer').click(function () {
        station.disabled_right();
        $("#btnSave").css("display", "none");
        $("#btnDelete").css("display", "none");
        $("#btnReset").css("display", "none");
        $("#btnCancer").css("display", "none");
        $("#btnDoNew").attr("disabled", false);
        if (station.indexOfRow > -1) {
            station.table.row(station.indexOfRow).deselect();
        }
        station.show_search();
    });
    station.init();
    global.disableLoading();

});
