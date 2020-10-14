$(document).ready(function () {
    show_search();
});
//dat bien cuc bo o day
var thread_id = '';
var nhomquyen_id = '';

//goNew
$('#btnDonew').click(function () {
    // enabled_right();
    $('#action_info').val(1);
    togle_search();
    get_tab_nghiepvu('');
    get_tab_role('');
    thread_id = createUUID();
    $("#btnsave").css("display", "inline");
    $("#btnDelete").css("display", "inline");
    $("#btnReset").css("display", "inline");
    $("#btncancer").css("display", "inline");
    $("#btnDonew").attr("disabled", true);
    $('.nav-tabs a[href="#menu2"]').tab('show');
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
});

function get_tab_nghiepvu(user_id) {
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
                    var ACT = list_act_basic[i].ACT;
                    if (data[j][ACTU] != 0) {
                        htmlNv += '<td style="text-align: center;"><input   type="checkbox"  id="chek_'+ACT+'" name="'+data[j].ID+'_'+ACT+'" value="'+j+'" onclick="chk_nv_click(\''+ACT+'\',\''+data[j].ID+'\')" class="checkboxNVenb"></td>';
                    } else {
                        htmlNv += '<td style="text-align: center;"><input  disabled type="checkbox"  id="chek_'+ACT+'" name="'+data[j].ID+'_'+ACT+'" value="'+j+'" onclick="chk_nv_click(\''+ACT+'\',\''+data[j].ID+'\')" class="checkboxNVdis"></td>';
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
function get_tab_role(user_id) {
    get_role(user_id).done(function (data) {
        var htmlRole = '<table id="tableNV" class="table table-condensed table-striped table-bordered" cellspacing="0" width="53%"><thead>';
        htmlRole += '<tr><th style="text-align: center;">Nhóm Quyền</th><th style="text-align: center;"><input   type="checkbox" name="checkboxNQAll"  class="checkboxNQAll" onclick="checkNQ_clickAll()"></th></tr></thead><tbody>';
        for (var j = 0; j < data.length; j++) {

            if (user_id == '') {
                htmlRole += '</tr><td>' + data[j].ROLE_NAME + '</td><td style="text-align: center;"><input   type="checkbox" id="checkbox_"' + data[j].ID + ' name="checkboxNQ"  class="checkNQ" onclick="checkNQ_click(' + data[j].ID + ')" ></td></tr>';
            } else {
                if (data[j].A1 == '1') {
                    htmlRole += '<tr><td>' + data[j].ROLE_NAME + '</td><td style="text-align: center;"><input  checked  type="checkbox" id="' + data[j].ID + '" name="checkboxNQ"  class="checkNQ" onclick="checkNQ_click(' + data[j].ID + ')"></td></tr>';
                } else {
                    htmlRole += '<tr><td>' + data[j].ROLE_NAME + '</td><td style="text-align: center;"><input   type="checkbox" id="' + data[j].ID + '" name="checkboxNQ"  class="checkNQ" onclick="checkNQ_click(' + data[j].ID + ')"></td></tr>';
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
    s_code: '',
    s_username: '',
    s_fromDate: '',
    s_toDate: ''
};

$('#tableDataView thead th').each(function () {
    var title = $(this).text();
    var dataId = $(this).attr("data-id");
    if (dataId != null && dataId != undefined) {
        $(this).html('<input class="table-data-input-search" id="' + dataId + '" type="text" placeholder="Search ' + title + '" />');
    }
});
var indexRowDt = 0;
var draw = 0;
var table = $('#tableDataView').DataTable({
    columnDefs: [{
        orderable: false,
        className: 'select-checkbox',
        targets: 0
    }],
    select: {
        style: 'os',
        selector: 'td:first-child',
        type: 'single'
    },
    "pagingType": "full_numbers",
    "lengthMenu": [
        [10, 25, 50, -1],
        [10, 25, 50]
    ],
    "lengthChange": true,
    "searchDelay": 1500,
    "searching": false,
    "ordering": true,
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
        {"data": "id", "render": $.fn.dataTable.render.text()},
        {"data": "name", "render": $.fn.dataTable.render.text()},
        {"data": "mobile", "render": $.fn.dataTable.render.text()},
        {"data": "position", "render": $.fn.dataTable.render.text()},
        {"data": "email", "render": $.fn.dataTable.render.text()},
        {"data": "gender", "render": $.fn.dataTable.render.text()},
        {"data": "statusId", "render": $.fn.dataTable.render.text()},
        {"data": "checkRole", "render": $.fn.dataTable.render.text()},
        {"data": "cardNumber", "render": $.fn.dataTable.render.text()},
        {"data": "code", "render": $.fn.dataTable.render.text()},
        {"data": "officeCode", "render": $.fn.dataTable.render.text()},
        {"data": "createdDate", "render": $.fn.dataTable.render.text()},
        {"data": "dateRole", "render": $.fn.dataTable.render.text()}
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
                that.search(JSON.stringify(objSearch))
                    .draw();
            });
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
            objSearch = {
                s_code: '',
                s_username: '',
                s_fromDate: '',
                s_toDate: ''
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
                    "id": responseJson.content[i].id,
                    "name": responseJson.content[i].name,
                    "mobile": responseJson.content[i].mobile,
                    "position": responseJson.content[i].position,
                    "email": responseJson.content[i].email,
                    "gender": responseJson.content[i].gender,
                    "statusId": responseJson.content[i].statusId,
                    "checkRole": responseJson.content[i].checkRole,
                    "cardNumber": responseJson.content[i].cardNumber,
                    "code": responseJson.content[i].code,
                    "officeCode": responseJson.content[i].officeCode,
                    "createdDate": responseJson.content[i].createdDates,
                    "dateRole": responseJson.content[i].dateRole,
                })
            }

            return JSON.stringify(dataRes);
        }
    }
});

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
    indexRowDt = indexes;
    let rowData = table.rows(indexes).data().toArray();
    fillDataToForm(rowData);
}

