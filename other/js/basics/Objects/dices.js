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

        for (var i = 0; i < this.dices.length; i++) {
            if (this.dices[i].locked === false) {
                this.dices[i].throw();
            }
        }
        this.throws++;
    };

    this.toThrow = function () {
        var toThrow = 0;
        for (var i = 0; i < this.dices.length; i++) {
            if (this.dices[i].locked === false) {
                toThrow++;
            }
        }
        return toThrow;
    };

    this.allLocked = function () {
        var locked = 0;
        for (var i = 0; i < this.dices.length; i++) {
            if (this.dices[i].locked) {
                locked++;
            }
        }

        if (locked === 5) {
            return true;
        } else {
            return false;
        }

    };

    this.removeLockedIcons = function () {
        for (var i = 0; i < this.dices.length; i++) {
            this.dices[i].removeLockedIcon();
        }
        removeAllClassesX("dice-locked");
    };

    function removeAllClassesX(class_) {
        $("." + class_).each(function () {
            $(this).removeClass(class_);
        });
    }

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
}

function Dice(nr) {
    this.nr = nr;
    this.result = 0;
    this.locked = false;
    this.lockedIcon;

    this.setLockedIcon = function (lockedIcon) {
        this.lockedIcon = lockedIcon;
        audioDiceLock();
    };

    this.removeLockedIcon = function () {
        $(this.lockedIcon).remove();
        audioDiceUnlock();
    };

    this.throw = function () {
        this.result = Math.ceil(Math.random() * 6);
        audioThrow();
        return this.result;
    };

    this.toggleLock = function () {
        if (this.locked === true) {
            this.locked = false;
        } else if (this.locked === false) {
            this.locked = true;
        }
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
