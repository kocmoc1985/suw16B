//
var DICE_SET = new DiceSet();
var DICES_ARR = DICE_SET.dices;
//
//
$(document).ready(function () {
    go();
});

function go() {
    addEventTestBtn();
}

function addEventTestBtn() {
    $("#testBtn").click(function () {
        makeThrow(DICES_ARR);
        console.log(DICE_SET.toString());
    });
}

function makeThrow(arr) {
    //
    DICE_SET.throw();
    //
    var i = 0;
    //
    $(".dice-img").each(function () {

        $(this).fadeOut(100, function () {
            $(this).attr("src", "images/dice_" + arr[i].result + ".png");
            $(this).data("result", arr[i].result);
            $(this).data("closed", arr[i].closed);
            $(this).delay(400 * i).fadeIn(500);
            i++;
        });
    });
    //
}

function wait(millis) {
    var date = new Date();
    var curDate = null;
    do {
        curDate = new Date();
    } while (curDate - date < millis);
}

function DiceSet() {
    this.dices = [];
    this.throws = 0;

    this.createDices = function () {
        for (var i = 0; i < 5; i++) {
            var dice = new Dice(i);
            this.dices.push(dice);
        }
    };

    this.createDices();

    this.calcSum = function () {
        var sum;

        for (var i = 0; i < this.dices.length; i++) {
            sum += this.dices[i].result;
        }

        return sum;
    };

    this.throw = function () {

        if (this.throws === 3) {
            this.reset();
        }

        for (var i = 0; i < this.dices.length; i++) {
            if (this.dices[i].locked === false) {
                this.dices[i].throw();
            }
        }
        this.throws++;
    };


    this.reset = function () {
        for (var i = 0; i < this.dices.length; i++) {
            this.dices[i].reset();
        }
        this.throws = 0;
    };

    this.printAll = function () {
        for (var i = 0; i < this.dices.length; i++) {
            console.log(this.dices[i].toString());
        }
    };

    this.isRuleOneToSix = function (oneToSix) {
        for (var i = 0; i < this.dices.length; i++) {
            if (this.dices[i].result !== oneToSix) {
                return false;
            }
        }
        return true;
    };

    this.isRuleYatzy = function () {
        var firstVal;

        for (var i = 0; i < this.dices.length; i++) {
            if (i === 0) {
                firstVal = this.dices[i].result;
            } else {
                if (this.dices[i].result !== firstVal) {
                    return false;
                }
            }
        }
        return true;
    };

    this.toString = function () {
        return "throws: " + this.throws
                + "\n isRuleOnes: " + this.isRuleOneToSix(1)
                + "\n isRuleYatzy: " + this.isRuleYatzy();
    };

}

function Dice(nr) {
    this.nr = nr;
    this.result = 0;
    this.locked = false;

    this.throw = function () {
        this.result = Math.ceil(Math.random() * 6);
        return this.result;
    };

    this.lock = function () {
        this.locked = true;
    };

    this.unlock = function () {
        this.locked = false;
    };

    this.reset = function () {
        this.result = 0;
        this.locked = false;
    };

    this.toString = function () {
        return "nr: " + nr + " / result: " + this.result + " / locked: " + this.locked;
    };
}



