var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


function getDateDD_mm_YYYY(date) {
    var d = new Date(date);
    return days[d.getDay()-1] + " " + d.getDate() + " of " + months[d.getMonth()] + " " + d.getFullYear();
}

console.log("dateYYY_mm_DD: " + getDateDD_mm_YYYY("2016-10-06"));

//==============================================================================


var formatYYY_mm_dd = "#year-#month-#day";
var formatDD_mm_YYYY = "#day/#month/#year";


function getDateFlex(date,format) {
    var d = new Date(date);
    return format.replace("#year", d.getFullYear()).replace("#month",months[d.getMonth()]).replace("#day",d.getDate());
}

console.log(getDateFlex("2016-10-06",formatDD_mm_YYYY));