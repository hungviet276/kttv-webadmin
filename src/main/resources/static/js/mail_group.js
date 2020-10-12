//sử dụng cho chức năng quản lý nhóm người nhận mail
    let refresh = 0;
    var oldValueDetail  = "";
    var refreshDetail = 0;
    let oldValue ="";
    var draw = 0;
    $('#detail-receive-mail').val(null).trigger('change');
    $('#btnEditDetail').css('pointer-events', 'none');
    $("#btnEditDetail").css("opacity", "0.5");
    $('#btnDeleteDetail').css('pointer-events', 'none');
    $("#btnDeleteDetail").css("opacity", "0.5");
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

    $('#detail-receive-mail').select2({
        minimumInputLength: 0,
        delay: 350,
        ajax: {
            headers: {
                'Authorization': token
            },
            "url":apiUrl + "user-info/get-name-user",
            dataType: 'json',
            type: "GET",
            quietMillis: 50,
            data: function (term) {
                term.idGroup = $("#id_group").val();
                return term;

            },
            processResults: function (data) {
                var datas =  $('#detail-receive-mail').val();
                console.log("data");
                console.log(datas);
                return {
                    results: $.map(data, function (item) {
                        return {
                            text: item.name,
                            id: item.id,
                            data: item
                        }
                    })
                };
            }
        }
    });

    //Initialize Select2 Elements
    $('.select2bs4').select2({
        theme: 'bootstrap4'
    });
    // $('#example3').DataTable({
    //     "paging": true,
    //     "lengthChange": false,
    //     "searching": false,
    //     "ordering": true,
    //     "info": false,
    //     "autoWidth": true,
    //     "responsive": false,
    // });
    // $('#example4').DataTable({
    //     "paging": true,
    //     "lengthChange": false,
    //     "searching": false,
    //     "ordering": true,
    //     "info": false,
    //     "autoWidth": true,
    //     "responsive": false,
    // });

let objSearch = {
    s_id: '',
    s_name: '',
    s_code: '',
    s_status: '',
    s_description: ''
};
let objSearchDetail = {
    s_group_name_detail: '',
    s_name_detail: '',
    s_id_group: ''
};

