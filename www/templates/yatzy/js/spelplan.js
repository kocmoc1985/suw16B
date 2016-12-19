
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
    };

    this.setInactive = function () {
        this.active = true;
        $(this.TH).removeClass('active-player');
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
        var isEttor = true;
        var isTvaor = true;

        for (var i = 0; i < this.scoreCells.length; i++) {
            if (isEttor) {
                if (this.scoreCells[i].type === 'Ettor') {
                    this.scoreCells[i].highlightPossibleAlternative();
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
            var scoreCell = new ScoreCell(this.playerName, ruleNames[i]);
            this.scoreCells.push(scoreCell);
        }
    };
    //
    this.createScoreCells();
}

function ScoreCell(playerName, type) {
    //
    this.TD;
    //
    this.playerName = playerName;
    this.type = type;
    this.selected = false;
    this.possibleAlternative = false;
    this.score = 0;
    this.isCalcSummCol = false;
    //
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
    };

    this.highlightPossibleAlternative = function () {
        this.possibleAlternative = true;
        $(this.TD).addClass("possible-alternative");
    };

    this.setCalcSummCol = function () {
        this.isCalcSummCol = true;
    };

    this.setTD = function (TD) {
        this.TD = TD;
    };

    this.setSelected = function () {
        $(this.TD).addClass("col-selected");
        this.selected = true;
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

    $("body").on('click', '.common-cell', function () {
        var cellObj = $(this).data("cellObj");
        cellObj.setSelected();
    });

    this.addPlayer = function (player) {
        player.setPlayerNr(this.players.length);
        this.players.push(player);
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
                    $(td).text(this.players[i].playerNr + " / " + this.players[i].scoreCells[x].type);
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
        var tr_for_th = $.parseHTML("<tr></tr>");
        //
        for (var i = -1; i < this.players.length; i++) {
            //

            //
            var th = $.parseHTML("<th></th>");
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

$(document).ready(function () {
    var player1 = new Player("Player 1");
    var player2 = new Player("Player 2");

    var spelPlan = new Spelplan();
    spelPlan.addPlayer(player1);
    spelPlan.addPlayer(player2);
    spelPlan.createTable();

    player1.setActive();
    player1.showPossibleAlternativesAfterThrow();

    //============
    addEventTestBtn();
    function addEventTestBtn() {
        $("#testBtn").click(function () {
            player1.resetPossibleAlternatives();
        });
    }
});

