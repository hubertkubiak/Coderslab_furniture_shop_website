/**
 * Created by Hubert on 2015-10-16.
 */

$(function(){

    var Application = function(){
        function dropdownMenu(){
        $(".second-level").css({'opacity' : 0});

            $(".set1").on("mouseenter", function(event){
                $(".drop1").css({'opacity':1});
            });
            $(".first-level").on("mouseleave", function(event){
                $(".drop1").css({'opacity':0});
            });

            $(".set2").on("mouseenter", function(event){
                $(".drop2").css({'opacity':1});
            });
            $(".first-level").on("mouseleave", function(event){
                $(".drop2").css({'opacity':0});
            });

            $(".set3").on("mouseenter", function(event){
                $(".drop3").css({'opacity':1});
            });
            $(".first-level").on("mouseleave", function(event){
                $(".drop3").css({'opacity':0});
            });
        }
        return {
            dropdownMenu: dropdownMenu
        };
    };

    var app = new Application();
    app.dropdownMenu();
});


