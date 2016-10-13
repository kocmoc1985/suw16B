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

function removeFromListAndAddToDone(name) {
    doneList.push(removeFromListByName(name));
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

addToTopOfList("todo one");
addToTopOfList("todo two");
addToTopOfList("todo three");
moveUp("todo two");