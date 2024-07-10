var canvas;
$(document).ready(function(){
    canvas = $('#myCanvas').canvaDots({
        sizeDependConnections: false,
        randomBounceSides: false,
        dotsColor:[0,0,0,1],
        linesColor:[0,0,0]
    });

    // ==== EXAMPLE CALL METHODS ====
    canvas.stopAnimation(); //Stop animation
    canvas.startAnimation(); //Start animation
});
       