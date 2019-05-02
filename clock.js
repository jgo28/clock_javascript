/*
    Contains functions to create the clock and change certain aspects of what time is displayed on
    the webpage.
*/
"use strict";

document.getElementById("timer").style.display = "none";
document.getElementById("timer_buttons").style.display = "none";

var time_mode = 0;  // controls time modes: 0 = 12-hour; 1 = 24-hour

var switch_mode = document.getElementById("switch_mode");   // create switch_mode id
switch_mode.addEventListener ("click", clock_mode);

/*
    Displays a clock in a HH:MM:SS format that updates every second
*/
function getTime() {
    var timezone_value = document.getElementById("timezone_select").value;  // retrieves the timezone the user selected
    var current_time = new Date();   // retrieve current time and store into variables
    current_time = select_menu_options(timezone_value); //change timezone based on user selection from menu
 
    var hours = current_time.getHours();
    var minutes = current_time.getMinutes();
    var seconds = current_time.getSeconds();
    
    // the time will be set to either AM or PM, by default it will be set to PM
    var period = "PM"; 
    if (hours < 12) {
        period = "AM"
    }
    if (time_mode === 0 && hours > 12)
        hours = hours - 12;

    if (hours === 0 && time_mode === 0) {  // only here because the timezone converter will make 12 AM -> 0 AM
        hours = 12;
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
    var complete_time;
    if (time_mode === 0)
        complete_time = hours + ":" + minutes + ":" + seconds + " " + period;
    else
        complete_time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("display_time").textContent = complete_time;    // displays time on web page
    setTimeout(getTime, 100); // update the clock
}

/*
    Function changes timezone based on the value of the item from selection menu.
*/
function select_menu_options(value) {
    var newTime = new Date();  
    if (value == 0) {   // keep default timezone
        // console.log(timezone_value);
        newTime = new Date(); 
    } 
    else {  // pass in a string and change the timezone based on the name in tz database
        newTime = changeTimezone(value)
    }
    return newTime;
}

/*
    Function changes timezone based on the string input

    timezone_string is a string that corresponds with a timezone found in the tz
    timezone database: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
*/
function changeTimezone(timezone_string) {
    var newTime = new Date().toLocaleString("en-US", {timeZone: timezone_string});
    newTime = new Date(newTime);
    return newTime;
}

/*
    Switches time between 12-hour mode and 24-hour mode
*/
function clock_mode() {
    if (time_mode === 0) {
        time_mode = 1;
    }
    else {
        time_mode = 0;
    }
}

/*
    Hides clock UI
*/
function hideClock(mode) {
    var x = document.getElementById("display_time");    //the digital display
    // var y = document.getElementById("24_hour_toggle");  //the toggle for 24-hour mode
    // var z = document.getElementById("change_timezone"); // timezone selection menu
    if (mode === 1) { // reveal ui elements
        x.style.display = "block";
        // y.style.display = "block";
        // z.style.display = "block";
    }
    else {  // hide ui elements
        x.style.display = "none";
        // y.style.display = "none";
        // z.style.display = "none";
    }
}

getTime(); //call time function to create clock