$(document).ready(function () {
    $('#group-receive-mail thead th').each(function () {
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
    // showLoading();
    var table = $('#group-receive-mail').DataTable({
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
                var that = this;
                $('.table-data-input-search').on('keyup change clear', function () {
                    let id = $(this).attr("id");
                    if (!$(this).is(':focus')) {
                       return;
                    }
                    if((oldValue!=this.value && refresh==0) || this.value==""){
                        refresh = 1;
                        if(this.value==""){
                            if(oldValue==""){
                                refresh = 0;
                                return;
                            }

                         }
                        objSearch[id] = this.value;
                        that
                            .search(JSON.stringify(objSearch))
                            .draw();
                        oldValue = this.value;
                    } else{
                        refresh = 0;
                    }
                    // console.log(this);
                });

                $('.select_table').on('keyup change clear', function () {
                    let id = $(this).attr("id");
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
            "url":apiUrl + "group-mail-receive/get-list-group-mail-paging-nation",
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

    function getValue(id){
        let data = $("#"+id+" input," +"#"+id+" select," +"#"+id+ " textarea");
        let object = {};
        for(let i =0; i< data.length ; i++){
            object[''+data[i].getAttribute('name')] = data[i].value;
        }
        console.log(object);
        return object;
    }
    // set default state for button control
    $('#btnCopy').attr('disabled', 'true');
    $('#btnDelete').attr('disabled', 'true');
    $('#btnEdit').attr('disabled', 'true');
    function disableChild(){
        $(".tab-pane").css("pointer-events", "none");
        $(".tab-pane").css("backgroundColor", "#DAD5D4");
        $(".tab-pane").css("opacity", "0.5");
    }
    disableChild();
    function enableChild(){
        $(".tab-pane").css("pointer-events", "auto");
        $(".tab-pane").css("backgroundColor", "");
        $(".tab-pane").css("opacity", "1");
    };

    table
        .on('select', rowSelect)
        .on('deselect', rowDeselect);
    var rowDt = {};
    function rowSelect(e, dt, type, indexes) { // load các thông tin của những cái bên trái ra
        $('#btnCopy').removeAttr('disabled');
        $('#btnDelete').removeAttr('disabled');
        $('#btnEdit').removeAttr('disabled');
        rowDt = table.rows(indexes).data().toArray();

        $("#group-receive-mail_paginate").css("pointer-events", "none");
        $("#group-receive-mail_paginate").css("backgroundColor", "#DAD5D4");
        $("#group-receive-mail_paginate").css("opacity", "0.5");

        fillDataToForm(rowDt);
        enableChild();
        $("#id_group").val(rowDt[0].id);
        $("#name_group").val(rowDt[0].name);

        objSearchDetail.s_id_group = $("#id_group").val();
        tableDetail.search( objSearchDetail ).draw();


    }
    function rowDeselect(e, dt, type, indexes) { // khóa các form bên trái
        $('#btnCopy').attr('disabled', 'true');
        $('#btnDelete').attr('disabled', 'true');
        $('#btnEdit').attr('disabled', 'true');
        $('#form_group')[0].reset();
        disableChild();
        $("#group-receive-mail_paginate").css("pointer-events", "auto");
        $("#group-receive-mail_paginate").css("backgroundColor", "");
        $("#group-receive-mail_paginate").css("opacity", "1");
    }


    function fillDataToForm(rowData) {
        if (rowData != null && rowData != undefined && rowData.length > 0) {
             $('#id').val(rowData[0].id);
             $('#name').val(rowData[0].name);
             $('#code').val(rowData[0].code);
             $('#status').val(rowData[0].status);
             $('#description').val(rowData[0].description);

        }
    }
    function backButonGroup(){

        $('#btnCreate').css('display', '');
        $('#btnCopy').css('display', '');
        $('#btnDelete').css('display', '');
        $('#btnEdit').css('display', '');

        $('#btnEditGroup').css('display', 'none');
        $('#btnBackEditGroup').css('display', 'none');

        $('#btnSaveCreateGroup').css('display', 'none');
        $('#btnBackCreateGroup').css('display', 'none');
        $('#group-receive-mail_tb').css('pointer-events', 'auto');

        $('#group-receive-mail_tb').css('pointer-events', 'auto');
        $("#group-receive-mail_tb").css("backgroundColor", "");
        $("#group-receive-mail_tb").css("opacity", "1");

        $('#group-receive-mail_tb').css('pointer-events', '');
        $("#group-receive-mail_tb").css("backgroundColor", "");
        $("#group-receive-mail_tb").css("opacity", "1");

        // $("#group-receive-mail_paginate").css("pointer-events", "auto");
        // $("#group-receive-mail_paginate").css("backgroundColor", "");
        // $("#group-receive-mail_paginate").css("opacity", "");
    }
    $("#btnBackCreateGroup").click(function(){
        backButonGroup();
        enableChild();
    });
    $("#btnCreate").click(function (event) {
        event.preventDefault();
        event.stopPropagation();
        // set state for button control

        $('#btnCreate').css('display', 'none');
        $('#btnCopy').css('display', 'none');
        $('#btnDelete').css('display', 'none');
        $('#btnEdit').css('display', 'none');

        // set state for button save and back
        $('#btnSaveCreateGroup').css('display', '');
        $('#btnBackCreateGroup').css('display', '');

        // disable mouse click table
        $('#group-receive-mail_tb').css('pointer-events', 'none');
        $("#group-receive-mail_tb").css("backgroundColor", "#DAD5D4");
        $("#group-receive-mail_tb").css("opacity", "0.5");
        disableChild();
        // clean form
        formReset();
    });
    function formReset() {
        $('#form_group')[0].reset();
    }
    $("#btnSaveCreateGroup").click(function (event) {
        event.preventDefault();
        event.stopPropagation();
        let data = getValue("form_group");
        $.ajax({
            headers: {
                'Authorization': token
            },
            "url": apiUrl + "group-mail-receive",
            "method": "POST",
            "contentType": "application/json",
            "data": JSON.stringify(data),
            "success": function (response) {
                toastr.success('Thành công', data.message);
                table.ajax.reload();
                backButonGroup();
                enableChild();
                $("#group-receive-mail_paginate").css("pointer-events", "auto");
                $("#group-receive-mail_paginate").css("backgroundColor", "");
                $("#group-receive-mail_paginate").css("opacity", "");
                disableChild();
            },
            "error": function (error) {
                toastr.error('Lỗi', data.message);
            }
        });
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
        $('#btnEditGroup').css('display', '');
        $('#btnBackEditGroup').css('display', '');

        // block table
        $('#wrap_table_data').css('pointer-events', 'none');
        $('#group-receive-mail_tb').css('pointer-events', 'none');
        $("#group-receive-mail_tb").css("backgroundColor", "#DAD5D4");
        $("#group-receive-mail_tb").css("opacity", "0.5");
        disableChild();
        fillDataToForm(rowDt);
    });
    $("#btnBackEditGroup").click(function(e){
        e.preventDefault();
        e.stopPropagation();

        $('#btnCreate').css('display', '');
        $('#btnCopy').css('display', '');
        $('#btnDelete').css('display', '');
        $('#btnEdit').css('display', '');


        // set state for button save and back
        $('#btnEditGroup').css('display', 'none');
        $('#btnBackEditGroup').css('display', 'none');


        // disable mouse click table
        $('#group-receive-mail_tb').css('pointer-events', 'auto');
        $("#group-receive-mail_tb").css("backgroundColor", "");
        $("#group-receive-mail_tb").css("opacity", "1");
        enableChild();

    });

    $("#btnCopy").click(function (event){
        event.preventDefault();
        event.stopPropagation();
        // set state for button control

        $('#btnCreate').css('display', 'none');
        $('#btnCopy').css('display', 'none');
        $('#btnDelete').css('display', 'none');
        $('#btnEdit').css('display', 'none');

        // set state for button save and back
        $('#btnSaveCreateGroup').css('display', '');
        $('#btnBackCreateGroup').css('display', '');

        // disable mouse click table
        $('#group-receive-mail_tb').css('pointer-events', 'none');
        $("#group-receive-mail_tb").css("backgroundColor", "#DAD5D4");
        $("#group-receive-mail_tb").css("opacity", "0.5");
        disableChild();
        fillDataToForm(rowDt);
    });
    $("#btnEditGroup").click(function (event) {
        event.preventDefault();
        event.stopPropagation();
        let data = getValue("form_group");
        $.ajax({
            headers: {
                'Authorization': token
            },
            "url": apiUrl + "group-mail-receive",
            "method": "PUT",
            "contentType": "application/json",
            "data": JSON.stringify(data),
            "success": function (response) {
                toastr.success('Thành công', data.message);
                table.ajax.reload();
                backButonGroup();
                disableChild();
                $("#group-receive-mail_paginate").css("pointer-events", "auto");
                $("#group-receive-mail_paginate").css("backgroundColor", "");
                $("#group-receive-mail_paginate").css("opacity", "");
            },
            "error": function (error) {
                toastr.error('Lỗi', data.message);
            }
        });
    });

    $("#btnDelete").click(function (event) {
        event.preventDefault();
        event.stopPropagation();
        let rowData = table.rows( { selected: true } ).data().toArray();
        let data = {
            "id": rowData[0].id
        }
        $.ajax({
            headers: {
                'Authorization': token
            },
            "url": apiUrl + "group-mail-receive",
            "method": "DELETE",
            "contentType": "application/json",
            "data": JSON.stringify(data),
            "success": function (response) {
                toastr.success('Thành công', data.message);
                table.ajax.reload();
                backButonGroup();
                $("#group-receive-mail_paginate").css("pointer-events", "auto");
                $("#group-receive-mail_paginate").css("backgroundColor", "");
                $("#group-receive-mail_paginate").css("opacity", "");
                disableChild();
            },
            "error": function (error) {
                toastr.error('Lỗi', data.message);
            }
        });
    });
    // cài đặt trường tìm kiếm dành cho table detail
     $('#group-receive-mail_detail_tbl thead th').each(function () {
         var title = $(this).text();
         var dataId = $(this).attr("data-id");
         if (dataId != null && dataId != undefined) {
             $(this).html('<input id="'+ dataId +'" class="table-data-input-search_detail" type="text" placeholder="Search ' + title + '" />');
        }
     });

     // cấu hình table detail
    var tableDetail = $('#group-receive-mail_detail_tbl').DataTable({
        columnDefs: [
            {
                orderable: false,
                className: 'select-checkbox',
                targets:   0
            }
        ],
        select: {
            style:    'os',
            selector: 'td:first-child',
            type: 'single'
        },
        "pagingType": "full_numbers",
        "lengthMenu": [
            [10, 25, 50,100],
            [10, 25, 50,100]
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
            {"data":""},
            {"data": "indexCount"},
            {"data": "id"},
            {"data": "groupName"},
            {"data": "name"}
        ],
        initComplete: function () {
            this.api().columns().every(function () {
                var that = this;
                $('.table-data-input-search_detail').on('keyup change clear', function () {
                    let id = $(this).attr("id");
                    if (!$(this).is(':focus')) {
                        return;
                    }
                    if((oldValueDetail!=this.value && refreshDetail==0) || this.value==""){
                        refreshDetail = 1;
                        if(this.value==""){
                            if(oldValueDetail==""){
                                refreshDetail = 0;
                                return;
                            }
                        }
                        objSearchDetail[id] = this.value;
                        objSearchDetail.s_id_group = $("#id_group").val();
                        console.log(objSearchDetail);
                        that
                            .search(JSON.stringify(objSearchDetail))
                            .draw();
                        oldValueDetail = this.value;
                    } else{
                        refreshDetail = 0;
                    }
                    // console.log(this);
                });
            });
        },
        "ajax": {
            headers: {
                'Authorization': token
            },
            "url":apiUrl + "group-mail-receive-detail/get-list-group-mail-detail-paging-nation",
            "method": "POST",
            "contentType": "application/json",
            "data": function (d) {
                draw = d.draw;
                return JSON.stringify({
                    "draw": d.draw,
                    "start": Math.round(d.start / d.length),
                    "length": d.length,
                    "search": JSON.stringify(objSearchDetail)
                });
            },
            "dataFilter": function (response) {
                objSearchDetail = {
                    s_group_name_detail: '',
                    s_name_detail: '',
                    s_id_group : '',
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
                        "id" : responseJson.content[i].id,
                        "groupName": responseJson.content[i].groupName,
                        "name": responseJson.content[i].name
                    })

                }

                return JSON.stringify(dataRes);
            }
        }
    });
    function formDetailReset() {
        $('#form_group_detail')[0].reset();
    }
    $("#btnCreateDetail").click(function (event) {
        event.preventDefault();
        event.stopPropagation();
        $('#detail-receive-mail').val(null).trigger('change');
        $('#btnCreateDetail').css('display', 'none');
        $('#btnCopyDetail').css('display', 'none');
        $('#btnDeleteDetail').css('display', 'none');
        $('#btnEditDetail').css('display', 'none');

        $('#btnSaveCreateGroupDetail').css('display', '');
        $('#btnBackCreateGroupDetail').css('display', '');

        $('#table_detail').css('pointer-events', 'none');
        $("#table_detail").css("backgroundColor", "#DAD5D4");
        $("#table_detail").css("opacity", "0.5");

        tableDetail.$('tr.selected').removeClass('selected');
    });
    function backButonGroupDetail(){

        $('#btnCreateDetail').css('display', '');
        $('#btnCopyDetail').css('display', '');
        $('#btnDeleteDetail').css('display', '');
        $('#btnEditDetail').css('display', '');

        $('#btnSaveCreateGroupDetail').css('display', 'none');
        $('#btnBackCreateGroupDetail').css('display', 'none');

        $('#btnEditGroupDetail').css('display', 'none');
        $('#btnBackEditGroupDetail').css('display', 'none');
    }
    $("#btnSaveCreateGroupDetail").click(function (event) {
        event.preventDefault();
        event.stopPropagation();
        let data = {};
        data.idGroup = $("#id_group").val();
        data.userReceive = $("#detail-receive-mail").val();
        data.id = "";

        $.ajax({
            headers: {
                'Authorization': token
            },
            "url": apiUrl + "group-mail-receive-detail",
            "method": "POST",
            "contentType": "application/json",
            "data": JSON.stringify(data),
            "success": function (response) {
                toastr.success('Thành công', data.message);
                objSearchDetail.s_id_group= $("#id_group").val();
                tableDetail.ajax.reload();
                $('#table_detail').css('pointer-events', 'auto');
                $("#table_detail").css("backgroundColor", "");
                $("#table_detail").css("opacity", "1");
                $('#detail-receive-mail').val(null).trigger('change');
                backButonGroupDetail();
            },
            "error": function (error) {
                toastr.error('Lỗi', error.message);
                console.log(error);
            }
        });
    });
    $("#btnBackCreateGroupDetail").click(function () {
        backButonGroupDetail();
        $('#table_detail').css('pointer-events', 'auto');
        $("#table_detail").css("backgroundColor", "");
        $("#table_detail").css("opacity", "1");
        $('#btnEditDetail').css('pointer-events', 'none');
        $("#btnEditDetail").css("opacity", "0.5");
        $('#btnDeleteDetail').css('pointer-events', 'none');
        $("#btnDeleteDetail").css("opacity", "0.5");
        $('#detail-receive-mail').val(null).trigger('change');
    });
    $("#btnBackEditGroupDetail").click(function () {
        backButonGroupDetail();
        $('#table_detail').css('pointer-events', 'auto');
        $("#table_detail").css("backgroundColor", "");
        $("#table_detail").css("opacity", "1");
        $('#detail-receive-mail').val(null).trigger('change');
        $("#detail-receive-mail").empty();
    });
    $('#btnEditDetail').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        // set state for button control

        $('#btnCreateDetail').css('display', 'none');
        $('#btnCopyDetail').css('display', 'none');
        $('#btnDeleteDetail').css('display', 'none');
        $('#btnEditDetail').css('display', 'none');

        // set state for button save and back
        $('#btnEditGroupDetail').css('display', '');
        $('#btnBackEditGroupDetail').css('display', '');

        $('#table_detail').css('pointer-events', 'none');
        $("#table_detail").css("backgroundColor", "#DAD5D4");
        $("#table_detail").css("opacity", "0.5");
        let rowData = tableDetail.rows( { selected: true } ).data().toArray();
        $('#detail-receive-mail').val(null).trigger('change');
        fillDataDetailToForm(rowData);

    });
    $("#btnEditGroupDetail").click(function (event) {
        event.preventDefault();
        event.stopPropagation();
        let data = {};
        data.idGroup = $("#id_group").val();
        data.userReceive = $("#detail-receive-mail").val();
        let rowData = tableDetail.rows( { selected: true } ).data().toArray();
        data.id =rowData[0].id;

        console.log(data);
        $.ajax({
            headers: {
                'Authorization': token
            },
            "url": apiUrl + "group-mail-receive-detail",
            "method": "PUT",
            "contentType": "application/json",
            "data": JSON.stringify(data),
            "success": function (response) {
                toastr.success('Thành công', data.message);
                objSearchDetail.s_id_group= $("#id_group").val();
                tableDetail.ajax.reload();
                $('#table_detail').css('pointer-events', 'auto');
                $("#table_detail").css("backgroundColor", "");
                $("#table_detail").css("opacity", "1");
                $('#detail-receive-mail').val(null).trigger('change');
                backButonGroupDetail();
                $('#btnEditDetail').css('pointer-events', 'none');
                $("#btnEditDetail").css("opacity", "0.5");
                $('#btnDeleteDetail').css('pointer-events', 'none');
                $("#btnDeleteDetail").css("opacity", "0.5");
            },
            "error": function (error) {
                toastr.error('Lỗi', data.message);
            }
        });
    });
    function fillDataDetailToForm(rowData){
        if (rowData != null && rowData != undefined && rowData.length > 0) {
            console.log(rowData[0]);
            var dataSend = {
                idGroup : $("#id_group").val(),
                idDetail : rowData[0].id
            }
            $.ajax({
                headers: {
                    'Authorization': token
                },
                "url": apiUrl + "user-info/get-name-user-by-group-id",
                "method": "POST",
                "contentType": "application/json",
                "data": JSON.stringify(dataSend),
                "success": function (response) {
                    $('#detail-receive-mail').val(null).trigger('change');
                    for (let i = 0; i < response.length; i++){

                        var newOption = new Option(response[i].name, response[i].id, true, true);
                        $('#detail-receive-mail').append(newOption).trigger('change');
                    }

                },
                "error": function (error) {
                    toastr.error('Lỗi', error.message);
                }
            });

        }
    }
    function rowSelectDetail(e, dt, type, indexes) { // load các thông tin của những cái bên trái ra
        //var rowDt = tableDetail.rows(indexes).data().toArray();
        $('#detail-receive-mail').val(null).trigger('change');
        $('#btnEditDetail').css('pointer-events', 'auto');
        $("#btnEditDetail").css("opacity", "1");
        $('#btnDeleteDetail').css('pointer-events', 'auto');
        $("#btnDeleteDetail").css("opacity", "1");

        //fillDataDetailToForm(rowDt);
    }
    function rowDeselectDetail(e, dt, type, indexes) { // khóa các form bên trái
        $('#btnEditDetail').css('pointer-events', 'none');
        $("#btnEditDetail").css("opacity", "0.5");
        $('#btnDeleteDetail').css('pointer-events', 'none');
        $("#btnDeleteDetail").css("opacity", "0.5");
        $('#detail-receive-mail').val(null).trigger('change');
    }
    tableDetail
        .on('select', rowSelectDetail)
        .on('deselect', rowDeselectDetail);
    $("#btnDeleteDetail").click(function(event){
        event.preventDefault();
        event.stopPropagation();
        let rowData = tableDetail.rows( { selected: true } ).data().toArray();
        let data = {
            idGroup : "",
            idDetail : rowData[0].id
        }
        $.ajax({
            headers: {
                'Authorization': token
            },
            "url": apiUrl + "group-mail-receive-detail",
            "method": "DELETE",
            "contentType": "application/json",
            "data": JSON.stringify(data),
            "success": function (response) {
                toastr.success('Thành công', data.message);
                objSearchDetail.s_id_group= $("#id_group").val();
                tableDetail.ajax.reload();
                $('#detail-receive-mail').val(null).trigger('change');
                $('#btnEditDetail').css('pointer-events', 'none');
                $("#btnEditDetail").css("opacity", "0.5");
                $('#btnDeleteDetail').css('pointer-events', 'none');
                $("#btnDeleteDetail").css("opacity", "0.5");
            },
            "error": function (error) {
                toastr.error('Lỗi', data.message);
            }
        });
    });
});
