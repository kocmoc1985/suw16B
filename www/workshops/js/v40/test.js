var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var formatYYY_mm_dd = "#year-#month-#day";
var formatDD_mm_YYYY = "#day/#month/#year";

function getDateFlex(format) {
    var d = new Date();
    console.log(d);
    return format.replace("#year", d.getFullYear()).replace("#month", months[d.getMonth()]).replace("#day", d.getDate());
}

console.log(getDateFlex(formatYYY_mm_dd));