//This code has been indented using jsbeautifier.org and tested on JSHint
var http = require("http");
var socketIo = require("socket.io");
// fetching socket library in the above statement 
var express = require("express");



var mongoose = require("mongoose");
var app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.bodyParser());

var socket;

// connecting to the mongo containing amazeriffic data store
mongoose.connect('mongodb://localhost/amazeriffic');

// Mongoose model for list of todo things
var ToDoList = mongoose.Schema({
    description: String,
    tags: [String]
});

var ToDo = mongoose.model("ToDo", ToDoList);

var server = http.createServer(app);
var io = socketIo(server);
server.listen(3000);


//io.on has a pre-defined event-name called connection and also a callback - when there is a new connection 
io.on("connection", function(sct) {
    console.log("connected");
    socket = sct;
});
app.get("/todos.json", function(req, res) {
    ToDo.find({}, function(err, toDos) {
        res.json(toDos);
    });
});

function sendAll(result) {
    socket.emit('newToDO', result);

}


app.post("/todos", function(req, res) {
    console.log(req.body);
    var newToDo = new ToDo({
        "description": req.body.description,
        "tags": req.body.tags
    });
    newToDo.save(function(err, result) {
        if (err !== null) {
            // the element did not get saved!
            console.log(err);
            res.send("ERROR");
        } else {
            // our client expects *all* of the todo items to be returned, so we'll do
            // an additional request to maintain compatibility
            ToDo.find({}, function(err, result) {
                if (err !== null) {
                    // the element did not get saved!
                    res.send("ERROR");
                }
                //Sending update to all users
                sendAll(result);
                res.json(result);
            });
        }
    });
});