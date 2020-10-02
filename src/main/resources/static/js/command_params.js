var isPushDataTableToForm = false;
var dataDistrictPush = null;
var colBypassInputSearch = [6]
var sitedevice;

function createInput(data, i){
	var a = "<div class='form-row'>";
	a += '<div class="form-group col-md-6">';
	if(i == 0)
		a += '<label for="inputSiteInfo">Name</label>';
	a += '<input type="text" class="form-control command-param" id="n' + data.name + '"/>';
	a += '</div>';

	a += '<div class="form-group col-md-6">';
	if(i == 0)
		a += '<label for="inputSiteInfo">Value</label>';
	a += '<input type="text" class="form-control command-param" id="' + data.name + '" commandId="' + data.command_info_id + '" commandTypeId="' + data.command_type_id + '"/>';
	a += '</div>';
	a += '</div>';
	return a;
}

function renderListView2(data){
	var a = "<div class='form-row'>";
	a += '<div class="form-group col-md-6">';
	a += '<label for="inputSiteInfo">Name</label>';
	a += '<input type="text" class="form-control command-param" id="n' + data.site_device_id + '"/>';
	a += '</div>';

	a += '<div class="form-group col-md-6">';
	a += '<label for="inputSiteInfo">Value</label>';
	a += '<input type="text" class="form-control command-param" id="v' + data.site_device_id + '" commandId="' + data.command_info_id + '" commandTypeId="' + data.command_type_id + '"/>';
	a += '</div>';
	a += '</div>';
	$("#listViewCommandParams").append(a);
	$('#n' + data.site_device_id).val(data.name);
	$('#v' + data.site_device_id).val(data.value);
}

function renderListView(data){
	var i = 0;
	data.forEach(function (e){
		$("#listViewCommandParams").append(createInput(e, i));
		i ++;
	})
	data.forEach(function (e){
		$('#n' + e.name).val(e.name);
		$('#' + e.name).val(e.default_value);
	})
}
var deviceTypeId = "";

function getKeyInfo(){
	if($("#inputChoose").val() == '1'){
		$("#listViewCommandParams").empty()
		if (deviceTypeId == null) {
			return;
		}
		let data = {
		        "device_type_id"	: deviceTypeId,
		        "command_type_id"	: $('#inputCommandType').val(),
		        "command_info_id"	: $('#inputCommandInfo').val(),
		}
		$.ajax({
	        url: '/api/commandparams/keyinfo',
	        method: 'POST',
	        contentType: 'application/json',
	        data: JSON.stringify(data),
	        success: function (data) {
	        	renderListView(data)
	        }
	    })
	}
}

$("#inputChoose").on('change', function(){
	$("#listViewCommandParams").empty()
	if($(this).val() == '0'){
		var a = "<div class='form-row'>";
		a += '<div class="form-group col-md-6">';
		a += '<label for="inputSiteInfo">Name</label>'
		a += '<input type="text" class="form-control command-param" id=inputName placeholder="name"/>';
		a += '</div>';
	
		a += '<div class="form-group col-md-6">';
		a += '<label for="inputSiteInfo">Value</label>'
		a += '<input type="text" class="form-control command-param" id="inputValue" placeholder="value"/>';
		a += '</div>';
		a += '</div>';
		$("#listViewCommandParams").append(a);
	}
})

$("#inputCommandType").on('change', function (){
	getKeyInfo();
})

$("#inputCommandInfo").on('change', function (){
	getKeyInfo();
})
function loadCommand(id,commandId, dtypeId){
	console.log('id: ', id, ', commandId: ', commandId)
	clearOption("#inputCommandInfo");
	if (dtypeId) {
		deviceTypeId = dtypeId
	} else
		deviceTypeId = getDeviceTypeId(id);
	$.ajax({
        url: '/api/commandparams/command/' + deviceTypeId,
        method: 'GET',
        contentType: 'application/json',
        success: function (data) {
        	console.log(data)
        	renderCommandOptions(data)
        	if (commandId) {
                $('#inputCommandInfo').val(commandId);
			} else {
				getKeyInfo();
			}
        }
    })
}
$("#inputSiteDevice").on('change', function (){
	loadCommand($(this).val());
})
function loadSiteDevice(id,siteDeviceId){
	clearOption("#inputSiteDevice");
	clearOption("#inputCommandInfo");
	$.ajax({
        url: '/api/commandparams/sitedevice/' + id,
        method: 'GET',
        contentType: 'application/json',
        success: function (data) {
        	sitedevice = data;
        	renderSiteDeviceOptions(data)
        	if (siteDeviceId) {
                $('#inputSiteDevice').val(siteDeviceId);
			}
        }
    })
}
$("#inputSiteInfo").on('change', function () {
    loadSiteDevice($(this).val())
})

