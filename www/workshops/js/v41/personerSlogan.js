var persons =
        [
            {name: "John"},
            {name: "George"},
            {name: "Bill"}
        ];


var slogans = ["Heja", "Hurra", "Hippi", "Yohoo"];


function assignSlogans() {
    for (i = 0; i < persons.length; i++) {
        var slogan = randomSlogan();
        persons[i].slogan = slogan;
    }
}

function randomSlogan() {
    var random = Math.floor(Math.random() * slogans.length); //random mellan 0 och 3
    console.log("random:" + random);
    return slogans[random];
}

function print() {
    for (i = 0; i < persons.length; i++) {
        console.log("name: " + persons[i].name + "  slogan: " + persons[i].slogan);
    }
}


assignSlogans();
print();
