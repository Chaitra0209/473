var main = function () {
    var toDos = ["Get groceries",
                 "Make up some new ToDos",
                 "Prep for Monday's class",
                 "Answer emails",
                 "Take Gracie to the park",
                 "Finish writing this book"];

    $(".tabs a span").toArray().forEach(function (element) {
        var $element = $(element);

        // create a click handler for this element
        $element.on("click", function () {
            var $content,
                $input,
                $button,
                i;

            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();

            if ($element.parent().is(":nth-child(1)")) {
                // newest first, so we have to go through
                // the array backwards
                $content = $("<ul>");
                for (i = toDos.length-1; i >= 0; i--) {
                    $content.append($("<li>").text(toDos[i]));
                }
            } else if ($element.parent().is(":nth-child(2)")) {
                // oldest first, so we go through the array forwards
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });
            } else if ($element.parent().is(":nth-child(3)")) {
                // input a new to-do



                $input = $("<input>"),
                $button = $("<button>").text("+");

                $button.on("click", function () {
                    if ($input.val() !== "") {
                        toDos.push($input.val());
                        $input.val("");
                    }
                });

                $content = $("<div>").append($input).append($button);
               /* Alternatively append() allows multiple arguments so the above
                can be done with $content = $("<div>").append($input, $button); */
            } /*Adding the func for demo tab here*/  

           else if($element.parent().is(":nth-child(4)")) {

             //$content.append($("a.gallery").colorbox({rel:'.a gallery'}));
              
              /* OR  */
              $content=$("<div>");
            $content.append($("<a class='gallery' href='Screenshot_newest.png'>Newest_tab<br><br></a>"));
            $content.append($("<a class='gallery' href='Screenshot_oldest.png'>Oldest_tab<br><br></a>\n"));
            $content.append($("<a class='gallery' href='Screenshot_Add.png'>Add_tab<br><br></a>\n"));
            $content.append($("<a class='gallery' href='Screenshot_new_Newest.png'>Newest_tab_after_adding</a>"));

              //$("a.gallery").colorbox();
              //console.log('colorbox');

              }

      $("main .content").append($content);

        $("a.gallery").colorbox({rel:'gallery', slideshow:true});
            return false;
        });
    });

    $(".tabs a:first-child span").trigger("click");
};

$(document).ready(main);            




                                /* 

                $content = $("<iframe src='index.html' width='1000' height='800'>start slideshow </iframe>");

                $content = $("<iframe src='../slideshow/index.html' width='500' height='500'>start slideshow </iframe>");



                $(".a gallery Screenshot_newest.png").colorbox();
            $(".a gallery Screenshot_oldest.png").colorbox();
            $(".a gallery Screenshot_Add.png").colorbox();
            $(".a gallery Screenshot_new_Newest.png").colorbox();

                group1.forEach(function() {

                $content.append($('a.gallery').colorbox({rel:'group1'}));

                });


                    $.colorbox({content:"<a class='gallery' href='Screenshot_newest.png'>Newest_tab</a>"});
            $.colorbox({content:"<a class='gallery' href='Screenshot_oldest.png'>Oldest_tab</a>"});
            $.colorbox({content:"<a class='gallery' href='Screenshot_Add.png'>Add_tab</a>"}); 
            $.colorbox({content:"<a class='gallery' href='Screenshot_new_Newest.png'>Newest_tab_after_adding</a>"});
                    


                $(document).ready(function () {
                

                $('a.gallery').colorbox({ opacity:0.5 , rel:'group1' });
            });
                    $.colorbox({href:"colorbox.html"});
                    $('a.gallery').colorbox({rel:'group1'});

                    $.colorbox({html:"<a class='gallery' href='Screenshot_newest.png'>Newest_tab</a>\n"});
            $.colorbox({html:"<a class='gallery' href='Screenshot_oldest.png'>Oldest_tab</a>\n"});


             $("a.gallery").colorbox({rel: 'group1', title: function(){
  var url = $(this).attr('href');
  return '<a href="' + Screenshot_newest.png + '" target="_blank">Open In New Window</a>';
}});



                      var gal=["photo_1",
                         "photo_2",
                         "photo_3",
                         "photo_4"];
                         var i;

                  $content = $("<ul><li>");
                  gal.forEach(function (galry)   {
                    $content.append($("<a class='gallery' href='Screenshot_newest.png'></a>\n").text(galry));

                    }  );

                  $(".href").append("<a>")
                    /*$content.append("<a class='gallery' href='Screenshot_oldest.png'>Oldest_tab</a>\n").text(galry));
                    $content.append("<a class='gallery' href='Screenshot_Add.png'>Add_tab</a>\n").text(galry));
                    $content.append("<a class='gallery' href='Screenshot_new_Newest.png'>Newest tab after adding</a>\n").text(galry)); 
                  

                           
                /*$content.append("<a class='gallery' href='Screenshot_newest.png'>Newest_tab</a>\n");
                $content.append("<a class='gallery' href='Screenshot_oldest.png'>Oldest_tab</a>\n");
                $content.append("<a class='gallery' href='Screenshot_Add.png'>Add_tab</a>\n");
                $content.append("<a class='gallery' href='Screenshot_new_Newest.png'>Newest tab after adding</a>\n");  */
                
           


             
 

            




            /*actu prog contd frm below*/

            

