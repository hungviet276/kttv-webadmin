$( function() {
    show_search();
    getStationType();

    // $('#start_date').datepicker()({
    //     uiLibrary: 'bootstrap4'
    // }, function (choosen_date) {
    //         $('#start_date').val(choosen_date.format('DD/MM/YYYY'));
    //     });

    $("#start_date").daterangepicker({
        "singleDatePicker": true,
        "linkedCalendars": false,
        "showCustomRangeLabel": false,
        "alwaysShowCalendars": true,
        "autoUpdateInput" : false,
        locale: {
            cancelLabel: 'Clear',
            format: 'DD/MM/YYYY'
        }
    }, function(start, end, label) {
    });
    $('#start_date').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });

    $('#start_date').on('apply.daterangepicker', function(ev, picker) {
        $("#start_date").val(picker.startDate.format('DD/MM/YYYY'));
    });

    $('#end_date').daterangepicker({
        "singleDatePicker": true,
        "linkedCalendars": false,
        "showCustomRangeLabel": false,
        "alwaysShowCalendars": true,
        "autoUpdateInput" : false,
        locale: {
            cancelLabel: 'Clear',
            format: 'DD/MM/YYYY'
        }
    }, function(start, end, label) {
    });
    $('#end_date').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');

    });

    $('#end_date').on('apply.daterangepicker', function(ev, picker) {
        $("#end_date").val(picker.startDate.format('DD/MM/YYYY'));
    });
});

function validateSearch(){
    var patt = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if ($('#start_date').val() != '' && !patt.test($.trim($('#start_date').val()))) {
        toastr.error('Điều kiện tìm kiếm Từ ngày không đúng định dạng dd/mm/yyyy');
        $('#start_date').focus();
        return;
    }

    var patt = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if ($('#end_date').val() != '' && !patt.test($.trim($('#end_date').val()))) {
        toastr.error('Điều kiện tìm kiếm đến ngày không đúng định dạng dd/mm/yyyy');
        $('#end_date').focus();
        return;
    }
    return true;
}

//dat bien cuc bo o day
var thread_id = '';
var nhomquyen_id = '';

//goNew
$('#btnDonew').click(function () {
    // enabled_right();
    $('#action_info').val(1);
    togle_search();
    get_tab_nghiepvu('','disabled');
    get_tab_role('','unable');
    $('#input_Username').attr("disabled", false);
    thread_id = createUUID();
    console.log("thread_id : " + thread_id);
    $("#btnsave").css("display", "inline");
    $("#btnDelete").css("display", "inline");
    $("#btnReset").css("display", "inline");
    $("#btncancer").css("display", "inline");
    $("#btnDonew").attr("disabled", true);
    $('.nav-tabs a[href="#menu2"]').tab('show');
    resetRight();
    $('.err_msg').html('');
    $("#icon_penc").css("display", "none");
    $("#icon_dis_penc").css("display", "none");
    $("#input_Password").attr("disabled", false);
});

$('#btncancer').click(function () {
    // disabled_right();
    $("#btnsave").css("display", "none");
    $("#btnDelete").css("display", "none");
    $("#btnReset").css("display", "none");
    $("#btncancer").css("display", "none");
    $("#btnDonew").attr("disabled", false);
    table.rows(indexRowDt).deselect();
    show_search();
    resetRight();
});

$('#btnReset').click(function () {
    resetRight();
});

