var main = function () {

	


	"use strict";

	var $b1=$("#button1");
	$b1.on("click",function(){

    
        
    $.ajax({
            
            type: "POST",
            url: "/play/rock",
            contentType: "application/json",
            charset:"utf-8",
            dataType: "json"
          
        })
        .done(function (data,status){

        	 $('#score').html("");
                $('#score').append("<div class='res>");
                $('#score').append("<p>result :");
                $('#score').append(data.result);
                $('#score').append("</p>");
                $('#score').append("<p>win");
                $('#score').append(data.win);
                $('#score').append("</p>");
                $('#score').append("<p>lose");
                $('#score').append(data.lose);
                $('#score').append("</p>");
                $('#score').append("<p>tie");
                $('#score').append(data.tie);
                $('#score').append("</p>");
                $('#score').append("</div>");
                  })
                    .fail(function (data, status){
            console.log("fail called");
            console.log(data);
            console.log(status);
        });
    
      
        
    });


var $b2=$("#button2");
$b2.on("click",function(){
$.ajax({
            
            type: "POST",
            url: "/play/paper",
            contentType: "application/json",
            charset:"utf-8",
            dataType: "json"
          
        })
.done(function (data,status){

             $('#score').html("");
                $('#score').append("<div class='res>");
                $('#score').append("<p>result :");
                $('#score').append(data.result);
                $('#score').append("</p>");
                $('#score').append("<p>win");
                $('#score').append(data.win);
                $('#score').append("</p>");
                $('#score').append("<p>lose");
                $('#score').append(data.lose);
                $('#score').append("</p>");
                $('#score').append("<p>tie");
                $('#score').append(data.tie);
                $('#score').append("</p>");
                $('#score').append("</div>");
                  })
                    .fail(function (data, status){
            console.log("fail called");
            console.log(data);
            console.log(status);
        });
    
      
        
    });

var $b3=$("#button3");
$b3.on("click", function (){

$.ajax({
            
            type: "POST",
            url: "/play/scissors",
            contentType: "application/json",
            charset:"utf-8",
            dataType: "json"
          
        })
.done(function (data,status){

             $('#score').html("");
                $('#score').append("<div class='res>");
                $('#score').append("<p>result :");
                $('#score').append(data.result);
                $('#score').append("</p>");
                $('#score').append("<p>win");
                $('#score').append(data.win);
                $('#score').append("</p>");
                $('#score').append("<p>lose");
                $('#score').append(data.lose);
                $('#score').append("</p>");
                $('#score').append("<p>tie");
                $('#score').append(data.tie);
                $('#score').append("</p>");
                $('#score').append("</div>");
                  })
                    .fail(function (data, status){
            console.log("fail called");
            console.log(data);
            console.log(status);
        });


});

var $b4=$("#button4");
$b4.on("click" , function (){

$.ajax({
            
            type: "POST",
            url: "/play/lizard",
            contentType: "application/json",
            charset:"utf-8",
            dataType: "json"
          
        })
.done(function (data,status){

             $('#score').html("");
                $('#score').append("<div class='res>");
                $('#score').append("<p>result :");
                $('#score').append(data.result);
                $('#score').append("</p>");
                $('#score').append("<p>win");
                $('#score').append(data.win);
                $('#score').append("</p>");
                $('#score').append("<p>lose");
                $('#score').append(data.lose);
                $('#score').append("</p>");
                $('#score').append("<p>tie");
                $('#score').append(data.tie);
                $('#score').append("</p>");
                $('#score').append("</div>");
                  })
                    .fail(function (data, status){
            console.log("fail called");
            console.log(data);
            console.log(status);
        });
});

var $b5=$("#button5");
$b5.on("click", function (){

$.ajax({
            
            type: "POST",
            url: "/play/spock",
            contentType: "application/json",
            charset:"utf-8",
            dataType: "json"
          
        })
.done(function (data,status){

             $('#score').html("");
                $('#score').append("<div class='res>");
                $('#score').append("<p>result :");
                $('#score').append(data.result);
                $('#score').append("</p>");
                $('#score').append("<p>win");
                $('#score').append(data.win);
                $('#score').append("</p>");
                $('#score').append("<p>lose");
                $('#score').append(data.lose);
                $('#score').append("</p>");
                $('#score').append("<p>tie");
                $('#score').append(data.tie);
                $('#score').append("</p>");
                $('#score').append("</div>");
                  })
                    .fail(function (data, status){
            console.log("fail called");
            console.log(data);
            console.log(status);
        });

});


};



$(document).ready(main);

