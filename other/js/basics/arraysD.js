var arr =
        [
            {name: "John", age: 20, born: 1985, addr: {zip: 23155, city: "malmö"}},
            {name: "Donald", age: 48, born: 1988, addr: {zip: 23178, city: "trelleborg"}},
            {name: "Bob", age: 15, born: 1998, addr: {zip: 25469, city: "lund"}},
            {name: "Jook", age: 85, born: 1975, addr: {zip: 24589, city: "ystad"}},
            {name: "Lök", age: 77, born: 1965, addr: {zip: 25699, city: "helsinborg"}}
        ];


var parent;
var depth = 0;
var returArr = [];
searchObjRecursion(arr, "zip", 25699, returArr);
printArrWithObjects(returArr);


function searchObjRecursion(object, keyIn, valueIn, returArr) {
    for (var key in object) {
        //
        var value = object[key];
        //
//        console.log(key + ":::");
//        console.log(value);
        //
        if (keyIn === key && value === valueIn) {
            returArr.push(object);
        }
        //
        if (typeof value === "object") {
            //
            parent = object;
            //
            depth++;
            //
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

function printArrWithObjects(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var propName in arr[i]) {
            console.log(propName + ":" + arr[i][propName]);
        }
    }
}