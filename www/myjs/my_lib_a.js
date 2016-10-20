/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function jsScriptTagg() {
//    < script language = "javascript" >
//            add_comment_form();
//    < /script>
}

/**
 * THIS IS EXTREAMLY IMPORTANT!
 * NOTE: The main part of operations should be done in the "$(document).ready".
 * For example TRANSITIONS should be added in "$(window).load" when everything was ready
 * @tags: window load, document ready, document load, window ready, window event, document event 
 * @returns {undefined}
 */
function windowLoad() {
    /**
     * THIS ONE EXECUTES FIRTS OF ALL
     */
    $(document).ready(function () {
        go();
    });


    /**
     * THIS ONE EXECUTES AFTER "doc.ready"
     */
    $(window).load(function () {
        addTransitonToNavBarBtns();
    });
}


/**
 * Write html text, asp php's  - "echo"
 * @tags {write html text, js echo, jsEcho, jswrite,append html}
 * @param {String} text
 * @returns {undefined}
 */
function echo(text) {
    document.write(text);
}

/**
 * Trace output
 * Requires to have "FireBug installed"
 * @tags:trace,debug,sout,print,console,output
 * @param {type} message
 * @returns {undefined}
 */
function writeToConsole(message) {
    console.log(message);
}

/**
 * Trace output
 * Requires to have "FireBug installed"
 * @param {String} message
 * @returns {undefined}
 */
function debugg(message) {
    console.log(message);
}

function showMessageOwnWindow(message) {
    alert(message);
}

/**
 * 
 * @returns {undefined}
 */
function arrayUsageExample() {
    var parent = element.parentNode;
    var elemntArray = parent.childNodes;
    for (i = 0; i < elemntArray.length; i++) {
        if (elemntArray[i].tagName === "UL") {
            //Do something
        }
    }
}

/**
 * 
 * @param {type} arr
 * @param {type} index
 * @tags poll, arrayPoll, pollArray
 * @returns {unresolved}
 */
function arrayGetAndRemove(arr, index) {
    return arr.splice(index, 1).pop();
}

/**
 * This one is very good, use this.
 * @param {type} url
 * @param {type} parentId
 * @returns {undefined}
 */
function includeHtml(url, parentId) {
    //
    var html = $.ajax({
        url: url,
        dataType: 'text',
        async: false
    }).responseText;
    //
    $(parentId).append(html);
}

/**
 * I don't like this really because it's async
 * @param {type} selector
 * @param {type} html
 * @returns {undefined}
 */
function includeHtmlAsync(selector, html) {
    $(function () {
        $(selector).load(html);
    });
}

/**
 * 1.Prompts to type a value.
 * 2.Tries to parse the String value into numeric
 * @tags prompt, dialog, getValueByDialog,JOPtionPane, get value by dialog, dialog value
 * @Param textToDisplay the value to be shown in the prompt dialog
 * @Return number
 */
function getNumericValueByDialog(textToDisplay) {
    var x = prompt("" + textToDisplay, "");
    var tal = parseFloat(x);
    return tal;
}

/**
 * OBS! OBS! OBS! SEE THIS!
 * Search with "HTML Event Attributes" to find all available 
 * html events on w3c
 * @returns {undefined}
 */
function add_HTML_Event_example() {
    // <input type="text" id="txt1" onkeyup="showHint(this.value);" />
    //showHint(this.value) is the javascript method launched uppon the event
    //
    //Another example:
    //<button type='button' onclick="ajax_request(this.innerHTML);">100</button>
    //OR you can pass EVENT like
    //<button type='button' onclick="ajax_request(*event*);">100</button>
}

/**
 * @tags: automatically click button
 * @param {String} element_id
 * @returns {undefined}
 */
function click_button_auto(element_id) {
    var button = getElement(element_id);
    button.click();
}

/**
 * Reloads the window without resending POST or GET
 * @tag refresh window, reload window
 * @returns {undefined}
 */
function refreshWindow() {
    window.location = window.location;
}

/**
 * @tags interval, thread, timer
 * @param {Function} function_to_run
 * @param {Integer} interval
 * @returns {undefined}
 */
function run_function_with_interval_example(function_to_run, interval) {
    //Starting the "thread"
    var intervalID = setInterval(function_to_run, interval);
    //
    //Stoping the "thread"
    window.clearInterval(intervalID);
}

/**
 * 
 * @param {Everything} enything
 * @returns {Boolean}
 */
function getIfUndefined(enything) {
    if (typeof enything === "undefined") {
        return true;
    } else {
        return false;
    }
}

/*
 * <ul>Possible mouse event types
 * <li>click
 * <li>mousedown
 * <li>mouseup
 * <li>mouseover
 * <li>mousemove
 * <li>mouseout
 * </ul>
 * 
 * <ul>Window event types
 * <li>load
 * <li>unload
 * <li>abort
 * <li>error
 * <li>select
 * <li>change
 * <li>submit
 * <li>reset
 * <li>focus
 * <li>blur
 * <li>resize
 * <li>scroll
 * </ul>
 * @Param elemToAddTo = the element to which the listener is attached
 * @Param eventType = click, blur 
 * @Param eventFunction = the function to be executed
 */
function addEvent(elemToAddTo, eventType, eventFunction) {
    try {
        if (elemToAddTo.addEventListener) {
            //Detta �r mozilla!
            elemToAddTo.addEventListener(eventType, eventFunction, false);
            return true;
        } else if (elemToAddTo.attachEvent) {
            //Detta �r IE!
            var returnval = elemToAddTo.attachEvent("on" + eventType, eventFunction);
            return returnval;
        } else {
            return false;
        }
    } catch (err) {
//        console.log("err = " + err.toString() + "  eventType = " + eventType + "    eventFunction = " + eventFunction);
        return false;
    }
}


function addEventB(elemId, eventType, eventFunction) {
    //
    var elemToAddTo = document.getElementById(elemId);
    //
    try {
        if (elemToAddTo.addEventListener) {
            //Detta �r mozilla!
            elemToAddTo.addEventListener(eventType, eventFunction, false);
            return true;
        } else if (elemToAddTo.attachEvent) {
            //Detta �r IE!
            var returnval = elemToAddTo.attachEvent("on" + eventType, eventFunction);
            return returnval;
        } else {
            return false;
        }
    } catch (err) {
        console.log("err = " + err.toString() + "  eventType = " + eventType + "    eventFunction = " + eventFunction);
        return false;
    }
}

