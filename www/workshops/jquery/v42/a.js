$(function (){
    $("#first-name").keyup(function (){
        var me = $(this);
        console.log(me.val());
    });
});