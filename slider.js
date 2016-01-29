$(document).ready(function(){
    (function(){

        //configuration for variables in terms of width, animation speed, and pausing time of the slider
        var width = 720;
        var animationSpeed = 1000;
        var pause = 1000;
        var currentSlide = 1;

        //caching the dom by setting variables
        var $slider = $("#slider");
        var $slideContainer = $slider.find(".slides");
        var $slides = $slideContainer.find(".slide");
        var interval;

        function startSlider(){
            //set interval function to animate for the slider speed and pausing
            interval = setInterval(function(){
                $slideContainer.animate({'margin-left': '-=' + width}, animationSpeed, function(){
                    currentSlide++;
                    if(currentSlide === $slides.length){
                        currentSlide = 1;
                        $slideContainer.css('margin-left', 0);
                    }
                });
            }, pause);

        }

        function pauseSlider(){
            clearInterval(interval)
        }
        //trigger the pause and start for the slider
        $slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider);

        startSlider();

    })();
});