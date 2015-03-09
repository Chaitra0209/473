var yelp = require("yelp").createClient({
  consumer_key: "ZfsdqOyHkpoILwcUmWx1yQ", 
  consumer_secret: "Ry6Cz_4F_Q98GIEWEt_uwOiOkmE",
  token: "x-HGvtSuajvWQ6ctGVTKO1lNPcs1_jPu",
  token_secret: "fSn3ZYk_lcNHdz6y96WeVJF238c"
});

// See http://www.yelp.com/developers/documentation/v2/search_api
yelp.search({term: "restaurants", location: "Fullerton" , limit: 5 }, function  (error, data) {
  console.log(error);
  console.log(data);
});

// See http://www.yelp.com/developers/documentation/v2/business
yelp.business("yelp-san-francisco", function (error, data) {
  console.log(error);
  console.log(data);
});

