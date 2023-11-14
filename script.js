$(document).ready(function () {
    $('.btn').click(function () {
        var filter = $(this).data('filter');
        $('.post').hide();
        $('.' + filter).show();
    });
});