function exists(selector) {
    if ($(selector).length) {
        return true;
    } else {
        return false;
    }
}

function removeAllClassesX(class_) {
    $("." + class_).each(function () {
        $(this).removeClass(class_);
    });
}