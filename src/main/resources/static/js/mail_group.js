$(function () {
    $('.select2').select2()

    //Initialize Select2 Elements
    $('.select2bs4').select2({
        theme: 'bootstrap4'
    });
    $('#example2').DataTable({
        "paging": true,
        "lengthChange": false,
        "searching": false,
        "ordering": true,
        "info": false,
        "autoWidth": true,
        "responsive": true,
    });
    $('#example3').DataTable({
        "paging": true,
        "lengthChange": false,
        "searching": false,
        "ordering": true,
        "info": false,
        "autoWidth": true,
        "responsive": true,
    });
    $('#example4').DataTable({
        "paging": true,
        "lengthChange": false,
        "searching": false,
        "ordering": true,
        "info": false,
        "autoWidth": true,
        "responsive": true,
    });
});