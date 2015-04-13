//The code has been indented using JSbeautifier and also passes JShint

var main = function() {
    "use strict";
    $("#button").click(function() {
        var url = $("#url").val();


        var cliUrl = JSON.stringify({
            urlx: url
        });
        $.ajax({

                type: "POST",
                url: "/getUrl",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: cliUrl
            })
            .done(function(data) {

                $("#list").html("");
                $("#list").append("<a href=" + data.url + ">" + data.url + "</a>");


            });


    });

    $.ajax({

            type: "get",
            url: "/gettopten",
            contentType: "application/json; charset=utf-8",
            dataType: "json",

        })
        .done(function(data) {
            var i = 0;
            $(".tentop").append("<table>");
            $(".tentop").append("<tr><th>Long Url</th><th>Visits</th></tr>");
            for (i = 0; i < data.length; i++) {
                $(".tentop").append("<tr><td><a href='" + data[i].originalurl + "'>" + data[i].originalurl + "</a></td><td>" + data[i].views + "</td></tr>");

            }
            $(".tentop").append("</table>");


        });


};

$(document).ready(main);