function get_tab_nghiepvu(user_id,checkDisble) {
    getact_basic().done(function (data) {
        var list_act_basic = data;
        var htmlNv = '<div class="tscroll"><table id="tableNV" class="table table-condensed table-striped table-bordered" cellspacing="0" width="100%">';
        htmlNv += '<thead><tr ><th id="tr_nv" style="width: 30%">Nghiệp vụ</th>';
        for (var i = 0; i < data.length; i++) {
            htmlNv += '<th style="text-align: center;">' + data[i].ACT_NAME + '</th>';
        }
        htmlNv += '</tr></thead><tbody>';

        getact_checked(user_id).done(function (data) {
            for (var j = 0; j < data.length; j++) {
                htmlNv += '<tr><td>' + data[j].NAME + '</td>';
                for (var i = 0; i < list_act_basic.length; i++) {
                    var ACTU = list_act_basic[i].ACTU;
                    var ACTUC = list_act_basic[i].ACTUC;
                    var ACT = list_act_basic[i].ACT;
                    if(checkDisble == 'disabled'){
                        if (data[j][ACTU] != 0) {
                            if(user_id !=''){
                                if (data[j][ACTUC] != 0) {
                                    htmlNv += '<td style="text-align: center;"><input disabled  type="checkbox" checked id="chek_' + ACT + '' + data[j].ID + '" name="' + data[j].ID + '_' + ACT + '" value="' + j + '" onclick="chk_nv_click(\'' + ACT + '\',\'' + data[j].ID + '\')" class="checkboxNVenb"></td>';
                                } else {
                                    htmlNv += '<td style="text-align: center;"><input  disabled type="checkbox"  id="chek_' + ACT + '' + data[j].ID + '" name="' + data[j].ID + '_' + ACT + '" value="' + j + '" onclick="chk_nv_click(\'' + ACT + '\',\'' + data[j].ID + '\')" class="checkboxNVenb"></td>';
                                }
                            }else{
                                htmlNv += '<td style="text-align: center;"><input  disabled type="checkbox"  id="chek_' + ACT + '' + data[j].ID + '" name="' + data[j].ID + '_' + ACT + '" value="' + j + '" onclick="chk_nv_click(\'' + ACT + '\',\'' + data[j].ID + '\')" class="checkboxNVenb"></td>';
                            }
                        } else {
                            htmlNv += '<td style="text-align: center;"><input  disabled type="checkbox"  id="chek_' + ACT + '' + data[j].ID + '" name="' + data[j].ID + '_' + ACT + '" value="' + j + '" onclick="chk_nv_click(\'' + ACT + '\',\'' + data[j].ID + '\')" class="checkboxNVdis"></td>';
                        }
                    }else{
                        if (data[j][ACTU] != 0) {
                            if(user_id !=''){
                                if (data[j][ACTUC] != 0) {
                                    htmlNv += '<td style="text-align: center;"><input  type="checkbox" checked id="chek_' + ACT + '' + data[j].ID + '" name="' + data[j].ID + '_' + ACT + '" value="' + j + '" onclick="chk_nv_click(\'' + ACT + '\',\'' + data[j].ID + '\')" class="checkboxNVenb"></td>';
                                } else {
                                    htmlNv += '<td style="text-align: center;"><input  type="checkbox"  id="chek_' + ACT + '' + data[j].ID + '" name="' + data[j].ID + '_' + ACT + '" value="' + j + '" onclick="chk_nv_click(\'' + ACT + '\',\'' + data[j].ID + '\')" class="checkboxNVenb"></td>';
                                }
                            }else{
                                htmlNv += '<td style="text-align: center;"><input  type="checkbox"  id="chek_' + ACT + '' + data[j].ID + '" name="' + data[j].ID + '_' + ACT + '" value="' + j + '" onclick="chk_nv_click(\'' + ACT + '\',\'' + data[j].ID + '\')" class="checkboxNVenb"></td>';
                            }
                        } else {
                            htmlNv += '<td style="text-align: center;"><input  disabled type="checkbox"  id="chek_' + ACT + '' + data[j].ID + '" name="' + data[j].ID + '_' + ACT + '" value="' + j + '" onclick="chk_nv_click(\'' + ACT + '\',\'' + data[j].ID + '\')" class="checkboxNVdis"></td>';
                        }
                    }

                }
            }
            htmlNv += '</tr></tbody></table></div>';
            $('#data-list-table-nv').html(htmlNv);
        }).fail(function (data) {
            alert("Có lỗi xảy ra " + data);
        });

    }).fail(function (data) {
        alert("Có lỗi xảy ra " + data);
    });
}

