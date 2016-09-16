
$(document).ready(function () {
//    go();
});

$(window).load(function () {
    go();
});

function go() {
    var elem = getElementByEnything("aside");
   //
    $(elem).click(function (event) {
        alert("click");
         slideDown(elem);
    });
    //
    var height = getHeight("#content");
    setCSSProperty("aside","height",height);
}

function sideBarClicked(event){
    var elem = getElementByEnything("aside");
    slideLeftOrRight(elem,"left");
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
    document.write("<article>");
    insertBasicArticle("Article 2", "pen.png");
    document.write("</article>");
}
