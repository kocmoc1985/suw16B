var bostadsTyper = ["villa", "sommarhus", "bostadsrätt", "hyresrätt"];

var adresser = ["sveagatan 19", "storagatan 14", "sommarvägen 17", "vintervägen 89", "höstvägen 67"];

var bostad = [];

function create() {
    for (i = 0; i < adresser.length; i++) {
        bostad.push({type: randomType(), addr: adresser[i]});
    }
}


function randomType() {
    var random = Math.floor(Math.random() * bostadsTyper.length);
    console.log("random: " + random);
    return bostadsTyper[random];
}


function printArr(arr) {
    for (i = 0; i < arr.length; i++) {
        console.log("type: " + arr[i].type + "  addr: " + arr[i].addr);
    }
}

function deleteBy(type, addr) {
    if (!type) {
        for (i = 0; i < bostad.length; i++) {
            if (bostad[i].type === type) {
                bostad.splice(i, 1);
            }
        }
    }

    if (!addr) {
        for (i = 0; i < bostad.length; i++) {
            if (bostad[i].addr === addr) {
                bostad.splice(i, 1);
            }
        }
    }

}

function deleteByB(key, value) {
    for (var i = bostad.length-1; i >= 0; i--) {
        if (bostad[i][key] === value) {
            bostad.splice(i, 1);
        }
    }
}


create();
deleteByB("type", "villa");
printArr(bostad);