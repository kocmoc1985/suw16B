var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var formatYYY_mm_dd = "#year-#month-#day";
var formatDD_mm_YYYY = "#day/#month/#year";

function getCurrentDate(format) {
    var d = new Date();
    return format.replace("#year", d.getFullYear()).replace("#month", months[d.getMonth()]).replace("#day", d.getDate());
}

function getDateGivenFormat(date,format) {
    var d = new Date(date);
    return format.replace("#year", d.getFullYear()).replace("#month",months[d.getMonth()]).replace("#day",d.getDate());
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
