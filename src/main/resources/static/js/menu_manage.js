$('#inputParentId').select2({
    placeholder: 'Chọn menu cha',
    theme: 'bootstrap4',
    minimumInputLength: 0,
    allowClear: true
});

function formatIcon(icon) {
    return $('<span><i class="'+ icon.text +'"></i></span>');
}

$('#inputPictureFile').select2({
    theme: 'bootstrap4',
    minimumInputLength: 0,
    templateSelection: formatIcon,
    templateResult: formatIcon,
    allowHtml: true
});

getListMenuParentForm();

// lay danh sach menu cha
function getListMenuParentForm() {
    showLoading();
    $.ajax({
        headers: {
            'Authorization': token
        },
        url: apiUrl + "menu-manage/get-all-menu",
        method: 'GET',
        async: false,
        contentType: 'application/json',
        success: function (data) {
            let listOptions = "<option value=''></option>";
            for(let i = 0; i < data.length; i++) {
                listOptions += "<option value='"+ data[i].id +"'>"+ data[i].name +"</option>";
            }
            $('#inputParentId').html(listOptions);
            disableLoading();
        },
        error: function (err) {
            disableLoading();
            toastr.error(err.responseJSON.message, err.responseJSON.code);
        }
    });
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
 
let objSearch = {
    s_id: '',
    s_name: '',
    s_display_order: '',
    s_picture_file: '',
    s_detail_file: '',
    s_parent_id: '',
    s_publish: '',
    s_sys_id: '',
    s_created_user: '',
    s_modified_user: ''
};

$('#tableDataView thead th').each(function () {
    var title = $(this).text();
    var dataId = $(this).attr("data-id");
    if (dataId != null && dataId != undefined && dataId != 's_created_date' && dataId != 's_modified_date') {
        $(this).html('<input class="table-data-input-search" id="'+ dataId +'" type="text" placeholder="Search ' + title + '" />');
    }
});

var search = $.fn.dataTable.util.throttle(
    function ( val ) {
        table.search( val ).draw();
    },
    1000
);

var keyUpTime;
var oldValue;

// showLoading();
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
    "processing": true,
    "serverSide": true,
    "columns": [
        { "data":""},
        {"data": "indexCount", "render": $.fn.dataTable.render.text()},
        {"data": "id", "render": $.fn.dataTable.render.text()},
        {"data": "name", "render": $.fn.dataTable.render.text()},
        {"data": "display_order", "render": $.fn.dataTable.render.text()},
        {"data": "picture_file", "render": $.fn.dataTable.render.text()},
        {"data": "detail_file", "render": $.fn.dataTable.render.text()},
        {"data": "menu_level", "render": $.fn.dataTable.render.text()},
        {"data": "parent_id", "render": $.fn.dataTable.render.text()},
        {"data": "publish", "render": $.fn.dataTable.render.text()},
        {"data": "created_date", "render": $.fn.dataTable.render.text()},
        {"data": "modified_date", "render": $.fn.dataTable.render.text()},
        {"data": "created_user", "render": $.fn.dataTable.render.text()},
        {"data": "modified_user", "render": $.fn.dataTable.render.text()},
        {"data": "sys_id", "render": $.fn.dataTable.render.text()}
    ],
    initComplete: function () {
        // Apply the search
        this.api().columns().every(function () {
            var that = this;
            $('.table-data-input-search').on('keyup change clear', function () {
                oldValue = this.___value___;
                this.___value___ = this.value;
                if (oldValue == this.___value___) return;
                keyUpTime = new Date().getTime();
                let id = $(this).attr('id');
                objSearch[id] = this.value;
                setTimeout(function () {
                    if (new Date().getTime() - keyUpTime > 1000) {
                        table.search(objSearch).draw();
                        keyUpTime = new Date().getTime();
                    }
                    return;
                }, 1100);
            });
        });
    },
    "ajax": {
        headers: {
            'Authorization': token
        },
        "url": apiUrl + "menu-manage/get-list-menu-pagination",
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
                s_id: '',
                s_name: '',
                s_display_order: '',
                s_picture_file: '',
                s_detail_file: '',
                s_parent_id: '',
                s_publish: '',
                s_sys_id: '',
                s_created_user: '',
                s_modified_user: ''
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
                    "display_order": responseJson.content[i].displayOrder,
                    "picture_file": responseJson.content[i].pictureFile,
                    "detail_file": responseJson.content[i].detailFile,
                    "menu_level": responseJson.content[i].menuLevel,
                    "parent_id": responseJson.content[i].parentId,
                    "publish": responseJson.content[i].publish,
                    "created_date": responseJson.content[i].createdDate,
                    "modified_date": responseJson.content[i].modifiedDate,
                    "created_user": responseJson.content[i].createdUser,
                    "modified_user": responseJson.content[i].modifiedUser,
                    "sys_id": responseJson.content[i].sysId,
                })
            }

            return JSON.stringify(dataRes);
        }
    }
});

