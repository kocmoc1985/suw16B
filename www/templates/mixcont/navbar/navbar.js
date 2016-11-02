//===============================NAVBAR=========================================


function addClickEventToNavBarBtn(selector, functionToExecute) {
    $(selector).click(function(event) {
        event.preventDefault();
        functionToExecute();
    });
}


function addEventsToLinks() {
    $(".a-mobile-onclick-expand").click(function(event) {
        event.preventDefault();
        fadeIn(this);
    });


    $(".a-can-be-active").click(function() {
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

//===============================NAVBAR=========================================