//get tab nhom quyen
function get_tab_role(user_id,checkDisable) {
    get_role(user_id).done(function (data) {
        var htmlRole = '<table id="tableNV" class="table table-condensed table-striped table-bordered" cellspacing="0" width="53%"><thead>';
        htmlRole += '<tr><th style="text-align: center;">Nhóm Quyền</th><th style="text-align: center;">';
        if(checkDisable=='disabled'){
            htmlRole += '<input disabled  type="checkbox" name="checkboxNQAll" id="checkboxNQAll" class="checkboxNQAll" onclick="checkNQ_clickAll()"></th></tr></thead><tbody>'
        }else{
            htmlRole += '<input   type="checkbox" name="checkboxNQAll" id="checkboxNQAll" class="checkboxNQAll" onclick="checkNQ_clickAll()"></th></tr></thead><tbody>'
        }
        for (var j = 0; j < data.length; j++) {
            if(checkDisable=='disabled'){
                if (user_id == '') {
                    htmlRole += '</tr><td>' + data[j].ROLE_NAME + '</td><td style="text-align: center;"><input disabled  type="checkbox" value="' + j + '" id="checkbox_' + data[j].ID + '" name="checkboxNQ"  class="checkNQ" onclick="checkNQ_click(' + data[j].ID + ')" ></td></tr>';
                } else {
                    if (data[j].A1 == '1') {
                        htmlRole += '<tr><td>' + data[j].ROLE_NAME + '</td><td style="text-align: center;"><input disabled checked  type="checkbox" value="' + j + '" id="checkbox_' + data[j].ID + '" name="checkboxNQ"  class="checkNQ" onclick="checkNQ_click(' + data[j].ID + ')"></td></tr>';
                    } else {
                        htmlRole += '<tr><td>' + data[j].ROLE_NAME + '</td><td style="text-align: center;"><input disabled  type="checkbox" value="' + j + '" id="checkbox_' + data[j].ID + '" name="checkboxNQ"  class="checkNQ" onclick="checkNQ_click(' + data[j].ID + ')"></td></tr>';
                    }
                }
            }else{
                if (user_id == '') {
                    htmlRole += '</tr><td>' + data[j].ROLE_NAME + '</td><td style="text-align: center;"><input   type="checkbox" value="' + j + '" id="checkbox_' + data[j].ID + '" name="checkboxNQ"  class="checkNQ" onclick="checkNQ_click(' + data[j].ID + ')" ></td></tr>';
                } else {
                    if (data[j].A1 == '1') {
                        htmlRole += '<tr><td>' + data[j].ROLE_NAME + '</td><td style="text-align: center;"><input  checked  type="checkbox" value="' + j + '" id="checkbox_' + data[j].ID + '" name="checkboxNQ"  class="checkNQ" onclick="checkNQ_click(' + data[j].ID + ')"></td></tr>';
                    } else {
                        htmlRole += '<tr><td>' + data[j].ROLE_NAME + '</td><td style="text-align: center;"><input   type="checkbox" value="' + j + '" id="checkbox_' + data[j].ID + '" name="checkboxNQ"  class="checkNQ" onclick="checkNQ_click(' + data[j].ID + ')"></td></tr>';
                    }
                }
            }
        }
        htmlRole += '</tbody></table>';
        $('#data-list-table-nq').html(htmlRole);
    }).fail(function (data) {
        alert("Có lỗi xảy ra get_tab_role " + data);
    });
}

//khoi tao threadId
function createUUID() {
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

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
    $("#box_info").hide(0);
    $("#box_search").show(500);
    $("#box_search").attr('class', 'col-sm-12');
}

function togle_search() {
    $("#box_info").show(500);
    $("#box_info").attr('class', 'col-sm-12');
    $("#box_search").hide(0);
    // $("#box_search").attr('class', 'col-sm-5');
}

let objSearch = {
    s_id: '',
    s_name: '',
    s_mobile: '',
    s_email: '',
    s_gender: '',
    s_checkRole: '',
    s_cardNumber: '',
    s_officeCode: '',
    s_statusId: '',
    s_createDate: '',
    s_createdBy: '',
    s_datedwl: ''
};

