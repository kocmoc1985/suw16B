function exists(selector) {
    if ($(selector).length) {
        return true;
    } else {
        return false;
    }
}

function refreshWindow(){
    window.location = window.location;
}

function removeAllClassesX(class_) {
    $("." + class_).each(function () {
        $(this).removeClass(class_);
    });
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

function executeAsync(func) {
    setTimeout(func, 0);
}

executeAsync(function () {
    $('#modal-confirm').modal();
});