function addEvent_jquery_example() {
    $("#test").click(function (event) {
        //do something
    });
    ///==========OR===================
    $("#test").hover(function (event) {
        //do something
    });
}

/**
 * Add event to all elements with given className inside a parent element
 * @param {String} parentId
 * @param {String} className
 * @param {String} eventType
 * @param {String} methodToExecuteOnEvent
 * @returns {undefined}
 */
function addEventToClassesInsideParentElement(parentId, className, eventType, methodToExecuteOnEvent) {
    var parent_elem = document.getElementById(parentId);
    var elemntArray = getAllChildrenOfAnElement(parent_elem);
    for (i = 0; i < elemntArray.length; i++) {
        var curr_elem = elemntArray[i];
//        alert(curr_elem.className);
        if (curr_elem.className === className) {
            addEvent(curr_elem, eventType, methodToExecuteOnEvent);
        }
    }
}


/**
 * Adds event to all Elements with className X
 * see the events list in "addEvent" method 
 * @param {String} className
 * @param {String} eventType - Example: "click", "mouseover", "load"
 * @param {NOT a String} methodToExecuteOnEvent - As written not as String with "", write just functionname
 * @returns {undefined}
 */
function addEventToAllElementsWithGivenClassName(className, eventType, methodToExecuteOnEvent) {
    var elemntArray = document.getElementsByClassName(className);
    for (i = 0; i < elemntArray.length; i++) {
        var elem = elemntArray[i];
        addEvent(elem, eventType, methodToExecuteOnEvent);
    }
}

/**
 * Add event to all elements with given tagname inside an element with given classname
 * @param {String} className
 * @param {String} tagName
 * @param {String} eventType
 * @param {NOT a String} methodToExecuteOnEvent
 * @returns {undefined}
 */
function addEventToElementsInsideGivenClass(className, tagName, eventType, methodToExecuteOnEvent) {
    var elemntArray = document.getElementsByClassName(className);
    for (i = 0; i < elemntArray.length; i++) {
        var elem = elemntArray[i];
        var tagElemArr = elem.getElementsByTagName(tagName);
        var tagElem = tagElemArr[0];
        addEvent(tagElem, eventType, methodToExecuteOnEvent);
    }
}



/**
 * Add an event to all elements with specific tagname inside parent element with given id
 * @param {String} div_id
 * @param {String} tagName
 * @param {String} eventType
 * @param {NOT a String} methodToExecuteOnEvent
 * @returns {undefined}
 */
function addEventToAllElementsInsideParentElementWithGivenTagName_2(div_id, tagName, eventType, methodToExecuteOnEvent) {
    var element = document.getElementById(div_id);
    var elemntArray = getAllChildrenOfAnElement(element);
    for (i = 0; i < elemntArray.length; i++) {
        var curr_elem = elemntArray[i];

        if (curr_elem.tagName === "DIV") {
            var arr = getAllChildrenOfAnElement(curr_elem);

            for (x = 0; x < arr.length; x++) {
                var tagInUppCase = "" + tagName.toUpperCase();
                if (arr[x].tagName === tagInUppCase) {
                    addEvent(arr[x], eventType, methodToExecuteOnEvent);
                }
            }
        }
    }
}


/**
 * IMPORTANT
 * Add the event to the whole window,
 * this is very good whan yo should t.ex 
 * scroll event.
 * @tag {scroll,addScroll,add scroll, scrollevent,scroll event}
 * @param {String} event
 * @param {String} eventfunction
 * @returns {undefined}
 */
function addEventToTheDocument(event, eventfunction) {
    addEvent(document, event, eventfunction);
}


/**
 * 
 * @param {String} elem_id_or_tag_name
 * @returns {undefined}
 */
function addHoverEventJquery(elem_id_or_tag_name) {
    $(elem_id_or_tag_name).hover(function () {
        $(this).hide();
    });
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


/**
 * Defines if the element is visible with current scroll.
 * To discover the scroll event for the window, use the addEventToTheDocument(....) 
 * @tags {scroll, element visible after scroll, element scroll, scrolled to view,scrolled into view}
 * @param {Element} elem - Dont forget to add "#"
 * @returns {unresolved}
 */
function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}


/**
 * Returns the display type: block, inline, inline-block.....
 * @param {type} selector
 * @returns {@exp;@call;$@call;css}
 */
