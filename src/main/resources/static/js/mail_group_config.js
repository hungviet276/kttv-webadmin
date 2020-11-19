//var newOption = new Option(response.text, response.id, true, true);
//$('#value-type-station').append(newOption).trigger('change');
//$('#value-type-station').prop( "disabled", true );
$('#statusOutSite').select2({
    minimumResultsForSearch: -1,
    escapeMarkup: function(markup) {
        return markup;
    },
    templateSelection: function(data) {
        return data.text;
    }
});


let objSearch = {
    s_id: '',
    s_name: '',
    s_code: '',
    s_status: '',
    s_description: ''
};

$('#sexOutSite').select2({
    minimumResultsForSearch: -1,
    escapeMarkup: function(markup) {
        return markup;
    },
    templateSelection: function(data) {
        return data.text;
    }
});

$('#statusMailGroup').select2({
    minimumResultsForSearch: -1,
    escapeMarkup: function(markup) {
        return markup;
    },
    templateSelection: function(data) {
        return data.text;
    }
});
$('#status').select2({
    minimumResultsForSearch: -1,
    escapeMarkup: function(markup) {
        return markup;
    },
    templateSelection: function(data) {
        return data.text;
    }
});
$(document).ready(function () {
    show_search();
});
function show_search() {
    $("#box_info").hide(150);
    $("#box_search").show(250);
    $("#box_search").attr('class', 'col-sm-12');
}

$('#btncancer').click(function () {
    // disabled_right();
    $("#id").val("");
    $("#btnsave").css("display", "none");
    $("#btnDelete").css("display", "none");
    $("#btnResetUpdate").css("display", "none");
    $("#btncancer").css("display", "none");
    $("#btnDonew").attr("disabled", false);
    //validWarningThreshold.resetForm();
    //validator.resetForm();
    $("#formWarningThreshold").get(0).reset();
    $("#thresholdWarning").empty();
    $("#cancelWarning").empty();

    //var rowDt = tableConfigValueType.rows('.selected').data()[0];
    show_search();
    // if(rowDt!=undefined){
    //     $("#btnDonew").attr("disabled", true);
    // }
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
    // validator.resetForm();
    // validWarningThreshold.resetForm();
    // tableWarningThreshold
    //      .clear()
    //      .draw();
});

