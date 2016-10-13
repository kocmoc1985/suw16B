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

var obj = getObject("name", "Lök");

//printObject(obj);
deleteObject("name","Lök");
deleteObject("name","Bob");
printArr(arr);

