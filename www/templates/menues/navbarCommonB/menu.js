$(document).ready(function () {
    //
    includeHtml("navbar.html","#menu-container");
    //
    document.addEventListener("scroll", dynamicNavbar, false);
});

function dynamicNavbar() {
    //
    var offset = offsetWindow("#menu-container");
    //
    if (offset < 0) {
        //
        $("#menu-container").css("position", "fixed");
        $("#menu-container").css("top", "0");
        $("#menu-container").css("background-color", "#f8f8f8");
        $(".menu-container ul li a").css("background-color", "#f8f8f8");
        $(".menu-container ul li a").css("color", "#827c7c");
        //
        navBarFixedPositionFix("menu-container");
    }
    //
    if ($(window).scrollTop() === 0) {
        $("#menu-container").css("position", "absolute");
        $("#menu-container").css("top", "40px");
        //
        var elemMarginTop = document.getElementById("example-container");
        elemMarginTop.style.marginTop = 0 + "px";
        //
        $("#menu-container").css("background-color", "transparent");
        $(".menu-container ul li a").css("background-color", "transparent");
    }
}

function offsetWindow(selector) {
    var eTop = $(selector).offset().top; //get the offset top of the element
    return eTop - $(window).scrollTop();
}


function addEventsToLinks() {
    
     $(".a-mobile-onclick-expand").click(function(event) {
        event.preventDefault();
        fadeIn(this);
    });

    $(".a-can-be-active").click(function(event) {
        event.preventDefault();
        setActive(this);
    });

    //Hiding mobile menu if clicked on Menu/Company title
    $(".ul-mobile .menu-title").click(function() {
        $(".ul-mobile ul").hide();
    });
      
}


/**
 * This one is needed if you want to have "fixed" position for the NavBar
 * @param {type} navBarContainerId - the id of the container
 * @returns {unresolved}
 */
function navBarFixedPositionFix(navBarContainerId) {
    //
    var pos = $("#" + navBarContainerId).css("position");
    //
    if (pos === "fixed" === false) {
        return;
    }
    //
    var height = $("#" + navBarContainerId).outerHeight();
    $("#" + navBarContainerId).next().css('margin-top', (height + 100) + "px");
    ;
}

function fadeIn(element) {
    var parent = element.parentNode;
    var elemntArray = parent.childNodes;
    for (i = 0; i < elemntArray.length; i++) {
        if (elemntArray[i].tagName === "UL") {
            if ($(elemntArray[i]).is(':visible') === false) {
                $(elemntArray[i]).css("display", "block");
                $(elemntArray[i]).css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 500);
            } else {
                $(elemntArray[i]).fadeOut();
            }
        }
    }
}

function setActive(element) {
    //
    resetAllActives();
    //
    $(element).addClass("activeLink");
    //
    hideMenuIfMobile(element);
}

function hideMenuIfMobile(element) {
    if ($(".li-mobile-menu").is(':visible')) {
        $(element).parent().parent().fadeOut();
    }
}

function resetAllActives() {
     $(".activeLink").removeClass("activeLink");
}

function imageNotFound(imgElement) {
    var parent = imgElement.parentNode;
    parent.removeChild(imgElement);
    $(parent).css("font-size", "14pt");
    $(parent).text(".....");
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
        async: true
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
