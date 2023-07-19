function startTimer() {
    var input = document.getElementById("input").value.split(":");
    var hours = parseInt(input[0]);
    var minutes = parseInt(input[1]);
    var seconds = parseInt(input[2]);

    var timer = setInterval(function() {
        seconds--;
        if (seconds < 0) {
            minutes--;
            seconds = 59;
            if (minutes < 0) {
                hours--;
                minutes = 59;
                if (hours < 0) {
                    clearInterval(timer);
                }
            }
        }

        // Format the timer
        var timeString = ("0" + hours).slice(-2) + ":" + 
                         ("0" + minutes).slice(-2) + ":" + 
                         ("0" + seconds).slice(-2);

        document.getElementById("timer").textContent = timeString;
    }, 1000);
}
