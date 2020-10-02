var isPushDataTableToForm = false;
var dataDistrictPush = null;
var colBypassInputSearch = [5]

var draw = 0;
var table = $('#tableDataView').DataTable({
    "columnDefs": [
    	{
            "targets": [0],
            "visible": true,
            "searchable": false
        },{
            "targets": [1, 2, 3],
            "className": "text-center",
        }, {
            "targets": [6,7],
            "visible": false,
            "searchable": false
        },
    ],
    "pagingType": "full_numbers",
    "lengthMenu": lengthMenu,
    orderCellsTop: true,
    fixedHeader: true,
    "lengthChange": true,
    "searching": true,
    "ordering": false,
    "info": true,
    "autoWidth": false,
    "responsive": true,
    "select": {
        "style": "single"
    },
    language: {
    	search: "_INPUT_",
        searchPlaceholder: searchPlaceholder,
    },
    "processing": true,
    "serverSide": true,
    "columns": [
        {"data": "indexCount"},
        {"data": "deviceType"},
        {"data": "device_code"},
        {"data": "device_name"},
        {"data": "description"},
        {"data": "create_time"},
        {"data": "id"},
        {"data": "deviceTypeId"},
    ],
    "ajax": {
        "url": "/api/device/get",
        "method": "POST",
        "contentType": "application/json",
        "data": function (d) {
        	
        	var len = d.columns.length;
        	var objData = {};
        	for(var i = 0; i < len; i++){
        		var o = d.columns[i];
        		if (o.searchable == true){
        			objData[o.data] = o.search.value
        		}
        	}
        	var search = JSON.stringify(objData)
        	//console.log("search: ", search)
            draw = d.draw;
            return JSON.stringify({
                "draw"	: d.draw,
                "start"	: d.start,
                "length": d.length,
                "search": search
            });
        },
        "dataFilter": function (response) {
        	if (response == null || response == '') {
        		return null;
			}
            let responseJson = JSON.parse(response);
            let dataRes = {
                "draw": responseJson.draw,
                "recordsFiltered": responseJson.recordTotal,
                "recordsTotal": responseJson.recordTotal,
                "data": []
            };
            
            for (let i = 0; i < responseJson.content.length; i++) {
            	console.log(responseJson.content[i])
                dataRes.data.push({
                    "indexCount": i + 1,
                    "id": responseJson.content[i].id,
                    "deviceType": mapDeviceType[responseJson.content[i].device_type_id],
                    "deviceTypeId": responseJson.content[i].device_type_id,
                    "device_code": responseJson.content[i].device_code,
                    "device_name": responseJson.content[i].device_name,
                    "description": responseJson.content[i].description,
                    "create_time": responseJson.content[i].create_time
                })
            }
            return JSON.stringify(dataRes);
        }
    }
});

function disableRootElement(){
}

function enableRootElement(){
}
function formReset() {
    $('#form_data')[0].reset();
    $('#inputDistrict').html('');
    enableRootElement();
}

function getData(){
	let data = {
	        "id"			: $('#inputId').val(),
	        "deviceTypeId"	: $('#inputDeviceType').val(),
	        "code"			: $('#inputCode').val(),
	        "name"			: $('#inputName').val(),
	        "description"	: $('#inputDescription').val(),
	        "tableName"		: $('#inputTablename').val()
	    }
	return data;
}

// set default state for button control
$('#btnCopy').attr('disabled', 'true');
$('#btnDelete').attr('disabled', 'true');
$('#btnEdit').attr('disabled', 'true');

table
    .on('select', rowSelect)
    .on('deselect', rowDeselect);

function rowSelect(e, dt, type, indexes) {
	disableRootElement();
    $('#btnCopy').removeAttr('disabled');
    $('#btnDelete').removeAttr('disabled');
    $('#btnEdit').removeAttr('disabled');
    var rowData = table.rows(indexes).data().toArray();
    fillDataToForm(rowData);
}