function getDisplaySetting(selector) {
    return $(selector).css('display');
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
 * Element visible
 * @param {String} selector
 * @returns {@exp;@call;$@call;is}
 */
function isVisible(selector) {
    return $(selector).is(':visible');
}

/**
 * Element hidden
 * @param {String} elementId
 * @returns {@exp;@call;$@call;is}
 */
function isHidden(elementId) {
    return $("#" + elementId).is(':hidden');
}

/**
 * 
 * @param {String} elementId
 * @param {String} tag - ex. "div"
 * @returns {Boolean}
 */
function isTagOfType(elementId, tag) {
    return $("#" + elementId).is(tag);
}

/**
 * 
 * @param {Element} element
 * @param {String} tag - ex. "div"
 * @returns {Boolean}
 */
function isTagOfTypeB(element, tag) {
    return $(element).is(tag);
}

/**
 * Checks if element exists
 * @param {String} elementId
 * @returns {Boolean}
 */
function elementExists(elementId) {
    var elem = document.getElementById(elementId);
    if (elem === null) {
        return false;
    } else {
        return true;
    }
}

/**
 * Check if a class is present
 * @tags: getIfTagExists, class exists
 * @param {type} className
 * @returns {Boolean}
 */
function classExists(className) {
    if ($('.' + "" + className).length) {
        return true;
    } else {
        return false;
    }
}



/**
 * This is an extreamly important method, you can use it 
 * for posting links without a user can se it. This method can 
 * replace the usage of "a" tag.
 * @example POST("index.php","link","column_2_products");
 * @tags {post,automatic post, post a link without using form, post link}
 * @param {String} action - is the link: index.php
 * @param {String} name - The name of the paramter to which the value belongs
 * @param {String} value - The value which corresponds to the name
 * @returns {undefined}
 */
function POST(action, name, value) {
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", action);
    //
    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", name);
    hiddenField.setAttribute("value", value);
    form.appendChild(hiddenField);
    //
    document.body.appendChild(form);
    form.submit();
}

function POST_2(action, name, value, name_2, value_2) {
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", action);
    //
    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", name);
    hiddenField.setAttribute("value", value);

    var hiddenField_2 = document.createElement("input");
    hiddenField_2.setAttribute("type", "hidden");
    hiddenField_2.setAttribute("name", name_2);
    hiddenField_2.setAttribute("value", value_2);

    form.appendChild(hiddenField);
    form.appendChild(hiddenField_2);
    //
    document.body.appendChild(form);
    form.submit();
}

/**
 * The same as POST but uses GET
 * @param {String} action
 * @param {String} name
 * @param {String} value
 * @returns {undefined}
 */
function GET(action, name, value) {
    var form = document.createElement("form");
    form.setAttribute("method", "get");
    form.setAttribute("action", action);
    //
    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", name);
    hiddenField.setAttribute("value", value);
    form.appendChild(hiddenField);
    //
    document.body.appendChild(form);
    form.submit();
}

function GET_2(action, name, value, name_2, value_2) {
    var form = document.createElement("form");
    form.setAttribute("method", "get");
    form.setAttribute("action", action);
    //
    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", name);
    hiddenField.setAttribute("value", value);

    var hiddenField_2 = document.createElement("input");
    hiddenField_2.setAttribute("type", "hidden");
    hiddenField_2.setAttribute("name", name_2);
    hiddenField_2.setAttribute("value", value_2);

    form.appendChild(hiddenField);
    form.appendChild(hiddenField_2);
    //
    document.body.appendChild(form);
    form.submit();
}

//=======================================DATE===================================

function date_getNrDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function date_getCurrentYear() {
    return new Date().getFullYear();
}

function date_getCurrentMonth() {
    var month = new Date().getMonth();
    month++;
    return month;
}


function date_getDayOrMonthCorrected(dayOrMonth) {
    if (dayOrMonth < 10) {
        return "0" + dayOrMonth;
    } else {
        return dayOrMonth;
    }
}


function date_getCurrentDate() {
    return new Date().getDate();
}



function date_validateFormat_mm_dd_yyyy(dateString) {
    if (dateString.match(/^(?:(0[1-9]|1[012])[\- \/.](0[1-9]|[12][0-9]|3[01])[\- \/.](19|20)[0-9]{2})$/)) {
        return true;
    } else {
        return false;
    }
}

function date_validateFormat_yyyy_mm_dd(dateString) {
    var regEx = /^\d{4}-\d{2}-\d{2}$/;
    return dateString.match(regEx) !== null;
}

function date_getMonthNameEng(month) {
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    return monthNames[(month - 1)];
}

function date_getMonthsNamesSwe() {
    var months = ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun",
        "Jul", "Aug", "Sept", "Okt", "Nov", "Dec"];
    return months;
}

function date_find_month_nr_by_name(month_name) {
    var array = date_get_months_names_arr();
    for (i = 0; i < array.length; i++) {
        if (array[i] === month_name) {
            return (i + 1);
        }
    }
}

function date_find_month_name_by_nr(month_nr) {
    var array = date_get_months_names_arr();
    return array[month_nr - 1];
}
//=================================<JSON>=======================================

function JSONbasics() {
    //
    var obj = new Object();
    obj.name = "Raj";
    obj.age = 32;
    obj.married = false;
    //
    var jsonString = JSON.stringify(obj);
    //
    debugg("json: " + jsonString);
    //
    var parsedJson = JSON.parse(jsonString);
    //
    debugg("get age: " + parsedJson['age']);
    //
    debugg("get age: " + parsedJson.age);
    //
    for (x in parsedJson) {
          debugg("$: " + x);
    }
    //
}

/**
 * Very important function, because the call is
 * asynchron this method can return a value - otherwise not.
 * 
 * Returns parsed JSON string so you can only use like: 
 *  * var parsedJson = getJsonFromUrlSync(http://....);
 * alert(parsedJson['countryCode']);
 * 
 * @param {type} url
 * @returns {@exp;JSON@call;parse}
 */
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

/**
 * Note that it will not work to use "return" with
 * an "asynchron" call
 * @param {String} url
 * @returns {nothing}
 */
function getJsonFromUrlAsync(url) {
     $.getJSON(url, function (data) { 
        ///
     });
}

/**
 * Very good example
 * @returns {undefined}
 */
function getJsonFromUrlEx() { 
     $.getJSON('http://freegeoip.net/json/' + getIpJson(), function (data) { 
        for (x in data) { 
            debugg("key:" + x + " value: " + data[x]);
         }
     });
}


/**
 * Registration on the site with kocmoc1985@gmail.com and MCp...
 * @returns {@exp;JSON@call;parse}
 */
function getWeather() {
    var link = "http://api.openweathermap.org/data/2.5/weather?q=" + getIpInfo("city") + "," + getIpInfo("countryCode") + "&APPID=daeed5bb0ff921b9a30cd2fcf2c6b1fa";
    alert(link);
    return getJsonFromUrlSync(link);
}

/**
 * 
 * @returns {unresolved}
 */
function getIp() {
    var jsonStr = $.ajax({
        url: 'https://api.ipify.org?format=json',
        dataType: 'json',
        async: false
    }).responseText;
    //
    return JSON.parse(jsonStr)['ip'];
    //
}

/**
 * Some of possible parameters for the "ip-api"
 * countryCode, country, city, org (organisation name),isp, zip
 * @param {type} param
 * @returns {unresolved}
 */
function getIpInfo(param) {
    var jsonStr = $.ajax({
        url: 'http://ip-api.com/json/' + getIp(),
        dataType: 'json',
        async: false
    }).responseText;
    //
    return JSON.parse(jsonStr)[param];
    //
}

/**
 * 
 * @returns {undefined}
 */
function accessJsonExample() {
    var data = '{"name": "mkyong","age": 30,"address": {"streetAddress": "88 8nd Street","city": "New York"},"phoneNumber": [{"type": "home","number": "111 111-1111"},{"type": "fax","number": "222 222-2222"}]}';

    var json = JSON.parse(data);

    alert(json["name"]); //mkyong
    alert(json.name); //mkyong

    alert(json.address.streetAddress); //88 8nd Street
    alert(json["address"].city); //New York

    alert(json.phoneNumber[0].number); //111 111-1111
    alert(json.phoneNumber[1].type); //fax

    alert(json.phoneNumber.number); //undefined
}


