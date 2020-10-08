var station =
{
    init : function (){
        station.getStationType();
        station.getProvince();
        // station.getRiver();
        station.getUnit();
    },
    //lay loai tram
    getStationType : function() {
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
                $("#stationTypeAdd").select2({data: data});
            }
        });
    },
    getProvince : function (){
        $.ajax({
            headers: {
                'Authorization': token
            },
            url: apiUrl + "common/get-select-list-provinces",
            method: "GET",
            contentType: "application/json",
            success: function (data) {
                console.log(data);
                $("#provinceAdd").select2({data: data});
            }
        });
    },
    getDistrict : function (obj){
        let provinceId = $(obj).val();
        if(provinceId == -1){
            return ;
        }
        $.ajax({
            headers: {
                'Authorization': token
            },
            url: apiUrl + "common/get-select-list-district?provinceId="+provinceId,
            method: "GET",
            contentType: "application/json",
            success: function (data) {
                console.log(data);
                $("#districtAdd").select2({data: data});
            }
        });
    },
    getWard : function (obj){
        let provinceId = $("#provinceAdd").val();
        let districtId = $(obj).val();
        if(provinceId == -1){
            return ;
        }
        if(districtId == -1){
            return ;
        }
        $.ajax({
            headers: {
                'Authorization': token
            },
            url: apiUrl + "common/get-select-list-ward?provinceId=" + provinceId + "&districtId=" + districtId,
            method: "GET",
            contentType: "application/json",
            success: function (data) {
                console.log(data);
                $("#districtAdd").select2({data: data});
            }
        });
    },
    getRiver : function (){
        $.ajax({
            headers: {
                'Authorization': token
            },
            url: apiUrl + "common/get-select-list-rivers",
            method: "GET",
            contentType: "application/json",
            success: function (data) {
                console.log(data);
                $("#riverAdd").select2({data: data});
            }
        });
    },
    getUnit : function (){
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
    checkStationType : function (obj){
        let stationTypeText = obj.options[obj.selectedIndex].text;
        let stationTypeId = obj.options[obj.selectedIndex].value;
        console.log(stationTypeText);
        if(stationTypeText.startsWith("HV") || stationTypeId == -1){
            $("#riverAdd").prop("disabled",true);
        }else{
            $("#riverAdd").prop("disabled",false);
            station.getRiver();
        }
    },
    btnAddParameter : function (){

    },
    btnRefreshParamter : function (){
        $("#parameter").val('');
        $("#unit").val('');
        $("#frequency").val('');
        $("#note").val('');
    }
}
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

function createStation(e) {
    e.preventDefault();
    let data = {
        "ip": $('#inputIp').val(),
        "port": $('#inputPort').val(),
        "username": $('#inputUsername').val(),
        "password": $('#inputPassword').val(),
        "domain": $('#inputDomain').val(),
        "senderName": $('#inputSenderName').val(),
        "email": $('#inputEmail').val(),
        "protocol": $('#inputProtocol').val()
    }

    $.ajax({
        headers: {

            'Authorization': token
        },
        "url": apiUrl + "mail-config/create-mail-config",
        "method": "POST",
        "contentType": "application/json",
        "data": JSON.stringify(data),
        "success": function (response) {
            alert("Thành công")
            location.reload();
        },
        "error": function (error) {

        }
    })
}

let objSearch = {
    s_tsName: '',
    s_stationNo: '',
    s_stationName: '',
    s_stationLong: '',
    s_stationLat: '',
    s_provinceName: '',
    s_districtName: '',
    s_wardName: '',
    s_storage: '',
    s_riverId: '',
    // s_stationHeight: '',
    s_status: '',
    s_parameterTypeName: '',
    s_unitName: '',
    // s_device: '',
    // s_measure: '',
    // s_note: ''
};

