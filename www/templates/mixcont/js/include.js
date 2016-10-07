$(document).ready(function () {
    //
    includeHtml("#menu-container", "../content/navbar.html");
    //
    includeHtml("#introduction", "../content/about.html");
    //
    includeHtml("#footer-container-main", "../footer/footer.html");
});


function includeHtml(selector, htmlDoc) {
    $(selector).load(htmlDoc, function () {
    });
}