function fillDataToForm(rowData) {
    if (rowData != null && rowData != undefined && rowData.length > 0) {
        $('#inputId').val(rowData[0].id);
        $('#inputCode').val(rowData[0].code);
        $('#inputName').val(rowData[0].name);
        $('#inputDeviceType').val(rowData[0].deviceTypeId);
        $('#inputTablename').val(rowData[0].tableName);
        $('#inputDescription').val(rowData[0].description);
        disableRootElement();
    }
}

function rowDeselect(e, dt, type, indexes) {
	enableRootElement();
    $('#btnCopy').attr('disabled', 'true');
    $('#btnDelete').attr('disabled', 'true');
    $('#btnEdit').attr('disabled', 'true');
    $('#form_data')[0].reset();
}

$('#btnSaveCreate').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    // call ajax here
    showLoading();

    let data = getData();
    //console.log("data: ", data)
    $.ajax({
        url: '/api/device/create',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function (data) {
            //
        	//console.log("success", data);
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
                toastr.error('Error', data.message);
            }
            table.ajax.reload();
        },
        error: function (err) {
            disableLoading();
            toastr.error(err.responseJSON.message, err.responseJSON.code);
        }
    })
});


$('#btnSaveEdit').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    showLoading();
    // set data
    let data = getData();

    // call ajax here
    $.ajax({
        url: '/api/device/edit',
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
                toastr.error('Error', data.message);
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

$('#btnSaveCopy').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    showLoading();

    let data = getData();

    $.ajax({
        url: '/api/device/create',
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
                toastr.error('Error', data.message);
            }
            table.ajax.reload();
        },
        error: function (err) {
            disableLoading();
            toastr.error(err.responseJSON.message, err.responseJSON.code);
        }
    })
});

$('#btnDelete').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    if (confirm(confirmDelete)) {
        showLoading();
        let rowData = table.rows( { selected: true } ).data().toArray();
        let data = getData();

        $.ajax({
            url: '/api/device/delete',
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
                    toastr.error('Error', data.message);
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


//set action for btnEdit
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
    
    $('#wrap_table_data').css('pointer-events', '');

    // roleback dataToForm
    let rowData = table.rows( { selected: true } ).data().toArray();
    if (rowData == null || rowData == undefined || rowData.length < 1) {
        $('#btnCopy').attr('disabled', 'true');
        $('#btnDelete').attr('disabled', 'true');
        $('#btnEdit').attr('disabled', 'true');
    } else {
        fillDataToForm(rowData);
    }
});

$('#btnBackEdit').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    // add disable form input
    disableRootElement();

    $('#btnSaveEdit').css('display', 'none');
    $('#btnBackEdit').css('display', 'none');

    // set state for button control
    $('#btnCreate').css('display', '');
    $('#btnCopy').css('display', '');
    $('#btnDelete').css('display', '');
    $('#btnEdit').css('display', '');

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

    // enable form input
    enableRootElement();
    // block table
    $('#wrap_table_data').css('pointer-events', 'none');
});

$('.select2').select2();

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

$('#tableDataView thead tr').clone(true).appendTo( '#tableDataView thead' );
$('#tableDataView thead tr:eq(1) th').each( function (i) {
    var title = $(this).text();
    //console.log("title: ", title)
    if (title != '#' && !colBypassInputSearch.includes(i)) {
	    $(this).html( '<input type="text" placeholder="' + inputTableSearch + ' '+title+'" />' );
	 
	    $( 'input', this ).on( 'keyup change', function () {
		    if ( table.column(i).search() !== this.value ) {
		    	console.log($(this).html())
		        table
		            .column(i)
		            .search( this.value )
		            .draw();
		    }
	    } );
	} else {
		$(this).html('');
	}
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
    disableRootElement();

    $('#wrap_table_data').css('pointer-events', '');

    // roleback dataToForm
    let rowData = table.rows( { selected: true } ).data().toArray();
    fillDataToForm(rowData);
});
