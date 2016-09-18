
$(document).ready(function () {
    go();
});

$(window).load(function () {
//    go();
});

var initialSideBarWidth;
var contentElem;
var initialContentWidth;

function go() {
    //
    contentElem = getElement("content");
    initialContentWidth = getWidth(contentElem);
    //
    var sidebar = getElement("sidebar");
    initialSideBarWidth = getWidth(sidebar);
    addEvent(sidebar, "click", sideBarClicked);
    //
    //
    addEvent(getElement("testSubmit"), "click", node_client_SendPostRequest);
    addEvent(getElement("mysql"), "click", node_client_connect_db);
    addEvent(getElement("sqlselect"), "click", node_client_execute_select);
    //
    adjustSideBarHeight();
    //
}

function node_client_execute_select() {
    $.ajax({
        async: "true", //is true by default
        type: "POST",
        url: "http://localhost:3000/executeSelect",
        data: {query: "select * from articles"}
    }).done(function (rowsAsJson) {
        processNodeResponseB(rowsAsJson);
    });
}

function node_client_connect_db() {
    $.ajax({
        async: "true", //is true by default
        type: "POST",
        url: "http://localhost:3000/connectMySql",
        data: {ip: "localhost", user: "root",pass: "",database:"vedalife_se"}
    }).done(function (msg) {
        processNodeResponse(msg);
    });
}

function node_client_SendPostRequest() {
    $.ajax({
        async: "true", //is true by default
        type: "POST",
        url: "http://localhost:3000/nodeTest",
        data: {param1: "Node.js", param2: "test successful"}
    }).done(function (msg) {
//        alert("Data Saved: " + msg);
        processNodeResponse(msg);
    });
}

function processNodeResponseB(response_rows) {
    var randomInt = getRandomInt(1,6);
    //
    var elemh3 = createElement("h3");
    setTextB(elemh3,"Node.js response: " + response_rows[randomInt].title);
    //
    var elemArticle = createElement("article");
    addElementB(elemArticle, elemh3);
    //
    var response_p = "<p>" + response_rows[randomInt].text + "</p>";
    addElementB(elemArticle,response_p);
    //
    insertFirst(elemArticle, getElement("content"));
    //
    adjustSideBarHeight();
}

function processNodeResponse(response) {
    //
    var elemh3 = createElement("h3");
    setTextB(elemh3,"Node.js response");
    //
    var elemArticle = createElement("article");
    addElementB(elemArticle, elemh3);
    //
    var response_p = "<p>" + response + "</p>";
    addElementB(elemArticle,response_p);
    //
    insertFirst(elemArticle, getElement("content"));
    //
    adjustSideBarHeight();
}




function adjustSideBarHeight() {
    var height = getHeight("#content");
    setCSSProperty("aside", "height", height);
}


function sideBarClicked(event) {
    //
    var elem = getEventTargetElement(event);
    //
    if (getClassName(elem) === "link") {
        return;
    }
    //
    var sidebarWidth = getWidth(elem);
    //
    if (sidebarWidth > 50) { //hide sidebar
        //
        hideElementsByAnything(".link");
        slideSideWards(elem, "20px", 1000);
        //
        var summ = initialContentWidth + initialSideBarWidth;
        slideSideWards(contentElem, (summ - 20) + "px", 1000);
        setCSSProperty("article", "width", "95%");
        //
    } else {// show
        slideSideWards(elem, initialSideBarWidth + "px", 1000);
        unhideElementsByAnything(".link");
        slideSideWards(contentElem, initialContentWidth + "px", 1000);
        setCSSProperty("article", "width", "90%");
    }

}


function includeHtml(htmlToInclude, elementId) {
    $(function () {
        $("#" + elementId).load(htmlToInclude);
    });
}


function insertBasicArticle(title, imageName) {
    document.write("<h3>" + title + "</h3>");
    document.write("<img class='image_a' src='images/" + imageName + "' alt='" + imageName + "'>");
    document.write("<p>");
    document.write("Lorem ipsum dolor sit amet,m ne senserit his id, te his quidam civibus. quaestio erroribus, cu sea graeci dicunt accusam. Nam cu nulla delicatissimi, \n\
            ea quot ancillae qualisque mel, ut sea oportere iracundia. An has consequat efficiantur. Falli nominati mea ex. Per natum\n\
         ad, conceptam reformidans vel ei, ius in diam malis molestiae. Eruditi patrioque mea ex, eros omittam in mei. Sit brute fugit\n\
         nonumy no. Mazim laoreet maluisset sit id, ad nam regione percipit. In ubique intellegebat sea, modus mazim ex vel, mundi \n\
        hendrerit mei et. Per solum evertitur ad. Vim ea illum rationibus. Eu sensibus gloriatur eloquentiam vis, ius eu prima inimicus,\n\
         pri no habeo offendit voluptatibus. Vero legere ut cum, reque ubique ut qui. His hinc congue fierent cu, forensibus voluptaria\n\
         appellantur eos ei. Cu ipsum bonorum consectetuer vix, fabulas impedit qualisque usu an. Sed munere partem quaerendum ad,\n\
         no vix admodum minimum. Ius meis oratio at, primis labore qui at. Ad malis sensibus signiferumque per, nulla oblique nec cu,\n\
         amet probatus signiferumque an has. Ut movet libris his. Saperet scripserit usu an. Dicit denique referrentur per at, vix ex ornatus vivendo scriptorem. Eam ne eligendi electram patrioque. Nec ne tollit blandit partiendo. Liber altera detraxit sea ut, sumo placerat pri et. Choro dicam ad vim. Cotidieque deterruisset et vix, diam regione.");
    document.write("</p>");
}


function testInsert2BasicArticles() {
    document.write("<article>");
    insertBasicArticle("Article 1", "bear.png");
    document.write("</article>");
    //
    //
//    document.write("<article>");
//    insertBasicArticle("Article 2", "pen.png");
//    document.write("</article>");
    //
}
