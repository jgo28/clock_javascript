"use strict";

var time_mode = 0;  // controls time modes: 0 = 12-hour; 1 = 24-hour

var switch_mode = document.getElementById("switch_mode");   //create switch_mode id
switch_mode.addEventListener ("click", clock_mode);

/*
    Displays a clock in a HH:MM:SS format that updates every second
*/
function getTime() {
    // retrieve current time and store into variables
    var current_time = new Date();
    var hours = current_time.getHours();
    var minutes = current_time.getMinutes();
    var seconds = current_time.getSeconds();

    // the time will be set to either AM or PM, by default it will be set to PM
    var period = "PM"; 
    if (hours < 12) {
        period = "AM"
    }
    if (time_mode == 0 && hours > 12)
        hours = hours - 12;

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
    var complete_time;
    if (time_mode == 0)
        complete_time = hours + ":" + minutes + ":" + seconds + " " + period;
    else
        complete_time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("display_time").textContent = complete_time;    // displays time on web page
    setTimeout(getTime, 100); // update the clock every second
}

/*
    Switches time between 12-hour mode and 24-hour mode
*/
function clock_mode() {
    if (time_mode == 0) {
        time_mode = 1;
    }
    else {
        time_mode = 0;
    }
}

getTime(); //call time function to create clock

