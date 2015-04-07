var express = require('express');
var http = require('http');
var path = require('path');
var redis = require('redis');
var bodyParser = require('body-parser');
var app = express();

client = redis.createClient();

app.use(express.static(path.join(__dirname, 'cli')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
http.createServer(app).listen(3000);

client.on("error", function(err) {
    console.log("Error" + err);
});

var lurl; //LongURL variable

var existsLurl = function(lurl, callback) {
    client.hget("sortx", "lurl", function(err, response) {
        callback(err, response);
    });
};

function sortUrlCreate() {
    var temp = Date.now();
    return (temp.toString(36));

}
app.post('/getUrl', function(req, res) {
    var url = req.body.urlx;
    var i = url.indexOf("localhost:3000");
    if (i > -1 && i < 8) {
        //sorturl
        client.hget(url, "lurl", function(err, response) {
            res.json({
                "url": response
            });

        });
    } else {
        //longurl
        client.hget(url, "sorturl", function(err, response) {
            if (response === null) {
                //LongUrl does not exist yet
                //create new url 
                var sorturl = sortUrlCreate();
                sorturl = "localhost:3000/" + sorturl;
                client.hset(url, "sorturl", sorturl, redis.print);
                client.hset(sorturl, "lurl", url, redis.print);
                client.zadd("views", 1, sorturl, redis.print);
                res.json({
                    "url": sorturl
                });
            } else {
                //LongUrl already exit
                res.json({
                    "url": response
                });
            }
        });


        //client.set("test","test",redis.print);

    }


});

app.get('/:url', function(req, res) {
    var url = req.params.url;
    url = "localhost:3000/" + url;
    client.hget(url, "lurl", function(err, response) {
        if (response === null) {
            res.status(404).send("Url does not exist");
        } else {

            res.redirect(response);
        }
    });

});