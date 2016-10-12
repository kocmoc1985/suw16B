
//Create empty array
var arr = [];


var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


var arrayWithObjects =
        [
            {name: "John", age: 16},
            {name: "George", age: 35}
        ];

//==============================================================================

// Make a shallow copy (copies references only,
// which means only primitives are copied but not Objects) 
var arr_r = [10,
    {hej: "Hej!"}
];

var copyArr = arr.slice();

//==============================================================================
// Make a deep copy, omvandlar till String. Very expensive procedure
var deepCopy = JSON.parse(JSON.stringify(arr_r));

//==============================================================================
//Copierar och tar bort angiven antal av element
arr.splice(start,deleteCount);
//
//You can also use splice to insert an element at the specific postion
arr.splice(start,insertIndex,insertObj);

//OBS splice(...) returnerar alltid en array
//
//==============================================================================

function addLast(arr) {
    arr.push();
}

function addFirst(arr) {
    return arr.unshift();
}

/**
 * Also removes the elem
 * @param {type} arr
 * @returns {unresolved}
 */
function getLast(arr) {
    return arr.pop();
}

/**
 * Also returns the eleme
 * @param {type} arr
 * @returns {unresolved}
 */
function getFirst(arr) {
    return arr.shift();
}

function getAndRemoveRandom(arr, index) {
    return arr.splice(index, 1);
}

function reverseArr(arr) {
    newArr = [];
    //
    for (i = arr.length; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    //
    return newArr;
}

function createArray(capacity) {
    ar = [];
    //
    for (i = 1; i <= capacity; i++) {
        ar.push(i);
    }
    //
    console.log(ar.toString());
    return ar;
}