//=================================</JSON>======================================

//=================================<NODE>======================================

function node_client_SendPostRequestEx() {
    $.ajax({
        async: "true", //is true by default
        type: "POST",
        url: "http://localhost:3000/nodeTest",
        data: {param1: "Node.js", param2: "test successful"}
    }).done(function (msg) {
        //toDo
        alert("Data Saved: " + msg);
    });
}

function node_server_RecievePostExample() {
    //
    this.app.post('/nodeTest', function (req, res) {
        //
        var param1 = req.body.param1;
        var param2 = req.body.param2;
        //
        res.end("Server: Param1 = " + param1 + ", Param2 = " + param2);
    });
}

//=================================</NODE>======================================


//=============================<AJAX>===========================================

//#1. Synchronius calls are not so good to use in AJAX as i understand

/**
 * Send "AJAX/XMLHttpRequest" to the server. 
 * This method is used first in connection with an "AJAX/XMLHttpRequest".
 * This method is used together with "ajaxRequestReady(...)"
 * @param {String} value_to_send - value to be sent to the server
 * @param {String} recieving_script - the script on the server side which shall recieve this request
 * @param {String} paramter_name - name of the parameter which is used in connection with "$_GET",
 * example: "index.php?link=home" where link is "parameter_name"
 * @param {Boolean} asynchron - defines wether the request is synchron or asynchron, true = asynchronius call
 * @returns {String}
 * @tags ajax, xmlhttp
 */
function ajaxRequest(recieving_script, paramter_name, value_to_send, asynchron) {
    var xmlhttp;
    if (value_to_send.length === 0) {
        return;
    }
    if (window.XMLHttpRequest) {
// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.open("GET", recieving_script + "?" + paramter_name + "=" + value_to_send, asynchron);
    xmlhttp.send();
    return xmlhttp;
}

/**
 * This method is used in connection with "ajaxRequest(...)" method and
 * is used after calling "ajaxRequest(...)".
 * @param {XMLHttpRequest} xmlhttp
 * @param {Function} function_to_execute - function to be executed uppon "XMLHttpRequest" is ready
 * @returns {String}
 * @tags ajax, xmlhttp
 */
function ajaxRequestReady(xmlhttp, function_to_execute) {
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            function_to_execute(xmlhttp.responseText);
        } else {
            return null;
        }
    };
}

/**
 * Very important!
 * This method is good to use for 
 * handling the htmlhttp/ajax responce
 * @param {String} element_id_to_add_to - (without #)
 * @param {String} response - the xmlhhtp response text
 * @returns {undefined}
 */
function ajaxAddResponse(element_id_to_add_to, response) {
    if (classExists("response")) {
        removeClass("response");
    }
//
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "response");
    newDiv.innerHTML = response;
    appendOneElementToAnother(element_id_to_add_to, newDiv);
}

/**
 * Very important!
 * This method is good to use for 
 * handling the htmlhttp/ajax responce
 * @param {String} element_id_to_add_to - (without #)
 * @param {String} response - the xmlhhtp response text
 * @returns {undefined}
 */
function ajaxAddResponseAppend(element_id_to_add_to, response) {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "response");
    newDiv.innerHTML = response;
    if ($.trim(newDiv.innerHTML) === "") { // dont add empty response, this is garbage
        return;
    }
    appendOneElementToAnother(element_id_to_add_to, newDiv);
}

/**
 * 
 * @param {String} element_id_to_add_to
 * @param {type} response
 * @returns {unresolved}
 */
function ajaxAddResponseAppendAsIs(element_id_to_add_to, response) {
    if (response.length === 0) { // dont add empty response, this is garbage
        return;
    }
    appendOneElementToAnother(element_id_to_add_to, response);
}

/**
 * Example of using jquerry for "AJAX"
 * @returns {undefined}
 */
function ajaxRequestJQuerry() {
    $.ajax({
        async: "true", //is true by default
        type: "POST",
        url: "some.php",
        data: {name: "John", location: "Boston"}
    }).done(function (msg) {
        alert("Data Saved: " + msg);
    });
}

function ajaxEventsExamples() {
//
//Super important event
    $(document).ajaxStart(function () {
        console.log("ajaxStart");
    }).ajaxStop(function () {
        console.log("ajaxStop");
    });
    //============================
    //============================
}

/**
 *  Not working due to  - Reason: CORS header 'Access-Control-Allow-Origin' missing
 * Example of using jquerry for "AJAX"
 * @returns {undefined}
 */
function ajaxRequestJQuerryTest1() {
    $.ajax({
        async: true, //is true by default
        type: "POST",
        url: "http://www.mixcont.com/index.php",
        data: {link: "_http_com", client: "901", param: "ip"}
    }).done(function (msg) {
        alert("Ajax Data recieved: " + msg);
    });
}



/**
 * 
 * This one was tested and is working
 * @returns {undefined} 
 */
function ajaxRequestJQuerryTest2() {
    $.ajax({
        async: true, //is true by default
        type: "GET",
        url: "https://api.ipify.org?format=json"
    }).done(function (jsonStr) {
        alert("Ajax Data recieved: " + jsonStr["ip"]);
    });
}

//=============================</AJAX>==========================================


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
 * Use FadeInB() method
 * @tags fadeIn, fade, dimIn, fadeOut
 * @param {Element} selector
 * @returns {undefined}
 */
function fadeInA(selector) {
    $(selector).fadeIn(2000);
}


/**
 * Use this
 * @param {type} selector
 * @returns {undefined}
 */
function fadeInB(selector) {
    $(selector).css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 500);
}

/**
 * 
 * @tags fadeIn, fade, dimIn, fadeOut
 * @param {Element} element
 * @returns {undefined}
 */
function fadeOut(element) {
    $(element).fadeOut(2000);
}

/**
 * @tags slideUp, slideDown, slide
 * @param {type} element_id_class_tag
 * @returns {undefined}
 */
function slideDown(element_id_class_tag) {
    $(element_id_class_tag).slideUp();
}

/**
 * Slide left or right
 * @param {type} elemIdTagOrClass
 * @param {String} width
 * @param {int} millis animation duration
 * @returns {undefined}
 */
function slideSideWards(elemIdTagOrClass, width, millis) {
    $(elemIdTagOrClass).animate({width: width}, millis);
}



