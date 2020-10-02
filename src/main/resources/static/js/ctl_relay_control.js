//$('input[type=checkbox]').on('click', function () {
//	console.log($(this).bootstrapSwitch('state'))
//})


$("input[type=checkbox]").bootstrapSwitch({
	  onSwitchChange: function(e, state) { 
		console.log($(this).attr("relay"));
		console.log(e);
	  }
	});

function disableRootElement(){
	controlSelectOption( false );

	$("input[type=checkbox]").bootstrapSwitch({
	  onSwitchChange: function(e, state) { 
		console.log($(this).attr("relay"));
		console.log(e);
	  }
	});
	
	$("input[data-bootstrap-switch]").each(function(){
      $(this).bootstrapSwitch('state', $(this).prop('checked'));
    });
	
}

function enableRootElement(isCopy){
	if (!isCopy) {
		$(".device").each(function() {
		    $(this).remove();
		});
		controlSelectOption( true );
	}
    $("#idListAct").empty();
}

function fillDataToForm(rowData) {
    if (rowData != null && rowData != undefined && rowData.length > 0) {
        $('#inputId').val(rowData[0].id);
        $('#inputSiteInfo').val(rowData[0].siteId);
        updateDeviceInfo(rowData[0].siteId, rowData[0].deviceId)
        $("#idListAct").empty();
        $("#idListAct").append(getAct('0',rowData[0].ir0));
        $("#idListAct").append(getAct('1',rowData[0].ir1));
        $("#idListAct").append(getAct('2',rowData[0].ir2));
        $("#idListAct").append(getAct('3',rowData[0].ir3));
        $("#idListAct").append(getAct('4',rowData[0].ir4));
        $("#idListAct").append(getAct('5',rowData[0].ir5));
        $("#idListAct").append(getAct('6',rowData[0].ir6));
        $("#idListAct").append(getAct('7',rowData[0].ir7));
        $("#idListAct").append(getAct('8',rowData[0].ir8));
        $("#idListAct").append(getAct('9',rowData[0].ir9));
        $("#idListAct").append(getAct('10',rowData[0].ir10));
        $("#idListAct").append(getAct('11',rowData[0].ir11));
        $("#idListAct").append(getAct('12',rowData[0].ir12));
        $("#idListAct").append(getAct('13',rowData[0].ir13));
        $("#idListAct").append(getAct('14',rowData[0].ir14));
        $("#idListAct").append(getAct('15',rowData[0].ir15));
        //$("#idListAct").html(contentHtml);
        disableRootElement();
    }
}

function getAct(idx, state){
	if(state === null || state === '')
		return '';
	var result = '<div class="form-group col-md-1"><div class="card card-secondary"><div class="card-header"><h3 class="card-title">Relay ' + idx + '</h3>';
	result += '</div><div class="card-body"><input type="checkbox" name="my-checkbox" relay="' + idx + '"';
	if(state == '1'){
		result += ' checked ';
	}
	result += 'data-bootstrap-switch></div></div></div>';
	result = $(result);
//	result.bootstrapSwitch('state', $(this).prop('checked'));
	return result;
}


var siteId = "";
var deviceId = "";
controlSelectOption(true);
$("#inputSiteInfo").change(function() {
	siteId = $(this).val();
	$(".device").each(function() {
	    $(this).remove();
	});
	if(siteId === ""){
		controlSelectOption( true );
		return;
	}
	updateDeviceInfo(siteId);
});


function updateDeviceInfo(siteId, deviceId){
	//call ajax lấy về json các device;
	$.ajax({
		  method: "POST",
		  url: "/device/bysiteid/"+siteId,
		})
		 .done(function( msg ) {
		   for(let i =0; i<msg.length ; i++){
			   var tmp = msg[i];
			   var option = getOption(tmp.id, tmp.deviceName, tmp.device_code,"device");
			   $("#inputDeviceInfo").append(option);
			   controlSelectOption( false );
		   }
		   if (deviceId)
			   $( "#inputDeviceInfo").val(deviceId)
		});
}

