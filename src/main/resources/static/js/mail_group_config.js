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
    $("#formWarningThreshold").get(0).reset();
    $("#thresholdWarning").empty();
    $("#cancelWarning").empty();

    show_search();

    var rowDt = table.rows('.selected').data()[0];
   if(rowDt == undefined){
        $("#btnDonew").prop( "disabled", false );
   } else{
       $("#btnDonew").prop( "disabled", true );
   }

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
    tableUserReceiveMailInSite.row.add($('#userReceiveInsite').select2('data')[0].data).draw(true);

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
    console.log($("#warningCode").select2('data'));
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
    let userInSiteTmps  = tableUserReceiveMailInSite.rows().data();
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
            toastr.success('Thành công', response.message);
            show_search();
            table.ajax.reload();
            $("#btnDonew").prop( "disabled", false );
        },
        "error": function (error) {
            toastr.error('Lỗi', error.responseJSON.message);
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
             toastr.error('Lỗi', error.responseJSON.message);
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
     let userInSiteTmps  = tableUserReceiveMailInSite.rows().data();
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
     $.ajax({
         headers: {
             'Authorization': token
         },
         "url": apiUrl + "group-mail-config",
         "method": "PUT",
         "contentType": "application/json",
         "data" : JSON.stringify(object),
         "success": function (response) {
             toastr.success('Thành công', response.message);
         },
         "error": function (error) {
             toastr.error('Lỗi', error.responseJSON.message);
         }
     });
 });
$("#btnDelete").click(function(){
    let id = $("#id").val();
    $.ajax({
        headers: {
            'Authorization': token
        },
        "url": apiUrl + "group-mail-config?id="+id,
        "method": "DELETE",
        "contentType": "application/json",
        "success": function (response) {
            toastr.success('Thành công', response.message);
            show_search();
            table.ajax.reload();
        },
        "error": function (error) {
            toastr.error('Lỗi', error.responseJSON.message);
        }
    });

});