$('#tableDataView thead th').each(function () {
    var title = $(this).text();
    var dataId = $(this).attr("data-id");
    var is_select = $(this).attr("is_select");
    if (dataId != null && dataId != undefined) {
        if (is_select == null || is_select == undefined) {
            $(this).html('<p style="text-align: center">' + title + '</p><input  id="' + dataId + '" class="table-data-input-search" type="text"  placeholder="Tìm kiếm ' + title + '" autocomplete="off" />');
        } else if (is_select == 1) {
            $(this).html('<p style="text-align: center">'+ title +'</p>');
        } else if (is_select == 2) {
            $(this).html('<p style="text-align: center">'+ title +'</p><select class="select_table"  id="' + dataId + '"><option value="">Không chọn</option><option  value="1">Hoạt động</option><option value="0">Không hoạt động</option></select>');
        }else{
            $(this).html('<p style="text-align: center">'+ title +'</p><select  class="select_table" id="' + dataId + '"><option value="">Không chọn</option><option value="1">Nam</option><option value="0">Nữ</option></select>');
        }
    }
});
var indexRowDt = 0;
var draw = 0;
var table = $('#tableDataView').DataTable({
    columnDefs: [{
        orderable: false,
        // className: 'select-checkbox',
        targets: 0,
        checkboxes: {
            selectRow: true
        }
    }],
    select: {
        style: 'multi',
        selector: 'td:first-child',
        type: 'checkbox'
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
        {"data": "control"},
        {"data": "id", "render": $.fn.dataTable.render.text()},
        {"data": "password", "visible": false},
        {"data": "name", "render": $.fn.dataTable.render.text()},
        {"data": "mobile", "render": $.fn.dataTable.render.text()},
        {"data": "email", "render": $.fn.dataTable.render.text()},
        {"data": "gender", "render": $.fn.dataTable.render.text()},
        {"data": "checkRole", "visible": false},
        {"data": "cardNumber", "render": $.fn.dataTable.render.text()},
        {"data": "officeCode", "render": $.fn.dataTable.render.text()},
        {"data": "createdDates", "render": $.fn.dataTable.render.text()},
        {"data": "createdBy", "render": $.fn.dataTable.render.text()},
        {"data": "dateRole", "render": $.fn.dataTable.render.text()},
        {"data": "statusIds", "render": $.fn.dataTable.render.text()},
        {"data": "statusId", "visible": false},
        {"data": "group_id", "visible": false},
        {"data": "createdDate", "visible": false},
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
        "url": apiUrl + "user-manager/users_info_getlist",
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
                    "id": responseJson.content[i].id,
                    "password": responseJson.content[i].password,
                    "name": responseJson.content[i].name,
                    "mobile": responseJson.content[i].mobile,
                    "email": responseJson.content[i].email,
                    "gender": responseJson.content[i].genders,
                    "checkRole": responseJson.content[i].checkRole,
                    "cardNumber": responseJson.content[i].cardNumbers,
                    "officeCode": responseJson.content[i].officeCode,
                    "createdDates": responseJson.content[i].createdDates,
                    "createdBy": responseJson.content[i].createdBy,
                    "dateRole": responseJson.content[i].dateRole,
                    "statusIds": responseJson.content[i].statusIds,
                    "statusId": responseJson.content[i].statusId,
                    "group_id": responseJson.content[i].group_id,
                    "createdDate": responseJson.content[i].createdDate,
                    "control": "<span class='fa fa-edit' title='Cập nhật'  onclick='preEdit(" + i + ")' style='cursor: pointer'></span>",
                })
            }

            return JSON.stringify(dataRes);
        }
    }
});

 function preEdit(indexes) {
    let rowData = table.rows(indexes).data().toArray();
    fillDataToForm(rowData);
}

function getact_basic() {

    return $.ajax({
        headers: {
            'Authorization': token
        },
        url: apiUrl + "user-manager/get_header_tacvu",
        data: "username=" + username,
        method: "GET",
        contentType: "application/json"
    });

}

function getact_checked(user_id) {
    return $.ajax({
        headers: {
            'Authorization': token
        },
        url: apiUrl + "user-manager/get_menu_checked",
        data: "username=" + user_id + "&thread_id=" + thread_id + "&nhomquyen_id=" + nhomquyen_id,
        method: "GET",
        contentType: "application/json"

    });
}

function get_role(user_id) {
    return $.ajax({
        headers: {
            'Authorization': token
        },
        url: apiUrl + "user-manager/get_role",
        data: "username=" + user_id + "&thread_id=" + thread_id,
        method: "GET",
        contentType: "application/json"

    });
}

table.on('select', rowSelect).on('deselect', rowDeselect);