function controlSelectOption(state){
	if ($("#inputSiteInfo").val() === "" && !state)
		return;
	$( "#inputDeviceInfo" ).prop( "disabled", state );
	$( "#r0" ).prop( "disabled", state );
	$( "#r1" ).prop( "disabled", state );
	$( "#r2" ).prop( "disabled", state );
	$( "#r3" ).prop( "disabled", state );
	$( "#r4" ).prop( "disabled", state );
	$( "#r5" ).prop( "disabled", state );
	$( "#r6" ).prop( "disabled", state );
	$( "#r7" ).prop( "disabled", state );
	$( "#r8" ).prop( "disabled", state );
	$( "#r9" ).prop( "disabled", state );
	$( "#r10" ).prop( "disabled", state );
	$( "#r11" ).prop( "disabled", state );
	$( "#r12" ).prop( "disabled", state );
	$( "#r13" ).prop( "disabled", state );
	$( "#r14" ).prop( "disabled", state );
	$( "#r15" ).prop( "disabled", state );
}

function getOption(id, deviceName, device_code, inclass){
	 var str = "<option  title=" +deviceName + " " + device_code +" value="+id +" class="+inclass+">"+ deviceName+"</option>";
	 return str;
}

var isPushDataTableToForm = false;
var dataDistrictPush = null;

var draw = 0;
var table = $('#tableDataView').DataTable({
    "columnDefs": [
    	{
            "targets": [0],
            "visible": true,
            "searchable": false
        }, {
            "targets": [20],
            "visible": false,
            "searchable": false
        },{
            "targets": [21],
            "visible": false,
            "searchable": false
        },{
            "targets": [22],
            "visible": false,
            "searchable": false
        },{
            "targets": [23],
            "visible": false,
            "searchable": false
        },{
            "targets": [24],
            "visible": false,
            "searchable": false
        },{
            "targets": [25],
            "visible": false,
            "searchable": false
        },{
            "targets": [26],
            "visible": false,
            "searchable": false
        },{
            "targets": [27],
            "visible": false,
            "searchable": false
        },{
            "targets": [28],
            "visible": false,
            "searchable": false
        },{
            "targets": [29],
            "visible": false,
            "searchable": false
        },{
            "targets": [30],
            "visible": false,
            "searchable": false
        },{
            "targets": [31],
            "visible": false,
            "searchable": false
        },{
            "targets": [32],
            "visible": false,
            "searchable": false
        },{
            "targets": [33],
            "visible": false,
            "searchable": false
        },{
            "targets": [34],
            "visible": false,
            "searchable": false
        },{
            "targets": [35],
            "visible": false,
            "searchable": false
        },{
            "targets": [36],
            "visible": false,
            "searchable": false
        },{
            "targets": [37],
            "visible": false,
            "searchable": false
        },{
            "targets": [38],
            "visible": false,
            "searchable": false
        },{
            "targets": [39],
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
        {"data": "deviceCode"},
        {"data": "r0"},
        {"data": "r1"},
        {"data": "r2"},
        {"data": "r3"},
        {"data": "r4"},
        {"data": "r5"},
        {"data": "r6"},
        {"data": "r7"},
        {"data": "r8"},
        {"data": "r9"},
        {"data": "r10"},
        {"data": "r11"},
        {"data": "r12"},
        {"data": "r13"},
        {"data": "r14"},
        {"data": "r15"},
        {"data": "createTime"},
        {"data": "id"},
        {"data": "siteDeviceId"},
        {"data": "siteId"},
        {"data": "deviceId"},
        {"data": "ir0"},
        {"data": "ir1"},
        {"data": "ir2"},
        {"data": "ir3"},
        {"data": "ir4"},
        {"data": "ir5"},
        {"data": "ir6"},
        {"data": "ir7"},
        {"data": "ir8"},
        {"data": "ir9"},
        {"data": "ir10"},
        {"data": "ir11"},
        {"data": "ir12"},
        {"data": "ir13"},
        {"data": "ir14"},
        {"data": "ir15"},
    ],
    "ajax": {
        "url": "/ctlrelay/get",
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
        "error": function (xhr, error, code) {
            console.log(xhr);
            console.log(code);
            return xhr;
        },
        "dataFilter": function (response) {
        	if (response == null || response == '') {
        		return response;
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
                    "siteCode": responseJson.content[i].siteCode,
                    "deviceCode": responseJson.content[i].deviceCode,
                    "r0": getState(responseJson.content[i].r0),
                    "r1": getState(responseJson.content[i].r1),
                    "r2": getState(responseJson.content[i].r2),
                    "r3": getState(responseJson.content[i].r3),
                    "r4": getState(responseJson.content[i].r4),
                    "r5": getState(responseJson.content[i].r5),
                    "r6": getState(responseJson.content[i].r6),
                    "r7": getState(responseJson.content[i].r7),
                    "r8": getState(responseJson.content[i].r8),
                    "r9": getState(responseJson.content[i].r9),
                    "r10": getState(responseJson.content[i].r10),
                    "r11": getState(responseJson.content[i].r11),
                    "r12": getState(responseJson.content[i].r12),
                    "r13": getState(responseJson.content[i].r13),
                    "r14": getState(responseJson.content[i].r14),
                    "r15": getState(responseJson.content[i].r15),
                    "createTime": responseJson.content[i].createTime,
                    "siteDeviceId": responseJson.content[i].siteDeviceId,
                    "siteId": responseJson.content[i].siteId,
                    "deviceId": responseJson.content[i].deviceId,
                    "ir0": responseJson.content[i].r0,
                    "ir1": responseJson.content[i].r1,
                    "ir2": responseJson.content[i].r2,
                    "ir3": responseJson.content[i].r3,
                    "ir4": responseJson.content[i].r4,
                    "ir5": responseJson.content[i].r5,
                    "ir6": responseJson.content[i].r6,
                    "ir7": responseJson.content[i].r7,
                    "ir8": responseJson.content[i].r8,
                    "ir9": responseJson.content[i].r9,
                    "ir10": responseJson.content[i].r10,
                    "ir11": responseJson.content[i].r11,
                    "ir12": responseJson.content[i].r12,
                    "ir13": responseJson.content[i].r13,
                    "ir14": responseJson.content[i].r14,
                    "ir15": responseJson.content[i].r15,
                })
            }
            return JSON.stringify(dataRes);
        }
    }
});


