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
    s_ip: '',
    s_port: '',
    s_username: '',
    s_password: '',
    s_domain: '',
    s_sendername: '',
    s_email: '',
    s_protocol: ''
};

$('#tableDataView thead th').each(function () {
    var title = $(this).text();
    var dataId = $(this).attr("data-id");
    if (dataId != null && dataId != undefined) {
        $(this).html('<input class="table-data-input-search form-control" id="' + dataId + '" type="text" placeholder="Search ' + title + '" />');
    }
});

var keyUpTime;
var oldValue;

// showLoading();
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
        {"data": ""},
        {"data": "indexCount", "render": $.fn.dataTable.render.text()},
        {"data": "id", "render": $.fn.dataTable.render.text()},
        {"data": "ip", "render": $.fn.dataTable.render.text()},
        {"data": "port", "render": $.fn.dataTable.render.text()},
        {"data": "username", "render": $.fn.dataTable.render.text()},
        {"data": "password", "render": $.fn.dataTable.render.text()},
        {"data": "domain", "render": $.fn.dataTable.render.text()},
        {"data": "sender_name", "render": $.fn.dataTable.render.text()},
        {"data": "email", "render": $.fn.dataTable.render.text()},
        {"data": "protocol", "render": $.fn.dataTable.render.text()}
    ],
    initComplete: function () {
        // Apply the search
        this.api().columns().every(function () {
            var that = this;
            $('.table-data-input-search').on('keyup', function () {
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
        "url": apiUrl + "mail-config/get-list-mail-config-pagination",
        "method": "POST",
        "contentType": "application/json",
        "data": function (d) {
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
                    "ip": responseJson.content[i].ip,
                    "port": responseJson.content[i].port,
                    "username": responseJson.content[i].username,
                    "password": responseJson.content[i].password,
                    "domain": responseJson.content[i].domain,
                    "sender_name": responseJson.content[i].senderName,
                    "email": responseJson.content[i].emailAddress,
                    "protocol": responseJson.content[i].protocol
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
        $('#inputMailConfigId').val(rowData[0].id);
        $('#inputIp').val(rowData[0].ip);
        $('#inputPort').val(rowData[0].port);
        $('#inputUsername').val(rowData[0].username);
        $('#inputPassword').val(rowData[0].password);
        $('#inputDomain').val(rowData[0].domain);
        $('#inputSenderName').val(rowData[0].sender_name);
        $('#inputEmailAddress').val(rowData[0].email);
        $('#inputProtocol').val(rowData[0].protocol);
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
        "ip": $('#inputIp').val(),
        "port": $('#inputPort').val(),
        "username": $('#inputUsername').val(),
        "password": $('#inputPassword').val(),
        "domain": $('#inputDomain').val(),
        "senderName": $('#inputSenderName').val(),
        "email": $('#inputEmailAddress').val(),
        "protocol": $('#inputProtocol').val()
    };

    $.ajax({
        headers: {
            'Authorization': token
        },
        "url": apiUrl + "mail-config/create-mail-config",
        method: 'POST',
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

    validator.resetForm();

    $('#btnSaveCreate').css('display', 'none');
    $('#btnBackCreate').css('display', 'none');

    // set state for button control
    $('#btnCreate').css('display', '');
    $('#btnCopy').css('display', '');
    $('#btnDelete').css('display', '');
    $('#btnEdit').css('display', '');

    $('#wrap_table_data').css('pointer-events', '');

    formReset();
    // roleback dataToForm
    let rowData = table.rows({selected: true}).data().toArray();
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

    showLoading();
    // set data
    let data = {
        "id": $('#inputMailConfigId').val(),
        "ip": $('#inputIp').val(),
        "port": $('#inputPort').val(),
        "username": $('#inputUsername').val(),
        "password": $('#inputPassword').val(),
        "domain": $('#inputDomain').val(),
        "senderName": $('#inputSenderName').val(),
        "email": $('#inputEmailAddress').val(),
        "protocol": $('#inputProtocol').val()
    };

    // call ajax here
    $.ajax({
        headers: {
            'Authorization': token
        },
        url: apiUrl + "mail-config/edit-mail-config",
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

    validator.resetForm();

    $('#btnSaveEdit').css('display', 'none');
    $('#btnBackEdit').css('display', 'none');

    // set state for button control
    $('#btnCreate').css('display', '');
    $('#btnCopy').css('display', '');
    $('#btnDelete').css('display', '');
    $('#btnEdit').css('display', '');

    $('#wrap_table_data').css('pointer-events', '');

    formReset()
    // roleback dataToForm
    let rowData = table.rows({selected: true}).data().toArray();
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

    showLoading();

    let data = {
        "ip": $('#inputIp').val(),
        "port": $('#inputPort').val(),
        "username": $('#inputUsername').val(),
        "password": $('#inputPassword').val(),
        "domain": $('#inputDomain').val(),
        "senderName": $('#inputSenderName').val(),
        "email": $('#inputEmailAddress').val(),
        "protocol": $('#inputProtocol').val()
    };

    $.ajax({
        headers: {
            'Authorization': token
        },
        "url": apiUrl + "mail-config/create-mail-config",
        method: 'POST',
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

    validator.resetForm();

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
    let rowData = table.rows({selected: true}).data().toArray();
    fillDataToForm(rowData);
});

$('#btnDelete').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    if (confirm("Bạn có muốn xoá bản ghi này không ?")) {
        showLoading();
        let rowData = table.rows({selected: true}).data().toArray();
        let data = {
            "id": rowData[0].id
        };

        $.ajax({
            headers: {
                'Authorization': token
            },
            url: apiUrl + "mail-config/delete-mail-config",
            method: 'DELETE',
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
                table.ajax.reload();
            },
            error: function (err) {
                disableLoading();
                toastr.error(err.responseJSON.message, err.responseJSON.code);
            }
        })
    }
});

$('#btnTogglePassword').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    if ($(this).attr('data-toggle') == 'hidden') {
        $('#inputPassword').attr('type', 'text');
        $(this).children().removeClass(['far', 'fa-eye']);
        $(this).children().addClass(['far', 'fa-eye-slash']);
        $(this).attr('data-toggle', 'show');
    } else if ($(this).attr('data-toggle') == 'show') {
        $('#inputPassword').attr('type', 'password');
        $(this).children().removeClass(['far', 'fa-eye-slash']);
        $(this).children().addClass(['far', 'fa-eye']);
        $(this).attr('data-toggle', 'hidden');
    }
});

// validate form jquery
var validator = $('#form_data').validate({
    rules: {
        inputIp: {
            required: true,
            maxlength: 100
        },
        inputPort: {
            required: true,
            maxlength: 50
        },
        inputUsername: {
            required: true,
            maxlength: 30
        },
        inputPassword: {
            required: true,
            maxlength: 100
        },
        inputDomain: {
            required: true,
            maxlength: 100
        },
        inputSenderName: {
            required: true,
            maxlength: 100
        },
        inputEmailAddress: {
            required: true,
            maxlength: 100,
            email: true
        },
        inputProtocol: {
            required: true,
            maxlength: 100
        },
    },
    messages: {
        inputIp: {
            required: function () {
                toastr.error("Địa chỉ IP không được trống");
            },
            maxlength: function () {
                toastr.error("Địa chỉ IP không vượt quá 100 ký tự")
            }
        },
        inputPort: {
            required: function () {
                toastr.error("Port không được trống")
            },
            maxlength: function () {
                toastr.error("Port không vượt quá 50 ký tự")
            }
        },
        inputUsername: {
            required: function () {
                toastr.error("Tên đăng nhập không được trống")
            },
            maxlength: function () {
                toastr.error("Tên đăng nhập không vượt quá 30 ký tự")
            }
        },
        inputPassword: {
            required: function () {
                toastr.error("Mật khẩu không được trống")
            },
            maxlength: function () {
                toastr.error("Mật khẩu không vượt quá 100 ký tự")
            }
        },
        inputDomain: {
            required: function () {
                toastr.error("Domain không được trống")
            },
            maxlength: function () {
                toastr.error("Domain không vượt quá 100 ký tự")
            }
        },
        inputSenderName: {
            required: function () {
                toastr.error("Tên người gửi không được trống")
            },
            maxlength: function () {
                toastr.error("Tên người gửi không vượt quá 100 ký tự")
            }
        },
        inputEmailAddress: {
            required: function () {
                toastr.error("Email không được trống")
            },
            email: function () {
                toastr.error("Email không hợp lệ")
            }
        },
        inputProtocol: {
            required: function () {
                toastr.error("Giao thức không được trống")
            },
            maxlength: function () {
                toastr.error("Giao thức không vượt quá 100 ký tự")
            }
        },
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