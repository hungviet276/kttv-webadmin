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

// showLoading();
var draw = 0;
var table = $('#tableDataView').DataTable({
    "columnDefs": [
        {
            "targets": '_all',
            // "render": $.fn.dataTable.render.text()
        }
    ],
    "pagingType": "full_numbers",
    "lengthMenu": [
        [10, 25, 50, -1],
        [10, 25, 50, "Tất cả"]
    ],
    "lengthChange": true,
    "searching": true,
    "ordering": false,
    "info": true,
    "autoWidth": false,
    "responsive": true,
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
        {"data": "indexCount"},
        {"data": "id"},
        {"data": "ip"},
        {"data": "port"},
        {"data": "username"},
        {"data": "password"},
        {"data": "domain"},
        {"data": "sender_name"},
        {"data": "email"},
        {"data": "protocol"}
    ],
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
                "search": d.search.value
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


function createMailConfig(e) {
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

$(document).ready(function () {
    $('#tableDataView thead th').each(function () {
        var title = $(this).text();
        var dataId = $(this).attr("data-id");
        if (dataId != null && dataId != undefined) {
            $(this).html('<input id="'+ dataId +'" type="text" placeholder="Search ' + title + '" />');
        }
    });

    // showLoading();
    var draw = 0;
    var table = $('#tableDataView').DataTable({
        "columnDefs": [
            {
                "targets": '_all',
                "render": $.fn.dataTable.render.text()
            }
        ],
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
        "responsive": true,
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
            {"data": "indexCount"},
            {"data": "id"},
            {"data": "ip"},
            {"data": "port"},
            {"data": "username"},
            {"data": "password"},
            {"data": "domain"},
            {"data": "sender_name"},
            {"data": "email"},
            {"data": "protocol"}
        ],
        initComplete: function () {
            // Apply the search
            this.api().columns().every(function () {
                var that = this;
                $('input', this.header()).on('keyup change clear', function () {
                    let id = $(this).attr("id");
                    // if (that.search() !== this.value) {
                    //
                    // }
                    objSearch[id] = this.value;
                    that
                        .search(JSON.stringify(objSearch))
                        .draw();
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
                        s_ip: '',
                        s_port: '',
                        s_username: '',
                        s_password: '',
                        s_domain: '',
                        s_sendername: '',
                        s_email: '',
                        s_protocol: ''
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