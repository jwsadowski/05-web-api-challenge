var timeBlockEl = $("timeblock");

var today = moment();
$(".jumbotron").text(today.format("MMM Do, YYYY"));

var currentTime = moment().format("HH:mm");

function colorCode() {
    if (timeBlockEl < currentTime) {
        
    }
}


    