$(document).ready(function () {
    $('#tableDataView thead th').each(function () {
        var title = $(this).text();
        var dataId = $(this).attr("data-id");
        if (dataId != null && dataId != undefined) {
            $(this).html('<input class="table-data-input-search" id="'+ dataId +'" type="text" placeholder="Search ' + title + '" />');
        }
    });

    var search = $.fn.dataTable.util.throttle(
        function ( val ) {
            table.search( val ).draw();
        },
        1000
    );


    showLoading();
    var draw = 0;
    var table = $('#tableDataView').DataTable({
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
	        { "data":""},
            {"data": "indexCount"},
            {"data": "tsName"},
            {"data": "stationNo"},
            {"data": "stationName"},
            {"data": "stationLong"},
            {"data": "stationLat"},
            {"data": "provinceName"},
            {"data": "districtName"},
            {"data": "wardName"},
            {"data": "storage"},
            {"data": "riverId"},
            // {"data": "stationHeight"},
            {"data": "status"},
            {"data": "parameterTypeName"},
            {"data": "unitName"},
            // {"data": "device"},
            // {"data": "measure"},
            // {"data": "note"}
        ],
        initComplete: function () {
            // Apply the search
            this.api().columns().every(function () {
                var that = this;
                $('.table-data-input-search').on('keyup change clear', function () {
                    let id = $(this).attr("id");
                    // if (that.search() !== this.value) {
                    //
                    // }
                    objSearch[id] = this.value;
                    search(JSON.stringify(objSearch))
                        .draw();
                });
            });
        },
        "ajax": {
            headers: {
                'Authorization': token
            },
            "url": apiUrl + "station-type/get-list-station-time-series-pagination",
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
                objSearch = {
                    s_tsName: '',
                    s_stationNo: '',
                    s_stationName: '',
                    s_stationLong: '',
                    s_stationLat: '',
                    s_provinceName: '',
                    s_districtName: '',
                    s_wardName: '',
                    s_storage: '',
                    s_riverId: '',
                    // s_stationHeight: '',
                    s_status: '',
                    s_parameterTypeName: '',
                    s_unitName: '',
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
                        "":"",
                        "indexCount": i + 1,
                        // "tsId": responseJson.content[i].tsId,
                        "tsName": responseJson.content[i].tsName,
                        "stationNo": responseJson.content[i].stationNo,
                        "stationName": responseJson.content[i].stationName,
                        "stationLong": responseJson.content[i].stationLong,
                        "stationLat": responseJson.content[i].stationLat,
                        "provinceName": responseJson.content[i].provinceName,
                        "districtName": responseJson.content[i].districtName,
                        "wardName": responseJson.content[i].wardName,
                        "storage": responseJson.content[i].storage,
                        "riverId": responseJson.content[i].riverId,
                        // "stationHeight": responseJson.content[i].stationHeight,
                        "status": responseJson.content[i].status,
                        "parameterTypeName": responseJson.content[i].parameterTypeName,
                        "unitName": responseJson.content[i].unitName,
                        // "device": responseJson.content[i].device,
                        // "measure": responseJson.content[i].measure,
                        // "note": responseJson.content[i].note
                    })
                }

                return JSON.stringify(dataRes);
            }
        }
    });
    station.init();
    disabled_right();
    show_search();
    disableLoading();
});

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
    formReset();
});

function formReset() {
    $('#form_data')[0].reset();
}


$('#btnDonew').click(function () {
    enabled_right();
    $("#btnsave").css("display", "inline");
    $("#btnDelete").css("display", "inline");
    $("#btnReset").css("display", "inline");
    $("#btncancer").css("display", "inline");
    $("#btnDonew").attr("disabled", true);
    togle_search();
});

$('#btncancer').click(function () {
    disabled_right();
    $("#btnsave").css("display", "none");
    $("#btnDelete").css("display", "none");
    $("#btnReset").css("display", "none");
    $("#btncancer").css("display", "none");
    $("#btnDonew").attr("disabled", false);
    show_search();
});

function disabled_right() {
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
}

function enabled_right() {
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
}

function show_search() {
    $("#box_info").hide(500);
    $("#box_search").attr('class', 'col-sm-12');
}

function togle_search() {
    $("#box_info").show(500);
    $("#box_info").attr('class', 'col-sm-7');
    $("#box_search").attr('class', 'col-sm-5');
}