let userIDs = {};
let userId;
let casbins = [];
let isStart = false;
let casbinDataTable = [];
let tableApi;
let rowOfUser = [];
const URL = {
    'GET_USERS_URL': apiUrl + 'user-info/get-all-user-id'
    , GET_CASBIN: apiUrl + 'casbin-rule/get-casbin-by-user-id?userId='
    , ADD_CASBIN: apiUrl + "casbin-rule/add-casbin"
    , UPDATE_CASBIN: apiUrl + "casbin-rule/update-casbin"
    , DELETE_CASBIN: apiUrl + "casbin-rule/delete-casbin"
};

$(document).ready(function () {
    initActive();
    getUsers();
});

function getUsers() {
    $.ajax({
        headers: {
            'Authorization': token
        }
        , url: URL.GET_USERS_URL
        , method: "GET"
        , contentType: "application/json"
        , success: function (data) {
            console.log("data", data);
            for (let i = 0; i < data.length; i++) {
                userIDs[i] = data[i].id;
            }
            console.log("userIDs", userIDs);
            let listOptions = "<option value='' disabled selected>Chọn User</option>";
            for (let i = 0; i < data.length; i++) {
                listOptions += "<option value='" + userIDs[i] + "'>" + userIDs[i] + "</option>";
            }
            $('#inputUsers').html(listOptions);
        }
        , error: function (error) {
            toastr.error('Lỗi', error.message);
        }
    });
}

let Table = {
    drawTable: function (user) {
        userId = user;
        console.log("drawTable userId:  " + user);
        $.ajax({
            headers: {
                'Authorization': token
            }
            , url: URL.GET_CASBIN + userId
            , method: 'POST'
            , contentType: "application/json"
            , success: function (responseJson) {
                console.log("get-casbin-by-user-id : ", responseJson);
                casbins = [];
                for (let i = 0; i < responseJson.length; i++) {
                    casbins.push({
                        "": ""
                        , "indexCount": i + 1
                        , 'api': responseJson[i].v1
                        , "method": responseJson[i].v2
                        , 'user': responseJson[i].v0
                    });
                }
                console.log('dataRes.data : ', casbins.length);
                Table.initTable();
            }
        });
    }
    , initTable: function () {
        if (tableApi) {
            tableApi.destroy();
        }
        tableApi = $('#tableDataView').DataTable({
            columnDefs: [{
                orderable: false
                , "processing": true
                , className: 'select-checkbox'
                , targets: 0
                , 'checkboxes': {
                    'selectRow': true
                }
            }]
            , dom: 'Bfrtip'
            , select: {
                style: 'multi'
                , selector: 'td:first-child'
                , buttons: [
                    'selectAll'
                    , 'selectNone'
                ]
            }
            , lengthChange: true
            , searchDelay: 500
            , searching: false
            , ordering: false
            , info: true
            , autoWidth: false
            , scrollX: true
            , responsive: false
            , paging: false
            , columns: [
                {"data": ""}
                , {"data": "indexCount"}
                , {"data": "api"}
                , {"data": "method"}
                , {"data": "user"}
            ]
            , data: casbins
        });
        tableApi.rows(function (idx, data, node) {
            if (data.user && data.user === userId) {
                tableApi.row(idx).select();
            }
        });
    }
};

$("#btnSearch").click(function (event) {
    event.preventDefault();
    event.stopPropagation();
    $("#btnDetail").prop("disabled", true);
    $("#btnDonew").attr("disabled", false);
    var inputSearch = $(".table-data-input-search");
    for (let i = 0; i < inputSearch.length; i++) {
        $(inputSearch[i]).val("");
    }
    if ($("#station").val() === -1) {
        objSearch.s_id_station = null;
    } else {
        objSearch.s_id_station = $("#station").val();
    }

    if ($("#value-type").val() === -1) {
        objSearch.s_parameter_type_id = null;
    } else {
        objSearch.s_parameter_type_id = $("#value-type").val();
    }
    tableConfigValueType.search(objSearch).draw();
});

