function Pat(name) {
    this.name = name;
    //
    this.meow = function () {
        console.log("Mjau, jag heter " + this.name + ".");
    };
    //
    this.changeName = function (newName) {
        this.name = newName;
    };
}

var Knas = new Pat("Knas");
var Tass = new Pat("Tass");

Knas.meow();
Tass.meow();

Knas.changeName("Kapten Knas");
Knas.meow();