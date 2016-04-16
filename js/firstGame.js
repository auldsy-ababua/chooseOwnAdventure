$(document).ready(function () {
    $(".choiceNo").click(function () {
        alert("Then ye be a coward!");
    });
    $(".choiceYes").click(function () {
        $("body").append("<div><h3>A brave soul, you are! Welcome to your adventure!</h3></div>");
        $("body").append("<div><h3>How many years haveth you trod upon this floating rock, adventurer?</h3></div>");
        $("body").append("<input type='text' class='age'/><button class='ageButton'>Render ye age!</button>");
    });
    $("body").delegate(".ageButton", "click", function () {
        var age = $(".age").val();
        if (age < 13) {
            $("body").append("<div><h3>Then I fear you haven't the stones to survive the perils of what layeth ahead. However, if you insist on marching forward, I shall not stop you, but let this serve as warning: I shant be responsible for you either.</h3></div>");
        } else {
            $("body").append("<div><h3>Then you haveth the stones to vanquish the perils of what layeth ahead. I cannot guarantee survival; only laurels and glory. Should you survive, a fount of wine, mead, and gold await you. Even a harem of feminine company shall greet you upon return...should such a prospect strike fancy in a lusty adventurer such as you (...and if not, there be a multitude of brothels of the more...masculine variety). Onward!</h3></div>");
        }
        ;
        setTimeout(function () {
            $("body").append("<div><h3>You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'</h3></div>");
        }, 3000);
        setTimeout(function () {
            $("body").append("<div><h3>Suddenly, Bieber stops and says, 'Who wants to race me?'</h3></div>");
            $("body").append("<div><button class='raceChoiceYes'>I do</button><button class='raceChoiceNo'>Not me!</button></div>")
        }, 5000);
    });
    $("body").delegate(".raceChoiceYes", "click", function () {
        $("body").append("<div><h3>You and Bieber start racing. It's neck and neck! You win by a shoelace!</h3></div>");
    });
    $("body").delegate(".raceChoiceNo", "click", function () {
        $("body").append("<div><h3>Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'</h3></div>");
    });
});


/*

 var feedback = prompt("Adventurer, on a gradient existing between the numbers 1 and 10, 1 being akin to a filthy, worthless, conniving harlot not fit for even the most low-born, common man, and 10 being akin to a virginal woman of high birth and possessing the promise of a sizable dowery upon your taking her to your wedding bed, how mighteth thou praiseth this offering of entertainment?");

 if ( feedback > 8 ) {
 console.log("Thank you! We should race at the next concert!")
 } else {
 console.log("I'll keep practicing coding and racing.")
 }*/