let CasbinRule = {
    getCasbinRule: function (userId) {
        if (!userId) {
            return;
        }
        $.ajax({
            headers: {
                'Authorization': token
            }
            , url: URL.GET_CASBIN + userId
            , method: "POST"
            , contentType: "application/json"
            , success: function (data) {
                console.log('getCasbinRule casbinRules', data);
                casbins = [];
                if (data !== null && data.length > 0) {
                    for (let i = 0; i < data.length; i++) {
                        casbins.push({
                            'v0': data[i].v0
                            , 'v1': data[i].v1
                            , 'v2': data[i].v2
                        });
                    }
                }
                Table.drawTable(casbins);
            }
            , error: function (error) {
                toastr.error('Lỗi', error.message);
            }
        })
    }
    , addCasbin: function () {
        debugger;
        casbin = {
            "v0": userId
            , "v1": $.trim($('#inputApi').val())
            , "v2": $.trim($('#inputMethod').val())
        };
        console.log('addCasbin casbin : ', casbin);
        if (!casbin.v0) {
            toastr.error('Chưa chọn user');
            return;
        }
        if (!casbin.v1) {
            toastr.error('Chưa nhập url');
            return;
        }
        if (!casbin.v2) {
            toastr.error('Chưa chọn method');
            return;
        }
        console.log("Casbin : ", casbin);
        $.ajax({
            headers: {
                'Authorization': token
            }
            , url: URL.ADD_CASBIN
            , data: JSON.stringify(casbin), method: "POST"
            , contentType: "application/json",
            success: function (respone) {
                console.log("respone", respone);
                if (respone.status === 1) {
                    $('#apiUrl').val();
                    toastr.success(respone.message);
                    casbins.push(casbin);
                    Table.drawTable(casbins);
                } else {
                    toastr.error('Lỗi', respone.message);
                }
            }
            , error: function (error) {
                toastr.error('Lỗi', error.message);
            }
        });
    }
    , updateCasbin: function () {
        let data =
            [{
                v0: 'anhocho'
                , v1: 'linktest3'
                , v2: 'POST'
            }
                , {
                v0: 'anhocho'
                , v1: 'linktest4'
                , v2: 'POST'
            }
            ];
        $.ajax({
            headers: {
                'Authorization': token
            }
            , url: URL.ADD_CASBIN
            , method: 'POST'
            , contentType: "application/json"
            , data: JSON.stringify(data)
            , success: function (responseJson) {
                console.log("ADD_CASBIN : ", responseJson);
            }
        });
    }
    , removeCasbin() {
        let dataSelected = [];
        let rowsDelete = [];
        dataSelected = table.rows({selected: true}).data();
        dataSelected.map(casbinRemove => {
            console.table(casbinRemove);
            casbin.v0 = casbinRemove.v0;
            casbin.v1 = casbinRemove.v1;
            casbin.v2 = casbinRemove.v2;
            rowsDelete.push(casbin);
        });
        console.table('remove casbin array : ', rowsDelete);
        let data = JSON.stringify(rowsDelete);
        $.ajax({
            headers: {
                'Authorization': token
            }
            , url: URL.DELETE_CASBIN
            , data: data
            , dataType: 'json'
            , method: "POST"
            , contentType: "application/json"
            , success: function (respone) {
                console.log("respone", respone);
                if (respone.status === 1) {
                    toastr.success(respone.message);
                    Table.removeRow(casbin);
                }
            }
            , error: function (error) {
                toastr.error('Lỗi', error.message);
            }
        });
    }
};

initActive = function () {
    initSearchButton();
    show_search();
    $("#btnUpdate").click(function (event) {
        CasbinRule.updateCasbin();
    });
};

function show_search() {
    $("#box_info").hide(150);
    $("#box_search").show(250);
    $("#box_search").attr('class', 'col-sm-12');
}

addOrRemove = function () {
    $('#example tbody').on('click', 'tr', function () {
        var id = this.id;
        var index = $.inArray(id, selected);

        if (index === -1) {
            selected.push(id);
        } else {
            selected.splice(index, 1);
        }

        $(this).toggleClass('selected');
    });
};

initSearchButton = function () {
    $("#btnSearch").click(function (event) {
        event.preventDefault();
        event.stopPropagation();
        $("#btnDetail").prop("disabled", true);
        $("#btnDonew").attr("disabled", false);
        var inputSearch = $(".table-data-input-search");
        for (let i = 0; i < inputSearch.length; i++) {
            $(inputSearch[i]).val("");
        }
        if ($("#station").val() == -1) {
            objSearch.s_id_station = null;
        } else {
            objSearch.s_id_station = $("#station").val();
        }

        if ($("#value-type").val() == -1) {
            objSearch.s_parameter_type_id = null;
        } else {
            objSearch.s_parameter_type_id = $("#value-type").val();
        }
        tableConfigValueType.search(objSearch).draw();
    });
};
