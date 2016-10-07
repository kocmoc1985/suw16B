//var arr = [1,2,3,4,5,6,7,8,9];
//
//function udda(arr) {
//    var newArr = [];
//
//    for (i = arr.length; i >= 0; i--) {
//        if (arr[i] % 2 === 1) {
//            newArr.unshift(arr[i]);
//        }
//    }
//    return newArr;
//}
//
//
//console.log(udda(arr).toString());
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var newArr = [];

function udda() {
    var num = arr.pop();
    if (num % 2 === 1) {
        newArr.unshift(num);
    }
}

while (arr.length > 0) {
    udda();
}

console.log(newArr.toString());