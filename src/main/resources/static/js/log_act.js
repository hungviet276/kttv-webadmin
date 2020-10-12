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

$('#inputMenuId').select2({
    placeholder: 'Chọn menu',
    theme: 'bootstrap4',
    minimumInputLength: 0,
    allowClear: true
});

$('#inputFromDate').daterangepicker({
    timePicker: false,
    singleDatePicker: true,
    autoUpdateInput: false
}, function(choosen_date) {
    $('#inputFromDate').val(choosen_date.format('DD/MM/YYYY'));
});

$('#inputToDate').daterangepicker({
    timePicker: false,
    singleDatePicker: true,
    autoUpdateInput: false
}, function(choosen_date) {
    $('#inputToDate').val(choosen_date.format('DD/MM/YYYY'));
});

// init
initValueSelectMenu();
function  initValueSelectMenu() {
    $.ajax({
        headers: {
            'Authorization': token
        },
        "url": apiUrl + "log-act/get-list-menu-view-log-of-user",
        method: 'GET',
        contentType: 'application/json',
        success: function (data) {
            let emptyOptions = new Option("-- Chọn menu", "", true, false);
            $('#inputMenuId').append(emptyOptions).trigger('change');
            for(let i = 0; i < data.length; i++) {
                var newOption = new Option(data[i].name, data[i].id, false, false);
                $('#inputMenuId').append(newOption).trigger('change');
            }

        },
        error: function (err) {
            disableLoading();
            toastr.error(err.responseJSON.message, err.responseJSON.code);
        }
    });
}

let objSearch = {
    s_menu_id: '',
    s_act: '',
    s_username: '',
    s_from_date: '',
    s_to_date: ''
};

var draw = 0;
var table = $('#tableDataView').DataTable({
    // columnDefs: [ {
    //     orderable: false,
    //     className: 'select-checkbox',
    //     targets:   0
    // } ],
    // select: {
    //     style:    'os',
    //     selector: 'td:first-child',
    //     type: 'single'
    // },
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
        {"data": "indexCount", "render": $.fn.dataTable.render.text()},
        {"data": "id", "render": $.fn.dataTable.render.text()},
        {"data": "menu_name", "render": $.fn.dataTable.render.text()},
        {"data": "act", "render": $.fn.dataTable.render.text()},
        {"data": "username", "render": $.fn.dataTable.render.text()},
        {"data": "created_date", "render": $.fn.dataTable.render.text()}
    ],
    "ajax": {
        headers: {
            'Authorization': token
        },
        "url": apiUrl + "log-act/get-list-log-act-pagination",
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
                    "menu_name": responseJson.content[i].menuName,
                    "act": responseJson.content[i].act,
                    "username": responseJson.content[i].createdBy,
                    "created_date": responseJson.content[i].createdAt
                })
            }

            return JSON.stringify(dataRes);
        }
    }
});

$('#btnCleanForm').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    $('#form_data')[0].reset();
    $('#inputMenuId').val('').trigger('change');
    $('#inputAct').val('').trigger('change');
})

$('#btnSearch').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    objSearch.s_menu_id = $('#inputMenuId').val();
    objSearch.s_act = $('#inputAct').val();
    objSearch.s_username = $('#inputUsername').val();
    objSearch.s_from_date = $('#inputFromDate').val();
    objSearch.s_to_date = $('#inputToDate').val();

    table.search(objSearch).draw();
});