/**
 * @tags flash, blinking, blinker
 * @param {type} idElemClass
 * @param {int} intervall less then 1000ms seems to be the same as 1000
 * @returns {undefined}
 */
function blinkA(idElemClass, intervall) {
    var intervalID = setInterval(function () {
        blinkB(idElemClass);
    }, intervall);
    //This one is to stop the "Thread"
//    window.clearInterval(intervalID);
}

/**
 * use "blinkA"
 * @param {type} idElemClass 
 * @returns {undefined}
 */
function blinkB(idElemClass) {
    $(idElemClass).fadeOut(1000);
    $(idElemClass).fadeIn(1000);
}

/**
 * Just call this function in the very begenning.
 * @tested
 * @returns {undefined}
 */
function smoothScroll() {
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
}
//============================================

/**
 * @tags forEach, all elements, do something for all
 * @param {type} selector
 * @returns {undefined}
 */
function forEachElement(selector) {
    $(selector).each(function (index, item) {
        $(item).slideUp(); // $(item).remove();
    });
}

/**
 * This is a very important method(Example method)!
 * With help of this method you can adjust
 * properties of Elements inside a Container (Parent).
 * T.ex. yo can set color of Elements with tag <.p> inside
 * the parent container
 * @param {Element} parentElement
 * @param {String} tagName
 * @param {String} color
 * @returns {undefined}
 */
function setColorOfAnElementInsideParentElement(parentElement, tagName, color) {
    var elemArr = parentElement.getElementsByTagName(tagName);
    var elemWithGivenTag = elemArr[0]; // We think of a case with 1 such tagname in Container
    setFontColor(elemWithGivenTag, color);
}

/**
 * Sets font color of an element
 * @param {Element} element
 * @param {String} color
 * @returns {undefined}
 */
function setFontColor(element, color) {
    element.style.color = "" + color;
}

/**
 * Get font color of an Element
 * @param {Element} element
 * @returns {@exp;element@pro;style@pro;color}
 */
function getFontColor(element) {
    return element.style.color;
}

/**
 * 
 * @param {String} selector
 * @param {String} property_name
 * @param {String} value
 * @returns {undefined}
 */
function setCSSProperty(selector, property_name, value) {
    $(selector).css(property_name, value);
}


/**
 * Note you can also get css property by class and tag for class use "." for tag "nothing"
 * @param {String} element_id
 * @param {String} property_name
 * @returns {@exp;@call;$@call;css}
 */
function getCSSPropertyByElementId(element_id, property_name) {
    return $("#" + element_id).css(property_name);
}

/**
 * Get the ClassName of an Element
 * @param {Element} element
 * @returns {@exp;element@pro;className}
 */
function getClassName(element) {
    return element.className;
}

/**
 * @tags get_attribute, attribute
 * @param {Element} element
 * @returns {String}
 */

/**
 * @tags get_attribute, attribute
 * @param {Element} element
 * @param {type} key
 * @returns {String}
 */
function getAttributeValue(element, key) {
    return element.getAttribute(key);
}

/**
 * Get the distance to the top when scrolling
 * @tags: scroll, scrollTop, window scroll top, scrolled from top
 * @returns {@exp;@call;$@call;scrollTop}
 */
function getScrollTop() {
    return $(window).scrollTop();
}


/**
 * The .offset() method allows us to retrieve the current position of an
 * element relative to the document. Contrast this with .position(),
 * which retrieves the current position relative to the offset parent.
 * When positioning a new element on top of an existing one for global
 * manipulation (in particular, for implementing drag-and-drop), .offset()
 * is the more useful.
 * Use offset.top, offset.left on the returned object
 * @param {String} element_id_class_tag
 * @returns {Obejct}
 */
function getOffset(element_id_class_tag) {
    return $(element_id_class_tag).offset();
}

/**
 * Same as getOffset
 * @param {String} element_id_class_tag
 * @returns {@exp;@call;$@call;offset}
 */
function getPositionRelativeToTheDocument(element_id_class_tag) {
    return $(element_id_class_tag).offset();
}

/**
 * use the returned Object like this: position.left, position
 * @tested
 * @param {Element} element
 * @returns {@exp;@call;$@call;offset} - returns object
 */
function getPositionByElement(element) {
    return $(element).offset();
}

/**
 * 
 * use the returned Object like this: position.left, position.top
 * !Dont forget using "#" for id, "." for class etc.
 * @param {String} element_id_class_tag
 * @returns {@exp;p@call;position}
 */
function getPosition(element_id_class_tag) {
    var p = $(element_id_class_tag);
    return p.position();
}

/**
 * Same as getPosition
 * @param {String} element_id_class_tag
 * @returns {@exp;@call;$@call;position}
 */
function getPositionRelativeToParent(element_id_class_tag) {
    return  $(element_id_class_tag).position();
}

/**
 * @tested
 * @param {type} element_id_class_tag
 * @returns {@exp;@call;$@pro;position@pro;t@call;op|@exp;@call;$@pro;outerHeight@exp;@@call;call;$@pro;position@pro;t@call;op}
 */
function getPositionBottom(element_id_class_tag) {
    return $(element_id_class_tag).position().top + $(element_id_class_tag).outerHeight(true);
}

/**
 * Sets position for elements,ids,classes,tag dont 
 * forget to add "# for id"...
 * Set position of an element
 * @param {Element} element
 * @param {int} left
 * @param {int} top
 * @returns {undefined}
 */
function setPosition(element, left, top) {
    $(element).css({left: left, top: top});
}

/**
 * Return tag name in Upper Case!
 * @param {Element} element
 * @returns {@exp;element@pro;tagName}
 */
function getTagName(element) {
    return element.tagName;
}

/**
 * 
 * @param {Element} element
 * @returns {@exp;string@call;toLowerCase}
 */
function getTagNameLowerCase(element) {
    return toLowerCase(element.tagName);
}

/**
 * Returns how many elements there are with the given className
 * @param {String} className
 * @returns {Integer}
 */
function getAmmountOfElementsWithGivenClassName(className) {
    return $('.' + "" + className).length;
}

/**
 * Super important
 * Get the parent to the given element
 * @param {Element} element
 * @returns {@exp;element@pro;parentNode}
 */
function getParentElement(element) {
    return element.parentNode;
}


