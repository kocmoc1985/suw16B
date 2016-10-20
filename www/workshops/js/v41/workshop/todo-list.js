var todoList = [];
var doneList = [];

function addToList(toDo) {
    todoList.unshift(toDo);
    return todoList;
}

function addToTopOfList(toDo) {
    todoList.push(toDo);
    return todoList;
}

function removeFromBottomOfList() {
    return todoList.shift();
}

function removeFromTopOfList() {
    return todoList.pop();
}

function removeFromListByIndex(index) {
    return todoList.splice(Math.abs(index), 1)[0];
}

function removeFromListByName(name) {
    return removeFromListByIndex(todoList.indexOf(name));
}

//function removeFromListAndAddToDone(name) {
//    doneList.push(removeFromListByName(name));
//    return doneList;
//}

function removeFromListAndAddToDone(index) {
    var entry = removeFromListByIndex(index);
    doneList.push(entry);
    return doneList;
}

function moveToTop(name) {
    var todo = removeFromListByName(name);
    addToTopOfList(todo);
    return todoList;
}

function moveToBottom(name) {
    var todo = removeFromListByName(name);
    addToList(todo);
    return todoList;
}

function moveDown(name) {
    var index = todoList.indexOf(name);
    var newIndex = index - 1;
    //
    if (newIndex < 0) {
        return;
    }
    //remove from old position
    var moveDownElem = todoList.splice(Math.abs(index), 1)[0];
    //insert to the new position
    todoList.splice(newIndex, 0, moveDownElem);
}

function moveUp(name) {
    var index = todoList.indexOf(name);
    var newIndex = index + 1;
    //
    if (newIndex >= todoList.length) {
        return;
    }
    //remove from old position
    var moveUpElem = todoList.splice(Math.abs(index), 1)[0];
    //insert to the new position
    todoList.splice(newIndex, 0, moveUpElem);
}

//==============================================================================

$(document).ready(function () {
    addEventToSubmitBtn();
    showToDoList();
});

function addEventToSubmitBtn() {
    $("form input").click(function (event) {
        event.preventDefault();
        var todoStr = $("textarea").val();
        addToList(todoStr);
        showToDoList();
        $("textarea").val("");
        //
    });
}


function showToDoList() {
    //
    $(".todo").empty();
    //
    for (var i = 0; i < todoList.length; i++) {
        $(".todo").append(buildToDoEntry(todoList[i], i));
    }
    //
    addEventToRemoveBtns();
    addEventToDoneBtns();
}


function buildToDoEntry(todoStr, index) {
    var html =
            "<div class='todo-entry'>"
            + "<div class='hidden'>" + index + "</div>"
            + "<p>" + todoStr + "</p>"
            + "<button type='button' class='remove'>Remove</button>"
            + "<button type='button' class='done'>Done</button>"
            + "<button type='button'>Top</button>"
            + "<button type='button'>Bottom</button>"
            + "<button type='button'>Up</button>"
            + "<button type='button'>Down</button>"
            + "</div>";

    return html;
}

function addEventToDoneBtns() {
    $(".done").click(function () {
        var btn = $(this);
        var index = getIndex(btn);
        console.log("index: " + index);
        removeFromListAndAddToDone(index);
        console.log(doneList.toString());
        showToDoList();
    });
}

function addEventToRemoveBtns() {
    $(".remove").click(function () {
        var btn = $(this);
        var index = getIndex(btn);
        removeFromListByIndex(index);
        showToDoList();
    });
}

function getIndex(button) {
    //
    var parent = $(button).parent();
    var children = parent.children();
    //
    for (var i = 0; i < children.length; i++) {
        if (children[i].className === "hidden") {
            return index = $(children[i]).text();
        }
    }
    return -1;
}