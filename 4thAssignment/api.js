/*http://www.smashingmagazine.com/2012/02/09/beginners-guide-jquery-based-json-api-clients/  */




$(document).ready(function(){
//This is to remove the validation message if no restaurant is present

   $('#term').focus(function(){
      var full = $("#list").has("p").length ? true : false;
      if(full == false){
         $('#list').empty();
      }
   });


   var getList = function(){

   	//Grab the city name and store it in a variable

   	var ville = $('#term').val();

   	//Check if the user has entered anything

   	if(ville == ''){
   		//If the input field was empty, display a message

   		$('#list').html("<h2 class='loading'>Please enter something.</h2>");

   	} 	else {

   		/*They must have entered a value, carry on with API call,
   		 first display a loading message to notify the user of activity */

   		 $('#list').html("<h2 class='loading'>The restos list is on its way!</h2>");

   		 var url = "http://api.yelp.com/v2/search?ZfsdqOyHkpoILwcUmWx1yQ/x-HGvtSuajvWQ6ctGVTKO1lNPcs1_jPu/"+"term=yelp&city=ville&format=json&jsoncallback=?";

   		 	//after search , it is the consumer key and the token in the url

   		 $.getJSON(url, function(yelpRply) {

               
               /*if (json != "Nothing found."){

                  //Display the restaurant and a message announcing the result

                     $('#poster').html('<h2 class="loading">Well, gee whiz! We found you a poster, skip!</h2><img id="thePoster" src=' + json[0].posters[0].image.url + ' />'); */

                     yelpRply.location.forEach(function (line) {

                     	var $p = $("<p>");
                     	$p.attr("src",line.businesses.mobile_url);

                     	$('#list').append($p);
                     } 	);


   }

}

};

};