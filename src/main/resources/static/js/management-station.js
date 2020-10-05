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
            "render": $.fn.dataTable.render.text()
        }
    ],
    "pagingType": "full_numbers",
    "lengthMenu": [
        [10, 25, 50, -1],
        [10, 25, 50, "Tất cả"]
    ],
    "lengthChange": false,
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
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbmlzdHJhdG9yIiwiYXV0aCI6IiIsImV4cCI6MTYwMTYyOTg3NH0.8ZUl8eDHqUUy_Xjp5QoxArJQoc0I6ABFH2r1amnrT_Csy0Kq1il0PfZW1A6t27aWYj7LkwPVWCPHm57YplTc9w'
        },
        "url": "http://localhost:8080/api/v1/mail-config/get-list-mail-config-pagination",
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
                "recordsFiltered": responseJson.recordFiltered,
                "recordsTotal": responseJson.recordTotal,
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
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbmlzdHJhdG9yIiwiYXV0aCI6IiIsImV4cCI6MTYwMTYyOTg3NH0.8ZUl8eDHqUUy_Xjp5QoxArJQoc0I6ABFH2r1amnrT_Csy0Kq1il0PfZW1A6t27aWYj7LkwPVWCPHm57YplTc9w'
        },
        "url": "http://localhost:8080/api/v1/mail-config/create-mail-config",
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