var stopwatchName;

var lap = 1;

var timeInMiliseconds = 0;

var stopwatchMove = false;

$("#reset").on("click", function () {
    lap = 1;
    timeInMiliseconds = 0;
    $("#stopwatch-box").html("00:00:000");
    $("#lap-box").empty();
});


$("#start").on("click", function () {

    if (!stopwatchMove) {
        stopwatchName = setInterval(count, 1);
        stopwatchMove = true;
    }

});

function count() {
    timeInMiliseconds++;
   
    var minute = Math.floor(timeInMiliseconds / (60 * 1000));
    var second = Math.floor((timeInMiliseconds - (minute * 60 * 1000))/1000);
    var milisecond = timeInMiliseconds - (second * 1000) - (minute * 60 * 1000);
    var minuteString;
    var secondString;
    var milisecondString;

    if (minute < 10) {
        minuteString = "0" + minute;
    } else {
        minuteString = minute;
    }

    if (second < 10) {
        secondString = "0" + second;
    } else {
        secondString = second.toString();
    }

    if (milisecond < 10) {
        milisecondString = "00" + milisecond;
    } else if (milisecond < 100){
        milisecondString = "0" + milisecond;
    } else {
        milisecondString = milisecond;
    }

    $("#stopwatch-box").html(minuteString + ":" + secondString + ":" + milisecondString);

}

$("#stop").on("click", function () {
    clearInterval(stopwatchName);
    stopwatchMove = false;
});

$("#lap").on("click", function() {
    $("#lap-box").append("Lap " + lap + "-" + $("#stopwatch-box").text() + "<br>");
    lap++;
});