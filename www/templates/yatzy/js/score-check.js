var checkScore = {
    One: null,
    Two: null,
    Three: null,
    Four: null,
    Five: null,
    Six: null,
    Sum: null,
    Bonus: null,
    Pair: null,
    TwoPair: null,
    Threesome: null,
    Foursome: null,
    SmallStraight: null,
    LargeStraight: null,
    FullHouse: null,
    Chance: null,
    Yahtzee: null
};

(function () {
    checkScore.One = function () {
        return sumDigit(1);
    };
    checkScore.Two = function () {
        return sumDigit(2);
    };
    checkScore.Three = function () {
        return sumDigit(3);
    };
    checkScore.Four = function () {
        return sumDigit(4);
    };
    checkScore.Five = function () {
        return sumDigit(5);
    };
    checkScore.Six = function () {
        return sumDigit(6);
    };

    checkScore.Sum = function () {
        return 0;
    };
    checkScore.Bonus = function () {
        return 0;
    };

    checkScore.Pair = function () {
        return multiples(2);
    };
    checkScore.TwoPair = function () {
        return twoPair();
    };
    checkScore.Threesome = function () {
        return multiples(3);
    };
    checkScore.Foursome = function () {
        return multiples(4);
    };

    checkScore.SmallStraight = function () {
        return hasStraightWithout(6) ? 15 : 0;
    };
    checkScore.LargeStraight = function () {
        return hasStraightWithout(1) ? 20 : 0;
    };

    checkScore.FullHouse = function () {
        return fullHouse();
    };
    checkScore.Chance = function () {
        return arraySum(DICES_ARR);
    };
    checkScore.Yahtzee = function () {
        return multiples(5) ? 50 : 0;
    };


    function sumDigit(aDigit) {
        return aDigit * countDigit(aDigit);
    }

    function hasStraightWithout(aNumber) {
        return !countDigit(aNumber) && !multiples(2);
    }

    function multiples(anAmount) {
        for (var i = 6; i >= 1; --i) {
            if (countDigit(i) >= anAmount) {
                return anAmount * i;
            }
        }

        return 0;
    }

    function twoPair() {
        var pairs = [];

        for (var i = 1; i <= 6; ++i) {
            if (countDigit(i) >= 2) {
                pairs.push(2 * i);
            }
        }

        return pairs.length == 2 ? arraySum(pairs) : 0;
    }

    function fullHouse() {
        var threeSum = multiples(3);

        if (threeSum) {
            for (var i = 1; i <= 6; ++i) {
                if (countDigit(i) == 2) {
                    return 2 * i + threeSum;
                }
            }
        }

        return 0;
    }

    function arraySum(anArray) {
        var sum = 0;

        for (var i = 0; i < anArray.length; ++i) {
            if (typeof anArray[i] == 'number') {
                sum += anArray[i];
            } else {
                sum += anArray[i].result;
            }
        }

        return sum;
    }

    function countDigit(aDigit) {
        var sum = 0;

        DICES_ARR.forEach(function (value) {
            if (value.result == aDigit) {
                sum++;
            }
        });

        return sum;
    }
})();


