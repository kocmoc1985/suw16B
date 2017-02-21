/**
 * Suuper Important
 * @returns {undefined}
 */
function DOMNodeInserted() {
    $(document).on('DOMNodeInserted', '.empty-th', function () {

    });
}

/**
 * Check for changes in DOM
 * @returns {undefined}
 */
function checkDOMChangeListener() {

    if (exists(".php-module")) {
        $("#content").addClass("content-background-a");
    } else {
        $("#content").removeClass("content-background-a");
    }
    setTimeout(checkDOMChange, 100);
}

/**
 * When using "on" - delagating, this will add listeners to components which exists allready
 * and if there are new components which comes up later will also have this listener.
 * @returns {undefined}
 */
function addListenerWithOn() {
    //
    //can aslo use "body" instead of constructor but it's better to use 
    // one which is more near....
    $("#container").on("mouseover", ".todo", function () {
        var parent = $(this).parent();
        $(parent).find(".controller").fadeIn(600);
    });
    //
}

function windowScrollListener() {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            addScrollTopController();
        } else {
            $("#scrollTopBtn").remove();
        }
    });
}