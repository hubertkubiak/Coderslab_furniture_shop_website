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
        function hamburger(){
            var ham = $(".hamburger");
            var menuhamburger = $(".menu-hamburger");
            ham.on("click", function(event){
                menuhamburger.toggleClass("unwind", 500);
            });
            var hamlinks = $(".ham a");
            hamlinks.on("click", function(event){
                menuhamburger.addClass("unwind", 500);
            })
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
        function customPrice(){
            var type = $("#type");
            var color = $("#color");
            var fabric = $("#fabric");
            var transport = $("#transport");
            var visible = 0;
            var imageChair = $(".chair-picture img");
            var chairSelected = $("#chair-selected");
            var priceOfChairSelected = $("#price-of-chair-selected");
            var colorSelected = $("#color-selected");
            var priceOfColorSelected = $("#price-of-color-selected");
            var fabricSelected = $("#fabric-selected");
            var priceOfFabricSelected = $("#price-of-fabric-selected");
            var priceOfTransport = $("#price-of-transport");
            var sumOfPrice = $(".sum");
            var newSumOfPrice = 0;

            imageChair.eq(0).show();
            imageChair.eq(1).hide();
            imageChair.eq(2).hide();

            type.on("change", function(event) {
                var chairValue = $(this).val();
                var chairName = $(this).find("option:selected").text();
                chairSelected.html(chairName);
                priceOfChairSelected.html(chairValue);
                if(chairName == "Clair"){

                    imageChair.eq(0).hide();
                    imageChair.eq(1).show();
                    imageChair.eq(2).hide();
                }
                if(chairName == "Margo"){

                    imageChair.eq(0).show();
                    imageChair.eq(1).hide();
                    imageChair.eq(2).hide();
                }
                if(chairName == "Selena"){

                    imageChair.eq(0).hide();
                    imageChair.eq(1).hide();
                    imageChair.eq(2).show();
                }
                newSumOfPrice =+chairValue;
                sumOfPrice.html(newSumOfPrice)
                return newSumOfPrice;
            });

            color.on("change", function(event) {
                var colorValue = $(this).val();
                var colorName = $(this).find("option:selected").text();
                colorSelected.html(colorName);
                priceOfColorSelected.html(colorValue);
                newSumOfPrice =+colorValue;
                sumOfPrice.html(newSumOfPrice);
                return newSumOfPrice;
            });

            fabric.on("change", function(event) {
                var fabricValue = $(this).val();
                var fabricName = $(this).find("option:selected").text();
                fabricSelected.html(fabricName);
                priceOfFabricSelected.html(fabricValue);
                newSumOfPrice =+fabricValue;
                sumOfPrice.html(newSumOfPrice);
                return newSumOfPrice;
            });

            transport.change(function() {
                var transportValue = transport.val();
                if(this.checked) {
                    priceOfTransport.html(transportValue);
                }
                else{
                    priceOfTransport.html(0);
                }
                newSumOfPrice =+transportValue;
                sumOfPrice.html(newSumOfPrice);
                return newSumOfPrice;
            });
        }
        return {
            dropdownMenu: dropdownMenu,
            headSlider: headSlider,
            customPrice: customPrice,
            hamburger: hamburger
        };
    };

    var app = new Application();
    app.dropdownMenu();
    app.headSlider();
    app.customPrice();
    app.hamburger();
});