function rowSelect(e, dt, type, indexes) {
    // indexRowDt = indexes;
    // let rowData = table.rows(indexes).data().toArray();
    // fillDataToForm(rowData);
    var rowDt = table.rows('.selected').data()
    if(rowDt.length == 0){
        $("#btnDelete").css("display", "none");
    }else {
        $("#btnDelete").css("display", "inline");
    }
}

function rowDeselect(e, dt, type, indexes) {
    var rowDt = table.rows('.selected').data()
    if(rowDt.length == 0){
        $("#btnDelete").css("display", "none");
    }else {
        $("#btnDelete").css("display", "inline");
    }

}

$("#btnDelete").click(
    function (event) {
        event.preventDefault();
        event.stopPropagation();

        if(confirm("Bạn có muốn xóa bản ghi")){

        } else {
            return;
        }
        showLoading();
        var rowDt = table.rows('.selected').data();
        var data = [];

        for(let i =0 ; i < rowDt.length ; i++){
            data.push(rowDt[i].id);
        }
        console.log(data);
        $.ajax({
            headers: {
                'Authorization': token
            },
            "url": apiUrl + "user-manager",
            "method": "DELETE",
            "data" : JSON.stringify(data),
            "contentType": "application/json",
            "success": function (response) {
                toastr.success('Xóa người dùng thành công', response.message);
                $("#btnDelete").css("display", "none");
                table.ajax.reload();
                table.rows().deselect();
                disableLoading();
            },
            "error": function (error) {
                toastr.error('Lỗi', error.responseJSON.message);
                disableLoading();
            }
        });
    }
);

var edit_pass_var ='1';
//doEdit
function fillDataToForm(rowData) {
    edit_pass_var ='1';
    $('#action_info').val(2);
    thread_id = createUUID();
    console.log("fillDataToForm : " + thread_id);
    $('#input_code').val(rowData[0].code);
    $('#input_email').val(rowData[0].email);
    $('#input_Username').val(rowData[0].id);
    $('#input_name').val(rowData[0].name);
    $('#input_cardNumber').val(rowData[0].cardNumber);
    // $('#input_group_id').val(rowData[0].group_id);
    $("#input_group_id").val(rowData[0].group_id).change();

    $('#input_time_download').val(rowData[0].dateRole);
    $('#input_phone').val(rowData[0].mobile);
    $('#input_Password').val('');
    if(rowData[0].statusIds == 'Hoạt động'){
        $('#status_id').val(1);
    }else{
        $('#status_id').val(0);
    }
    if(rowData[0].gender == 'Nam'){
        $('#checkNam').prop('checked', true);
    }else{
        $('#checkNu').prop('checked', true);
    }
    if(rowData[0].checkRole == '0'){//nghiep vu
        $('#checktacvu').prop('checked', true);
        $('#checkNhomquyen').prop('checked', false);
        get_tab_nghiepvu(rowData[0].id,'unable');
        get_tab_role(rowData[0].id,'disabled');
    }else{//nhom quyen
        $('#checkNhomquyen').prop('checked', true);
        $('#checktacvu').prop('checked', false);
        get_tab_nghiepvu(rowData[0].id,'disabled');
        get_tab_role(rowData[0].id,'unable');
    }
    togle_search();
    $("#btnsave").css("display", "inline");
    $("#btnReset").css("display", "inline");
    $("#btncancer").css("display", "inline");
    $("#btnDonew").attr("disabled", true);
    $("#input_Password").attr("disabled", true);
    $('#input_Username').attr("disabled", true);
    $('.nav-tabs a[href="#menu2"]').tab('show');
    $('.err_msg').html('');
    $("#icon_penc").css("display", "inline");
    $("#icon_dis_penc").css("display", "none");
}
function edit_pass() {
    edit_pass_var = '';
    $("#input_Password").attr("disabled", false);
    $("#icon_penc").css("display", "none");
    $("#icon_dis_penc").css("display", "inline");
}

