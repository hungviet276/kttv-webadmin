$(function () {

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
            {"data": "code"},
            {"data": "name"},
            {"data": "status"},
            {"data": "description"}
        ],
        "ajax": {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbmlzdHJhdG9yIiwiYXV0aCI6IiIsImV4cCI6MTYwMTg5MzcyOH0.r3PSu-Mi2TqI-usgxfXv3gqKMm_NCyAN7pp-8BjXJIcMhJBZyqlBEmzH4B59_NzVSxeVttGegHJf8YldsI4Rxg'
            },
            "url": "http://localhost:8080/api/v1/group-mail-receive/get-list-group-mail-paging-nation",
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
                    "recordsFiltered": responseJson.recordTotal,
                    "recordsTotal": responseJson.recordTotal,
                    "data": []
                };

                for (let i = 0; i < responseJson.content.length; i++) {
                    dataRes.data.push({
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