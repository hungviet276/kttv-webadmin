$(document).ready(function () {
    show_search();
});
function show_search() {
    $("#box_info").hide(0);
    $("#box_search").show(500);
    $("#box_search").attr('class', 'col-sm-12');
}
$('#station').select2({
    minimumInputLength: 0,
    delay: 350,
    ajax: {
        headers: {
            'Authorization': token
        },
        "url":apiUrl + "user-info/get-name-user",
        dataType: 'json',
        type: "GET",
        quietMillis: 50,
        data: function (term) {
            term.idGroup = $("#id_group").val();
            return term;

        },
        processResults: function (data) {
            var datas =  $('#detail-receive-mail').val();
            return {
                results: $.map(data, function (item) {
                    return {
                        text: item.name,
                        id: item.id,
                        data: item
                    }
                })
            };
        }
    }
});