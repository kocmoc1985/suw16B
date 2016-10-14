function Pat(name) {
    this.name = name;
    this.owner = new Owner();
    this.address = new Adress();
    //
    console.log("owner telNr:" + this.owner.getTel());
    //
    this.meow = function () {
        console.log("Mjau, jag heter " + this.name + ".");
    };
    //
    this.changeName = function (newName) {
        this.name = newName;
    };
}

function Owner() {
    this.name = "aaa";
    this.tel = "0735224455";

    this.getName = function () {
        return this.name;
    };
    
     this.getTel = function () {
        return this.tel;
    };
}

function Adress(){
    this.city = "Malmö";
    this.zip = "23155";
}

var Knas = new Pat("Knas");
var Tass = new Pat("Tass");

Knas.meow();
Tass.meow();

Knas.changeName("Kapten Knas");
Knas.meow();


var jsonStr = JSON.stringify(Knas);

console.log(jsonStr);