function rowDeselect(e, dt, type, indexes) {
    $('#input_code').val('');
    $('#input_email').val('');
    $('#input_Username').val('');
    $('#input_Password').val('');
    $('#input_name').val('');
    $('#input_cardNumber').val('');
    $('#input_group_id').val('');
    $('#status_id').val('');
    $('#input_time_download').val('');
    show_search();

}
//doEdit
function  fillDataToForm(rowData) {
    $('#action_info').val(2);
    thread_id = createUUID();
    $('#input_code').val(rowData[0].code);
    $('#input_email').val(rowData[0].email);
    $('#input_Username').val(rowData[0].id);
    $('#input_Password').val(rowData[0].password);
    $('#input_name').val(rowData[0].name);
    $('#input_cardNumber').val(rowData[0].cardNumber);
    $('#input_group_id').val(rowData[0].officeCode);
    $('#status_id').val(rowData[0].statusId);
    $('#input_time_download').val(rowData[0].dateRole);
    get_tab_nghiepvu(rowData[0].id);
    get_tab_role(rowData[0].id);
    togle_search();
    $("#btnsave").css("display", "inline");
    $("#btnDelete").css("display", "inline");
    $("#btnReset").css("display", "inline");
    $("#btncancer").css("display", "inline");
    $("#btnDonew").attr("disabled", true);
    $('.nav-tabs a[href="#menu2"]').tab('show');
}

function chk_nv_click(a, b) {
    alert(a + " - " + b);
}

//action dieu huong khi tich chon tab nghiep vu
function chkAll_click2(act,menuId){
    $('#chkAll'+act).prop('checked', false);
    var c = $("#chek"+act+menuId).is(":checked");
    if(c == true){
        $("#chek"+act+menuId).prop('checked',true);
        add_new_pro(act,menuId);
    }else{
        delete_pro(act,menuId);
    }
}