$(document).ready(function () {

    var randomTotal = randomNum(19, 120);

    var crystal1 = randomNum(1, 12);
    var crystal2 = randomNum(1, 12);
    var crystal3 = randomNum(1, 12);
    var crystal4 = randomNum(1, 12);
    var playerTotal = 0;  
    
    $("#total").text(randomTotal);

    $("#player-total").text(playerTotal);

    $("#crystal1").on("click", function(){
        playerTotal = playerTotal + crystal1;
        $("#player-total").text(playerTotal);
    });

    $("#crystal2").on("click", function(){
        playerTotal = playerTotal + crystal2;
        $("#player-total").text(playerTotal);
    });

    $("#crystal3").on("click", function(){
        playerTotal = playerTotal + crystal3;
        $("#player-total").text(playerTotal);
    });

    $("#crystal4").on("click", function(){
        playerTotal = playerTotal + crystal4;
        $("#player-total").text(playerTotal);
    });
    
    if (playerTotal == randomTotal){
        alert("you win!");
        randomTotal = randomNum(19, 120);
        crystal1 = randomNum(1, 12);
        crystal2 = randomNum(1, 12);
        crystal3 = randomNum(1, 12);
        crystal4 = randomNum(1, 12);
        playerTotal = 0;
        $("#total").text(randomTotal);

        $("#player-total").text(playerTotal);
    } else if(playerTotal > randomTotal) {
        alert("you lose!");
        randomTotal = randomNum(19, 120);
        crystal1 = randomNum(1, 12);
        crystal2 = randomNum(1, 12);
        crystal3 = randomNum(1, 12);
        crystal4 = randomNum(1, 12);
        playerTotal = 0;
        $("#total").text(randomTotal);

        $("#player-total").text(playerTotal);

    }
    
    
    function randomNum(bottom, top) {
        return function() {
            return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
        }
    }


});