function formReset() {
    $('#form_data')[0].reset();
    $('#inputDistrict').html('');
    enableRootElement();
}

function getData(){
	let data = {
	        "id"			: $('#inputId').val(),
	        "siteId"		: $('#inputSiteInfo').val(),
	        "deviceId"		: $('#inputDeviceInfo').val(),
	        "r0"			: $('#r0').val(),
	        "r1"			: $('#r1').val(),
	        "r2"			: $('#r2').val(),
	        "r3"			: $('#r3').val(),
	        "r4"			: $('#r4').val(),
	        "r5"			: $('#r5').val(),
	        "r6"			: $('#r6').val(),
	        "r7"			: $('#r7').val(),
	        "r8"			: $('#r8').val(),
	        "r9"			: $('#r9').val(),
	        "r10"			: $('#r10').val(),
	        "r11"			: $('#r11').val(),
	        "r12"			: $('#r12').val(),
	        "r13"			: $('#r13').val(),
	        "r14"			: $('#r14').val(),
	        "r15"			: $('#r15').val(),
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
    console.log("data: ", data)
    $.ajax({
        url: '/ctlrelay/create',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function (data) {
            //
        	console.log("success", data);
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
        url: '/ctlrelay/edit',
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
        url: '/ctlrelay/create',
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
            url: '/ctlrelay/delete',
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
    enableRootElement(true);
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

//$('#tableDataView thead tr').clone(true).appendTo( '#tableDataView thead' );
//$('#tableDataView thead tr:eq(1) th').each( function (i) {
//    var title = $(this).text();
//    if (title != '#') {
//	    $(this).html( '<input type="text" class= "form-control" placeholder="' + inputTableSearch + ' '+title+'" />' );
//	 
//	    $( 'input', this ).on( 'keyup change', function () {
//	    if ( table.column(i).search() !== this.value ) {
//	        table
//	            .column(i)
//	            .search( this.value )
//	            .draw();
//	    }
//	    } );
//	} else {
//		$(this).html('');
//	}
//});
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