$('#station').select2({
    minimumInputLength: 0,
    delay: 350,
    templateSelection: function (data) {
        if (data.id === ' ' || data.id == null || data.id == undefined) {
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
            data = [{id: " ",text : '----hãy chọn----'}].concat(data);
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

$('#tableGroupMailReceive thead th').each(function () {
    var title = $(this).text();
    var dataId = $(this).attr("data-id");
    var is_select = $(this).attr("is_select");
    if (dataId != null && dataId != undefined) {
        if(is_select==null || is_select == undefined){
            $(this).html('<input id="'+ dataId +'" class="table-data-input-search" type="text" placeholder="Search ' + title + '" />');
        }else{
            $(this).html(`
                            <select class="select_table" id="`+ dataId +`">
                                <option value="">Hãy chọn</option>
                                <option value=1>hoạt động</option>
                                <option value=0>không hoạt động</option>
                            </select>
                            `);
        }
    }
});
$('#s_status').select2({
    minimumResultsForSearch: -1,
    escapeMarkup: function(markup) {
        return markup;
    },
    templateSelection: function(data) {
        return data.text;
    }
});
//table config mail
var table = $('#tableGroupMailReceive').DataTable({
    columnDefs: [
        {
            orderable: false,
            className: 'select-checkbox',
            targets:   0
        },
        {
            targets: 5,
            render : function(data, type, row) {
                if(data===1){
                    return '<div class="status_green">hoạt động</div>';
                } else{
                    return '<div class="status_red">không hoạt động</div>';
                }
            }
        }
    ],
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
    "searching": false,
    "ordering": false,
    "info": true,
    "autoWidth": false,
    "scrollX": true,
    "responsive": false,
    "searchDelay": 1500,
    language: {
        search: "_INPUT_",
        searchPlaceholder: "Nhập thông tin tìm kiếm",
    },
    "select": {
        "style": "single"
    },
    "processing": true,
    "serverSide": true,
    "columns": [
        { "data":""},
        {"data": "indexCount"},
        {"data": "id"},
        {"data": "code"},
        {"data": "name"},
        {"data": "status"},
        {"data": "description"}
    ],
    initComplete: function () {
        this.api().columns().every(function () {
            $('.table-data-input-search').on('keyup change clear', function () {
                $('.table-data-input-search').on('keyup', function () {
                    oldValue = this.___value___;
                    this.___value___ = this.value;
                    if (oldValue == this.___value___) return;
                    keyUpTime = new Date().getTime();
                    let id = $(this).attr('id');
                    objSearch[id] = this.value;
                    setTimeout(function () {
                        if (new Date().getTime() - keyUpTime > 500) {
                            table.search(objSearch).draw();
                            keyUpTime = new Date().getTime();
                        }
                        return;
                    }, 560);

                });
            });
        });
        $('.select_table').on('keyup change clear', function () {
            let id = $(this).attr("id");
            objSearch[id] = this.value;
            table
                .search(JSON.stringify(objSearch))
                .draw();
        });
    },
    "ajax": {
        headers: {
            'Authorization': token
        },
        "url":apiUrl + "group-mail-config/get-list-group-mail-paging-nation",
        "method": "POST",
        "contentType": "application/json",
        "data": function (d) {
            //console.log(d);
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
                s_id: '',
                s_name: '',
                s_code: '',
                s_status: '',
                s_description: ''
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
                    "indexCount" : i+1,
                    "id": responseJson.content[i].id,
                    "code": responseJson.content[i].code,
                    "name": responseJson.content[i].name,
                    "status": responseJson.content[i].status,
                    "description": responseJson.content[i].description,
                })

            }

            return JSON.stringify(dataRes);
        }
    }
});

$("#userReceiveOutSite").select2({
    minimumInputLength: 0,
    delay: 350,
    templateSelection: function (data) {
        if (data.id === '' || data.id == null || data.id == undefined) {
            return '---- hãy chọn ----';
        }

        return data.text;
    },
    minimumInputLength: 0,
    delay: 350,
    ajax: {
        headers: {
            'Authorization': token
        },
        "url":apiUrl + "user-expand/get-name-user-out-site",
        dataType: 'json',
        type: "POST",
        quietMillis: 50,
        data: function (term) {
            let rowDt = table.rows('.selected').data()[0];
            if(rowDt == undefined)
                term.idGroup = "";
            return term;

        },
        processResults: function (data) {
            var datas =  $('#detail-receive-mail').val();
            return {
                results: $.map(data, function (item) {
                    return {
                        text:item.id + "---"+ item.name +"---"+ item.email,
                        id: item.id,
                        data: item
                    }
                })
            };
        }
    }
});
$("#userReceiveInsite").select2({
    minimumInputLength: 0,
    delay: 350,
    templateSelection: function (data) {
        if (data.id === ' ' || data.id == null || data.id == undefined) {
            return '---- hãy chọn ----';
        }

        return data.text;
    },
    minimumInputLength: 0,
    delay: 350,
    ajax: {
        headers: {
            'Authorization': token
        },
        "url":apiUrl + "user-info/get-name-user",
        dataType: 'json',
        type: "POST",
        quietMillis: 50,
        data: function (term) {
            let rowDt = table.rows('.selected').data()[0];
            if(rowDt == undefined)
                term.idGroup = "";
            else
                term.idGroup = rowDt.id;
            return term;
        },
        processResults: function (data) {
            var datas =  $('#detail-receive-mail').val();
            return {
                results: $.map(data, function (item) {
                    return {
                        text:item.id + "---"+ item.name +"---"+ item.email,
                        id: item.id,
                        data: item
                    }
                })
            };
        }
    }
});
var tableUserReceiveMailInSite = $('#tableUserReceveiMailInSite').DataTable({
    columns: [
        {"data": "id"},
        {"data": "name"},
        {"data": "email"},
        {
            data: null,
            className: "center",
            defaultContent: '<a href="" class="editor_remove"><i class="fa fa-trash" aria-hidden="true"></a>'
        }
    ]
});

var tableUserReceiveMailOutSite = $('#tableUserReceiveMailOutSite').DataTable({
    columns: [
        {"data": "id"},
        {"data": "name"},
        {"data": "email"},
        {
            data: null,
            className: "center",
            defaultContent: '<a href="" class="editor_remove"><i class="fa fa-trash" aria-hidden="true"></a>'
        }
    ]
});
$("#btnSaveUserInsite").click(function () {
    var formData  = tableUserReceiveMailInSite.rows().data();
    let insert = true;
    $.each( formData, function( key, value ) {
        if($('#userReceiveInsite').select2('data')[0].id == value.id){
            insert = false;
        }
    });
    if(insert==false){
        toastr.error('Lỗi', "Bản ghi đã tồn tại");
        return;
    }
    tableUserReceveiMailInSite.row.add($('#userReceiveInsite').select2('data')[0].data).draw(true);

});
tableUserReceiveMailInSite.on('click', 'a.editor_remove', function (e) {
    if(confirm("Bạn có muốn xóa bản ghi")){

    } else {
        return;
    }
    e.preventDefault();
    var table = $('#tableUserReceveiMailInSite').DataTable();
    table
        .row( $(this).parents('tr') )
        .remove().draw();
});
$("#btnsave").click(function () {
    var object = {};
    object.code = $("#code").val().trim();
    object.name = $("#name").val().trim();
    object.description = $("#description").val().trim();
    object.status = $("#status").val();
    var formData  = tableUserReceveiMailInSite.rows().data();
    var userInsite = [];
    $.each( formData, function( key, value ) {
        userInsite.push(value);
    });
    object.userInsite  = userInsite;
});

$('#stationWarning').select2({
    minimumInputLength: 0,
    delay: 350,
    templateSelection: function (data) {
        if (data.id === ' ' || data.id == null || data.id == undefined) {
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
            data = [{id: " ",text : '----hãy chọn----'}].concat(data);
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
$('#warningCode').select2({
    minimumInputLength: 0,
    delay: 350,
    templateSelection: function (data) {
        if (data.id === ' ' || data.id == null || data.id == undefined) {
            return '---- hãy chọn ----';
        }

        return data.text;
    },
    ajax: {
        headers: {
            'Authorization': token
        },
        url: apiUrl + "warning-manager-station/warning-manager-select",
        contentType: 'application/json',
        method: "POST",
        quietMillis: 50,
        data: function (term) {
            if(term.term==null || term.term== undefined){
                term.term = null;
            }
            let data = $('#stationWarning').select2('data')[0];
            if(data != undefined){
                term.id = data.id.trim();
            } else{
                term.id = "";
            }
            return JSON.stringify(term);

        },
        processResults: function (data) {
            data = [{id: " ",text : '----hãy chọn----'}].concat(data);
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
//config table mới
var tableWarningConfig = $('#tableWarningConfig').DataTable({
    columns: [
        {"data": "id"},
        {"data": "stationId"},
        {"data": "stationName"},
        {"data": "warningManagerId"},
        {"data": "warningManagerCode"},
        {
            data: null,
            className: "center",
            defaultContent: '<a href="" class="editor_remove"><i class="fa fa-trash" aria-hidden="true"></a>'
        }
    ]
});
// end config table mới
$("#btnSaveWarning").click(function(){
    let data = {};
    data.id = "";
    data.stationId = $("#stationWarning").select2('data')[0].id;
    data.stationName = $("#stationWarning").select2('data')[0].text;
    data.warningManagerId = $("#warningCode").select2('data')[0].id;
    data.warningManagerCode = $("#warningCode").select2('data')[0].text;
    tableWarningConfig.row.add(data).draw(true);
});
//config tbale người dùng ngoài hệ thống
var tableUserOutSite = $('#tableUserOutSite').DataTable({
    columns: [
        {"data": "id"},
        {"data": "nameOutSite"},
        {"data": "phoneOutSite"},
        {"data": "codeUserOutSite"},
        {"data": "emailOutSite"},
        {"data": "sexOutSite"},
        {"data": "statusOutSite"},
        {"data": "idOutSite"},
        {"data": "positionOutSite"},
        {
            data: null,
            className: "center",
            defaultContent: '<a href="" class="editor_remove"><i class="fa fa-trash" aria-hidden="true"></a>'
        }
    ]
});
$("#btnSaveUserOutSite").click(function(){
   var object = {};
    object.id = "";
    object.nameOutSite = $("#nameOutSite").val();
    object.phoneOutSite =  $("#phoneOutSite").val();
    object.codeUserOutSite =  $("#codeUserOutSite").val();
    object.emailOutSite =  $("#emailOutSite").val();
    object.sexOutSite =  $("#sexOutSite").val();
    object.statusOutSite =  $("#statusOutSite").val();
    object.idOutSite =  $("#idOutSite").val();
    object.positionOutSite =  $("#positionOutSite").val();
    tableUserOutSite.row.add(object).draw(true);

});
tableUserOutSite.on('click', 'a.editor_remove', function (e) {
    if(confirm("Bạn có muốn xóa bản ghi")){

    } else {
        return;
    }
    e.preventDefault();
    var table = $('#tableUserOutSite').DataTable();
    table
        .row( $(this).parents('tr') )
        .remove().draw();
});
var formInSite = $("#formInSite").validate({
    rules : {
        code : {
            required : true,
            validUtf8 : true,
            maxlength : 50
        },
        name : {
            required : true,
            maxlength : 100
        },
        description : {
            maxlength : 500
        },
        status : {
            required : true,
        }
    },
    messages: {
        code: {
            required: "Hãy nhập mã nhóm nhận cảnh báo",
            maxlength  : "Mã nhóm  nhận cảnh báo vượt quá 50 ký tự"
        },
        name : {
            required: "Hãy nhập tên nhóm nhận cảnh báo",
            maxlength  : "Tên nhóm nhận cảnh báo vượt quá độ dài 150 ký tự"
        },
        description : {
            maxlength : "Độ dài mô tả không được dài quá 500 ký tự"
        },
        status : {
            required :"Trạng thái không được để trống"
        }
    },
    errorPlacement : function(error, element) {
        error.insertAfter(element.parents("div.insertError"));
    }
});
jQuery.validator.addMethod("validUtf8", function(value, element){
    var myRe = /[A-Z,0-9]+$/;
    var myArray = myRe.test(value);
    return myArray;
}, "Mã cảnh báo phải viết hoa không được chứa ký tự đặc biệt hoặc số hoặc các chữ cái có dấu");
$("#btnsave").click(function(){
    var submit = $("#formInSite").valid();
    if(submit==false){
        return;
    }
    let object = {};
    object.id = "";
    object.code = $("#code").val();
    object.name = $("#name").val();
    object.description = $("#description").val();
    object.status = $("#status").val();
    let userInSiteTmps  = tableUserReceveiMailInSite.rows().data();
    let userInSites = [];
    for(let i = 0; i < userInSiteTmps.length ; i++){
        userInSites.push(userInSiteTmps[i].id);
    }

    let warningConfigTmp = tableWarningConfig.rows().data();
    let warningConfig = [];
    for(let i =0 ; i<warningConfigTmp.length; i++){
        warningConfig.push(warningConfigTmp[i].warningManagerId)
    }
    let userOutSiteTmp = tableUserReceiveMailOutSite.rows().data();
    let userOutSite = [];
    for(let i =0; i< userOutSiteTmp.length ; i++){
        userOutSite.push(userOutSiteTmp[i].id);
    }
    object.userInSites = userInSites;
    object.warningConfig = warningConfig;
    object.userOutSite = userOutSite;
    object.user = username;
    console.log(object);
    $.ajax({
        headers: {
            'Authorization': token
        },
        "url": apiUrl + "group-mail-config",
        "method": "POST",
        "contentType": "application/json",
        "data" : JSON.stringify(object),
        "success": function (response) {
            console.log(response)
        },
        "error": function (error) {
           console.log(error);
        }
    });

});

$("#btnSaveUserOutSiteInTbl").click(function(){
    let data = $('#userReceiveOutSite').select2('data')[0].data;
    let formData  = tableUserReceiveMailOutSite.rows().data();
    let insert = true;
    $.each( formData, function( key, value ) {
       if(data.id == value.id){
           insert = false;
       }
    });
     if(insert){
        tableUserReceiveMailOutSite.row.add(data).draw(true);
     } else{
         toastr.error('Lỗi', "Bản ghi đã tồn tại");
     }
});

tableUserReceiveMailOutSite.on('click', 'a.editor_remove', function (e) {
    if(confirm("Bạn có muốn xóa bản ghi")){

    } else {
        return;
    }
    e.preventDefault();
    var table = $('#tableUserReceiveMailOutSite').DataTable();
    table
        .row( $(this).parents('tr') )
        .remove().draw();
});
tableWarningConfig.on('click', 'a.editor_remove', function (e) {
    if(confirm("Bạn có muốn xóa bản ghi")){

    } else {
        return;
    }
    e.preventDefault();
    var tableWarningConfig = $('#tableWarningConfig').DataTable();
    tableWarningConfig
        .row( $(this).parents('tr') )
        .remove().draw();
});

table
    .on('select', rowSelect)
    .on('deselect', rowDeselect);
function rowSelect(e, dt, type, indexes) { // load các thông tin của những cái bên trái ra
    $("#btnDonew").prop( "disabled", true );
    $("#btnDetail").prop( "disabled", false );
}
function rowDeselect(e, dt, type, indexes) { // khóa các form bên trái
    // var rowDt = table.rows('.selected').data()
    //console.log(rowDt);

    $("#btnDonew").prop( "disabled", false );
    $("#btnDetail").prop( "disabled", true );
}
$("#btnDetail").click(function(){
    var rowDt = table.rows('.selected').data()[0];
    $("#btnDelete").prop( "disabled", false );
    $("#id").val(rowDt.id);
    togle_search();
    $("#btnsave").css("display", "none");
    $("#btnDelete").css("display", "inline");
    $("#btnResetUpdate").css("display", "inline");
    $("#btncancer").css("display", "inline");
    $("#btnDonew").attr("disabled", true);
    $('.nav-tabs a[href="#menu2"]').tab('show');
    $("#btnsaveEdit").css("display", "inline");
    $("#btnResetNew").css("display", "none");

    console.log(rowDt);
    $("#code").val(rowDt.code);
    $("#name").val(rowDt.name);
    $("#description").val(rowDt.description);
    $("#status").val(rowDt.status);
    $('#status').trigger('change');
    //validatorhorizontal.resetForm();
    showDetailData(rowDt);
});
 function showDetailData(rowDt){
     $.ajax({
         headers: {
             'Authorization': token
         },
         "url": apiUrl + "group-mail-config/get-info?id="+rowDt.id,
         "method": "GET",
         "contentType": "application/json",
         "success": function (response) {
             let userInSite = response[0];
             let userOuSite = response[1];
             let warning = response[2];

             for(let i = 0 ; i <userInSite.length ; i++){
                 tableUserReceiveMailInSite.row.add(userInSite[i]).draw(true);
             }

             for(let i = 0 ; i <userOuSite.length ; i++){
                 tableUserReceiveMailOutSite.row.add(userOuSite[i]).draw(true);
             }

             for(let i = 0 ; i <warning.length ; i++){
                 tableWarningConfig.row.add(warning[i]).draw(true);
             }
         },
         "error": function (error) {
             console.log(error);
         }
     });
 }
 $("#btnsaveEdit").click(function(){
     var submit = $("#formInSite").valid();
     if(submit==false){
         return;
     }
     let object = {};
     object.id = $("#id").val();
     object.code = $("#code").val();
     object.name = $("#name").val();
     object.description = $("#description").val();
     object.status = $("#status").val();
     let userInSiteTmps  = tableUserReceveiMailInSite.rows().data();
     let userInSites = [];
     for(let i = 0; i < userInSiteTmps.length ; i++){
         userInSites.push(userInSiteTmps[i].id);
     }

     let warningConfigTmp = tableWarningConfig.rows().data();
     let warningConfig = [];
     for(let i =0 ; i<warningConfigTmp.length; i++){
         warningConfig.push(warningConfigTmp[i].warningManagerId)
     }
     let userOutSiteTmp = tableUserReceiveMailOutSite.rows().data();
     let userOutSite = [];
     for(let i =0; i< userOutSiteTmp.length ; i++){
         userOutSite.push(userOutSiteTmp[i].id);
     }
     object.userInSites = userInSites;
     object.warningConfig = warningConfig;
     object.userOutSite = userOutSite;
     object.user = username;
     console.log(object);
     $.ajax({
         headers: {
             'Authorization': token
         },
         "url": apiUrl + "group-mail-config",
         "method": "POST",
         "contentType": "application/json",
         "data" : JSON.stringify(object),
         "success": function (response) {
             console.log(response)
         },
         "error": function (error) {
             console.log(error);
         }
     });
 });
//
// $('#valueTypeSpatial').select2({
//
// });
// $('#value-type-station').select2({
//
// });
//
// $('#stationSpatial').select2({
//     minimumInputLength: 0,
//     delay: 350,
//     templateSelection: function (data) {
//         if (data.id === '' || data.id == null || data.id == undefined) {
//             return '---- hãy chọn ----';
//         }
//
//         return data.text;
//     },
//     ajax:{
//         headers: {
//             'Authorization': token
//         },
//         url: apiUrl + "config-value-type/get-list-station-other",
//         contentType: 'application/json',
//         method: "POST",
//         quietMillis: 50,
//         data: function (term) {
//             if(term.term==null || term.term== undefined){
//                 term.term = null;
//             }
//             term.station = $("#station_add").val();
//             return JSON.stringify(term);
//
//         },
//         processResults: function (data) {
//             var datas =  $('#stationSpatial').val();
//             return {
//                 results: $.map(data, function (item) {
//                     return {
//                         text: item.text,
//                         id: item.id,
//                         data: item
//                     }
//                 })
//             };
//         }
//     }
// });
// $('#value-type').select2({
//     minimumInputLength: 0,
//     delay: 350,
//     ajax: {
//         headers: {
//             'Authorization': token
//         },
//         url: apiUrl + "value-type/get-value-type-select",
//         contentType: 'application/json',
//         method: "POST",
//         quietMillis: 50,
//         data: function (term) {
//             if(term.term==null || term.term== undefined){
//                 term.term = null;
//             }
//             return JSON.stringify(term);
//
//         },
//         processResults: function (data) {
//             data = [{id: -1,text : '----hãy chọn----'}].concat(data);
//             return {
//                 results: $.map(data, function (item) {
//                     return {
//                         text: item.text,
//                         id: item.id,
//                         data: item
//                     }
//                 })
//             };
//         }
//     }
// });
// let objSearch = {
//     s_id: '',
//     s_id_station: '',
//     s_parameter_type_id: '',
//     s_name_station: '',
//     s_parameter_name: '',
//     s_value_level1: '',
//     s_value_level2: '',
//     s_value_level3: '',
//     s_value_level4: '',
//     s_value_level5: ''
// };
// $('#tableValueTypeConfig thead th').each(function () {
//     var title = $(this).text();
//     var dataId = $(this).attr("data-id");
//     if (dataId != null && dataId != undefined) {
//         $(this).html('<input class="table-data-input-search" id="'+ dataId +'" type="text" placeholder="Search ' + title + '" autocomplete="off"/>');
//     }
// });
// var tableConfigValueType = $('#tableValueTypeConfig').DataTable({
//     columnDefs: [ {
//         orderable: false,
//         className: 'select-checkbox',
//         targets:   0
//     } ],
//     select: {
//         style:    'os',
//         selector: 'td:first-child',
//         type: 'single'
//     },
//     "pagingType": "full_numbers",
//     "lengthMenu": [
//         [10, 25, 50],
//         [10, 25, 50]
//     ],
//     "lengthChange": true,
//     "searchDelay": 500,
//     "searching": false,
//     "ordering": false,
//     "info": true,
//     "autoWidth": false,
//     "scrollX": true,
//     "responsive": false,
//     language: {
//         search: "_INPUT_",
//         searchPlaceholder: "Nhập thông tin tìm kiếm",
//     },
//     "processing": true,
//     "serverSide": true,
//     "columns": [
//         { "data":""},
//         {"data": "indexCount", "render": $.fn.dataTable.render.text()},
//         {"data": "id", "render": $.fn.dataTable.render.text()},
//         {"data": "stationId", "render": $.fn.dataTable.render.text()},
//         {"data": "parameterId", "render": $.fn.dataTable.render.text()},
//         {"data": "stationName", "render": $.fn.dataTable.render.text()},
//         {"data": "parameterName", "render": $.fn.dataTable.render.text()},
//         {"data": "valueLevel1", "render": $.fn.dataTable.render.text()},
//         {"data": "valueLevel2", "render": $.fn.dataTable.render.text()},
//         {"data": "valueLevel3", "render": $.fn.dataTable.render.text()},
//         {"data": "valueLevel4", "render": $.fn.dataTable.render.text()},
//         {"data": "valueLevel5", "render": $.fn.dataTable.render.text()}
//     ],
//     initComplete: function () {
//         // Apply the search
//         this.api().columns().every(function () {
//             var that = this;
//             $('.table-data-input-search').on('keyup', function () {
//                 oldValue = this.___value___;
//                 this.___value___ = this.value;
//                 if (oldValue == this.___value___) return;
//                 keyUpTime = new Date().getTime();
//                 let id = $(this).attr('id');
//                 objSearch[id] = this.value;
//                 setTimeout(function () {
//                     if (new Date().getTime() - keyUpTime > 500) {
//                         tableConfigValueType.search(objSearch).draw();
//                         keyUpTime = new Date().getTime();
//                     }
//                     return;
//                 }, 560);
//
//             });
//         });
//     },
//     "ajax": {
//         headers: {
//             'Authorization': token
//         },
//         "url": apiUrl + "warning-threshold-station/get-list-warning-threshold-station",
//         "method": "POST",
//         "contentType": "application/json",
//         "data": function (d) {
//             draw = d.draw;
//             return JSON.stringify({
//                 "draw": d.draw,
//                 "start": Math.round(d.start / d.length),
//                 "length": d.length,
//                 "search": JSON.stringify(objSearch)
//             });
//         },
//         "dataFilter": function (response) {
//
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
//                     "": "",
//                     "indexCount": i + 1,
//                     "id": responseJson.content[i].id,
//                     "stationId": responseJson.content[i].stationId,
//                     "parameterId": responseJson.content[i].parameterId,
//                     "stationName": responseJson.content[i].stationName,
//                     "parameterName": responseJson.content[i].parameterName,
//                     "valueLevel1": responseJson.content[i].valueLevel1,
//                     "valueLevel2": responseJson.content[i].valueLevel2,
//                     "valueLevel3": responseJson.content[i].valueLevel3,
//                     "valueLevel4": responseJson.content[i].valueLevel4,
//                     "valueLevel5": responseJson.content[i].valueLevel5
//                 })
//             }
//
//             return JSON.stringify(dataRes);
//         }
//     }
// });
//
// $("#btnSearch").click(function (event){
//     event.preventDefault();
//     event.stopPropagation();
//     $("#btnDetail").prop( "disabled", true );
//     $("#btnDonew").attr("disabled", false);
//     var inputSearch = $(".table-data-input-search");
//     for(let i =0 ; i < inputSearch.length; i ++){
//         $(inputSearch[i]).val("");
//     }
//     if($("#station").val()==-1){
//         objSearch.s_id_station = null;
//     } else{
//         objSearch.s_id_station = $("#station").val();
//     }
//
//     if($("#value-type").val()==-1){
//         objSearch.s_parameter_type_id = null;
//     } else{
//         objSearch.s_parameter_type_id = $("#value-type").val();
//     }
//     tableConfigValueType.search(objSearch).draw();
//
// });
// // table thêm yếu tố
// function genSelectThreshold(data, row, functionCallChange){
//     let dataSelect = [
//             {value : "1",text :"1", selected : ""}
//             ,{value : "2",text :"2", selected : ""}
//             ,{value : "3",text :"3", selected : ""}
//             ,{value : "4",text :"4", selected : ""}
//             ,{value : "5",text :"5", selected : ""}
//         ];
//     for(let i =0; i< dataSelect.length; i++){
//         if(dataSelect[i].value==data){
//             dataSelect[i].selected="selected";
//         }
//     }
//     let strError = " style=\" width: 230px;\"";
//     let messageError = "<label><\label>";
//     if(row.thresholdId==row.thresholdCancelID){
//         strError = " style=\" border-color: red; width: 230px;\"";
//         messageError = "<label id=\"threshold2-error\" class=\"error\" for=\"threshold2\">Giá trị cảnh báo và hủy cảnh báo phải khác nhau</label>";
//     }
//
//     var str = `<select name="thresholdCancelID" id="thresholdCancelID" onchange="`+functionCallChange+`('`+row.warningThresholdCode+`',this)"`+strError+`>`
//
//     for(let i =0; i< dataSelect.length ; i++){
//         let strTmp = `<option value="`+dataSelect[i].value+`" `+dataSelect[i].selected+`>`+dataSelect[i].text+`</option>`;
//         str+=strTmp;
//     }
//     str+=`</select>`;
//     str+=messageError;
//     return str;
//
// }
// var tableWarningThreshold = $('#tableWarningThreshold').DataTable({
//     columns: [
//         {"data": "warningThresholdCode"},
//         {"data": "idParameter"},
//         {"data": "nameParameter"},
//         {
//             data: "thresholdId",
//             render: function ( data, type, row, meta ) {
//                 let functionCallChange = "changeThresholdId";
//                 return genSelectThreshold(data,row, functionCallChange);
//             }
//         },
//
//         {
//             data: "thresholdCancelID",
//             render: function ( data, type, row, meta ) {
//                 let functionCallChange = "changeThresholdCancelID";
//                 return genSelectThreshold(data,row, functionCallChange);
//             }
//
//         },
//         {
//             data: "status",
//             render: function ( data, type, row, meta ) {
//                 let valueSelect ="";
//                 let valueUnSelect ="";
//                 if(data==1){
//                     valueSelect = "Hoạt động";
//                     valueUnSelect = "Dừng hoạt động";
//                 } else{
//                     valueSelect = "Dừng hoạt động";
//                     valueUnSelect = "Hoạt động";
//                 }
//                 let dataUnselect = 0;
//                 if(data == 0){
//                     dataUnselect = 1;
//                 }
//                 return `
//                     <select name="status" id="status" onchange="changeStatus('`+row.warningThresholdCode+`')">
//                         <option value="`+data+`" selected>`+valueSelect+`</option>
//                         <option value="`+dataUnselect+`">`+valueUnSelect+`</option>
//                     </select>
//                 `;
//             }
//         },
//         {
//             data: null,
//             className: "center",
//             defaultContent: '<a href="" class="editor_remove">Delete</a>'
//         }
//     ]
// });
// function changeStatus(obj){
//     let dataTable = tableWarningThreshold.rows().data();
//     for(let i =0 ; i< dataTable.length ; i++){
//         if(dataTable[i].warningThresholdCode == obj){
//             if(dataTable[i].status == "1"){
//                 dataTable[i].status = "0"
//             }else{
//                 dataTable[i].status = "1"
//             }
//         }
//     }
//     tableWarningThreshold
//         .clear()
//         .draw();
//      for(let i =0 ; i< dataTable.length ; i++){
//          tableWarningThreshold.row.add(dataTable[i]).draw( true );
//      }
// }
// function changeThresholdCancelID(obj,data){
//     let dataTable = tableWarningThreshold.rows().data();
//     for(let i =0 ; i< dataTable.length ; i++){
//         if(dataTable[i].warningThresholdCode == obj){
//             dataTable[i].thresholdCancelID = data.value;
//         }
//     }
//     tableWarningThreshold
//         .clear()
//         .draw();
//     for(let i =0 ; i< dataTable.length ; i++){
//         tableWarningThreshold.row.add(dataTable[i]).draw( true );
//     }
// }
// function changeThresholdId(obj,data){
//     let dataTable = tableWarningThreshold.rows().data();
//     for(let i =0 ; i< dataTable.length ; i++){
//         if(dataTable[i].warningThresholdCode == obj){
//             dataTable[i].thresholdId = data.value;
//         }
//     }
//     tableWarningThreshold
//         .clear()
//         .draw();
//     for(let i =0 ; i< dataTable.length ; i++){
//         tableWarningThreshold.row.add(dataTable[i]).draw( true );
//     }
// }
// tableWarningThreshold.on('click', 'a.editor_remove', function (e) {
//     e.preventDefault();
//     var table = $('#tableWarningThreshold').DataTable();
//     table
//         .row( $(this).parents('tr') )
//         .remove().draw();
// });
// $("#btnsaveStationValueType").click(function () {
//
//     let submit = $("#formWarningThreshold").valid();
//     if(submit){
//         validWarningThreshold.resetForm();
//     } else{
//         return;
//     }
//     var codeCheck= $("#thresholdCode").val();
//     $.ajax({
//         headers: {
//             'Authorization': token
//         },
//         "url": apiUrl + "warning-threshold-station/duplicate-code-threshold-warning?code="+codeCheck,
//         "method": "GET",
//         "contentType": "application/json",
//         "success": function (response) {
//             if(response.status == 0){
//                 // kiểm tra xem nếu đã tồn tại trong bảng rồi thì thông báo ra không thêm nữa
//                 var dataTableWarningThreshold = {};
//                 dataTableWarningThreshold.idParameter=$("#value-type-station").val();
//                 dataTableWarningThreshold.nameParameter=$("#value-type-station").select2('val');
//                 dataTableWarningThreshold.warningThresholdCode=$("#thresholdCode").val();
//                 dataTableWarningThreshold.thresholdId = $("#thresholdWarning").val();
//                 dataTableWarningThreshold.thresholdCancelID = $("#cancelWarning").val();
//                 dataTableWarningThreshold.status = $("#status").val();
//                 var formData  = tableWarningThreshold.rows().data();
//                 let insert = true;
//                 $.each( formData, function( key, value ) {
//                     if(value.warningThresholdCode==dataTableWarningThreshold.warningThresholdCode){
//                         insert = false;
//                     }
//                 });
//                 if(insert == false){
//                     toastr.error('Lỗi', "Bản ghi đã tồn tại");
//                     insert = true;
//                     return;
//                 }
//                 tableWarningThreshold.row.add(dataTableWarningThreshold).draw( true );
//
//             }
//             else{
//                 toastr.error('Lỗi', response.message);
//             }
//         },
//         "error": function (error) {
//             toastr.error('Lỗi', error.responseJSON.message);
//         }
//     });
//     // var dataStation = $('#stationSpatial').select2('data');
//     // var dataValueType = $('#valueTypeSpatial').select2('data');
//     // if(dataStation[0]==null || dataStation[0] == undefined || dataValueType[0]== null || dataValueType[0] == undefined){
//     //     return;
//     // }
//     // var dataValueTypeText = dataValueType[0].text;
//     // var dataValueTypeTexts = dataValueTypeText.split("-");
//     // if(submit == false) {
//     //     if (dataStation.length == 0) {
//     //         $('#stationSpatial').select2('open');
//     //         return;
//     //     }
//     //     if (dataValueType.length == 0) {
//     //         $('#valueTypeSpatial').select2('open');
//     //         return;
//     //     }
//     //     return;
//     // }
//
//     // $.ajax({
//     //     headers: {
//     //         'Authorization': token
//     //     },
//     //     "url": apiUrl + "config-value-type/get-station-value-type-spatial?idStation="+ dataStation[0].id+"&idValueType="+dataValueType[0].id+"&code="+dataValueTypeTexts[2],
//     //     "method": "GET",
//     //     "contentType": "application/json",
//     //     "success": function (response) {
//     //         // kiểm tra xem nếu đã tồn tại trong bảng rồi thì thông báo ra không thêm nữa
//     //         var formData  = tableStationSpatial.rows().data();
//     //         let insert = true;
//     //         $.each( formData, function( key, value ) {
//     //             if(dataStation[0].id == value.stationId && dataValueType[0].id == value.valueTypeId&& dataValueTypeTexts[2]==value.code){
//     //                 insert = false;
//     //             }
//     //         });
//     //         if(insert == false){
//     //             toastr.warning('Lỗi', "Bản ghi đã tồn tại");
//     //             return;
//     //         }
//     //         tableStationSpatial.row.add(response).draw( true );
//     //
//     //     },
//     //     "error": function (error) {
//     //         toastr.error('Lỗi', error.responseJSON.message);
//     //     }
//     // });
//
// });
// // Delete a record
// // tableStationSpatial.on('click', 'a.editor_remove', function (e) {
// //     e.preventDefault();
// //     var table = $('#tableStationSpatial').DataTable();
// //     table
// //         .row( $(this).parents('tr') )
// //         .remove().draw();
// // });
//
// $('#station_add').select2({
//     minimumInputLength: 0,
//     delay: 350,
//     ajax: {
//         headers: {
//             'Authorization': token
//         },
//         url: apiUrl + "station/station-select",
//         contentType: 'application/json',
//         method: "POST",
//         quietMillis: 50,
//         data: function (term) {
//             if(term.term==null || term.term== undefined){
//                 term.term = null;
//             }
//             return JSON.stringify(term);
//
//         },
//         processResults: function (data) {
//             var datas =  $('#station').val();
//             return {
//                 results: $.map(data, function (item) {
//                     return {
//                         text: item.text,
//                         id: item.id,
//                         data: item
//                     }
//                 })
//             };
//         }
//     }
// });
// $("#station_add").change(function () {
//     var dataStation = $('#station_add').select2('data');
//     $('#value-type-station').val(null).trigger('change');
//     $('#value-type-station').empty();
//
//     $('#stationSpatial').val(null);
//     $('#stationSpatial').empty();
//
//     $('#valueTypeSpatial').val(null);
//     $('#valueTypeSpatial').empty();
//     if(dataStation[0]==undefined){
//         return;
//     }
//     console.log("trước khi chạy qua")
//     if($("#id").val()==""||$("#id").val()== null || $("#id").val()==undefined){
//
//     } else {
//         return;
//     }
//     console.log("sau khi chạy qua");
//     // console.log("aaaaaa");
//     // console.log($("#id").val())
//     tableWarningThreshold
//         .clear()
//         .draw();
//     $.ajax({
//         headers: {
//             'Authorization': token
//         },
//         "url": apiUrl + "config-value-type/get-value-type-station-select?idStation="+dataStation[0].id,
//         "method": "GET",
//         "contentType": "application/json",
//         "success": function (response) {
//
//             for (let i = 0; i < response.length; i++){
//                 var newOption = new Option(response[i].text, response[i].id, false, false);
//                 $('#value-type-station').append(newOption).trigger('change');
//             }
//             //
//             // var rowDt = tableConfigValueType.rows('.selected').data()[0];
//             // if(rowDt!=""&& rowDt!=null&& rowDt!=undefined)
//             //     showDetailData(rowDt);
//
//         },
//         "error": function (error) {
//             toastr.error('Lỗi', error.responseJSON.message);
//         }
//     });
// });
//
// $("#value-type-station").change(function () {
//
//     $('#stationSpatial').val(null).trigger('change');
//     $('#stationSpatial').empty();
//
//     $('#valueTypeSpatial').val(null).trigger('change');
//     $('#valueTypeSpatial').empty();
//
//     tableWarningThreshold.clear()
//         .draw();
// });
// var validWarningThreshold = $("#formWarningThreshold").validate({
//     rules : {
//         thresholdCode : {
//             required : true,
//             maxlength : 15
//         },
//         thresholdWarning : {
//             required : true,
//             validEmpty : true,
//             validEqual : "#cancelWarning"
//         },
//         cancelWarning : {
//             required : true,
//             validEmpty : true
//         },
//         status : {
//             required : true
//         }
//     },
//     messages: {
//         thresholdCode: {
//             required: "Hãy nhập mã cảnh báo",
//             maxlength  : "Code vượt quá độ dàin 15 ký tự"
//         },
//         thresholdWarning: {
//             required: "Hãy chọn mức cảnh báo",
//             validEmpty : "Hãy chọn mức cảnh báo",
//             validEqual :"Mức cảnh báo và mức hủy cảnh báo không được giống nhau"
//         },
//         cancelWarning : {
//             required: "Hãy chọn mức hủy cảnh báo",
//             validEmpty : "Hãy chọn mức hủy cảnh báo"
//         },
//         status : {
//             required : "Hãy chọn trạng thái"
//         }
//     },
//     errorPlacement : function(error, element) {
//         error.insertAfter(element.parents("div.insertError"));
//     }
// });
// $.validator.addMethod("validEmpty",function(value,element){
//     if(value=="-1") return false;
//     return true;
// },"Please input a reason");
// jQuery.validator.addMethod('validEqual', function (value, element, param) {
//     return  value != $(param).val();
// }, 'Invalid value');
// var validator = $("#form_input").validate({
//     rules : {
//         threshold1 : {
//             required : true,
//             min : 0,
//             max : 1000000000000
//         },
//         threshold2 : {
//             required : true,
//             min : 0,
//             max : 1000000000000,
//             validThreshold1: "#threshold1"
//         },
//         threshold3 : {
//             required : true,
//             min : 0,
//             max : 1000000000000,
//             validThreshold2 : "#threshold2"
//         },
//         threshold4 : {
//             required : true,
//             min : 0,
//             max : 1000000000000,
//             validThreshold3 : "#threshold3",
//         },
//         threshold5 : {
//             required : true,
//             min : 0,
//             max : 1000000000000,
//             validThreshold4 : "#threshold4",
//         },
//         station_add : {
//             required : true,
//         },
//         value_type_station : {
//             required : true
//         },
//
//     },
//     messages: {
//         threshold1: {
//             required: "Bắt buộc nhập ngưỡng cảnh báo",
//             min : "Giá trị không được âm",
//             max : "Giá trị nhập phải nhỏ hơn 1000000000000",
//             number : "Giá trị phải là số"
//         },
//         threshold2: {
//             required: "Bắt buộc nhập ngưỡng cảnh báo",
//             min : "Giá trị không được âm",
//             max : "Giá trị nhập phải nhỏ hơn 1000000000000",
//             number : "Giá trị phải là số",
//             validThreshold1 : "Ngưỡng cảnh báo 2 phải lớn hơn ngưỡng cảnh báo 1"
//         },
//         threshold3 : {
//             required: "Bắt buộc nhập ngưỡng cảnh báo",
//             min : "Giá trị không được âm",
//             max : "Giá trị nhập phải nhỏ hơn 1000000000000",
//             number : "Giá trị phải là số",
//             validThreshold2 : "Ngưỡng cảnh báo 3 phải lớn hơn ngưỡng cảnh báo 2"
//         },
//         threshold4 : {
//             required: "Bắt buộc nhập ngưỡng cảnh báo",
//             min : "Giá trị không được âm",
//             max : "Giá trị nhập phải nhỏ hơn 1000000000000",
//             number : "Giá trị phải là số",
//             validThreshold3 : "Ngưỡng cảnh báo 4 phải lớn hơn ngưỡng cảnh báo 3"
//         },
//         threshold5 : {
//             required: "Bắt buộc nhập ngưỡng cảnh báo",
//             min : "Giá trị không được âm",
//             max : "Giá trị nhập phải nhỏ hơn 1000000000000",
//             number : "Giá trị phải là số",
//             validThreshold4 :"Ngưỡng cảnh báo 5 phải lớn hơn ngưỡng cảnh báo 4"
//         },
//         station_add : {
//             required: "Bắt buộc nhập trạm",
//         },
//         value_type_station : {
//             required: "Bắt buộc chọn yếu tố",
//         }
//     },
//     errorPlacement : function(error, element) {
//         error.insertAfter(element.parents("div.insertError"));
//     }
// });
// jQuery.validator.addMethod('validThreshold4', function (value, element, param) {
//     return this.optional(element) || parseFloat(value) > parseFloat($(param).val());
// }, 'Invalid value');
//
// jQuery.validator.addMethod('validThreshold3', function (value, element, param) {
//     return this.optional(element) || parseFloat(value) > parseFloat($(param).val());
// }, 'Invalid value');
//
// jQuery.validator.addMethod('validThreshold2', function (value, element, param) {
//     return this.optional(element) || parseFloat(value) > parseFloat($(param).val());
// }, 'Invalid value');
// jQuery.validator.addMethod('validThreshold1', function (value, element, param) {
//     return this.optional(element) || parseFloat(value) > parseFloat($(param).val());
// }, 'Invalid value');
//
// $("#btnsave").click(function () {
//
//     var submit = $("#form_input").valid();
//
//      if(submit == false){
//          var dataStation = $('#station_add').select2('data');
//          var dataValueType = $('#value-type-station').select2('data');
//          if(dataStation.length == 0){
//              $('#station_add').select2('open');
//              return;
//          }
//          if(dataValueType.length == 0){
//              $('#value-type-station').select2('open');
//              return;
//          }
//          validator.focusInvalid();
//          return;
//      }
//      // lấy dữ liệu từ input
//
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
//     //console.log(dataParrent);
//     $.ajax({
//         headers: {
//             'Authorization': token
//         },
//         "url": apiUrl + "warning-threshold-station",
//         "method": "POST",
//         "contentType": "application/json",
//         "data" : JSON.stringify(dataParrent),
//         "success": function (response) {
//             toastr.success('Thành công', response.message);
//             show_search();
//             $("#btnsave").css("display", "none");
//             $("#btnDelete").css("display", "none");
//             $("#btnReset").css("display", "none");
//             $("#btncancer").css("display", "none");
//             $("#btnDonew").attr("disabled", false);
//             $("#btnDetail").attr("disabled", true);
//
//             show_search();
//             tableConfigValueType.ajax.reload();
//         },
//         "error": function (error) {
//            console.log(error);
//         }
//     });
//
// });
//
// function getFormData($form){
//     var unindexed_array = $form.serializeArray();
//     var indexed_array = {};
//
//     $.map(unindexed_array, function(n, i){
//         indexed_array[n['name']] = n['value'];
//     });
//
//     return indexed_array;
// }
//
//
// $("#endDateApply").val("");
// $("#startDateApply").val("");
// $("#start_date").val("");
// $("#end_date").val("");
// $("#endDateApply").keyup(function () {
//     $("#endDateApply").val("")
// });
// $("#startDateApply").keyup(function () {
//     $("#startDateApply").val("")
// });
// $("#start_date").keyup(function () {
//     $("#start_date").val("")
// });
// $("#end_date").keyup(function () {
//     $("#end_date").val("");
// });
// //làm chức năng thêm sửa xóa
// // chức năng sửa
// tableConfigValueType
//     .on('select', rowSelect)
//     .on('deselect', rowDeselect);
// function rowSelect(e, dt, type, indexes) { // load các thông tin của những cái bên trái ra
//     $("#btnDetail").prop( "disabled", false );
//     $("#btnDonew").attr("disabled", true);
// }
// function rowDeselect(e, dt, type, indexes) { // khóa các form bên trái
//     $("#btnDetail").prop( "disabled", true );
//     $("#btnDonew").attr("disabled", false);
// }
// $("#btnDetail").click(function () {
//     $("#btnDelete").prop( "disabled", false );
//     var rowDt = tableConfigValueType.rows('.selected').data()[0];
//     //console.log(rowDt);
//     $("#id").val(rowDt.id);
//     $('#action_info').val(1);
//     togle_search();
//     $("#btnsave").css("display", "none");
//     $("#btnDelete").css("display", "inline");
//     $("#btnResetUpdate").css("display", "inline");
//     $("#btncancer").css("display", "inline");
//     $("#btnDonew").attr("disabled", true);
//     $('.nav-tabs a[href="#menu2"]').tab('show');
//     $("#btnsaveEdit").css("display", "inline");
//     $("#btnResetNew").css("display", "none");
//     validator.resetForm();
//     $("#station_add").empty();
//     var newOption = new Option(rowDt.stationName, rowDt.stationId, true, true);
//     $('#station_add').empty();
//     $('#station_add').append(newOption).trigger('change');
//     //validatorhorizontal.resetForm();
//     showDetailData(rowDt);
//
// });
//
// function showDetailData(rowDt){
//
//     $('#station_add').prop( "disabled", true );
//     $('#value-type-station').prop( "disabled", true );
//     $("#id").val(rowDt.id);
//     $("#threshold1").val(rowDt.valueLevel1);
//     $("#threshold2").val(rowDt.valueLevel2);
//     $("#threshold3").val(rowDt.valueLevel3);
//     $("#threshold4").val(rowDt.valueLevel4);
//     $("#threshold5").val(rowDt.valueLevel5);
//     //lấy ra yếu tố cài đặt cho select yếu tố
//     $.ajax({
//         headers: {
//             'Authorization': token
//         },
//         "url": apiUrl + "warning-threshold-station/get-parameter-select?id="+rowDt.id,
//         "method": "GET",
//         "contentType": "application/json",
//         "success": function (response) {
//                 $('#value-type-station').empty();
//                 var newOption = new Option(response.text, response.id, true, true);
//                 $('#value-type-station').append(newOption).trigger('change');
//                 //call hàm reload table ở đây để không bị lỗi
//             $.ajax({
//                 headers: {
//                     'Authorization': token
//                 },
//                 "url": apiUrl + "warning-threshold-station/warning-thresholds?thresholdValueId="+rowDt.id,
//                 "method": "GET",
//                 "contentType": "application/json",
//                 "success": function (response) {
//                     for(let i =0; i< response.length; i++){
//                         tableWarningThreshold.row.add(response[i]).draw(true);
//                     }
//                 },
//                 "error": function (error) {
//                     toastr.error('Lỗi', error.responseJSON.message);
//                 }
//             });
//         },
//         "error": function (error) {
//             toastr.error('Lỗi', error.responseJSON.message);
//         }
//     });
// }
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