// set default state for button control
$('#btnCopy').attr('disabled', 'true');
$('#btnDelete').attr('disabled', 'true');
$('#btnEdit').attr('disabled', 'true');

table
    .on('select', rowSelect)
    .on('deselect', rowDeselect);

// set up trigger city

function rowSelect(e, dt, type, indexes) {
    $('#btnCopy').removeAttr('disabled');
    $('#btnDelete').removeAttr('disabled');
    $('#btnEdit').removeAttr('disabled');
    var rowData = table.rows(indexes).data().toArray();

    fillDataToForm(rowData);
}

function fillDataToForm(rowData) {
    if (rowData != null && rowData != undefined && rowData.length > 0) {
        $('#inputMenuId').val(rowData[0].id);
        $('#inputMenuName').val(rowData[0].name);
        $('#inputDisplayOrder').val(rowData[0].display_order);
        $('#inputPictureFile').val(rowData[0].picture_file).trigger('change');
        $('#inputDetailFile').val(rowData[0].detail_file);
        $('#inputParentId').val(rowData[0].parent_id).trigger('change');
        $('#inputPublish').val(rowData[0].publish);
    }
}

function rowDeselect(e, dt, type, indexes) {
    $('#btnCopy').attr('disabled', 'true');
    $('#btnDelete').attr('disabled', 'true');
    $('#btnEdit').attr('disabled', 'true');
    formReset();
}

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
    $('#inputParentId').val('').trigger('change');
}

function resetButtonControlAfterSubmitForm() {
    $('#btnSaveCreate').css('display', 'none');
    $('#btnBackCreate').css('display', 'none');
    $('#btnSaveEdit').css('display', 'none');
    $('#btnBackEdit').css('display', 'none');
    $('#btnSaveCopy').css('display', 'none');
    $('#btnBackCopy').css('display', 'none');

    // set state for button control
    $('#btnCreate').css('display', '');
    $('#btnCopy').css('display', '');
    $('#btnDelete').css('display', '');
    $('#btnEdit').css('display', '');
    $('#btnCopy').attr('disabled', 'true');
    $('#btnDelete').attr('disabled', 'true');
    $('#btnEdit').attr('disabled', 'true');
}

$('#btnSaveCreate').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    if(!$('#form_data').valid())
        return;

    // call ajax here
    showLoading();

    let data = {
        "name": $('#inputMenuName').val(),
        "displayOrder": $('#inputDisplayOrder').val(),
        "pictureFile": $('#inputPictureFile').val(),
        "detailFile": $('#inputDetailFile').val(),
        "parentId": $('#inputParentId').val(),
        "publish": $('#inputPublish').val()
    };

    $.ajax({
        headers: {
            'Authorization': token
        },
        "url": apiUrl + "menu-manage/create-menu",
        method: 'POST',
        async: false,
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function (data) {
            //
            $('#btnSaveCreate').css('display', 'none');
            $('#btnBackCreate').css('display', 'none');

            // set state for button control
            $('#btnCreate').css('display', '');
            $('#btnCopy').css('display', '');
            $('#btnDelete').css('display', '');
            $('#btnEdit').css('display', '');
            $('#btnCopy').attr('disabled', 'true');
            $('#btnDelete').attr('disabled', 'true');
            $('#btnEdit').attr('disabled', 'true');
            disableLoading();
            formReset();
            resetButtonControlAfterSubmitForm();
            table.rows().deselect();
            $('#wrap_table_data').css('pointer-events', '');
            if (data.status == '1') {
                toastr.success('Thành công', data.message);
            } else {
                toastr.error('Lỗi', data.message);
            }
            getListMenuParentForm();
            table.ajax.reload();
        },
        error: function (err) {
            disableLoading();
            toastr.error(err.responseJSON.message, err.responseJSON.code);
        }
    })
});

