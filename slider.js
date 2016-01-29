$(document).ready(function(){
    (function(){

        //configuration for variables in terms of width, animation speed, and pausing time of the slider
        var width = 720;
        var animationSpeed = 1000;
        var pause = 1000;
        var currentSlide = 1;

        //caching the dom
        var $slider = $("#slider");
        var $slideContainer = $slider.find(".slides");
        var $slides = $slideContainer.find(".slide");

        //set interval function to animate for the slider speed and pausing
        setInterval(function(){
            $slideContainer.animate({'margin-left': '-=' + width}, animationSpeed, function(){
                currentSlide++;
                if(currentSlide === $slides.length){
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
        
    })();
});