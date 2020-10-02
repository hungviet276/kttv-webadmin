var isPushDataTableToForm = false;
var dataDistrictPush = null;
var colBypassInputSearch = [9]

var draw = 0;
var table = $('#tableDataView').DataTable({
    "columnDefs": [
    	{
            "targets": [0],
            "visible": true,
            "searchable": false
        }, {
            "targets": [1,2,3,4,5,6],
            "className": "text-center",
        }, {
            "targets": [10,11],
            "visible": false,
            "searchable": false
        },
    ],
    "pagingType": "full_numbers",
    "lengthMenu": [
        [10, 25, 50, 100, 200, -1],
        [10, 25, 50, 100, 200, "All"]
    ],
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
        {"data": "siteCode"},
        {"data": "siteName"},
        {"data": "siteIp"},
        {"data": "cgiIp"},
        {"data": "cgiPort"},
        {"data": "groupMail"},
        {"data": "address"},
        {"data": "description"},
        {"data": "createTime"},
        {"data": "id"},
        {"data": "groupMailId"},
    ],
    "ajax": {
        "url": "/api/site/get",
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
            	let groupMailsList = [];
                for (let j = 0; j < responseJson.content[i].groupMails.length; j++) {
                	groupMailsList.push(responseJson.content[i].groupMails[j].name);
                }
                dataRes.data.push({
                    "indexCount": i + 1,
                    "id": responseJson.content[i].id,
                    "siteCode": responseJson.content[i].siteCode,
                    "siteName": responseJson.content[i].siteName,
                    "address": responseJson.content[i].address,
                    "description": responseJson.content[i].description,
                    "createTime": responseJson.content[i].createTime,
                    "siteIp": responseJson.content[i].siteIp,
                    "cgiIp": responseJson.content[i].cgiIp,
                    "cgiPort": responseJson.content[i].cgiPort,
                    "groupMail": JSON.stringify(groupMailsList),
                    "groupMailId": responseJson.content[i].groupMails,
                })
            }
            return JSON.stringify(dataRes);
        }
    }
});

function disableRootElement(){
	$('#inputSiteCode').attr('disabled', 'true');
}

function enableRootElement(){
    $('#inputSiteCode').removeAttr('disabled');
}
function formReset() {
    $('#form_data')[0].reset();
    $('#inputDistrict').html('');
    enableRootElement();
}

function getData(){
	let data = {
	        "id"			: $('#inputId').val(),
	        "siteCode"		: $('#inputSiteCode').val(),
	        "siteName"		: $('#inputSiteName').val(),
	        "siteIp"		: $('#inputSiteIp').val(),
	        "cgiIp"			: $('#inputCgiIp').val(),
	        "cgiPort"		: $('#inputCgiPort').val(),
	        "address"		: $('#inputAddress').val(),
	        "groupMails"	: $('#selectGroupId').val(),
	        "description"	: $('#inputDescription').val()
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
        $('#inputSiteCode').val(rowData[0].siteCode);
        $('#inputSiteName').val(rowData[0].siteName);
        $('#inputSiteIp').val(rowData[0].siteIp);
        $('#inputCgiIp').val(rowData[0].cgiIp);
        $('#inputCgiPort').val(rowData[0].cgiPort);
        let groupMailsData = [];
        rowData[0].groupMailId.forEach(function(e){
        	groupMailsData.push(e.id);
        })
        $('#selectGroupId').val(groupMailsData).trigger('change');
        $('#inputAddress').val(rowData[0].address);
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
    $.ajax({
        url: '/api/site/create',
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
        url: '/api/site/edit',
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
        url: '/api/site/create',
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
            url: '/api/site/delete',
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
    if (title != '#' && !colBypassInputSearch.includes(i)) {
	    $(this).html( '<input type="text" class="form-control" placeholder="' + inputTableSearch + ' '+title+'" />' );
	 
	    $( 'input', this ).on( 'keyup change', function () {
	    if ( table.column(i).search() !== this.value ) {
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