function createOption(value, name, data) {
	var option = $("<option value='" + value + "'>" + name + "</option>");
	if (data != null) option.data("data", data);
	return option;
}

function clearOption(select) {
	$(select).find('option:not([value=""])').each(function() {
		$(this).remove();
	});
}
function renderSiteDeviceOptions(siteDevice) {
	for (let i = 0; i < siteDevice.length; i++) {
		var obj = siteDevice[i];
		var option = createOption(obj.id, obj.device_code + ' - ' + obj.device_name, obj);
		$("#inputSiteDevice").append(option);
	}
}
function renderCommandOptions(siteDevice) {
	for (let i = 0; i < siteDevice.length; i++) {
		var obj = siteDevice[i];
		var option = createOption(obj.id, obj.code + ' - ' + obj.name, obj);
		$("#inputCommandInfo").append(option);
	}
}
function getDeviceTypeId(sid){
	if (sitedevice) {
		for (var i = 0; i < sitedevice.length; i++) {
			if (sitedevice[i].id === sid) {
				return sitedevice[i].device_type_id;
			}
		}
	}
	return 0;
}

var draw = 0;
var table = $('#tableDataView').DataTable({
    "columnDefs": [
    	{
            "targets": [0],
            "visible": true,
            "searchable": false
        }, {
            "targets": [1, 2, 3, 4, 5],
            "className": "text-center",
        }, {
            "targets": [7,8,9,10,11,12],
            "visible": false,
            "searchable": false
        },
    ],
    "pagingType": "full_numbers",
    "lengthMenu": [
        [5, 10, 25, 50, 100, 200, -1],
        [5, 10, 25, 50, 100, 200, "All"]
    ],
    orderCellsTop: true,
    fixedHeader: true,
    "lengthChange": true,
    "searching": true,
    "ordering": false,
    "info": true,
    "autoWidth": false,
    "responsive": true,
//    "scrollX": true,
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
        {"data": "site_name"},
        {"data": "device_name"},
        {"data": "command_info_code"},
        {"data": "command_type_name"},
        {"data": "name"},
        {"data": "value"},
        {"data": "id"},
        {"data": "site_id"},
        {"data": "command_info_id"},
        {"data": "command_type_id"},
        {"data": "site_device_id"},
        {"data": "device_type_id"},
    ],
    "ajax": {
        "url": "/api/commandparams/get",
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
	                dataRes.data.push({
	                    "indexCount": i + 1,
	                    "id": responseJson.content[i].id,
	                    "site_name": responseJson.content[i].site_name,
	                    "device_name": responseJson.content[i].device_name,
	                    "command_info_code": responseJson.content[i].command_info_code,
	                    "command_type_name": responseJson.content[i].command_type_name,
	                    "name": responseJson.content[i].name,
	                    "value": responseJson.content[i].value,
	                    "site_id": responseJson.content[i].site_id,
	                    "command_info_id": responseJson.content[i].command_info_id,
	                    "command_type_id": responseJson.content[i].command_type_id,
	                    "site_device_id": responseJson.content[i].site_device_id,
	                    "device_type_id": responseJson.content[i].device_type_id,
	                })
	            }
	            return JSON.stringify(dataRes);
        	
        }
    }
});

function disableRootElement(){
	$('#inputSiteInfo').attr('disabled', 'true');
	$('#inputSiteDevice').attr('disabled', 'true');
	$('#inputChoose').val('1');
	$('#inputChoose').attr('disabled', 'true');
}

function enableRootElement(){
	$('#inputSiteInfo').removeAttr('disabled');
	$('#inputSiteDevice').removeAttr('disabled');
	$('#inputChoose').removeAttr('disabled');
}
function formReset() {
    $('#form_data')[0].reset();
    $('#inputDistrict').html('');
    enableRootElement();
	$("#listViewCommandParams").empty()
}

