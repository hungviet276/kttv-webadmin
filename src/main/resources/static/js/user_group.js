let uGroup = {
    groupTable: undefined,
    currGroupId: undefined,
    waitTimeSearch: 1000,
    userTable: {
        body: $("#tableDataParameter tbody"),
        data: [],
        addUser: function () {
            let nguoidung = $("#nguoi_dung").val();
            let chucvu = $("#chucvu").val();

            if (nguoidung == "") {
                alert("Cần chọn người dùng !!");
                return;
            }

            for (let i = 0; i < uGroup.userTable.data.length; i++) {
                if (uGroup.userTable.data[i].userId === nguoidung ) {
                    alert("Người dùng đã được thêm vào nhóm !!");
                    return;
                }
                if (chucvu == 1) {
                    if  (uGroup.userTable.data[i].isLeader == 1) {
                        alert("Nhóm đã có thành viên là trường nhóm. không thể thêm trưởng nhóm !!");
                        return;
                    }
                }
            }

            let obj = {userId: nguoidung, isLeader: chucvu};
            uGroup.userTable.data.push(obj);
            uGroup.userTable.render();
        },
        render: function () {
            let html = "";
            for (let i = 0; i < uGroup.userTable.data.length; i++) {
                html +=
                    "<tr>" +
                    "<td>" + (i + 1) + "</td>" +
                    "<td>" + uGroup.userTable.data[i].userId + "</td>" +
                    "<td>" + (uGroup.userTable.data[i].isLeader == 1 ? "Trưởng nhóm" : "Thành viên thường") + "</td>" +
                    "<td style='text-align: center'><button class=\"btn btn-danger btn-100\" onclick='uGroup.userTable.remove(" + i + ")'" +
                    "                                            <i class=\"far fa-trash-alt\"></i> Xoá" +
                    "                                        </button></td>" +
                    "</tr>"
            }
            uGroup.userTable.body.html(html);
        },
        remove: function (index) {
            uGroup.userTable.data.splice(index, 1);
            uGroup.userTable.render();
        }
    },
    objSearch: {
        s_Tram: '',
        s_TenNhom: '',
        s_QuanLy: '',
        s_Trangthai: '',
    },
    clearForm: function () {
        $("#tram").val("");
        $("#tram").select2();
        $("#ten_nhom_nsd").val("");
        $("#nhom_nsd_cha").html("<option>--Hãy chọn nhóm NSD cha--</option>");
        $("#nhom_nsd_cha").select2();
        $("#cap").val("1");
        $("#trangthai").val("1");
        $("#nguoi_dung").val("");
        $("#nguoi_dung").select2();
        $("#chucvu").val("1");
        uGroup.userTable.data = [];
        uGroup.userTable.render();
    },
    isValid: function (tram, nhom, nhomcha, cap, trangthai, mota) {
        let valid = true;
        if (tram == "") {
            $("#tram_error").html("Cần chọn trạm");
            valid = false;
        }

        if (nhom == "") {
            $("#tram_error").html("Cần nhập tên nhóm");
            valid = false;
        }

        return valid;
    },
    save: function () {
        let tram = $("#tram").val();
        let nhom = $("#ten_nhom_nsd").val();
        let nhomcha = $("#nhom_nsd_cha").val();
        let cap = $("#cap").val();
        let trangthai = $("#trangthai").val();
        let mota = $("#mota").val();

        if (!uGroup.isValid(tram, nhom, nhomcha, cap, trangthai, mota)) {
            return;
        }

        let data = {
            stationId: tram,
            name: nhom,
            groupParent: nhomcha,
            groupLevel: cap,
            status: trangthai,
            description: mota,
            users: uGroup.userTable.data
        }
        $.ajax({
            headers: {
                'Authorization': token
            },
            url: apiUrl + "user-group/save",
            data: JSON.stringify(data),
            method: "POST",
            contentType: "application/json",
            success: function (response) {
                if (response.status == "1") {
                    toastr.success('Thành công', response.message);
                } else {
                    toastr.error('Lỗi', response.message);
                }
            },
            error: function (error) {
                toastr.error('Lỗi', error);
            }
        });
    },
    delete: function () {
        if (uGroup.currGroupId == null) {
            alert("Chưa chọn nhóm người sử dụng");
            return;
        }

        let data = {
            id: uGroup.currGroupId
        }
        $.ajax({
            headers: {
                'Authorization': token
            },
            url: apiUrl + "user-group/delete",
            data: JSON.stringify(data),
            method: "POST",
            contentType: "application/json",
            success: function (response) {
                if (response.status == "1") {
                    toastr.success('Thành công', response.message);
                    uGroup.closeForm();
                } else {
                    toastr.error('Lỗi', response.message);
                }
            },
            error: function (error) {
                toastr.error('Lỗi', error);
            }
        });
    },
    update: function () {
        let tram = $("#tram").val();
        let nhom = $("#ten_nhom_nsd").val();
        let nhomcha = $("#nhom_nsd_cha").val();
        let cap = $("#cap").val();
        let trangthai = $("#trangthai").val();
        let mota = $("#mota").val();

        if (!uGroup.isValid(tram, nhom, nhomcha, cap, trangthai, mota)) {
            return;
        }

        let data = {
            id: uGroup.currGroupId,
            stationId: tram,
            name: nhom,
            groupParent: nhomcha,
            groupLevel: cap,
            status: trangthai,
            description: mota,
            users: uGroup.userTable.data
        }
        $.ajax({
            headers: {
                'Authorization': token
            },
            url: apiUrl + "user-group/update",
            data: JSON.stringify(data),
            method: "POST",
            contentType: "application/json",
            success: function (response) {
                if (response.status == "1") {
                    toastr.success('Thành công', response.message);
                } else {
                    toastr.error('Lỗi', response.message);
                }
            },
            error: function (error) {
                toastr.error('Lỗi', error);
            }
        });
    },
    loadGroupInfo: function (groupId) {
        $.ajax({
            headers: {
                'Authorization': token
            },
            url: apiUrl + "user-group/get-user-group-by-id?groupId=" + groupId,
            method: "GET",
            contentType: "application/json",
            success: function (response) {
                $("#tram").val(response.stationId);
                $("#tram").trigger("change");
                $("#tram").select2();
                $("#ten_nhom_nsd").val(response.name);
                $("#nhom_nsd_cha").val(response.groupParent);
                $("#nhom_nsd_cha").select2();
                $("#cap").val(response.groupLevel);
                $("#trangthai").val(response.status);
                console.log(response.users);
                uGroup.userTable.data = response.users;
                uGroup.userTable.render();
            },
            error: function (error) {
                toastr.error('Lỗi', "Không thể lấy thông tin người sử dụng theo trạm");
            }
        });
    },
    openForm: function (type = "new", groupId = "") {
        $("#div-btn button").hide();
        if (type === "new") {
            uGroup.clearForm();
            $("#btn-save").show();
            $("#btn-reset").show();
            $("#box_search").hide("300");
            $("#box_info").show("300");
        } else if (type === "update") {
            $("#btn-update").show();
            $("#btn-delete").show();
            uGroup.loadGroupInfo(groupId);
            $("#box_search").hide("300");
            $("#box_info").show("300");
        }

        $("#btn-cancle").show();
    },
    closeForm: function () {
        $("#box_info").hide("300");
        $("#box_search").show("300");
        uGroup.groupTable.search(uGroup.groupTable).draw();
    },
    initSearchInput: function () {
        $('#uGroupTable thead th').each(function () {
            let th = $(this);
            let title = th.text();
            let dataId = th.attr("data-id");
            let isSelect = th.attr("is-select");
            let html = "";
            if (dataId == null) return;

            if (isSelect != null) {
                html = '<select class="select_table" id="' + dataId + '"><option value="">Hãy chọn</option><option value=1>hoạt động</option><option value=0>không hoạt động</option></select>';
            } else {
                html = '<input id="' + dataId + '" class="table-data-input-search" type="text" placeholder="Tìm kiếm ' + title + '" />';
            }

            th.append("<br />" + html);
        });
    },
    initDataTable: function () {
        if (uGroup.groupTable === undefined) {
            uGroup.groupTable = $('#uGroupTable').DataTable({
                columnDefs: [{
                    orderable: false,
                    className: 'select-checkbox',
                    targets: 0
                }, {
                    targets: 5,
                    render: function (data, type, row) {
                        if (data === 1) {
                            return '<div class="status_green">Hoạt động</div>';
                        } else {
                            return '<div class="status_red">Không hoạt động</div>';
                        }
                    }
                },
                    {"width": "25px", "targets": 0},
                    {
                        className: "hide-col",
                        targets: 6,
                    }
                ],
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
                // "select": {
                //     "style": "single"
                // },
                "processing": true,
                "serverSide": true,
                "columns": [
                    {"data": ""},
                    {"data": "indexCount"},
                    {"data": "stationName"},
                    {"data": "groupName"},
                    {"data": "groupParentName"},
                    {"data": "status"},
                    {"data": "groupId"},
                ],
                initComplete: function () {
                    // Apply the search
                    this.api().columns().every(function () {
                        var that = this;
                        $('.table-data-input-search').on('keyup onchange', function () {
                            let oldValue = this.___value___;
                            this.___value___ = this.value;
                            if (oldValue == this.___value___) return;
                            uGroup.keyUpTime = new Date().getTime();
                            let id = $(this).attr('id');
                            setTimeout(function () {
                                if (new Date().getTime() - uGroup.keyUpTime > uGroup.waitTimeSearch) {
                                    uGroup.groupTable.search(uGroup.groupTable).draw();
                                    uGroup.keyUpTime = new Date().getTime();
                                }
                                return;
                            }, uGroup.waitTimeSearch + 100);
                        });


                    });
                    $('.select_table').on('change', function () {
                        let id = $(this).attr("id");
                        uGroup.objSearch[id] = this.value;
                        uGroup.groupTable.search(JSON.stringify(uGroup.objSearch)).draw();
                    });
                },
                "ajax": {
                    headers: {
                        'Authorization': token
                    },
                    "url": apiUrl + "user-group/get-data",
                    "method": "POST",
                    "contentType": "application/json",
                    "data": function (d) {
                        draw = d.draw;
                        return JSON.stringify({
                            "draw": d.draw,
                            "start": Math.round(d.start / d.length),
                            "length": d.length,
                            "search": JSON.stringify(uGroup.objSearch)
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
                                "stationName": responseJson.content[i].stationsName,
                                "groupName": responseJson.content[i].name,
                                "groupParentName": responseJson.content[i].groupParentName,
                                "status": responseJson.content[i].status,
                                "groupId": responseJson.content[i].id,
                            })
                        }

                        return JSON.stringify(dataRes);
                    }
                }
            });
        } else {
            uGroup.groupTable.search(uGroup.objParameterSearch).draw();
        }
    },

    initEvent: function () {
        uGroup.groupTable.on( 'select', function ( e, dt, type, indexes ) {
            uGroup.currGroupId = uGroup.groupTable.rows(indexes).data().toArray()[0].groupId;
            uGroup.openForm("update", uGroup.currGroupId);
        } );

        $("#btnNew").click(function () {
            uGroup.openForm("new");
        });

        $("#btn-delete").click(function () {
            uGroup.delete();
        });

        $("#tram").change(function () {
            if (this.value != "") {
                $.ajax({
                    headers: {
                        'Authorization': token
                    },
                    url: apiUrl + "user-group/get-user-group?stationId=" + this.value,
                    method: "GET",
                    async: false,
                    contentType: "application/json",
                    success: function (response) {
                        let html = "<option value='0'>--Chọn nhóm NSD cha--</option>";
                        for (let i = 0; i < response.length; i++) {
                            html += '<option value="' + response[i].id + '" level="' + response[i].groupLevel + '">' + response[i].name + '</option>';
                        }
                        $("#nhom_nsd_cha").html(html);
                        $("#nhom_nsd_cha").select2();
                    },
                    error: function (error) {
                        toastr.error('Lỗi', "Không thể lấy thông tin người sử dụng theo trạm");
                    }
                });
            }
        });

        $("#btn-update").click(function () {
            uGroup.update();
        });

        $("#nhom_nsd_cha").change(function () {
            console.log("Vao day");
            let level = $(this.options[this.selectedIndex]).attr("level");
            let nextLevel = level == null ? 1 : parseInt(level) + 1;
            $("#cap").val(nextLevel);
        });

        $("#btn-cancle").click(function () {
            uGroup.closeForm();
        });

        $("#btn-add-user").click(function () {
            uGroup.userTable.addUser();
        });

        $("#btn-reset").click(function () {
            uGroup.clearForm();
        });

        $("#btn-save").click(function () {
            uGroup.save();
        });

    },

    initData: function () {
        //Load thong tin tram
        $.ajax({
            headers: {
                'Authorization': token
            },
            url: apiUrl + "user-group/get-stations",
            method: "POST",
            contentType: "application/json",
            success: function (response) {
                let html = "";
                for (let i = 0; i < response.length; i++) {
                    html += '<option value="' + response[i].stationId + '">' + response[i].stationCode + ' - ' + response[i].stationName + '</option>';
                }
                $("#tram").append(html);
                $("#tram").select2();
            },
            error: function (error) {
                toastr.error('Lỗi', data.message);
            }
        });

        $.ajax({
            headers: {
                'Authorization': token
            },
            url: apiUrl + "user-group/get-user",
            method: "GET",
            contentType: "application/json",
            success: function (response) {
                let html = "";
                for (let i = 0; i < response.length; i++) {
                    html += '<option value="' + response[i].id + '">' + response[i].id + ' - ' + response[i].name + '</option>';
                }
                $("#nguoi_dung").append(html);
                $("#nguoi_dung").select2();
            },
            error: function (error) {
                toastr.error('Lỗi', data.message);
            }
        });
    },

    initPage: function () {
        // Tao form search
        uGroup.initSearchInput();
        // tao datatable + load du lieu
        uGroup.initDataTable();
        // init data
        uGroup.initData();
        // init event
        uGroup.initEvent();
    }
}

$(document).ready(function () {
    uGroup.initPage();
});
