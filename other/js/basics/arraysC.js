var arr =
        [
            {name: "John", age: 20, born: 1985},
            {name: "Donald", age: 48, born: 1988},
            {name: "Bob", age: 15, born: 1998},
            {name: "Jook", age: 85, born: 1975},
            {name: "Lök", age: 77, born: 1965}
        ];

function deleteObject(key, value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][key] === value) {
            arr.splice(i, 1);
        }
    }
}


function getObject(key, value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][key] === value) {
            return arr[i];
        }
    }
}

function printObject(obj) {
    for (var propName in obj) {
        console.log(propName + ":" + obj[propName]);
    }
}

function printArr(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var propName in arr[i]) {
            console.log(propName + ":" + arr[i][propName]);
        }
        console.log("============");
    }
}

function printArrWithObjects(arr) {
    for (var i = 0; i < arr.length; i++) {
        printObject(arr[i]);
    }
}
//==============================================================================
//var obj = getObject("name", "Lök");

//printObject(obj);
//deleteObject("name", "Lök");
//deleteObject("name", "Bob");
//printArr(arr);
//==============================================================================


var depth = 0;
var returArr = [];
searchObjRecursion(arr, "born", 1965, returArr);
printArrWithObjects(returArr);


function searchObjRecursion(object, keyIn, valueIn, returArr) {
    for (var key in object) {
        //
        var value = object[key];
        //
        console.log(key + ":::");
        console.log(value);
        //
        if (keyIn === key && value === valueIn) {
            returArr.push(object);
        }
        //
        if (typeof value === "object") {
            depth++;
//            console.log("step in: " + depth);
            searchObjRecursion(value, keyIn, valueIn, returArr);
        }
        //
    }
    //
    depth--;
//    console.log("step out: " + depth);
    //
    if (depth === -1) {
        return returArr;
    }
    //
}

//==============================================================================



