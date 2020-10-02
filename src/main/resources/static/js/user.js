
$('.select2').select2();
var colBypassInputSearch = [6,7]

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

var isPushDataTableToForm = false;
var dataDistrictPush = null;

// showLoading();
var draw = 0;
var table = $('#tableDataView').DataTable({
    "columnDefs": [
        {
            "targets": [8,9],
            "visible": false,
            "searchable": false
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
        searchPlaceholder: searchPlaceholder,
    },
    "select": {
        "style": "single"
    },
    "processing": true,
    "serverSide": true,
    "columns": [
        {"data": "indexCount"},
        {"data": "accountId"},
        {"data": "username"},
        {"data": "email"},
        {"data": "roles"},
        {"data": "activeText"},
        {"data": "createdDate"},
        {"data": "editDate"},
        {"data": "activeJson"},
        {"data": "roleJson"}
    ],
    "ajax": {
        "url": "/api/user/get",
        "method": "POST",
        "contentType": "application/json",
        "data": function (d) {
            draw = d.draw;
            return JSON.stringify({
                "draw"	: d.draw,
                "start"	: d.start,
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
                let roleList = [];
                for (let j = 0; j < responseJson.content[i].roles.length; j++) {
                    roleList.push(responseJson.content[i].roles[j].roleName);
                }
                dataRes.data.push({
                    "indexCount": i + 1,
                    "accountId": responseJson.content[i].accountId,
                    "username": responseJson.content[i].username,
                    "email": responseJson.content[i].email,
                    "roles": JSON.stringify(roleList),
                    "activeText": responseJson.content[i].active ? 'Active' : 'Locked',
                    "createdDate": responseJson.content[i].createdDate,
                    "editDate": responseJson.content[i].editDate,
                    "activeJson": responseJson.content[i].active ? '1' : '0',
                    "roleJson": responseJson.content[i].roles
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

function rowSelect(e, dt, type, indexes) {
    $('#inputUsername').attr('disabled', 'true');
//    $('#inputPassword').attr('disabled', 'true');
    $('#btnCopy').removeAttr('disabled');
    $('#btnDelete').removeAttr('disabled');
    $('#btnEdit').removeAttr('disabled');
    var rowData = table.rows(indexes).data().toArray();

    fillDataToForm(rowData);
}

function fillDataToForm(rowData) {
    if (rowData != null && rowData != undefined && rowData.length > 0) {
        $('#inputUsername').val(rowData[0].username);
        $('#inputPassword').val(rowData[0].password);
        $('#inputEmail').val(rowData[0].email);
        let roleData = [];
        for(let i = 0; i < rowData[0].roleJson.length; i++) {
            roleData.push(rowData[0].roleJson[i].roleId);
        }
        $('#inputRole').val(roleData).trigger('change');
        $('#inputAccountId').val(rowData[0].accountId);
        $('#inputActive').val(rowData[0].activeJson).trigger('change');
//        $('#inputPassword').val(null);
    }
}

function rowDeselect(e, dt, type, indexes) {
    $('#btnCopy').attr('disabled', 'true');
    $('#btnDelete').attr('disabled', 'true');
    $('#btnEdit').attr('disabled', 'true');
    $('#inputUsername').removeAttr('disabled');
//    $('#inputPassword').removeAttr('disabled');
    $('#form_data')[0].reset();
    $('#inputRole').val(null).trigger('change');
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

$('#btnSaveCreate').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    // call ajax here
    showLoading();

    let data = {
        "username": $('#inputUsername').val(),
        "password": $('#inputPassword').val(),
        "email": $('#inputEmail').val(),
        "roles": $('#inputRole').val(),
        "active": $('#inputActive').val()
    };

    $.ajax({
        url: '/api/user/create',
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
                toastr.success('Success', data.message);
            } else {
                toastr.error('Success', data.message);
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

    $('#btnSaveCreate').css('display', 'none');
    $('#btnBackCreate').css('display', 'none');

    // set state for button control
    $('#btnCreate').css('display', '');
    $('#btnCopy').css('display', '');
    $('#btnDelete').css('display', '');
    $('#btnEdit').css('display', '');

    // remove disable form input
    $('#inputUsername').removeAttr('disable');
    $('#inputPassword').removeAttr('disable');

    $('#wrap_table_data').css('pointer-events', '');

    // roleback dataToForm
    let rowData = table.rows( { selected: true } ).data().toArray();
    if (rowData == null || rowData == undefined || rowData.length < 1) {
        $('#btnCopy').attr('disabled', 'true');
        $('#btnDelete').attr('disabled', 'true');
        $('#btnEdit').attr('disabled', 'true');
    } else {
        $('#inputUsername').attr('disabled', 'true');
        $('#inputPassword').attr('disabled', 'true');
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

function formReset() {
    $('#inputUsername').removeAttr('disabled');
    $('#inputPassword').removeAttr('disabled');
    $('#form_data')[0].reset();
    $('#inputRole').val(null).trigger('change');
    $('#inputDistrict').html('');
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

$('#btnSaveEdit').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    showLoading();
    // set data
    let data = {
        "accountId": $('#inputAccountId').val(),
        "username": $('#inputUsername').val(),
        "email": $('#inputEmail').val(),
        "roles": $('#inputRole').val(),
        "phone": $('#inputPhone').val(),
        "active": $('#inputActive').val()
    };

    // call ajax here
    $.ajax({
        url: '/api/user/edit',
        method: 'POST',
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
                toastr.success('Success', data.message);
            } else {
                toastr.error('Success', data.message);
            }
            table.ajax.reload();
        },
        error: function (err) {
            disableLoading();
            toastr.error(err.responseJSON.message, err.responseJSON.code);
            // formReset();
            // resetButtonControlAfterSubmitForm();
            // table.rows().deselect();
            // isPushDataTableToForm = false;
            // dataDistrictPush = null;
            // $('#wrap_table_data').css('pointer-events', '');
            // table.ajax.reload();
        }
    });

});

$('#btnBackEdit').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    $('#btnSaveEdit').css('display', 'none');
    $('#btnBackEdit').css('display', 'none');

    // set state for button control
    $('#btnCreate').css('display', '');
    $('#btnCopy').css('display', '');
    $('#btnDelete').css('display', '');
    $('#btnEdit').css('display', '');

    // add disable form input
    $('#inputUsername').attr('disabled', 'true');
    $('#inputPassword').attr('disabled', 'true');

    $('#wrap_table_data').css('pointer-events', '');

    // roleback dataToForm
    let rowData = table.rows( { selected: true } ).data().toArray();
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

    // unlock username and password
    $('#inputUsername').removeAttr('disabled');
    $('#inputPassword').removeAttr('disabled');

    // block table
    $('#wrap_table_data').css('pointer-events', 'none');
});

$('#btnSaveCopy').on('click', function (e) {

    e.preventDefault();
    e.stopPropagation();

    showLoading();

    let data = {
        "username": $('#inputUsername').val(),
        "password": $('#inputPassword').val(),
        "email": $('#inputEmail').val(),
        "roles": $('#inputRole').val(),
        "active": $('#inputActive').val()
    };

    $.ajax({
        url: '/api/user/create',
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
                toastr.success('Success', data.message);
            } else {
                toastr.error('Success', data.message);
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

    $('#btnSaveCopy').css('display', 'none');
    $('#btnBackCopy').css('display', 'none');

    // set state for button control
    $('#btnCreate').css('display', '');
    $('#btnCopy').css('display', '');
    $('#btnDelete').css('display', '');
    $('#btnEdit').css('display', '');

    // add disable form input
    $('#inputUsername').attr('disabled', 'true');
    $('#inputPassword').attr('disabled', 'true');

    $('#wrap_table_data').css('pointer-events', '');

    // roleback dataToForm
    let rowData = table.rows( { selected: true } ).data().toArray();
    fillDataToForm(rowData);
});

$('#btnDelete').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    if (confirm("Do you want delete account?")) {
        showLoading();
        let rowData = table.rows( { selected: true } ).data().toArray();
        let data = {
            "accountId": rowData[0].accountId
        };

        $.ajax({
            url: '/api/user/delete',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (data) {
                // set state for button control
                disableLoading();
                formReset();
                resetButtonControlAfterSubmitForm();
                table.rows().deselect();
                isPushDataTableToForm = false;
                dataDistrictPush = null;
                $('#wrap_table_data').css('pointer-events', '');
                if (data.status == '1') {
                    toastr.success('Success', data.message);
                } else {
                    toastr.error('Success', data.message);
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

$('#tableDataView thead tr').clone(true).appendTo( '#tableDataView thead' );
$('#tableDataView thead tr:eq(1) th').each( function (i) {
    var title = $(this).text();
    if (title != '#' && !colBypassInputSearch.includes(i)) {
    	if (i == 5) {
			$(this).html( "<select class='selectpicker form-control' >"+ $('#inputActive').html() + '</select>');
			$( 'select', this ).on( 'keyup change', function () {
			    if ( table.column(i).search() !== this.value ) {
			        table
			            .column(i)
			            .search( this.value )
			            .draw();
			    }
		    });
		}else if (i == 4){
			$(this).html( "<select class='form-control select2 ' > <option value=''>--- choose ---</option>"+ $('#inputRole').html() + '</select>');
			$( 'select', this ).on( 'keyup change', function () {
			    if ( table.column(i).search() !== this.value ) {
			        table
			            .column(i)
			            .search( this.value )
			            .draw();
			    }
		    });
		} else {
			$(this).html( '<input type="text" class="form-control" placeholder="' + inputTableSearch + ' '+title+'" />' );
		    $( 'input', this ).on( 'keyup change', function () {
			    if ( table.column(i).search() !== this.value ) {
			        table
			            .column(i)
			            .search( this.value )
			            .draw();
			    }
		    });
		}
	} else {
		$(this).html('');
	}
});