//
var DICE_SET = new DiceSet();
var DICES_ARR = DICE_SET.dices;
//
var player1 = new Player("Player 1");
var player2 = new Player("Player 2");
var spelPlan = new Spelplan();
spelPlan.addPlayer(player1);
spelPlan.addPlayer(player2);

$(document).ready(function () {
    spelPlan.createTable();
    //
    player1.setActive();
    //
    addEventThrowBtn();
    addEventDice();
    addEventCommonCellCliked();
    //
    addEventTestBtn();
});

function addEventTestBtn() {
    $("body").on('click', '#testBtn', function () {
        player1.resetPossibleAlternatives();
    });
}

function addEventCommonCellCliked() {
    $("body").on('click', '.common-cell', function () {
        var cellObj = $(this).data("cellObj");
        cellObj.setSelected();
    });
}

function addEventDice() {
    $(".dice-img").click(function () {

        var diceObj = $(this).data("diceObj");

        //Locking must only work when ammount of throws <= 2
        if (DICE_SET.throws <= 2) {
            $(this).toggleClass("dice-locked");
            toggleLockedIcon($(this), diceObj);
            diceObj.toggleLock();
        }
        console.log("" + diceObj.toString());
    });
}

function toggleLockedIcon(diceElem, diceObj) {
    if (diceObj.locked === false) {
        var offset = $(diceElem).offset();
        var width = $(diceElem).outerWidth(true);
        //
        var icon = $.parseHTML("<img src='images/locked.png' alt='locked'>");
        $(icon).css("position", "absolute");
        $(icon).css("top", offset.top + "px");
        $(icon).css("left", (offset.left + width) + "px");
        $("body").append(icon).show('slow');
        //
        diceObj.setLockedIcon(icon);
        //
    } else if (diceObj.locked) {
        diceObj.removeLockedIcon();
    }

    $("body").on("click", ".new-game-button", function () {
        DICE_SET.reset();
        DICE_SET.removeLockedIcons();
    });
}

function addEventThrowBtn() {
    $("#throwBtn").click(function (event) {
        event.preventDefault();
        makeThrow(DICES_ARR);
        console.log("" + DICE_SET.toString());
    });
}

var inProgress = false;

function makeThrow(arr) {
    //
    if (inProgress) {
        return;
    }
    //
    if (DICE_SET.allLocked()) {
        alert("All locked");
        return;
    }
    //
    if (DICE_SET.waitForScore) {
        return;
    }
    //
    DICE_SET.throw();
    //
    if (DICE_SET.waitForScore) {
        $("#throwBtn").removeClass("btn-success");
        $("#throwBtn").addClass("btn-danger");
    }
    //
    var i = 0;
    var animationReady = 0;
    //
    $(".dice-img").each(function () {
        inProgress = true;
        // All dices must be unlocked on the first throw
        if (DICE_SET.throws === 1) {
            $(this).removeClass("dice-locked");
        }
        //
        if ($(this).hasClass("dice-locked") === false) {
            $(this).animate({opacity: 0}, 200, function () {
                $(this).attr("src", "images/dice_" + arr[i].result + ".png");
                $(this).attr("alt", "dice_" + arr[i].result + ".png");
                $(this).data("diceObj", arr[i]);
                $(this).delay(400 * i).animate({opacity: 1}, 500, function () {
                    animationReady++;
                    if (animationReady === DICE_SET.toThrow()) {
                        //
                        inProgress = false;
                        //
                        spelPlan.getActivePlayer().showPossibleAlternativesAfterThrow();
                        //
                    }
                });
                i++;
            });
        } else {
            i++;
        }
    });
    //
}