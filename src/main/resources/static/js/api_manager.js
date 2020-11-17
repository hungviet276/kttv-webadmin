let userIDs = {};
let userId;
let casbins = [];
let casbinsDelete = [];
let casbinAdd = [];
let casbinselected = [];
let oldList = [];
let casbinSearch = [];
let tableApi;
let oldLength;
const URL = {
    GET_USERS_URL: apiUrl + 'user-info/get-all-user-id'
    , GET_CASBIN: apiUrl + 'casbin-rule/get-casbin-by-user-id?userId='
    , ADD_CASBIN: apiUrl + "casbin-rule/add-casbin"
    , UPDATE_CASBIN: apiUrl + "casbin-rule/update-casbin"
    , DELETE_CASBIN: apiUrl + "casbin-rule/delete-casbin"
};

$(document).ready(function () {
    initActive();
    getUsers();
});

getUsers = function () {
    $.ajax({
        headers: {
            'Authorization': token
        }
        , url: URL.GET_USERS_URL
        , method: "GET"
        , contentType: "application/json"
        , success: function (data) {
            for (let i = 0; i < data.length; i++) {
                userIDs[i] = data[i].id;
            }
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

filterData = function () {
    casbinAdd = [];
    casbinsDelete = [];
    for (let i = 0; i < oldList.length; i++) {
        for (let j = 0; j < casbinselected.length; j++) {
            if (oldList[i].indexCount === casbinselected[j].indexCount) {
                casbinselected.splice(j, 1);
                oldList.splice(i, 1);
            }
        }
    }
    oldList.map(oldData => casbinsDelete.push(castToCasbin(oldData)));
    casbinselected.map(dataSelected => casbinAdd.push(castToCasbin(dataSelected)));
}

let Table = {
    initTable: function (casbins) {
        if (tableApi) {
            tableApi.destroy();
        }
        tableApi = $('#tableDataView').DataTable({
            columnDefs: [{
                orderable: false
                , className: 'select-checkbox'
                , targets: 0
                , checkboxes: {
                    selectRow: true
                }
                , processing: true
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
        oldList = [];
        oldLength = 0;
        tableApi.rows(function (idx, data) {
            if (data.user && data.user === userId) {
                tableApi.row(idx).select();
                oldList.push(data);
            }
        });
        oldLength = oldList.length;
    }
    , getCasbinselect: function () {
        casbinselected = [];
        casbinselected = tableApi.rows({selected: true}).data().toArray();
    }
};

let Casbin = {
    getAllCasbinByUser: function (user) {
        if (user) {
            userId = user;
        }
        $.ajax({
            headers: {
                'Authorization': token
            }
            , url: URL.GET_CASBIN + userId
            , method: 'POST'
            , contentType: "application/json"
            , success: function (responseJson) {
                if (responseJson.length > 0) {
                    casbins = [];
                    for (let i = 0; i < responseJson.length; i++) {
                        let casbin = responseJson[i];
                        casbins.push({
                            "": ""
                            , "indexCount": i + 1
                            , 'api': casbin.v1
                            , "method": casbin.v2
                            , 'user': casbin.v0
                        });
                    }
                    Table.initTable(casbins);
                } else if (tableApi) {
                    tableApi.destroy();
                }
            }
        });
    }
    , update: function (data) {
        let dataRequest = JSON.stringify(data)
        console.log('dataRequest ', dataRequest);
        $.ajax({
            headers: {
                'Authorization': token
            }
            , url: URL.UPDATE_CASBIN
            , method: 'POST'
            , contentType: 'application/json'
            , data: dataRequest
            , success: function (responseJson) {
                console.log("update : ", responseJson);
                if (responseJson.status === 1) {
                    toastr.success(responseJson.message);
                    Casbin.getAllCasbinByUser(userId);
                }
            }
            , error: function (error) {
                toastr.error('Lỗi', error.message);
            }
        });
    }
    , searchCasbin: function (stringSearch) {
        casbinSearch = [];
        casbins.map(casbin => {
            let api = casbin.api;
            let method = casbin.method;
            let resultSearch = api.search(stringSearch);
            let methodInput = $('#inputPublish').val();
            console.log('methodInput : ' + methodInput);
            if (resultSearch >= 0 && method === methodInput) {
                casbinSearch.push(casbin);
            }
        })
        Table.initTable(casbinSearch);
    }
}

initActive = function () {
    initSearchButton();
    show_search();
    initUpdateBtn();
    initChangeUser();
};

show_search = function () {
    $("#box_info").hide(150);
    $("#box_search").show(250);
    $("#box_search").attr('class', 'col-sm-12');
}

initChangeUser = function () {
    $('#inputUsers').change(function () {
        userId = $(this).val();
        console.log('$(this).val()', userId)
        Casbin.getAllCasbinByUser(userId);
    })
}
initUpdateBtn = function () {
    $("#btnUpdate").click(function () {
        Table.getCasbinselect();
        filterData();
        let dataRequest = [];
        dataRequest[0] = casbinsDelete;
        dataRequest[1] = casbinAdd;
        console.log('casbinAdd', casbinAdd);
        console.log('casbinsDelete', casbinsDelete);
        Casbin.update(dataRequest);
    });
};
castToCasbin = function (data) {
    let casbin = {
        v0: userId
        , v1: data.api
        , v2: data.method
    }
    return casbin;
}
initSearchButton = function () {
    $('#btnSearch').click(function () {
        let stringSeach = $('#inputUrl').val().trim().toLowerCase();
        console.log('stringSeach : ' + stringSeach)
        Casbin.searchCasbin(stringSeach);
    });
};
