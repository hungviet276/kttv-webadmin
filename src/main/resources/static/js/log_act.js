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

$.ajax({
    headers: {
        'Authorization': token
    },
    "url": apiUrl + "log-act/create-mail-config",
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
            toastr.success('Thành công', data.message);
        } else {
            toastr.error('Lỗi', data.message);
        }
        table.ajax.reload();
    },
    error: function (err) {
        disableLoading();
        toastr.error(err.responseJSON.message, err.responseJSON.code);
    }
})