$('#btnBackCreate').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    $('#btnSaveCreate').css('display', 'none');
    $('#btnBackCreate').css('display', 'none');

    // set state for button control
    $('#btnCreate').css('display', '');
    $('#btnCopy').css('display', '');
    $('#btnDelete').css('display', '');
    $('#btnEdit').css('display', '');

    $('#wrap_table_data').css('pointer-events', '');

    formReset()
    // roleback dataToForm
    let rowData = table.rows( { selected: true } ).data().toArray();
    if (rowData == null || rowData == undefined || rowData.length < 1) {
        $('#btnCopy').attr('disabled', 'true');
        $('#btnDelete').attr('disabled', 'true');
        $('#btnEdit').attr('disabled', 'true');
    } else {
        fillDataToForm(rowData);
    }
});

// set action for btnEdit
$('#btnEdit').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    // set state for button control
    $('#btnCreate').css('display', 'none');
    $('#btnCopy').css('display', 'none');
    $('#btnDelete').css('display', 'none');
    $('#btnEdit').css('display', 'none');

    // set state for button save and back
    $('#btnSaveEdit').css('display', '');
    $('#btnBackEdit').css('display', '');

    // block table
    $('#wrap_table_data').css('pointer-events', 'none');
});

$('#btnSaveEdit').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    if(!$('#form_data').valid())
        return;

    showLoading();
    // set data
    let data = {
        "id": $('#inputMenuId').val(),
        "name": $('#inputMenuName').val(),
        "displayOrder": $('#inputDisplayOrder').val(),
        "pictureFile": $('#inputPictureFile').val(),
        "detailFile": $('#inputDetailFile').val(),
        "parentId": $('#inputParentId').val(),
        "publish": $('#inputPublish').val()
    };

    // call ajax here
    $.ajax({
        headers: {
            'Authorization': token
        },
        url: apiUrl + "menu-manage/edit-menu",
        async: false,
        method: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function (data) {  //
            $('#btnSaveEdit').css('display', 'none');
            $('#btnBackEdit').css('display', 'none');

            // set state for button control
            disableLoading();
            formReset();
            resetButtonControlAfterSubmitForm();
            table.rows().deselect();
            $('#wrap_table_data').css('pointer-events', '');
            if (data.status == '1') {
                toastr.success('Thành công', data.message);
            } else {
                toastr.error('Lỗi', data.message);
            }

            getListMenuParentForm();
            table.ajax.reload();
        },
        error: function (err) {
            disableLoading();
            toastr.error(err.responseJSON.message, err.responseJSON.code);
        }
    });

});

$('#btnBackEdit').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    $('#btnSaveEdit').css('display', 'none');
    $('#btnBackEdit').css('display', 'none');

    // set state for button control
    $('#btnCreate').css('display', '');
    $('#btnCopy').css('display', '');
    $('#btnDelete').css('display', '');
    $('#btnEdit').css('display', '');

    $('#wrap_table_data').css('pointer-events', '');

    formReset();
    // roleback dataToForm
    let rowData = table.rows( { selected: true } ).data().toArray();
    fillDataToForm(rowData);
});

// action for copy
$('#btnCopy').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    // set state for button control
    $('#btnCreate').css('display', 'none');
    $('#btnCopy').css('display', 'none');
    $('#btnDelete').css('display', 'none');
    $('#btnEdit').css('display', 'none');

    // set state for button save and back
    $('#btnSaveCopy').css('display', '');
    $('#btnBackCopy').css('display', '');

    // block table
    $('#wrap_table_data').css('pointer-events', 'none');
});