function getData(){
	
	data = {};
    	let idSiteDevice = $('#inputSiteDevice').val()
    	data = {
    		'id' : $('#inputId').val(),
    		'commandInfoId' : $('#inputCommandInfo').val(),
    		'commandTypeId' : $('#inputCommandType').val(),
    		'siteDeviceId' : idSiteDevice,
    		'name' : $('#n' + idSiteDevice).val(),
    		'value' : $('#v' + idSiteDevice).val(),
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
		$("#listViewCommandParams").empty()
        $('#inputId').val(rowData[0].id);
        $('#inputSiteInfo').val(rowData[0].site_id);
        loadSiteDevice(rowData[0].site_id, rowData[0].site_device_id);
        $('#inputSiteDevice').val(rowData[0].site_device_id);
        $('#inputDevicePort').val(rowData[0].device_port);
        $('#inputCommandInfo').val(rowData[0].command_info_id);
        loadCommand(rowData[0].site_device_id, rowData[0].command_info_id, rowData[0].device_type_id);
        //setTimeout(function(){ loadCommand(rowData[0].site_device_id, rowData[0].command_info_id); }, 200);
        $('#inputCommandType').val(rowData[0].command_type_id);
        renderListView2(rowData[0])
    }
}

function rowDeselect(e, dt, type, indexes) {
	enableRootElement();
    $('#btnCopy').attr('disabled', 'true');
    $('#btnDelete').attr('disabled', 'true');
    $('#btnEdit').attr('disabled', 'true');
    $('#form_data')[0].reset();
	$("#listViewCommandParams").empty()
}

$('#btnSaveCreate').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    // call ajax here
    listParams = [];
    if($('#inputChoose').val() == '1'){
	    $('.command-param').each(function(){
	    	let name = $(this).attr('id');
	    	data = {
	    		'id' : $('#inputId').val(),
	    		'commandInfoId' : $(this).attr('commandid'),
	    		'commandTypeId' : $(this).attr('commandtypeid'),
	    		'siteDeviceId' : $('#inputSiteDevice').val(),
	    		'name' : $(this).attr('id'),
	    		'value' : $('#' + name).val(),
	    	}
	    	listParams.push(data)
		})
    }else{
    	if(!$('#inputSiteInfo').val()){
    		toastr.error('Please choose site');
    		return;
    	}
    	
    	if(!$('#inputSiteDevice').val()){
    		toastr.error('Please choose device');
    		return;
    	}
    	
    	if(!$('#inputCommandInfo').val()){
    		toastr.error('Please choose command type');
    		return;
    	}
    	if(!$('#inputCommandType').val()){
    		toastr.error('Please enter name');
    		return;
    	}
    	
    	data = {
    		'id' : $('#inputId').val(),
    		'commandInfoId' : $('#inputCommandInfo').val(),
    		'commandTypeId' : $('#inputCommandType').val(),
    		'siteDeviceId' : $('#inputSiteDevice').val(),
    		'name' : $('#inputName').val(),
    		'value' : $('#inputValue').val(),
    	}
    	listParams.push(data)
    }
    
    
    showLoading();
    $.ajax({
        url: '/api/commandparams/create',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(listParams),
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
        url: '/api/commandparams/edit',
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

    // call ajax here
	if(!$('#inputSiteInfo').val()){
		toastr.error('Please choose site');
		return;
	}
	
	if(!$('#inputSiteDevice').val()){
		toastr.error('Please choose device');
		return;
	}
	
	if(!$('#inputCommandInfo').val()){
		toastr.error('Please choose command type');
		return;
	}
	if(!$('#inputCommandType').val()){
		toastr.error('Please enter name');
		return;
	}

    listParams = [];
    let idSiteDevice = $('#inputSiteDevice').val()
	data = {
		'id' : $('#inputId').val(),
		'commandInfoId' : $('#inputCommandInfo').val(),
		'commandTypeId' : $('#inputCommandType').val(),
		'siteDeviceId' : idSiteDevice,
		'name' : $('#n' + idSiteDevice).val(),
		'value' : $('#v' + idSiteDevice).val(),
	}
	listParams.push(data)

    showLoading();
    $.ajax({
        url: '/api/commandparams/create',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(listParams),
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
            url: '/api/commandparams/delete',
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
    
    
    // add manual
	$('#inputChoose').val('0');
	$('#inputChoose').attr('disabled', 'true');
    
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
    	if (i == 1) {
			$(this).html( "<select class='selectpicker form-control' >"+ $('#inputSiteInfo').html() + '</select>');
			$( 'select', this ).on( 'keyup change', function () {
			    if ( table.column(i).search() !== this.value ) {
			        table
			            .column(i)
			            .search( this.value )
			            .draw();
			    }
		    });
		} else{
		    $(this).html( '<input type="text" class="form-control" placeholder="' + inputTableSearch + ' '+title+'" />' );
		 
		    $( 'input', this ).on( 'keyup change', function () {
			    if ( table.column(i).search() !== this.value ) {
			        table
			            .column(i)
			            .search( this.value )
			            .draw();
			    }
		    } );
	    }
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
