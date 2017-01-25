function Hus(byggar) {
    this.byggar = byggar;
    this.vaningar = [];

    this.addVaning = function (vaning) {
        this.vaningar.push(vaning);
    };

}


function Vaning(floor) {
    this.floor = floor;
    this.rooms = [];

    this.addRoom = function (room) {
        this.rooms.push(room);
    };
}

function Room(type, ytterDoor, trappa, area) {
    this.type = type;
    this.ytterDoor = ytterDoor;
    this.trappa = trappa;
    this.area = area;
}

//======================

var vaningOne = new Vaning("ett");
vaningOne.addRoom(new Room("hall", true, true, 25));
vaningOne.addRoom(new Room("kök", false, false, 15));
vaningOne.addRoom(new Room("vardagsrum", false, false, 30));
vaningOne.addRoom(new Room("wc", false, false, 5));

//======================

var vaningTwo = new Vaning("två");
vaningTwo.addRoom(new Room("hall", false, true, 15));
vaningTwo.addRoom(new Room("wc", false, false, 3));
vaningTwo.addRoom(new Room("sovrum", false, false, 15));
vaningTwo.addRoom(new Room("sovrum", false, false, 15));
vaningTwo.addRoom(new Room("sovrum", false, false, 15));

//======================

var hus = new Hus(1976);
hus.addVaning(vaningOne);
hus.addVaning(vaningTwo);

//=======================

//console.log(hus);

var jsonStr = JSON.stringify(hus);

console.log(jsonStr);