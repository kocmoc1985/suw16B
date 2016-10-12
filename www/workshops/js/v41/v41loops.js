var arr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

arr.forEach(doSomething);

console.log(arr.toString());

function doSomething(item,index){
    if(item === "Friday"){
        var removed = arr.splice(index,1);
    }
}