/**
 * Get all children of an element
 * Example:
 * 
 * var element = document.getElementById(div_id);
 * var elemntArray = getAllChildrenOfAnElement(element);
 * 
 *  for (i = 0; i < elemntArray.length; i++) {
 *      var curr_elem = elemntArray[i];
 *  }
 * @param {Element} element
 * @returns {@exp;element@pro;childNodes}
 */
function getAllChildrenOfAnElement(element) {
    return element.childNodes;
}

/**
 * Returns the first child of an element 
 * with element id x
 * @param {String} element_id
 * @returns {@exp;@call;$@pro;children@call;@call;first}
 */
function getFirstChildOfAnElement(element_id) {
    return $("#" + element_id).children().first();
}

/**
 * @tags getTitleCurrDoc, get title, get document title
 * @returns {@exp;@call;$@pro;find@call;@call;text}
 */
function getDocumentTitle() {
    return $(document).find("title").text();
}

/**
 * Opens the link in the same window
 * @param {String} link
 * @returns {undefined}
 */
function openLinkInTheSameWindow(link) {
//for HTML use: target="_self"
    window.open(link, "_self");
}

/**
 * Opens the link in the new window
 * @param {String} link
 * @returns {undefined}
 */
function openLinkInNewWindow(link) {
    window.open(link);
}

/**
 * 
 * @param {String} link
 * @returns {undefined}
 */
function openLinkInNewTab(link) {
//for HTML use: target="_blank"
    window.open(link, "_blank");
}


/**
 * @param {Event} eventObject
 * @returns {undefined}
 */
function preventDefaultActionEvent(eventObject) {
    if (eventObject.preventDefault) { //DOM
        eventObject.preventDefault();
    }
//
    if (window.event) { //IE
        window.event.returnValue = false;
    }
}


/**
 * This one kills the event
 * @tags: abort event, destroy event, propogation, propagation, bubling, bubbling
 * @param {type} event
 * @returns {undefined}
 */
function stopBubbling(event) {
    if (event.stopPropagation) { //DOM
        event.stopPropagation();
    } else if (window.event) { //IE
        window.event.cancelBubble = true;
    }
}



/**
 * 
 * Example:
 * 
 * function addEventToTheSendBtn(){
 *       addEvent(skickaBtn, "click", checkBeforeSending);
 *  }
 *
 *  checkBeforeSending(e){
 *      var eventObj = getEventObject(e);
 *      preventDefaultAction(eventObj);
 *  }
 * 
 * "getEventObject()" Returns the EVENT it's self, NOT the "EventTargetElement"
 * 
 * @param {Event} eventObject
 * @returns {@exp;window@pro;event}
 */
function getEventObject(eventObject) {
    if (eventObject) { //DOM
        return eventObject;
    } else if (window.event) {//IE
        return window.event;
    } else {
        return null;
    }
}

/**
 * Returns the element to which the event belongs, not the EVENT!!
 * @param {Event} eventObject
 * @returns {@exp;eventObject@pro;srcElement|@exp;eventObject@pro;target}
 */
function getEventTargetElement(eventObject) {
    if (eventObject.target) { //DOM
        return eventObject.target;
    } else if (eventObject.srcElement) { //IE
        return eventObject.srcElement;
    } else {
        return null;
    }
}


/*
 * Removing an eventlistner.
 *
 * eventElement: The element that is to have a listner removed
 * eventType: the event type that is to be removed
 * eventFunction: the function that is to be removed
 * useCapture: true if the eventlistner is a capturing listner
 *             otherwise false (DOM only)
 */

/**
 * 
 * @param {String} eventElement
 * @param {String} eventType
 * @param {Function} eventFunction
 * @param {Boolean} useCapture
 * @returns {undefined}
 */
function removeEvent(eventElement, eventType, eventFunction, useCapture) {
    if (eventElement.removeEventListener) { //DOM
        eventElement.removeEventListener(eventType, eventFunction, useCapture);
    } else if (eventElement.detachEvent) {//IE
        eventElement.detachEvent("on" + eventType, eventFunction);
    }
}


/**
 * @tags sleep, wait
 * @param {type} millis
 * @returns {undefined}
 */
function wait(millis)
{
    var date = new Date();
    var curDate = null;
    do {
        curDate = new Date();
    } while (curDate - date < millis);
}

/**
 * Redirects to a page
 * @param {String} url - http://www.google.com
 * @returns {undefined}
 */
function redirect(url) {
    window.location.href = url;
}


/**
 * 
 * @param {type} formId
 * @param {type} txtFieldId
 * @returns {Boolean}
 */
function validateFormRegular(formId, txtFieldId) {
    var x = document.forms[formId][txtFieldId].value;
    if (x === null || x === "") {
        return false;
    } else {
        return  false;
    }
}

/**
 * 
 * @param {String} formId
 * @param {String} txtFieldID
 * @returns {Boolean}
 */
function validateEmail(formId, txtFieldID) {
    var emailRegExp = /^[a-zA-Z0-9][a-zA-Z0-9_ ]{2,29}$/;
    var email = document.forms[formId][txtFieldID].value;
    if (email.search(emailRegExp) === -1) {// st?mmer inte
        return false;
    } else {
        return true;
    }
}

/**
 * 
 * @param {String} formId
 * @param {String} emailFieldId
 * @returns {Boolean}
 */
function validateEmailPrimitive(formId, emailFieldId) {
    var x = document.forms[formId][emailFieldId].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
        return false;
    } else {
        return true;
    }
}

/**
 * 
 * @param {type} elementOrItsID
 * @returns {undefined}
 */
function removeDefaultEventClick(elementOrItsID) {
    $(elementOrItsID).click(function (event) {
        event.preventDefault();
    });
}



/**
 * The "value" propertie is the standard propertie and fits many other elements
 * Gets text from a text elements like "text" , "textarea"
 * Applies also good for the "select" tag (groupBox)
 * Dont work with "radio", "checkboxes"
 * @param {type} labelId
 * @returns {@exp;document@pro;getElementById@pro;v@call;alue|@exp;@exp;document@pro;getElementById@pro;v@call;alue}
 */
function getTextFromAtextElement(labelId) {
    return document.getElementById(labelId).value;
}

/**
 * Get the text content of t.ex a "p" or "h3" tag
 * @param {Element} element
 * @returns {String} 
 */
function getText(element) {
    if (element !== null) {
        return element.textContent;
    } else {
        return null;
    }

}

