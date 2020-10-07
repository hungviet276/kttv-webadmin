
function showLoading() {
    alert("adu");
}
$('#btnDonew').click(function(){
    alert("adu");
    $("#btnsave").css("display", "inline");
    $("#btnDelete").css("display", "inline");
    $("#btnReset").css("display", "inline");
    $("#btncancer").css("display", "inline");
});

function disabled_right(){
    $("#form_input input:text").each(function(){$(this).prop("readonly",true);});
    $("#form_input input:password").each(function(){$(this).prop("readonly",true);});
    $("#form_input select").each(function(){$(this).attr("disabled", true);});
}