function dis_penc() {
    edit_pass_var = '1';
    $("#input_Password").attr("disabled", true);
    $("#input_Password").val('');
    $("#icon_penc").css("display", "inline");
    $("#icon_dis_penc").css("display", "none");
}
//action dieu huong khi tich chon tab nghiep vu
function chk_nv_click(act, menuId) {
    // $('#chkAll'+act).prop('checked', false);
    var c = $("#chek_" + act + menuId).is(":checked");

    if (c == true) {
        $.ajax({
            headers: {
                'Authorization': token
            },
            url: apiUrl + "user-manager/create_nv_temp",
            data: "act=" + act + "&menuId=" + menuId + "&threadId=" + thread_id + "&type=" + 1,
            method: "post",
            success: function (data) {
                if ($.trim(data) == "true") {

                    // toastr.success('Thành công', data.message);
                } else {
                    toastr.success('Có lỗi xảy ra' + data, data.message);
                }
            }
        });
    } else {
        $.ajax({
            headers: {
                'Authorization': token
            },

            url: apiUrl + "user-manager/create_nv_temp",
            data: "act=" + act + "&menuId=" + menuId + "&threadId=" + thread_id + "&type=" + 0,
            method: "post",
            success: function (data) {
                if ($.trim(data) == "true") {
                    // toastr.success('Xóa thành công', data.message);
                } else {
                    toastr.success('Có lỗi xảy ra', data.message);
                }
            }
        });
    }

}

//action click tich chon nhom quyen
function checkNQ_click(nhomQuyen_id) {
    var c = $("#checkbox_" + nhomQuyen_id).is(":checked");
    if (c == true) {
        $.ajax({
            headers: {
                'Authorization': token
            },
            url: apiUrl + "user-manager/create_nq_temp",
            data: "nhomQuyen_id=" + nhomQuyen_id + "&threadId=" + thread_id + "&type=" + 1 + "&checkall=",
            method: "post",
            success: function (data) {
                // alert(data);
                if ($.trim(data) == "true") {
                    // toastr.success('thêm thành công', data.message);
                } else {
                    toastr.success('Có lỗi xảy ra', data.message);
                    ;
                }
            }
        });
    } else {
        $.ajax({
            headers: {
                'Authorization': token
            },
            url: apiUrl + "user-manager/create_nq_temp",
            data: "nhomQuyen_id=" + nhomQuyen_id + "&threadId=" + thread_id + "&type=" + 0 + "&checkall=",
            method: "post",
            success: function (data) {
                if ($.trim(data) == "true") {
                    // toastr.success('Xóa thành công', data.message);
                } else {
                    toastr.success('Có lỗi xảy ra', data.message);
                    ;
                }
            }
        });
    }
}

function checkNQ_clickAll() {
    var c = $("#checkboxNQAll").is(":checked");
    if (c == true) {
        $(".checkNQ").prop('checked', true);
        $.ajax({
            headers: {
                'Authorization': token
            },
            url: apiUrl + "user-manager/create_nq_temp",
            data: "nhomQuyen_id=&threadId=" + thread_id + "&type=" + 1 + "&checkall=1",
            method: "post",
            success: function (data) {
                // alert(data);
                if ($.trim(data) == "true") {
                    // toastr.success('checkall thành công', data.message);
                } else {
                    toastr.success('Có lỗi xảy ra', data.message);
                    ;
                }
            }
        });
    } else {
        $(".checkNQ").prop('checked', false);
        $.ajax({
            headers: {
                'Authorization': token
            },
            url: apiUrl + "user-manager/create_nq_temp",
            data: "nhomQuyen_id=&threadId=" + thread_id + "&type=" + 0 + "&checkall=1",
            method: "post",
            success: function (data) {
                // alert(data);
                if ($.trim(data) == "true") {
                    // toastr.success('checkall thành công', data.message);
                } else {
                    toastr.success('Có lỗi xảy ra', data.message);
                    ;
                }
            }
        });
    }
}


function getStationType() {
    $.ajax({
        headers: {
            'Authorization': token
        },
        url: apiUrl + "user-manager/get_list_group_users",
        method: "GET",
        contentType: "application/json",
        success: function (data) {
            console.log(data);
            $("#input_group_id").select2({data: data});
        }
    });
}