function getTextToLower(element) {
    text = getText(element);
    if (text !== null) {
        return toLowerCase(text);
    } else {
        return null;
    }
}

/**
 * Get text from an input field
 * @tags getTextInputField, input field
 * @param {String} elem_id
 * @returns {@exp;@call;$@call;val}
 */
function getValueInputFieldById(elem_id) {
    return $('#' + elem_id).val();
}

/**
 * Dont forget to send "." or "#" when sending parameter
 * @param {String,Elem} elem_id_class
 * @returns {undefined}
 */
function get_value_by_anything(elem_id_class) {
    return $(elem_id_class).val();
}

function getSelectedIndexOfAGroupBox(elementID) {
    return document.getElementById(elementID).selectedIndex;
}



/**
 * 
 * @tags prompt, dialog, getValueByDialog,JOPtionPane, get value by dialog, dialog value
 * @param {type} textToDisplay
 * @returns {unresolved}
 */
function getStringByDialog(textToDisplay) {
    return prompt("" + textToDisplay, "");
}



function arrayIndexExists(array, index) {
    if (array[index] === undefined) {
        return false;
    } else {
        return true;
    }
}
/**
 * 
 * @param {String} elem_id_class_tag - element to add to
 * @param {String} tag - tag of the element which is to be added
 * @param {String} text
 * @returns {undefined}
 */
function addElement(elem_id_class_tag, tag, text) {
    $(elem_id_class_tag).append("<" + toLowerCase(tag) + ">" + text + "</" + toLowerCase(tag) + ">");
}

/**
 * Same as "appendOneElementToAnother"
 * @param {type} elem_id_class_tag
 * @param {type} element_to_be_appended
 * @returns {undefined}
 */
function addElementB(elem_id_class_tag, element_to_be_appended) {
    $(elem_id_class_tag).append(element_to_be_appended);
}

/**
 * 
 * @param {type} elem_id_class_tag
 * @param {type} element_to_be_appended
 * @returns {undefined}
 */
function appendOneElementToAnother(elem_id_class_tag, element_to_be_appended) {
    $(elem_id_class_tag).append(element_to_be_appended);
}


function insertFirst(elem_id_class_tag, parent_elem_id) {
    $(elem_id_class_tag).prependTo($(parent_elem_id));
}

/**
 * Moves one element above the other
 * @Param parentId = the Element in which the "change position " is to be done
 * @Param itemToMoveUp = the element that shoul be moved up
 * @Param itemToMoveDown = the element that is moved under the "itemToMoveUp"
 */
function insertBeforeAnother(parentId, itemToMoveUp, itemToMoveDown) {
    document.getElementById(parentId).insertBefore(document.getElementById(itemToMoveUp),
            document.getElementById(itemToMoveDown));
}

/**
 * @tags appendAfter, append after
 * @note it can be also tag,id,class not only element
 * @param {type} element_to_insert
 * @param {type} element_after_which_the_new_elem_is_inserted
 * @returns {undefined}
 */
function insertAfter(element_to_insert, element_after_which_the_new_elem_is_inserted) {
    $(element_to_insert).insertAfter($(element_after_which_the_new_elem_is_inserted));
}

/**
 * 
 * @tags setAttribute, set atribute, setParameter, set parameter
 * @param {Element} element
 * @param {String} key
 * @param {String} value
 * @returns {undefined}
 */
function setAttribute(element, key, value) {
//Example
//elem.setAttribute("type","button"); 
    element.setAttribute(key, value);
}

/**
 * 
 * @param {String} filename_and_extension
 * @returns {@exp;filename@pro;split@call;@call;pop|@exp;@exp;filename@pro;split@call;@call;pop}
 */
function getFileExtension(filename_and_extension) {
    return filename_and_extension.split('.').pop();
}

/**
 * Just gets the element
 * @param {String} element_id
 * @returns {@exp;document@call;getElementById}
 */
function getElement(element_id) {
    return document.getElementById(element_id);
}

/**
 * 
 * @param {Element} element
 * @returns {String} name of id class..
 */
function getElementId(element) {
    return element.id;
}

function getElementClass(element) {
    return element.className;
}


/**
 * OBS! This function doesn't work sometimes!
 * Get element with jquerry by any parameter
 * @tested
 * @param {type} element_id_class_tag
 * @returns {@exp;@call;$@call;get}
 */
function getElementByEnything(element_id_class_tag) {
    return $(element_id_class_tag).get();
}

/*
 * Get all elements with class_name x
 * @tested 
 * @param {type} class_name
 * @returns {@exp;@call;$@call;get}
 */
function getElementsArrByClass(class_name) {
    return $("." + class_name).get();
}



/**
 * @tags: getImageByAlt, get image by alt, image alt, getImage
 * @param {type} alt
 * @returns {@exp;@call;$@call;get}
 */
function getElementByAlt(alt) {
    return $("img[alt=" + alt + "]").get();
}


/**
 * This function gets the tag/element name for an element.
 * For FireF the .localName and .tagName can both be used
 * the only difference is that tagName return the tag in upperCase
 * and the .localName in lowerCase
 * The IE accepts only .tagName!
 * #Works with: IE,FF
 * @Param element
 * @return the tag name in lowerCase!
 */
function getElementNameOrLocalNameOrTagName(element) {
    try {
        return element.tagName.toLowerCase();
    } catch (err) {
        alert("myGetElementNameOrLocalNameOrTagName err: " + err);
    }
}

/**
 * Enables to recieve a list of elements grouped 
 * by the the same "name" that could be a set of radio btns
 * or .....
 * @param {} groupName
 * @returns {Array}
 */
function getElementsByName(groupName) {
    return document.getElementsByName(groupName);
}

/**
 * Gets state of a Checkbox like element
 * @tags checked, isChecked, cheked
 * @param {String} elem_id
 * @returns {}
 */
function getStateOfRadioOrChkBox(elem_id) {
    return document.getElementById(elem_id).checked;
}
/**
 * 
 * @param {String} elem_id
 * @param {Boolean} checked
 * @returns {undefined}
 */
function setCheckedForCheckBox(elem_id, checked) {
    $("#" + elem_id).prop('checked', checked);
}

function includeHtml(htmlToInclude, elementId) {
    $(function () {
        $("#" + elementId).load(htmlToInclude);
    });
}

