//sử dụng cho chức năng quản lý nhóm người nhận mail
var token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbmlzdHJhdG9yIiwiYXV0aCI6IiIsImV4cCI6MTYwMTk3Nzc3NX0.JUNKGGccyiPdfD6tjpr2bfPgSMsvrepd5FXXL61paUzfhp0tLTQgR81qt0jBU5rbZouKZSLlzB55lxAwJ6Rm-w";

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

    $('.select2').select2()

    //Initialize Select2 Elements
    $('.select2bs4').select2({
        theme: 'bootstrap4'
    });
    $('#example3').DataTable({
        "paging": true,
        "lengthChange": false,
        "searching": false,
        "ordering": true,
        "info": false,
        "autoWidth": true,
        "responsive": true,
    });
    $('#example4').DataTable({
        "paging": true,
        "lengthChange": false,
        "searching": false,
        "ordering": true,
        "info": false,
        "autoWidth": true,
        "responsive": true,
    });

let objSearch = {
    s_id: '',
    s_name: '',
    s_code: '',
    s_status: '',
    s_description: ''
};

$(document).ready(function () {
    $('#group-receive-mail thead th').each(function () {
        var title = $(this).text();
        var dataId = $(this).attr("data-id");
        if (dataId != null && dataId != undefined) {
            $(this).html('<input id="'+ dataId +'" type="text" placeholder="Search ' + title + '" />');
        }
    });

    // showLoading();
    var draw = 0;
    var table = $('#group-receive-mail').DataTable({
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
            {"data": "code"},
            {"data": "name"},
            {"data": "status"},
            {"data": "description"}
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
            "url": "http://localhost:8080/api/v1/group-mail-receive/get-list-group-mail-paging-nation",
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
});