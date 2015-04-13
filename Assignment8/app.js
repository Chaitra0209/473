//This code has been indented on JSbeautifier and tested on JShint.

var express = require("express");
var http = require("http");
var path = require("path");
var MongoClient = require("mongodb").MongoClient;
var bodyParser = require("body-parser");
var app = express();


// borrowed from http://mongodb.github.io/node-mongodb-native/2.0/api/

var dbUrl = "mongodb://localhost:27017/test";


app.use(express.static(path.join(__dirname, "client")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
http.createServer(app).listen(3000);

function createShortUrl() {
    var temp = Date.now();
    return (temp.toString(36));

}


app.post("/getUrl", function(req, res) {
    var url = req.body.urlx;
    var index = url.indexOf("localhost:3000");
    MongoClient.connect(dbUrl, function(err,db) {


        var collection = db.collection("url", {
            capped: true,
            size: 100000
        });
        if (index > -1 && index < 8) {
            //Smaller Urls
            collection.find({
                smallurl: url
            }).toArray(function(err,items) {
                res.json({
                    "url": items[0].originalurl
                });
            });
        } else {
            //longer urls
            collection.find({
                originalurl: url
            }).toArray(function(err,items) {

                if (items.length <= 0) {
                    console.log("LongUrl does not exist yet");
                    //new URL creation
                    var smallurl = createShortUrl();
                    smallurl = "localhost:3000/" + smallurl;
                    var urlDb = {
                        smallurl: smallurl,
                        originalurl: url,
                        views: 1
                    };
                    collection.insert(urlDb, function(err, result) {
                        if (err) {
                            console.log(err);
                        } else {
                            res.json({
                                "url": smallurl
                            });
                        }
                    });

                } else {
                    //Already longURL exists
                    res.json({
                        "url": items[0].smallurl
                    });
                }
            });


        }


    });
});


app.get("/gettopten", function(req, res) {

    var url = req.params.url;
    url = "localhost:3000/" + url;
    MongoClient.connect(dbUrl, function(err,db) {

        var collection = db.collection("url", {
            capped: true,
            size: 100000
        });
        collection.find().sort({
            views: -1
        }).limit(10).toArray(function(err,items) {
            res.json(items);

        });

    });

});
app.get("/:url", function(req, res) {
    var url = req.params.url;
    url = "localhost:3000/" + url;
    MongoClient.connect(dbUrl, function(err,db) {

        var collection = db.collection("url", {
            capped: true,
            size: 100000
        });
        collection.find({
            smallurl: url
        }).toArray(function(err,items) {
            if (items.length <= 0) {
                res.status(404).send("URL does not exist");
            } else {
                collection.update({
                    smallurl: url //n changed
                }, {
                    $inc: {
                        views: 1
                    }
                });
                res.redirect(items[0].originalurl);
            }
        });


    });




});