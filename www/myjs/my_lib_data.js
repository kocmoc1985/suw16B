

/**
 * Very important when assigning index to elements like 
 * "side-bar-entries" to be able to retrieve them later
 * @returns {undefined}
 */
function addDataToElement() {
    //
    $(".aclass").data("index", 1); // setting the data
    //
    // Iam using this because iam simulating a click on a element
    var index = $(this).data("index");
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


function ajaxSync() {
    $.ajax({
        async: true,
        type: 'POST',
        dataType: 'json',
        url: "http://localhost:3000/",
        data: {param1: "", param2: "", param3: "", param4: ""},
        success: function (json) {
           
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
           
        }
    });
}

function includeHtmlAsync(url, selector, addType) {
    $.ajax({
        url: url,
        dataType: 'text',
        async: false
    }).done(function (msg) {
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

function convertStringToHtmlExample() {
    //
    var html = "<div id='convert'><h1><p></p></h1></div>";
    //
    var htmlConverted = $.parseHTML(html);
    //
    $(htmlConverted).find("p").text("Try convert");
}

/**
 * To convert the rcieved html string into jquery object use: var obj = $.parseHTML(responseText)
 * @param {type} url
 * @returns {jqXHR.responseText}
 */
function loadHtml(url) {
    //
    var html = $.ajax({
        url: url,
        type: "GET",
        dataType: 'html',
        async: false
    }).responseText;
    //
    return html;
}

function getJsonFromUrlSync(url) {
    //
    var jsonStr = $.ajax({
        url: url,
        dataType: 'json',
        async: false
    }).responseText;
    //
    return JSON.parse(jsonStr);
}