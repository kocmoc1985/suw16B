/**
 * Very useful
 * @param {type} selectorCut
 * @param {type} selectorPaste
 * @param {type} addType
 * @returns {undefined}
 */
function cutFromPasteTo(selectorCut, selectorPaste, addType) {
    //
    var cutObj = $(selectorCut).detach();
    //
    if (addType === "append") {
        $(selectorPaste).append(cutObj);
    } else if (addType === "prepend") {
        $(selectorPaste).prepend(cutObj);
    } else if (addType === "after") {
        $(selectorPaste).after(cutObj);
    } else if (addType === "before") {
        $(selectorPaste).before(cutObj);
    } else {
        $(selectorPaste).append(cutObj);
    }
}

/**
 * IMPORTANT
 * Helps to now where the scroll is 
 * @returns {jQuery}
 */
function getScrollPosition() {
    return $(window).scrollTop();
}

function isScrolledToTop(){
    if($(window).scrollTop() === 0){
        return true;
    }else{
        return false;
    }
}

function isScrolledToBottom(tollerance) {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - tollerance) {
        return true;
    } else {
        return false;
    }
}

/**
 * Super important!
 * get the distance from elements top to the top of the view port
 * @param {type} selector
 * @returns {undefined}
 */
function getOffsetBetweenElementAndTheTopOfTheViewPort(selector) {
    var eTop = $(selector).offset().top; //get the offset top of the element
    return eTop - $(window).scrollTop();
}


/**
 * Returns position type: static, relative, fixed, absolute...
 * @param {type} selector
 * @returns {}
 */
function getPositionProperty(selector) {
    return $(selector).css("position");
}


/**
 * Super Nice
 * Calculates the space/offset between the right side of the element to the right
 * side of the window: (element) []---offset--->](window, right side)
 * @tags offset right,offset_right, rightOffset, spacToRight
 * @param {type} element
 * @param {type} limit
 * @returns {Boolean}
 */
function enoughSpaceToTheRight(element, limit) {
    var rightOffset = ($(window).width() - ($(element).offset().left + $(element).outerWidth()));
    //
    //console.log("right-offset: " + rightOffset);
    //
    if (rightOffset > (limit + 10)) {
        return true;
    } else {
        return false;
    }
}

function sameHightAsParent(selector) {
    var parentHeight = $(selector).parent().height();
    $(selector).height(parentHeight);
}

function sameHeightSameClasses(class_) {
    var elemsArr = $(class_);
    //
    var max = 0;
    //
    for (var i = 0; i < elemsArr.length; i++) {
        //
        var currHeight = $(elemsArr[i]).height();
        //
        if (currHeight > max) {
            max = currHeight;
        }
    }
    //
    for (var i = 0; i < elemsArr.length; i++) {
        $(elemsArr[i]).height(max);
    }
    //
}


/**
 * Defines if the element is visible with current scroll.
 * To discover the scroll event for the window, use the addEventToTheDocument(....) 
 * @tags {scroll, element visible after scroll, element scroll, scrolled to view,scrolled into view}
 * @param {Element} elem - Dont forget to add "#"
 * @returns {unresolved}
 */
function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function scrollIntoView(selector) {
    if (isScrolledIntoView(selector) === false) {
        $('html, body').animate({
            scrollTop: $(selector).offset().top - 20
        }, 1000);
    }
}

function scrollToTop(){
     $('html, body').animate({"scrollTop": "0px"}, 1000);
}

/**
 * Get width in "px" of enything it could also be "window" & "document"
 * @param {type} element_id_class_tag
 * @returns {@exp;@call;$@call;width}
 */
function getWidth(element_id_class_tag) {
    return $(element_id_class_tag).width();
}

/*
 * Get height of an element, OBS! without taking into account: padding, border, margin
 * @tested: yes
 * @uses: jquery-1.9.1
 * @Param element_id_class_tag - this should be the name of the element not the element it self
 */
function getHeight(element_id_class_tag) {
    var height = $(element_id_class_tag).height();
    return height;
}

/**
 * get height of the element: elements-height + padding
 * @param {type} selector
 * @returns {@exp;@call;$@call;InnerHeight}
 */
function getInnerHeight(selector) {
    return $(selector).innerHeight();
}

/**
 * get height of the element: elements-height + padding + border
 * @param {type} selector
 * @returns {@exp;@call;$@call;outerHeight}
 */
function getOuterHeight(selector) {
    return $(selector).outerHeight();
}

/**
 * Get elements total height: elements-height + padding + border + margin
 * @param {type} selector
 * @returns {@exp;@call;$@call;outerHeight}
 */
function getTotalHeight(selector) {
    return $(selector).outerHeight(true);
}

/*
 * Set height of an element
 * @tested: yes
 * @Param element - the element it self, not its id!!
 * @Param height - the height to set (int?)
 */
function setHeightByElement(element, height) {
    element.style.height = "" + height + "px";
}

/*
 * Set width of an element in "px"
 * @tested: yes
 * @Param element - the element it self, not its id!!
 * @Param height - the height to set (int?)
 */
function setWidthByElementInPx(element, height) {
    element.style.width = "" + height + "px";
}

/*
 * Set width of an element in "%"
 * @tested: yes
 * @Param element - the element it self, not its id!!
 * @Param height - the height to set (int?)
 */
function setWidthByElementInProcent(element, procent) {
    element.style.width = "" + procent + "%";
}


function setHeightById(selector, height) {
    $(selector).css({'height': height});
}

/**
 * @tested
 * @param {type} element_id_class_tag
 * @returns {@exp;@call;$@pro;position@pro;t@call;op|@exp;@call;$@pro;outerHeight@exp;@@call;call;$@pro;position@pro;t@call;op}
 */
function getPositionBottom(element_id_class_tag) {
    return $(element_id_class_tag).position().top + $(element_id_class_tag).outerHeight(true);
}