$('#btnsave').on('click', function (e) {
    $("#exampleModal").modal();

    if (validateForm()) {
        var checkedGender = "1";//nam
        var c = $("#checkNam").is(":checked");
        if (c == false) {
            checkedGender = "0";//nu
        }

        var checkRole = "1";//nhom quyen
        var d = $("#checkNhomquyen").is(":checked");
        if (d == false) {
            checkRole = "0";//nghiep vu
        }
        // set data
        let data = {
            "id": $.trim($('#input_Username').val()),
            "password": $.trim($('#input_Password').val()),
            "name": $.trim($('#input_name').val()),
            "mobile": $.trim($('#input_phone').val()),
            "email": $.trim($('#input_email').val()),
            "gender": checkedGender == "0" ? "0" : 1,
            "status_id": $('#status_id').val(),
            "check_roke": checkRole == "0" ? "0" : 1,
            "card_number": $.trim($('#input_cardNumber').val()),
            "group_user_id": $('#input_group_id').val(),
            "check_download_time": $.trim($('#input_time_download').val()),
            "thread_id": thread_id,
            "user_login": username,
            "check_edit_pass": edit_pass_var,
        };

        if ($('#action_info').val() == 1) {
            // call ajax here add new
            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: apiUrl + "user-manager/create_users",
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(data),
                success: function (data) {  //
                    if (data == "true") {
                        toastr.success('Thêm mới người dùng thành công', data.message);
                        location.reload();
                    } else if (data == "username_exist") {
                        $('#input_Username_msg').html('username đã tồn tại!');
                        $('#input_Username').focus();
                    } else if (data == "cardnumber_exist") {
                        $('#input_cardNumber_msg').html('Số chứng minh thư đã tồn tại!');
                        $('#input_cardNumber').focus();
                    } else if (data == "email_exist") {
                        $('#input_email_msg').html('Email đã tồn tại!');
                        $('#input_email').focus();
                    } else {
                        toastr.error('Có lỗi xảy ra' + data, data.message);
                    }
                    table.ajax.reload();
                },
                error: function (err) {
                    toastr.error("Có lỗi xảy ra : " + err);
                    console.log("result = " + err);
                }
            });
        } else {
            // call ajax here edit
            $.ajax({
                headers: {
                    'Authorization': token
                },
                url: apiUrl + "user-manager/edit_users",
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(data),
                success: function (data) {  //
                    if (data == "true") {
                        toastr.success('Chỉnh sửa người dùng thành công', data.message);
                        location.reload();
                    } else if (data == "cardnumber_exist") {
                        $('#input_cardNumber_msg').html('Số chứng minh thư đã tồn tại!');
                        $('#input_cardNumber').focus();
                    } else if (data == "email_exist") {
                        $('#input_email_msg').html('Email đã tồn tại!');
                        $('#input_email').focus();
                    } else {
                        toastr.error('Có lỗi xảy ra' + data, data.message);
                    }
                    table.ajax.reload();
                },
                error: function (err) {
                    toastr.error("Có lỗi xảy ra : " + err);
                    console.log("result = " + err);
                }
            });
        }

    }
});

// $('#btnDelete').on('click', function (e) {
//     // call ajax here edit
//     $.ajax({
//         headers: {
//             'Authorization': token
//         },
//         url: apiUrl + "user-manager/delete_users",
//         method: 'POST',
//         data: 'username=' + $('#input_Username').val(),
//         success: function (data) {
//             if (data == "true") {
//                 toastr.success('Xóa người dùng thành công', data.message);
//                 location.reload();
//             } else if (data == "check_id_exist") {
//                 toastr.error('Tài khoản không tồn tại', data.message);
//             } else {
//                 toastr.error('Có lỗi xảy ra' + data, data.message);
//             }
//         },
//         error: function (err) {
//             toastr.error("Có lỗi xảy ra : " + err);
//             console.log("result = " + err);
//         }
//     });
// });

