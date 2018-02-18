$(document).on("click", function() {

    var timeLeft = setTimeout(time, 1000)
    var val = 30

    function time(val){
        $("#time").html("<h2>" + val + "</h2>")
        console.log(val)
        val--
    }
    //start game button set to begin countdown
    $(".start").on("click", function () {
        //countdown timer
        //show time left in html
        // $("#time").html("Time Remaining: " + timeLeft)
        console.log(timeLeft)
    })






    // question & answers
    // one answer must be true while the remaining are false


})