#!/usr/bin/env node

"use strict";
var express = require("express"),
http = require("http");
    
var rplss=[
"rock",
"paper",
"scissors",
"lizard",
"spock"
];




var result;
var win = 0;
var lose = 0;
var tie = 0;
var randNum;
var serverRply;

var app = express();
http.createServer(app).listen(3000);

// app = express();
//http.createServer(app).listen(3000);



function randomNum (low,high) {
    return Math.floor(Math.random() * (high - low + 1)) + low;
}

app.use(express.static(__dirname));


    app.post("/play/rock" , function (req,res) {

        randNum=randomNum(0,4);
            serverRply=rplss[randNum];

            switch(serverRply) {
                case "rock":
                result="tie";
                tie++;
                break;

                case "paper":
                result="lose";
                lose++;
                break;

                case "scissors":
                result="win";
                win++;
                break;

                case "lizard":
                result="win";
                win++;
                break;

                case "spock":
                result="lose";
                lose++;
                break;
            }
            

            res.json({result:result, win:win, lose:lose, tie:tie});
        });

    	
    



    app.post("/play/paper", function (req,res) {

    randNum=randomNum(0,4);
            serverRply=rplss[randNum];
                
            switch(serverRply) {
                case "rock":
                result="win";
                win++;
                break;

                case "paper":
                result="tie";
                tie++;
                break;

                case "scissors":
                result="lose";
                lose++;
                break;

                case "lizard":
                result="lose";
                lose++;
                break;

                case "spock":
                result="win";
                win++;
                break;
            }
 res.json({result:result, win:win, lose:lose, tie:tie});
});



app.post("/play/scissors", function (req,res){



    randNum=randomNum(0,4);
            serverRply=rplss[randNum];

            switch(serverRply) {
                case "rock":
                result="lose";
                lose++;
                break;

                case "paper":
                result="win";
                win++;
                break;

                case "scissors":
                result="tie";
                tie++;
                break;

                case "lizard":
                result="win";
                win++;
                break;

                case "spock":
                result="lose";
                lose++;
                break;
            }
 res.json({result:result, win:win, lose:lose, tie:tie});


});

app.post("/play/lizard",function (req,res){

    randNum=randomNum(0,4);
            serverRply=rplss[randNum];

            switch(serverRply) {
                case "rock":
                result="lose";
                lose++;
                break;

                case "paper":
                result="win";
                win++;
                break;

                case "scissors":
                result="lose";
                lose++;
                break;

                case "lizard":
                result="tie";
                tie++;
                break;

                case "spock":
                result="win";
                win++;
                break;
}

res.json({result:result, win:win, lose:lose, tie:tie});

});

app.post("/play/spock", function (req,res){

    randNum=randomNum(0,4);
            serverRply=rplss[randNum];
            
            switch(serverRply) {
                case "rock":
                result="win";
                win++;
                break;

                case "paper":
                result="lose";
                lose++;
                break;

                case "scissors":
                result="win";
                win++;
                break;

                case "lizard":
                result="lose";
                lose++;
                break;

                case "spock":
                result="tie";
                tie++;
                break;
}

res.json({result:result, win:win, lose:lose, tie:tie});


});