/**
 *This method is useful when you have for example a button
 *and when you press it the action uppon pressing the button
 *must only happen once
 *@Param elementId = the id for which the checkup is going to be made
 *@return false if the document already contain the element with given id
 *@return true if the element with the id is not yet present - the button is pressed for the first time
 */
function preventSameAction(elementId) {
    if (document.getElementById(elementId) !== null) {
        return false;
    } else {
        return true;
    }
}

/**
 * 
 * @param {type} string
 * @returns {Array}
 */
function stringToByteArray(string) {
    var bytes = [];
    for (var i = 0; i < string.length; ++i) {
        bytes.push(string.charCodeAt(i));
    }
    return bytes;
}

/**
 * Searches the string for the occurencies of the
 * searched string
 * @param {String} strToSearch
 * @param {String} strToFind
 * @returns {Number}
 */
function searchStringForOccurencesOfStringX(strToSearch, strToFind) {

    var startAt = 0;
    var nrHits = 0;
    while ((startAt < strToSearch.length) && (startAt !== -1)) {
        startAt = strToSearch.indexOf(strToFind, startAt);
        if (startAt !== -1) {
            nrHits++;
            startAt++;
        }
    }
    return nrHits;
}
/**
 * 
 * @param {String} string
 * @returns {int} 
 */
function getStringLength(string) {
    return string.length;
}


/**
 * 
 * @param {String} string
 * @returns {@exp;string@call;toLowerCase}
 */
function toLowerCase(string) {
    return string.toLowerCase();
}

/**
 * 
 * @param {type} strToSearch
 * @param {type} strToFind
 * @returns {Boolean}
 */
function searchString(strToSearch, strToFind) {
    if (strToSearch.search(strToFind) === -1) {
        return false;
    } else {
        return true;
    }
}

/**
 * 
 * @param {String} string - the string to split
 * @param {String} regex - the delimiter like ";"
 * @returns {@exp;string@call;split}
 */
function splitString(string, regex) {
    return string.split(regex);
}

/**
 * 
 * @param {type} str_to_process
 * @param {type} searched_for
 * @param {type} replace_with
 * @returns {@exp;str_to_process@call;replace}
 */
function stringReplace(str_to_process, searched_for, replace_with) {
    return  str_to_process.replace(searched_for, replace_with);
}


/**
 * 
 * @param {type} str_to_process
 * @param {Not a String!} regex - you wright it without any quotes or slasches = /-/g  -> (-) the char to be replaced 
 * @param {type} replace_with
 * @returns {@exp;str_to_process@call;replace}
 */
function stringReplaceAll(str_to_process, regex, replace_with) {
    return str_to_process.replace(regex, replace_with);
}

/**
 * @tags trim, stringTrim, string trim
 * @param {String} str_to_trim 
 * @returns {String}
 */
function trimString(str_to_trim) {
    return $.trim(str_to_trim);
}

/**
 * This one is good to have directly in the beggining of the doc
 * @tags setTitle, set title, documentTitle, doc title,document title
 * @param {type} title_name
 * @returns {undefined}
 */
function setTitleOfDocument(title_name) {
    document.title = title_name;
}

/**
 * To make that the title changes dynamicly
 * @tags title, dynamic, automatic, set title dynamicly, set title automaticaly
 * @tested
 * @returns {undefined}
 */
function setTitleDynamiclyExample() {
//    <head>
//        <title><?php echo (str_replace("_", " ", $link)) ?></title>
//        //This one makes that first letters are allways in upper case
//        <title><?php echo ucwords(str_replace("_", " ", $link)) ?></title>
//    </head>
}

/**
 * Hides an element only visually!
 * Properties = "visible|hidden|collapse|inherit" 
 * @param {String} elementId
 * @param {String} property
 * @returns {undefined}
 */
function hideElement(elementId, property) {
    document.getElementById(elementId).style.visibility = property;
}


function hideElementsByAnything(element_id_tag_class) {
    $(element_id_tag_class).hide();
}

function unhideElementsByAnything(element_id_tag_class) {
    $(element_id_tag_class).show();
}





/**
 * @tags clone element, copy element
 * @param {type} class_to_clone
 * @param {type} id_of_elem_to_append_to
 * @returns {undefined}
 */
function cloneElement(class_to_clone, id_of_elem_to_append_to) {
    var clone = $("." + class_to_clone).clone();
    $("#" + id_of_elem_to_append_to).append(clone);
}



/**
 * @tag create element, create_element, new element
 * @param {type} tag
 * @returns {@exp;document@call;createElement}
 */
function createElement(tag) {
    return document.createElement(tag);
}

/**
 * 
 * @tag settext,setvalue, set text, set value, elementSetText
 * @param {String} elementID
 * @param {String} text
 * @returns {undefined}
 */
function setText(elementID, text) {
    document.getElementById(elementID).innerHTML = text;
}

function setTextB(element, text) {
    element.innerHTML = text;
}

/**
 * 
 * @param {type} elementID
 * @param {type} className
 * @returns {undefined}
 */
function setClass(elementID, className) {
    document.getElementById(elementID).className = className;
}

/**
 * Remove Element by Element
 * @param {String} parent_id
 * @param {Element} element_to_remove - Element
 * @returns {undefined}
 */
function removeElement(parent_id, element_to_remove) {
    var parent = document.getElementById(parent_id);
    if (element_to_remove !== null) {
        parent.removeChild(element_to_remove);
    }
}

/**
 * 
 * @tag delete, erase
 * @param {type} element_id
 * @returns {undefined}
 */
function removeElementById(element_id) {
    $('#' + element_id).remove();
}

/**
 * Remove all elements with given className
 * @tested
 * @param {type} className
 * @returns {undefined}
 */
function removeClass(className) {
    $('.' + className).remove();
}


/**
 * Removes all the children for a parent
 *@Param parentID
 */
function removeAllElementsForParentX(parentID) {
    var parent = document.getElementById(parentID);
    while (true) {
        try {
            parent.removeChild(parent.firstChild);
        } catch (err) {
            break;
        }
    }
}

/**
 * 
 * @param {type} betweenA example 1
 * @param {type} betweenB example 2
 * @returns {Number}
 */
function getRandomInt(betweenA, betweenB) {
    return Math.floor((Math.random() * betweenB) + betweenA);
}

/**
 * Get random number between 1 & 100
 * @returns {@exp;Math@call;floor}
 */
function getRandomNumber() {
    return Math.floor((Math.random() * 100) + 1);
}




