//INIT

function init() {
    console.log("hello world");
}

class ScoreBoard {

    constructor() {
        //properties
        this.fieldName = "Wrigley Field";
        this.data = []; //scoreBoard.data could be something like JSON data
        this.balls = 0;
        this.strikes = 0;
        this.outs = 0;
        this.innings = [];
    }

    addBall () {
        //do one thing
        //gets info from data
        this.balls++;
    }

    addStrike () {
        this.strikes++;
    }

    addOut () {
        this.outs++;
    }
    

}

// create the state object
let scoreBoard = new ScoreBoard();