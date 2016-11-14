
$(document).ready(function () {
    go();
});

function go() {
    var html = "<div id='convert'><h1><p></p></h1></div>";
    var htmlConverted = $.parseHTML(html);
    $(htmlConverted).find("p").text("Try convert");
    $("#test").append(htmlConverted);

    $("#test").on("click", function (e) {
       $(this).html().find("p").text("found");
    });
}

