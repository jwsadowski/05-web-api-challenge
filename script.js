var timeBlockEl = $(".timeblock");
var timeDisplayEl = $("#currentDay");
var saveBtn = $("save-button");

var today = moment();
$(".jumbotron").text(today.format("MMM Do, YYYY"));

timeDisplayEl.text(day);

var currentTime = moment().format("HH a");

function pastPresentFuture() {
    if (timeBlockEl < currentTime)
    console.log("Event that already happened");
} else if (timeBlockEl === currentTime)
    console.log("Current hour");


timeBlockEl.addEventListener('click', function(event) {
    timeBlockEl.textContent();

    

    localStorage.setItem("input", JSON.stringify(input));
});

saveBtn.addEventListener('click', function(event) {
    event.preventDefault();
})






    
