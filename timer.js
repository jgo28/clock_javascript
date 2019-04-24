"use strict";
 
// Hides timer UI
function hideTimer(mode) {
  var timer = document.getElementById("timer");
  var buttons = document.getElementById("timer_buttons");
  var clock = document.getElementById("t_clock");
  if (mode === 1){// reveal ui elements
      timer.style.display = "block";
      buttons.style.display = "block";
      clock.style.display = "block";
  }else{    // hide ui elements
      timer.style.display = "none";
      buttons.style.display = "none";
      clock.style.display = "none";
  }
}

//Reset button
function reset(){
  var hours = document.getElementById("hours");
  var minutes = document.getElementById("minutes");
  var seconds = document.getElementById("seconds");
  var timer = document.getElementById("timer");
  var clock = document.getElementById("t_clock");
  clock.style.display = "none";
  timer.style.display = "block";
  hours.value = "";
  minutes.value = "";
  seconds.value = "";
}

//Start Button
function start(){
  var hours = document.getElementById("hours").value;
  var minutes = document.getElementById("minutes").value;
  var seconds = document.getElementById("seconds").value;

  var timer = document.getElementById("timer");
  var t_clock = document.getElementById("t_clock");
  t_clock.style.display = "block";
  timer.style.display = "none";

  var total_time_seconds = (hours * 360) + (minutes * 60) + seconds
  
  var display = document.querySelector('#time');

  document.getElementById("t_clock").textContent =  startTimer(total_time_seconds, display);

}

//Handle buttons
document.getElementById("reset").onclick = reset;
document.getElementById("start").onclick = start;


function startTimer(duration, display) {
  var start = Date.now(),
      diff,
      hours,
      minutes,
      seconds;
  function timer() {
      // get the number of seconds that have elapsed since 
      // startTimer() was called
      diff = duration - (((Date.now() - start) / 1000) | 0);

      // does the same job as parseInt truncates the float
      seconds = Math.floor( (diff) % 60 );
      minutes = Math.floor( (diff/60) % 60 );
      hours = Math.floor((diff/(60*60))) % 24;

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = hours + ":" + minutes + ":" + seconds; 

      if (diff <= 0) {
          // add one second so that the count down starts at the full duration
          // example 05:00 not 04:59
          start = Date.now() + 1000;
      }
  };
  // we don't want to wait a full second before the timer starts
  timer();
  setInterval(timer, 100);
}

// window.onload = function () {
//   var fiveMinutes = 60 * 5,
//       display = document.querySelector('#time');
//   startTimer(fiveMinutes, display);
// };