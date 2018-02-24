//button variable
var startGameBTN
$("#start").append(startGameBTN)

//timer functionality tied to button click

$("#start").on("click", function () {
    var timeLeft = 30
    $("#start").hide(0)
    var countdownTime = setInterval(function () {
        timeLeft--;
        $("#countdownTime").html("Time Remaining: " + timeLeft)
        if (timeLeft <= 0)
            clearInterval(countdownTime)
        // console.log("hi")
    }, 1000)
    
    // trivia questions and answers array
    var trivia = [
        {
            question: "In what year did the original Sony Playstation release in North America?",
            answers: ['1991', '2000', '1993', '1995'],
            correctAnswer: '1995'
        },
        
        {
            question: "Which goofy animal character is best known for only wearing pants?",
            answers: ["PaRappa the Rapper", "Crash Bandicoot", "Spyro the Dragon", "Cloud"],
            correctAnswer: "Crash Bandicoot"
        }
    ]
    
    //for loop to cycle through array of questions
    
    for (var i = 0; i < trivia.length; i++) {
        var questObj = trivia[i]
        var newQuestion = questObj.question
        var questionAnswers = questObj.answers
    }
    $(".quest").html('<div id="activeQuestion" >'+newQuestion+'</div>') 
    for(var j = 0; j < questionAnswers.length; j++) {
        // trivia[i].answers
        $('.ansChoices').append('<input type="radio">'+questionAnswers[j]+'</input><br>')
    }
})
    
    console.log(newQuestion)
    console.log(questionAnswers)
    
    
    
    
    












