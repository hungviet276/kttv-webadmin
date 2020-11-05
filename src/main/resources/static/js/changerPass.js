
function get_old_pass() {
    //call ajax here
    $.ajax({
        headers: {
            'Authorization': token
        },
        url: apiUrl + "changer-pass/getOldPassword",
        data: "username=" + username,
        method: "post",
        success: function (data) {
            if ($.trim(data).indexOf("true") == 0) {
               alert($.trim(data).substring(5, $.trim(data).length));
            } else {
                toastr.success('Có lỗi xảy ra , không tìm được mật khẩu cũ!', data.message);
                ;
            }
        }
    });
}

function changer_password() {
    $('#nofication_msg').html('Đang thực hiện...');
    if (validateForm()) {
        // set data
        let data = {
            "old_pass": $.trim($('#pass_old').val()),
            "new_pass": $.trim($('#pass_new').val()),
            "re_new_pass": $.trim($('#re_pass_new').val()),
        };
        //call ajax here
        $.ajax({
            headers: {
                'Authorization': token
            },
            url: apiUrl + "changer-pass/changerPass",
            method: "POST",
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (data) {
                if ($.trim(data).indexOf("true") == 0) {
                    toastr.success('Đổi mật khẩu thành công!', data.message);
                    ;
                    // $('#nofication_msg').html('Đổi mật khẩu thành công!');
                    $('#pass_old').val('');
                    $('#pass_new').val('');
                    $('#re_pass_new').val('');
                } else if($.trim(data).indexOf("pass_word_sai") == 0) {
                    toastr.success('Mật khẩu cũ không chính xác!', data.message);
                    ;
                    $('#pass_old').focus();
                    // $('#pass_old').val('');
                    // $('#pass_new').val('');
                    // $('#re_pass_new').val('');
                    // $('#nofication_msg').html('Đổi mật khẩu thất bại!');
                }else {
                    toastr.success('Có lỗi xảy ra !', data.message);
                    ;
                    // $('#pass_old').val('');
                    // $('#pass_new').val('');
                    // $('#re_pass_new').val('');
                    // $('#nofication_msg').html('Đổi mật khẩu thất bại!');
                }
            }
        });
    }
    $('#nofication_msg').html('');
}


function validateForm() {
    $('.err_msg').html('');

    if ($.trim($('#pass_old').val()) == '') {
        $('#pass_old_msg').html('Mật khẩu cũ không được để trống!');
        $('#pass_old').focus();
        return;
    }
    if ($.trim($('#pass_new').val()) == '') {
        $('#pass_new_msg').html('Không được bỏ trống mật khẩu mới!');
        $('#pass_new').focus();
        return;
    }

    if ($.trim($('#re_pass_new').val()) == '' ||   ($.trim($('#re_pass_new').val()) != $.trim($('#pass_new').val())) ) {
        $('#re_pass_new_msg').html('Mật khẩu nhập lại phải giống mật khẩu mới!');
        $('#re_pass_new').focus();
        return;
    }

    return true;
}

function show_pass_text() {
    $("#pass_old").attr('type', 'text');
    $("#show_old_pass").css('display', 'none');
    $("#hidden_old_pass").css('display', 'inline');
    return;
}
function hidden_old_pass() {
    $("#pass_old").attr('type', 'password');
    $("#show_old_pass").css('display', 'inline');
    $("#hidden_old_pass").css('display', 'none');
    return;
}


function show_pass_new() {
    $("#pass_new").attr('type', 'text');
    $("#show_pass_new").css('display', 'none');
    $("#hidden_pass_new").css('display', 'inline');
    return;
}
function hidden_pass_new() {
    $("#pass_new").attr('type', 'password');
    $("#show_pass_new").css('display', 'inline');
    $("#hidden_pass_new").css('display', 'none');
    return;
}

function show_re_new_pass() {
    $("#re_pass_new").attr('type', 'text');
    $("#show_re_new_pass").css('display', 'none');
    $("#hidden_re_new_pass").css('display', 'inline');
    return;
}
function hidden_re_new_pass() {
    $("#re_pass_new").attr('type', 'password');
    $("#show_re_new_pass").css('display', 'inline');
    $("#hidden_re_new_pass").css('display', 'none');
    return;
}