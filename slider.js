$(document).ready(function(){
    (function(){

        //configuration for variables in terms of width, animation speed, and pausing time of the slider
        var width = 720;
        var animationSpeed = 1000;
        var pause = 3000;

        //set interval function to animate for the slider speed and pausing
        setInterval(function(){
            $("#slider .slides").animate({'margin-left': '-=' + width}, animationSpeed);
        }, pause);
    })();
});