function validateForm() {
    $('.err_msg').html('');

    if ($.trim($('#input_Username').val()) == '') {
        toastr.error('Tên đăng nhập không được để trống!');
        $('#input_Username').focus();
        return;
    }
    var patt = /^[A-Za-z0-9_\.]+$/;
    if (!patt.test(($.trim($('#input_Username').val())).toLowerCase())) {
        toastr.error('username không hợp lệ! (Chỉ bao gồm các ký tự chữ cái, chữ số, dấu gạch dưới, dấu chấm.)');
        $('#input_Username').focus();
        return;
    }

    if ($.trim($('#input_Password').val()) == '' && edit_pass_var == '') {
        toastr.error('Mật khẩu không được để trống!');
        $('#input_Password').focus();
        return;
    }

    if ($.trim($('#input_name').val()) == '') {
        toastr.error('Họ và tên không được để trống!');
        $('#input_name').focus();
        return;
    }

    if ($.trim($('#input_email').val()) == '') {
        toastr.error('Email không được để trống!');
        $('#input_email').focus();
        return;
    }

    if ($('#input_email').val() != '' && !validateEmail($('#input_email').val())) {
        toastr.error($('#input_email').val() + ' không hợp lệ!');
        $('#input_email').focus();
        return;
    }

    if ($.trim($('#input_group_id').val()) == '-1') {
        toastr.error('Nhóm người dùng không được để trống!');
        $('#input_group_id').focus();
        return;
    }

    var patt = /^[0-9 ]+$/;
    if ($('#input_cardNumber').val() != '' && !patt.test($.trim($('#input_cardNumber').val()))) {
        toastr.error('Số chứng minh thư không hợp lệ! (phải là chuỗi số nguyên dương!)');
        $('#input_cardNumber').focus();
        return;
    }
    var patt = /^[0-9 ]+$/;
    if ($.trim($('#input_phone').val()) != '' && !patt.test($.trim($('#input_phone').val()))) {
        toastr.error('Số điện thoại không hợp lệ! (phải là chuỗi số nguyên dương!)');
        $('#input_phone').focus();
        return;
    }

    var patt = /^[1-9 ]+$/;
    if ($('#input_time_download').val() != '' && !patt.test($.trim($('#input_time_download').val()))) {
        toastr.error('Thời gian download không hợp lệ! (phải là chuỗi số nguyên dương > 0!)');
        $('#input_time_download').focus();
        return;
    }

    if ($('#input_time_download').val() == '' ) {
        toastr.error('Thời gian download không được bỏ trống!)');
        $('#input_time_download').focus();
        return;
    }

    return true;
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function resetRight() {
    $('#input_code').val('');
    $('#input_email').val('');
    if($('#action_info').val()!='2'){
        $('#input_Username').val('');
    }
    $('#input_Password').val('');
    $('#input_name').val('');
    $('#input_cardNumber').val('');
    $('#input_group_id').val(-1).change();
    $('#status_id').val(1);
    $('#input_time_download').val('');
    $('#input_phone').val('');
    $('#checkNam').prop('checked', true);
    $('#checkNu').prop('checked', false);
    thread_id = createUUID();
    console.log("resetRight =" + thread_id);
    get_tab_nghiepvu('','disabled');
    get_tab_role('','unable');
    $('#checkNam').prop('checked', true);
    $('#checkNu').prop('checked', false);
    $('#checkNhomquyen').prop('checked', true);
    $('#checktacvu').prop('checked', false);

}

function ckNhom_quyen() {
    $("input.checkboxNVenb").attr("disabled", true);
    $("input.checkboxNVenb").prop('checked', false);
    $("input.checkNQ").attr("disabled", false);
    $("input.checkboxNQAll").attr("disabled", false);
    delete_temp(1);
    $('.nav-tabs a[href="#menu2"]').tab('show');
}

//action chon tac vu
function checktac_vu() {
    $("input.checkNQ").attr("disabled", true);
    $("input.checkNQ").prop('checked', false);
    $("input.checkboxNVenb").prop('checked', false);
    $("input.checkboxNVenb").attr("disabled", false);
    $("input.checkboxNQAll").prop('checked', false);
    $("input.checkboxNQAll").attr("disabled", true);
    delete_temp(0);
    $('.nav-tabs a[href="#NV"]').tab('show');
}

function delete_temp(tempId) {
    // call ajax here
    $.ajax({
        headers: {
            'Authorization': token
        },
        url: apiUrl + "user-manager/delete_temp",
        data: "tempId=" + tempId + "&threadId=" + thread_id,
        method: "post",
        success: function (data) {
            // alert(data);
            if ($.trim(data) == "true") {
                // toastr.success('checkall thành công', data.message);
            } else {
                toastr.success('Có lỗi xảy ra', data.message);
                ;
            }
        }
    });
}

$('#btnSearch').on('click', function (e) {
    if(validateSearch()){
        objSearch.s_fromdate = $("#start_date").val();
        objSearch.s_todate = $("#end_date").val();
        table.search(objSearch).draw();
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
