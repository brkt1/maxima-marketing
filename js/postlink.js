$(document).ready(function(){
    $(".post-btn").click(function(){
        var buttonValue = $(this).val();
        $(".post[value='" + buttonValue + "']").show();
    });
});