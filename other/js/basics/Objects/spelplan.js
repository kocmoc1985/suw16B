
var specialCols = [
    'Summa',
    'Bonus',
    'Totalt'
];

var calcSummCols = [
    'Ettor',
    'Tvåor',
    'Treor',
    'Fyror',
    'Femmor',
    'Sexor'
];

var ruleNames = [
    'Ettor',
    'Tvåor',
    'Treor',
    'Fyror',
    'Femmor',
    'Sexor',
    'Summa',
    'Bonus',
    'Ett Par',
    'Två Par',
    'Triss',
    'Fyrtal',
    'Liten Stege',
    'Stor Stege',
    'Kåk',
    'Chans',
    'Yatzy',
    'Totalt'
];

function Player(playerName) {
    this.TH;
    this.playerNr;
    this.playerName = playerName;
    this.thisPlayersTurn = false;
    this.scoreCells = [];
    this.active = false;

    this.setActive = function () {
        this.active = true;
        $(this.TH).addClass('active-player');
        this.togglePaintPlayersColumn();
    };

    this.togglePaintPlayersColumn = function () {
        if (this.active) {
            for (var i = 0; i < this.scoreCells.length; i++) {
                $(this.scoreCells[i].TD).addClass("active-player-col");
            }
        } else {
            for (var i = 0; i < this.scoreCells.length; i++) {
                $(this.scoreCells[i].TD).removeClass("active-player-col");
            }
        }
    };

    this.setInactive = function () {
        this.active = false;
        $(this.TH).removeClass('active-player');
        this.togglePaintPlayersColumn();
    };

    this.setTH = function (TH) {
        this.TH = TH;
    };

    this.setPlayerNr = function (nr) {
        this.playerNr = nr;
    };

    this.resetPossibleAlternatives = function () {
        for (var i = 0; i < this.scoreCells.length; i++) {
            this.scoreCells[i].resetPossibleAlternative();
        }
    };

    this.showPossibleAlternativesAfterThrow = function () {
        var ettor = checkScore.One();
        var tvaor = checkScore.Two();
        var treor = checkScore.Three();
        var fyror = checkScore.Four();
        var femmor = checkScore.Five();
        var sexor = checkScore.Six();

        for (var i = 0; i < this.scoreCells.length; i++) {
            if (ettor > 0) {
                if (this.scoreCells[i].type === 'Ettor' && this.scoreCells[i].score === 0) {
                    this.scoreCells[i].highlightPossibleAlternative(ettor);
                }
            }

            if (tvaor > 0) {
                if (this.scoreCells[i].type === 'Tvåor' && this.scoreCells[i].score === 0) {
                    this.scoreCells[i].highlightPossibleAlternative(tvaor);
                }
            }

            if (treor > 0) {
                if (this.scoreCells[i].type === 'Treor' && this.scoreCells[i].score === 0) {
                    this.scoreCells[i].highlightPossibleAlternative(treor);
                }
            }

            if (fyror > 0) {
                if (this.scoreCells[i].type === 'Fyror' && this.scoreCells[i].score === 0) {
                    this.scoreCells[i].highlightPossibleAlternative(fyror);
                }
            }

            if (femmor > 0) {
                if (this.scoreCells[i].type === 'Femmor' && this.scoreCells[i].score === 0) {
                    this.scoreCells[i].highlightPossibleAlternative(femmor);
                }
            }

            if (sexor > 0) {
                if (this.scoreCells[i].type === 'Sexor' && this.scoreCells[i].score === 0) {
                    this.scoreCells[i].highlightPossibleAlternative(sexor);
                }
            }
        }
    };

    this.calcAndShowSumm = function () {
        var summ = 0;
        var summCell;
        for (var i = 0; i < this.scoreCells.length; i++) {
            if (this.scoreCells[i].type === 'Summa') {
                summCell = this.scoreCells[i];
            }
            if (this.scoreCells[i].isCalcSummCol) {
                summ += this.scoreCells[i].score;
            }
        }
        $(summCell.TD).text(summ);
    };

    this.calcAndShowTotal = function () {
        var summ = 0;
        var totalCell;
        for (var i = 0; i < this.scoreCells.length; i++) {
            if (this.scoreCells[i].type === 'Totalt') {
                totalCell = this.scoreCells[i];
            }

            if (this.scoreCells[i].type !== 'Summa' && this.scoreCells[i].type !== 'Totalt') {
                summ += this.scoreCells[i].score;
            }
        }
        $(totalCell.TD).text(summ);
    };


    this.createScoreCells = function () {
        for (var i = 0; i < ruleNames.length; i++) {
            var scoreCell = new ScoreCell(this, this.playerName, ruleNames[i]);
            this.scoreCells.push(scoreCell);
        }
    };
    //
    this.createScoreCells();
}

