$(document).ready(function () {

    //button variable
var startGameBTN = $("#start").append(startGameBTN)
var currentQuest
var randQuest
var holder = []

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
                question: "In what year was the original Sony Playstation released in North America?",
                answers: ['1991', '2000', '1993', '1995'],
                correctAnswer: '1995'
            },

            {
                question: "Which goofy animal character is best known for only wearing pants?",
                answers: ["PaRappa the Rapper", "Crash Bandicoot", "Spyro the Dragon", "Cloud"],
                correctAnswer: "Crash Bandicoot"
            },

            {
                question: "Which popular character has the ability to sneak up on enemies by hiding in a cardboard box?",
                answers: ["Rayman", "Solid Snake", "Jason Bourne", "Geo Einhander"],
                correctAnswer: "Solid Snake"
            },

            {
                question: "Which racing simulator was exclusive to the Sony Playstation?",
                answers: ["Demolition Racer", "Hot Wheels Turbo Racing", "Wipeout", "Gran Turismo"],
                correctAnswer: "Gran Turismo"
            },

            {
                question: "A full remake of the original Playstation game for this highly regarded RPG was announced in 2015. Which game was it?",
                answers: ["Breath of Fire 3", "Final Fantasy Tactics", "Final Fantasy 7", "The Legend of Dragoon"],
                correctAnswer: "Final Fantasy 7"
            },

            {
                question: "What was the last year new games were released on the original Playstation?",
                answers: ["2006", "1999", "2001", "2010"],
                correctAnswer: "2006"
            },

            {
                question: "In which RPG do a number of in-game characters have last names referring to types of meat? (ex: Princess Fillet & Butler Livers",
                answers: ["Ocarina of Time", "Brave Fencer Musashi", "Final Fantasy 8", "Chrono Trigger"],
                correctAnswer: "Brave Fencer Musashi"
            },
            
            {
                question: "Rob Zombie's song 'Dragula' was featured on the soundtrack of which game?",
                answers: ["Rage Racer", "Castlevania: Symphony of the Night", "Twisted Metal 4", "Monster Rancher"],
                correctAnswer: "Twisted Metal 4"
            },

            {
                question: "Resident Evil was developed exclusively for the Sony Playstation by which company?",
                answers: ["SEGA", "Square Soft", "Namco", "Capcom"],
                correctAnswer: "Capcom"
            },

            {
                question: "What type of creature is Spyro?",
                answers: ["Frog", "Dragon", "Raccoon", "Fox"],
                correctAnswer: "Dragon"
            }

        ]

        //for loop to cycle through array of questions

        for (var i = 0; i < trivia.length; i++) {
            var questObj = trivia[i]
            var newQuestion = questObj.question
            var questionAnswers = questObj.answers
        }
        $(".quest").html('<div id="activeQuestion" >' + newQuestion + '</div>')
        for (var j = 0; j < questionAnswers.length; j++) {
            // trivia[i].answers
            $('.ansChoices').append('<input type="radio">' + questionAnswers[j] + '</input><br>')
        }

        for (var j = 0; j < trivia.length; j++) {
            questObj = Math.floor(Math.random() * trivia.length)
            currentQuest = trivia[randQuest]
        }

        trivia.splice(randQuest,1)
        holder.push(randQuest)

        console.log(newQuestion)
        console.log(questionAnswers)
    })

    //cycle through new question after answer select or timer runs out
    //calculate right and wrong answers
    


})

















