/*http://www.smashingmagazine.com/2012/02/09/beginners-guide-jquery-based-json-api-clients/  */

var main = function () {
"use strict";
var url = /* some kind of linking to api_server.js  or defining those variables here .*/

$.getJSON(url, function (yelpRply) {

yelpRply.businesses.forEach (function (list) {
   var $na = $("<p>").hide();
   $na.attr(list.name);
   $("main .name").append($na);
   $na.fadeIn();

});

});
};

$(document).ready(main);








