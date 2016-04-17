//methods
function showRatingText() {
    $(".everything").append("<div><h3>Adventurer, on a gradient existing between the numbers 1 and 10, 1 being akin to a filthy, worthless, conniving harlot not fit for even the most low-born, common man, and 10 being akin to a virginal woman of high birth and possessing the promise of a sizable dowery upon your taking her to your wedding bed, how mighteth thou praiseth this offering of entertainment?</h3></div>");
    $(".everything").append("<input type='text' class='rating'/>" + createButton("Render ye rating!", "ratingButton"));
}

function createButton(text, classes,  type) {
    if(type === "red") {
        return "<button class='" + classes + " waves-effect waves-light btn red'>" + text + "</button>";
    } else if(type === "green") {
        return "<button class='" + classes + " waves-effect waves-light btn'>" + text + "</button>";
    } else {
        return "<button class='" + classes + " waves-effect waves-light btn teal'>" + text + "</button>";
    }
}

//Game
$(document).ready(function () {
    $(".choiceNo").click(function () {
        alert("Then ye be a coward!");
    });
    $(".choiceYes").click(function () {
        $(".everything").append("<div><h3>A brave soul, you are! Welcome to your adventure!</h3></div>");
        $(".everything").append("<div><h3>How many years haveth you trod upon this floating rock, adventurer?</h3></div>");
        $(".everything").append("<input type='number' class='age' min='1'/>" + createButton("Render ye age!", "ageButton"));
    });

    //age request
    $(".everything").delegate(".ageButton", "click", function () {
        var age = $(".age").val();
        if (age < 13) {
            $(".everything").append("<div><h3>Then I fear you haven't the stones to survive the perils of what layeth ahead. However, if you insist on marching forward, I shall not stop you, but let this serve as warning: I shant be responsible for you either.</h3></div>");
        } else {
            $(".everything").append("<div><h3>Then you haveth the stones to vanquish the perils of what layeth ahead. I cannot guarantee survival; only laurels and glory. Should you survive, a fount of wine, mead, and gold await you. Even a harem of feminine company shall greet you upon return...should such a prospect strike fancy in a lusty adventurer such as you (...and if not, there be a multitude of brothels of the more...masculine variety). Onward!</h3></div>");
        };

        //start game
        setTimeout(function () {
            $(".everything").append("<div><h3>You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'</h3></div>");
        }, 3000);
        setTimeout(function () {
            $(".everything").append("<div><h3>Suddenly, Bieber stops and says, 'Who wants to race me?'</h3></div>");
            $(".everything").append("<div>" +
                createButton("I do!", "raceChoiceYes", "green") +
                createButton("Not me!", "raceChoiceNo", "red") +
                "</div>")
        }, 5000);
    });

    //race choice
    $(".everything").delegate(".raceChoiceYes", "click", function () {
        $(".everything").append("<div class='raceText'></div>");
        $(".raceText").append("<h3 class='raceTitle'></h3>");
        setTimeout(function() {
            $(".raceTitle").append("You and Bieber start racing. ");
        } , 1000);
        setTimeout(function() {
            $(".raceTitle").append("It's neck and neck!. ");
        } , 2000);
        setTimeout(function() {
            $(".raceTitle").append("You win by a shoelace!");
        } , 3500);

        setTimeout(function() {
            showRatingText();
        }, 6000);
    });
    $(".everything").delegate(".raceChoiceNo", "click", function () {
        $(".everything").append("<div><h3>Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'</h3></div>");
        setTimeout(function() {
            showRatingText();
        }, 3000);
    });

    //endgame
    $(".everything").delegate(".ratingButton", "click", function () {
        var rating = $(".rating").val();
        if (rating <= 8 && rating > 0) {
            $(".everything").append("<div><h3>Gratitude, Adventurer! We shall continue our work to improve your experience on your next journey.</h3></div>");
        } else if (rating <= 10 && rating > 8) {
            $(".everything").append("<div><h3>Gratitude, Adventurer! We find great inspiration in the enjoyment of thee!</h3></div>");
        } else {
            $(".everything").append("<div><h3>What sorcery is this? Adventurer, please input a whole number between 1 and 10!</h3></div>")
        };
    });
});

