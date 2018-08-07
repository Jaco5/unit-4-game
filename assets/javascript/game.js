    
    var targetNumber = null;
    var counter = 0;
    var wins = 0;
    var losses = 0;
    var images = ["assets/images/crystal1.jpg", "assets/images/crystal2.jpg", "assets/images/crystal3.jpg", "assets/images/crystal4.jpg"];

    var targetNumber = Math.floor((Math.random() * 30) + 1);
    $(".r-num").html(targetNumber);

    gameLoad();

    function reset() {
        $(".buttons").empty();
        counter = 0
        $(".count").html(counter);
        targetNumber = Math.floor((Math.random() * 30) + 1);
        $(".r-num").html(targetNumber);
        gameLoad();

    }


function gameLoad() {
    for (var i = 0; i < 4; i++) {
        var button = $("<img>");
        button.addClass("crystal-button");
        button.attr("src", images[i]);
        button.attr("data-crystalvalue", Math.floor((Math.random() * 10) + 1));
        $(".buttons").append(button);
    }


    $(".crystal-button").on("click", function () {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        $(".count").html(counter);

        if (counter === targetNumber) {
            wins++;
            $(".p-wins").text(wins)
            reset();

        }
        else if (counter >= targetNumber) {
            losses++;
            $(".p-losses").text(losses)
            reset();

        }



    })
}