function ScoreCell(player, playerName, type) {
    //
    this.TD;
    //
    this.player = player;
    this.playerName = playerName;
    this.type = type;
    this.selected = false;
    this.possibleAlternative = false;
    this.score = 0;
    this.isCalcSummCol = false;
    //
    this.isSpecialColumn = false;
    this.isSumm = false;
    this.isTotal = false;
    this.isBonus = false;
    //
    this.summ = 0;
    this.total = 0;
    this.bonus = 0;

    this.resetPossibleAlternative = function () {
        this.possibleAlternative = false;
        $(this.TD).removeClass("possible-alternative");
        if (this.score === 0 && this.isSpecialColumn === false) {
            $(this.TD).text("");
        }
    };

    this.highlightPossibleAlternative = function (value) {
        this.possibleAlternative = true;
        $(this.TD).text(value);
        $(this.TD).addClass("possible-alternative");
    };

    this.setCalcSummCol = function () {
        this.isCalcSummCol = true;
    };

    this.setTD = function (TD) {
        this.TD = TD;
    };

    this.acceptScore = function () {
        if (this.player.active === false || this.possibleAlternative === false) {
            return;
        }
        //
        this.toggleSelected();
        this.score = $(this.TD).text() / 1;
        this.player.calcAndShowSumm();
        this.player.calcAndShowTotal();
        var thiS = this;
        setTimeout(function () {
            thiS.toggleSelected();
            thiS.player.resetPossibleAlternatives();
            DICE_SET.reset();
            spelPlan.nextPlayer();
        }, 2000);

    };

    this.toggleSelected = function () {
        //
        if (this.player.active === false || this.possibleAlternative === false) {
            return;
        }
        //
        if (this.selected === false) {
            removeAllClassesX("col-selected");
            $(this.TD).addClass("col-selected");
            this.selected = true;
        } else {
            $(this.TD).removeClass("col-selected");
            this.selected = false;
        }
    };

    this.checkIfSpecialCol = function () {
        if (this.type === 'Summa') {
            this.summ1 = true;
            this.isSpecialColumn = true;
        } else if (this.type === 'Bonus') {
            this.isBonus = true;
            this.isSpecialColumn = true;
        } else if (this.type === 'Totalt') {
            this.isTotal = true;
            this.isSpecialColumn = true;
        }
    };

    this.checkIfSpecialCol();
}

function Spelplan() {
    this.players = [];

    this.addPlayer = function (player) {
        player.setPlayerNr(this.players.length);
        this.players.push(player);
    };

    this.nextPlayer = function () {
        var activePlayer = this.getActivePlayerNr();
        this.players[activePlayer].setInactive();
        if (activePlayer !== this.players.length - 1) {
            activePlayer++;
            this.players[activePlayer].setActive();
        } else {
            this.players[0].setActive();
        }
    };

    this.getActivePlayerNr = function () {
        for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].active) {
                return i;
            }
        }
        return -1;
    };

    this.getActivePlayer = function () {
        for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].active) {
                return this.players[i];
            }
        }
        return null;
    };

    this.createTable = function () {
        //
        $("body").remove('player-card');
        //
        var table = $.parseHTML("<table class='player-card'> </table>");
        //
        this.createTableHeaders(table);
        //
        for (var x = 0; x < ruleNames.length; x++) {
            //
            var tr = $.parseHTML("<tr></tr>");
            //
            var td = $.parseHTML("<td></td>");
            $(td).text(ruleNames[x]);
            $(tr).append(td);
            //
            if (this.checkIfSpecialCol(ruleNames[x])) {
                $(td).addClass("name-col-special");
            }
            //
            for (var i = 0; i < this.players.length; i++) {
                //
                var td = $.parseHTML("<td></td>");
                //
                if (this.checkIfSpecialCol(this.players[i].scoreCells[x].type) === false) {
                    //
                    if (this.checkIfCalcSummCol(this.players[i].scoreCells[x].type)) {
                        this.players[i].scoreCells[x].setCalcSummCol();
                        $(td).addClass("calc-summ-cell");
                    }
                    //
//                    $(td).text(this.players[i].playerNr + " / " + this.players[i].scoreCells[x].type);
                    $(td).addClass("common-cell");
                    //
                    this.applyStyleCommonCell(this.players[i].scoreCells[x], td);

                    $(td).data("cellObj", this.players[i].scoreCells[x]);
                } else {
                    $(td).addClass("col-special");
                }
                //
                this.players[i].scoreCells[x].TD = $(td);
                //
                $(tr).append(td);
                $(table).append(tr);
                //
                //
                //
                this.players[i].calcAndShowSumm();
                this.players[i].calcAndShowTotal();
            }
        }
        //
        $(".test-container").append(table);
        //
    };

    this.createTableHeaders = function (table) {
        //
        var tr_for_th = $.parseHTML("<tr></tr>");
        //
        for (var i = -1; i < this.players.length; i++) {
            //
            var th = $.parseHTML("<th></th>");
            //
            if (i === -1) {
                $(th).text("");
                $(th).addClass("empty-th");
            } else {
                $(th).text(this.players[i].playerName);
                this.players[i].setTH(th);
            }
            //
            $(tr_for_th).append(th);
            $(table).append(tr_for_th);
        }
    };

    this.applyStyleCommonCell = function (scoreCell, td) {
        if (scoreCell.selected) {
            $(td).addClass("col-selected");
        }
    };


    this.checkIfSpecialCol = function (colName) {
        for (var i = 0; i < specialCols.length; i++) {
            if (specialCols[i] === colName) {
                return true;
            }
        }
        return false;
    };

    this.checkIfCalcSummCol = function (colName) {
        for (var i = 0; i < calcSummCols.length; i++) {
            if (calcSummCols[i] === colName) {
                return true;
            }
        }
        return false;
    };
}

function removeAllClassesX(class_) {
    $("." + class_).each(function () {
        $(this).removeClass(class_);
    });
}

//$(document).ready(function () {
//    var player1 = new Player("Player 1");
//    var player2 = new Player("Player 2");
//
//    var spelPlan = new Spelplan();
//    spelPlan.addPlayer(player1);
//    spelPlan.addPlayer(player2);
//    spelPlan.createTable();
//
//    player1.setActive();
//    player1.showPossibleAlternativesAfterThrow();
//
//    //============
//    addEventTestBtn();
//    function addEventTestBtn() {
//        $("#testBtn").click(function () {
//            player1.resetPossibleAlternatives();
//        });
//    }
//});

