var winNumber = Math.floor((Math.random() * 6) + 1);
throwTarning(winNumber);

function throwTarning(winNumber){
    //
    var rst = Math.floor((Math.random() * 6) + 1); 
    //
    console.log("throw:" + rst);
    console.log("win:" + winNumber);
    //
    if(rst === winNumber){
        console.log("You Won");
    }else{
         console.log("You loose");
    }
    //
}
