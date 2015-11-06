/**
 * Created by Hubert on 2015-10-16.
 */

$(function(){

    var Application = function(){
        function dropdownMenu(){
        $(".second-level").css({'opacity' : 0});
        var menu = $(".first-level");
            $(".set1").on("mouseenter", function(event){
                $(".drop1").css({'opacity':1});
            });
            menu.on("mouseleave", function(event){
                $(".drop1").css({'opacity':0});
            });

            $(".set2").on("mouseenter", function(event){
                $(".drop2").css({'opacity':1});
            });
            menu.on("mouseleave", function(event){
                $(".drop2").css({'opacity':0});
            });

            $(".set3").on("mouseenter", function(event){
                $(".drop3").css({'opacity':1});
            });
            menu.on("mouseleave", function(event){
                $(".drop3").css({'opacity':0});
            });
        }
        function headSlider(){
            var visible = 0;
            var left = $(".left-arrow");
            var right = $(".right-arrow");
            var image = $(".image li");

            image.eq(visible).show();
            image.eq(1).hide();
            image.eq(2).hide();

            left.on("click", function(event){
                image.eq(visible).hide();
                visible--;
                if(visible < 0) {
                    visible = image.length-1;
                }
                image.eq(visible).show();
            });

            right.on("click", function(event){
                image.eq(visible).hide();
                visible++;
                if(visible >= image.length) {
                    visible = 0;
                }
                image.eq(visible).show();
            });
        }
        return {
            dropdownMenu: dropdownMenu,
            headSlider: headSlider
        };
    };

    var app = new Application();
    app.dropdownMenu();
    app.headSlider();
});


