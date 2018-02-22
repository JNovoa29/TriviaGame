//button variable
var startGameBTN
$("#start").append(startGameBTN)

//timer functionality tied to button click
$(document).on("click", function () {
    var timeLeft = 30
    var countdownTime = setInterval(function () {
        timeLeft--;
        $("#countdownTime").html("Time Remaining: " + timeLeft)
        if (timeLeft <= 0)
            clearInterval(countdownTime)
        // console.log("hi")
    }, 1000)

})

//trivia questions answers

var question1
var answers1 = [1991, 2000, 1993, 1995]
var corrAns1 = 1995

$(function() {
    $("#ansrs1").html(answers1)
        
})



// $("#ans").click(function() {    
    //trivia questions and answers array
    // var trivia = [
    //     {
    //         question1: "In what year did the original Sony Playstation release in North America?",
    //         answers: [1991, 2000, 1993, 1995],
    //         correctAnswer: 1995
    
    //     },
    
    //     {
    //         question2: "Which goofy animal character is best known for only wearing pants?",
    //         answers: ["PaRappa the Rapper", "Crash Bandicoot", "Spyro the Dragon", "Cloud"],
    //         correctAnswer: "Crash Bandicoot"
    //     }
    
    // ]
//   });













