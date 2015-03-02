var main=function () { 

"use strict";

function fizzbuzz_1() {

	var i; 

for(i=1;i<=100;i++) { 

if(i%15===0){ 

//console.log("FizzBuzz"); 
$("#col1").append("<p>FizzBuzz</p>\n");

} else if (i%5===0) { 

//console.log("Buzz"); 
$("#col1").append("<p>Buzz</p>\n");

} else if(i%3===0) { 

//console.log("Fizz") ;
$("#col1").append("<p>Fizz</p>\n");

}else { 

//console.log(i); 
$("#col1").append("<p>" +i +"</p>\n");


} } 
}fizzbuzz_1();

function fizzbuzz_2(start,end) {

	var i; 

for(i=start;i<=end;i++) { 

if(i%15===0){ 

//console.log("FizzBuzz"); 
$("#col2").append("<p>FizzBuzz</p>\n");

} else if (i%5===0) { 

//console.log("Buzz"); 
$("#col2").append("<p>Buzz</p>\n");

} else if(i%3===0) { 

//console.log("Fizz") ;
$("#col2").append("<p>Fizz</p>\n");

}else { 

//console.log(i); 
$("#col2").append("<p>" +i +"</p>\n");


} } 
} fizzbuzz_2(200,300); 




function fizzbuzz_3(arr) {

	var i; 


for(i=0;i<=arr.length;i++) { 

if(arr[i]%15===0){ 

//console.log("FizzBuzz"); 
$("#col3").append("<p>FizzBuzz</p>\n");

} else if (arr[i]%5===0) { 

//console.log("Buzz"); 
$("#col3").append("<p>Buzz</p>\n");

} else if(arr[i]%3===0) { 

//console.log("Fizz") ;
$("#col3").append("<p>Fizz</p>\n");

}else { 

//console.log(i); 
$("#col3").append("<p>" +arr[i] +"</p>\n");


}} 
} fizzbuzz_3([101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115]); 



function fizzbuzz_4(obj) {

	var i; 


for(i=1;i<=100;i++) { 

	
/*if(i%15===0){ 

//console.log("FizzBuzz"); 
$("main").append("<p>FizzBuzz</p>\n");

} else */ if (i%5===0) { 

//console.log("Buzz"); 
$("#col4").append("<p>"+obj.divisibleByFive+"</p>\n");

} else if(i%3===0) { 

//console.log("Fizz") ;
$("#col4").append("<p>"+obj.divisibleByThree+"</p>\n");

}else { 

//console.log(i); 
$("#col4").append("<p>" +i +"</p>\n");


} } 
} fizzbuzz_4({ divisibleByThree: "foo", divisibleByFive: "bar"}); 


function fizzbuzz_5(arr,obj) {

	var i; 


for(i=0;i<=arr.length;i++) { 

	
/*if(i%15===0){ 

//console.log("FizzBuzz"); 
$("main").append("<p>FizzBuzz</p>\n");

} else */ if (arr[i]%5===0) { 

//console.log("Buzz"); 
$("#col5").append("<p>"+obj.divisibleByFive+"</p>\n");

} else if(arr[i]%3===0) { 

//console.log("Fizz") ;
$("#col5").append("<p>"+obj.divisibleByThree+"</p>\n");

}else { 

//console.log(i); 
$("#col5").append("<p>" +arr[i] +"</p>\n");


} } 


} fizzbuzz_5([101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115],{ divisibleByThree: "foo", divisibleByFive: "bar"}); 

};

$(document).ready(main);




