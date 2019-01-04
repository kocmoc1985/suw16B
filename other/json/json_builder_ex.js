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
vaningOne.addRoom(new Room("vardagsrum", false, false, 35));
vaningOne.addRoom(new Room("wc", false, false, 5));

//======================

var vaningTwo = new Vaning("två");
vaningTwo.addRoom(new Room("hall", false, true, 15));
vaningTwo.addRoom(new Room("wc", false, false, 3));
vaningTwo.addRoom(new Room("sovrum", false, false, 15));
vaningTwo.addRoom(new Room("sovrum", false, false, 15));
vaningTwo.addRoom(new Room("sovrum", false, false, 15));
vaningTwo.addRoom(new Room("sovrum", false, false, 20));

//======================

var hus = new Hus(1976);
hus.addVaning(vaningOne);
hus.addVaning(vaningTwo);

//==============================================================================

var jsonStr = JSON.stringify(hus);

console.log(jsonStr);

//==============================================================================

var parsedObj = JSON.parse(jsonStr);

//==============================================================================
//iterateParsedJson(parsedObj);

function iterateParsedJson(parsed) {
    for (var key in parsed) {
        //
        var value = parsed[key];
        //
        console.log(key + ":::");
        console.log(value);
        //
        if (typeof value === "object") {
            iterateParsedJson(value);
        }
        //
    }
}

//==============================================================================
var depth = 0;
var returArr = [];
//searchParsedJson(parsedObj, "floor", "ett", returArr);
//console.log("ready: " + returArr.toString());


function searchParsedJson(parsed, keyIn, valueIn, returArr) {
    for (var key in parsed) {
        //
        var value = parsed[key];
        //
        console.log(key + ":::");
        console.log(value);
        //
        if (keyIn === key && value === valueIn) {
            returArr.push(parsed);
        }
        //
        if (typeof value === "object") {
            depth++;
//            console.log("step in: " + depth);
            searchParsedJson(value, keyIn, valueIn, returArr);
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


var hus = {
    "byggar": 1976,
    "vaningar": [{
            "floor": "ett",
            "rooms": [{
                    "type": "hall",
                    "ytterDoor": true,
                    "trappa": true,
                    "area": 25
                }, {
                    "type": "kök",
                    "ytterDoor": false,
                    "trappa": false,
                    "area": 15
                }, {
                    "type": "vardagsrum",
                    "ytterDoor": false,
                    "trappa": false,
                    "area": 30
                }, {
                    "type": "wc",
                    "ytterDoor": false,
                    "trappa": false,
                    "area": 5
                }]
        }, {
            "floor": "två",
            "rooms": [{
                    "type": "hall",
                    "ytterDoor": false,
                    "trappa": true,
                    "area": 15
                }, {
                    "type": "wc",
                    "ytterDoor": false,
                    "trappa": false,
                    "area": 3
                }, {
                    "type": "sovrum",
                    "ytterDoor": false,
                    "trappa": false,
                    "area": 15
                }, {
                    "type": "sovrum",
                    "ytterDoor": false,
                    "trappa": false,
                    "area": 15
                }, {
                    "type": "sovrum",
                    "ytterDoor": false,
                    "trappa": false,
                    "area": 15
                }]
        }]
};