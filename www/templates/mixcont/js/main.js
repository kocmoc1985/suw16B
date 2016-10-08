$(document).ready(function () {
    //
    includeNavbar();
    //
});

function includeNavbar() {
    $("#menu-container").load("navbar/navbar.html", function () {
        //
        addEventsToLinks();
        //
        includeContent();
        //
        navBarFixedPositionFix("menu-container", "introduction");
    });
}

function includeContent() {
    $("#introduction").load("content/about.html", function () {
         icludeFooter();
    });
}

function icludeFooter(){
     $("#footer-container-main").load("footer/footer.html", function () {
        
    });
}



//===============================NAVBAR=========================================

function addEventsToLinks() {
    var elemntArray = $(".a-mobile-onclick-expand").get();
    for (i = 0; i < elemntArray.length; i++) {
        $(elemntArray[i]).click(function (event) {
            event.preventDefault();
            fadeIn(this);
        });
    }
    //
    var elemntArray = $(".a-can-be-active").get();
    for (i = 0; i < elemntArray.length; i++) {
        $(elemntArray[i]).click(function (event) {
            setActive(this);
        });
    }
}


/**
 * This one is needed if you want to have "fixed" position for the NavBar
 * @param {type} navBarContainerId - the id of the container
 * @param {type} elemToSetMarginTopOn - id of the element which is direct under the navbar
 * @returns {unresolved}
 */
function navBarFixedPositionFix(navBarContainerId, elemToSetMarginTopOn) {
    //
    var pos = $("#" + navBarContainerId).css("position");
    //
    if (pos === "fixed" === false) {
        return;
    }
    //
    var height = $("#" + navBarContainerId).outerHeight();
    var elemMarginTop = document.getElementById(elemToSetMarginTopOn);
    elemMarginTop.style.marginTop = (height) + "px";
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
    element.className = "activeLink";
    //
    hideMenuIfMobile(element);
}

function hideMenuIfMobile(element) {
    if ($(".li-mobile-menu").is(':visible')) {
        $(element).parent().parent().fadeOut();
    }
}

function resetAllActives() {
    var elemntArray = $("." + "activeLink").get();
    for (i = 0; i < elemntArray.length; i++) {
        elemntArray[i].className = "none";
    }
}

function imageNotFound(imgElement) {
    var parent = imgElement.parentNode;
    parent.removeChild(imgElement);
    $(parent).css("font-size", "14pt");
    $(parent).text(".....");
}

//===============================NAVBAR=========================================