$('#btnSaveCopy').on('click', function (e) {

    e.preventDefault();
    e.stopPropagation();

    if(!$('#form_data').valid())
        return;

    showLoading();

    let data = {
        "name": $('#inputMenuName').val(),
        "displayOrder": $('#inputDisplayOrder').val(),
        "pictureFile": $('#inputPictureFile').val(),
        "detailFile": $('#inputDetailFile').val(),
        "parentId": $('#inputParentId').val(),
        "publish": $('#inputPublish').val()
    };

    $.ajax({
        headers: {
            'Authorization': token
        },
        "url": apiUrl + "menu-manage/create-menu",
        method: 'POST',
        async: false,
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function (data) {

            // set state for button control
            disableLoading();
            formReset();
            resetButtonControlAfterSubmitForm();
            table.rows().deselect();
            $('#wrap_table_data').css('pointer-events', '');
            if (data.status == '1') {
                toastr.success('Thành công', data.message);
            } else {
                toastr.error('Lỗi', data.message);
            }
            getListMenuParentForm();
            table.ajax.reload();
        },
        error: function (err) {
            disableLoading();
            toastr.error(err.responseJSON.message, err.responseJSON.code);
        }
    })

});

$('#btnBackCopy').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    $('#btnSaveCopy').css('display', 'none');
    $('#btnBackCopy').css('display', 'none');

    // set state for button control
    $('#btnCreate').css('display', '');
    $('#btnCopy').css('display', '');
    $('#btnDelete').css('display', '');
    $('#btnEdit').css('display', '');

    $('#wrap_table_data').css('pointer-events', '');

    formReset()
    // roleback dataToForm
    let rowData = table.rows( { selected: true } ).data().toArray();
    fillDataToForm(rowData);
});

$('#btnDelete').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    if (confirm("Bạn có muốn xoá bản ghi này không ?")) {
        showLoading();
        let rowData = table.rows( { selected: true } ).data().toArray();
        let data = {
            "id": rowData[0].id
        };

        $.ajax({
            headers: {
                'Authorization': token
            },
            url: apiUrl + "menu-manage/delete-menu",
            method: 'DELETE',
            contentType: 'application/json',
            async: false,
            data: JSON.stringify(data),
            success: function (data) {
                // set state for button control
                disableLoading();
                formReset();
                resetButtonControlAfterSubmitForm();
                table.rows().deselect();
                $('#wrap_table_data').css('pointer-events', '');
                if (data.status == '1') {
                    toastr.success('Thành công', data.message);
                } else {
                    toastr.error('Lỗi', data.message);
                }
                getListMenuParentForm();
                table.ajax.reload();
            },
            error: function (err) {
                disableLoading();
                toastr.error(err.responseJSON.message, err.responseJSON.code);
            }
        })
    }
});

// validate form jquery
var validator = $('#form_data').validate({
    rules: {
        inputMenuName: {
            required: true,
            maxlength: 200
        },
        inputDisplayOrder: {
            required: true,
            maxlength: 6
        },
        inputPictureFile: {
            required: false,
            maxlength: 200
        },
        inputDetailFile: {
            required: false,
            maxlength: 200
        },
        inputPublish: {
            required: true,
            maxlength: 5
        }
    },
    messages: {
        inputMenuName: {
            required: "Tên menu không được trống",
            maxlength: "Tên menu không được quá 200 ký tự"
        },
        inputDisplayOrder: {
            required: "Độ ưu tiên không được trống",
            maxlength: "Độ ưu tiên không quá 6 ký tự"
        },
        inputPictureFile: {
            maxlength: "Icon không quá 200 ký tự"
        },
        inputDetailFile: {
            maxlength: "Đường dẫn không quá 200 ký tự"
        },
        inputPublish: {
            required: "Trạng thái không được trống",
            maxlength: "Trạng thái không quá 5 ký tự"
        }
    },
    errorElement: 'span',
    errorPlacement: function (error, element) {
        error.addClass('invalid-feedback');
        element.closest('.form-group').append(error);
    },
    highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid');
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
    }
});

$('input').bind('keypress', function(e) {
    if(e.keyCode == 13)
    {
        return false;
    }
});