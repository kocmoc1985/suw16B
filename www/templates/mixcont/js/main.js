$(document).ready(function() {
    initialize();
});

function initialize() {
    //
    includeHtml("navbar/navbar.html", "#menu-container");
    //
    navBarFixedPositionFix("menu-container", "content");
    //
    addEventsToNavBarBtns();
    //
    addEventsToLinks();
    //
    includeHtml("content/splash.html", "#content");
    //
    includeHtml("content/customers.html", "#content", "after");
    //
    includeHtml("footer/footer.html", "#footer-container-main");
}

function addEventsToNavBarBtns() {
    addClickEventToNavBarBtn(".products-link", productsLinkClicked);
    addClickEventToNavBarBtn(".menu-title", navBarTitleClicked);
}

function navBarTitleClicked(){
    $("#content").empty();
    $("#customers-show").remove();
    includeHtml("content/splash.html", "#content");
    includeHtml("content/customers.html", "#content", "after");
}

function productsLinkClicked() {
    $("#customers-show").remove();
    $("#content").empty();
    includeHtmlAsync("content/products/products.html", "#content");
}

function includeHtml(url, selector, addType) {
    //
    var html = $.ajax({
        url: url,
        dataType: 'text',
        async: false
    }).responseText;
    //
    if (addType === "append") {
        $(selector).append(html);
    } else if (addType === "prepend") {
        $(selector).prepend(html);
    } else if (addType === "after") {
        $(selector).after(html);
    } else if (addType === "before") {
        $(selector).before(html);
    } else {
        $(selector).append(html);
    }
}

function includeHtmlAsync(url, selector, addType) {
    $.ajax({
        url: url,
        dataType: 'text',
        async: false
    }).done(function(msg) {
        if (addType === "append") {
            $(selector).append(msg);
        } else if (addType === "prepend") {
            $(selector).prepend(msg);
        } else if (addType === "after") {
            $(selector).after(msg);
        } else if (addType === "before") {
            $(selector).before(msg);
        } else {
            $(selector).append(msg);
        }
    });
}



