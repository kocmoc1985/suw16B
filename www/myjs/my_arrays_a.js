// Make a shallow copy (copies references only,
// which means only primitives are copied but not Objects) 
var arr_r = [10, {hej: "Hej!"}];

var copyArr = arr_x.slice();

//==============================================================================
// Make a deep copy, omvandlar till String. Very expensive procedure
var deepCopy = JSON.parse(JSON.stringify(arr_r));

//==============================================================================
//Copierar och tar bort angiven antal av element
arr_x.splice(start,deleteCount);
//
//You can also use splice to insert an element at the specific postion
arr_x.splice(start,insertIndex,insertObj);

//OBS splice(...) returnerar alltid en array

//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================


arr = ["one", "two", "three", "four"];
arr2 = [1, 2, 3, 4];

//Random between 0 and arr.length
function getRandom(arr) {
    return Math.floor(Math.random() * arr.length);
}

function addLast(arr) {
    arr.push();
}

function addFirst(arr) {
    return arr.unshift();
}

function getRemoveLast(arr) {
    return arr.pop();
}

function getRemoveFirst(arr) {
    return arr.shift();
}

function removeAllByName(arr, name) {
    while (arr.indexOf(name) !== -1) {
        var index = arr.indexOf(name);
        arr.splice(index, 1);
    }
}

function moveToTop(arr, indexToMove) {
    var toMoveElem = arr.splice(indexToMove, 1);
    arr.push(toMoveElem);
}

function moveToBottom(arr, indexToMove) {
    var toMoveElem = arr.splice(indexToMove, 1);
    arr.unshift(toMoveElem);
}

function moveUp(arr, indexToMove) {
    var toMoveElem = arr.splice(indexToMove, 1)[0];
    arr.splice(indexToMove += 1, 0, toMoveElem);
}

function moveDown(arr, indexToMove) {
    var toMoveElem = arr.splice(indexToMove, 1)[0];
    arr.splice(indexToMove -= 1, 0, toMoveElem);
}

function swap(arr, indexOne, indexTwo) {
    var elemOne = arr[indexOne];
    var elemTwo = arr[indexTwo];
    //
    arr[indexOne] = elemTwo;
    arr[indexTwo] = elemOne;
    //
    console.log(arr.toString());
}

function reverseArr(arr) {
    var newArr = [];
    //
    for (i = arr.length-1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    //
    return newArr;
}

console.log(reverseArr(arr2).toString());