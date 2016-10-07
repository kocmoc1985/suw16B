var cardType =
        [
            "clubs",
            "diamonds",
            "hearts",
            "spades"
        ];

var cardX =
        [
            "ace",
            "6",
            "7",
            "8",
            "9",
            "10",
            "jack",
            "queen",
            "king"
        ];

function createCards() {
    cards = [];
    for (i = 0; i < cardX.length; i++) {
        for (j = 0; j < cardType.length; j++) {
            cards.push({type: cardType[j], x: cardX[i]});
        }
    }
    return cards;
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

function randomCard() {
    return Math.ceil((Math.random() * cardsArr.length));
}

var takenCards = [];
function addCard(card) {
    takenCards.push(card);
}

function showTakenCards() {
    for (i = 0; i < takenCards.length; i++) {
        console.log("taken cards: " + takenCards[i].type + " / " + takenCards[i].x);
    }
}

function firstCard() {
    return (cardsArr.length - 1);
}

var cardsArr = createCards();

function play(randomCard, randomOrFirst) {
    shuffle(cardsArr);
    var card = cardsArr.splice(randomCard,1);
    console.log("taken card: " + card.type + " / " + card.x + "  " + randomOrFirst);
    addCard(card);
    showTakenCards();
    console.log("size:" + cardsArr.length);
    console.log("=============================================================");
}

//
play(randomCard(), "random");
play(randomCard(), "random");
play(randomCard(), "random");
//
play(firstCard(), "first");
play(firstCard(), "first");
play(firstCard(), "first");
//

