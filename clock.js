/*
    Displays a clock in a HH:MM:SS format that updates every second
*/
"use strict";


function time() {
    // retrieve current time and store into variables
    var current_time = new Date();
    var hours = current_time.getHours();
    var minutes = current_time.getMinutes();
    var seconds = current_time.getSeconds();
    // the time will be set to either AM or PM, by default it will be set to AM
    var period = "AM"; 
    if (hours > 12) {
        hours = hours - 12;
        period = "PM"
    }
    // add a zero in front of numbers less than 10
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    var complete_time = hours + ":" + minutes + ":" + seconds + " " + period;
    // displays time on web page
    document.getElementById("display_time").innerText = complete_time;  
    //document.getElementById("display_time").textContent = complete_time;
    setTimeout(time, 1000); // update the clock every second
}

// function clock_mode() {
//     var mode;
//     var twelve_mode_button = document.createElement("twelve_mode_button");
//     twelve_mode_button.addEventListener ("click", function() {
        
//     });
// }

time(); //call time function to create clock

