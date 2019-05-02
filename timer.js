"use strict";

document.getElementById("timer").style.display = "none";
document.getElementById("timer_buttons").style.display = "none";
document.getElementById("t_clock").style.display = "none";
 
// Hides timer UI
function hideTimer(mode) {
  var timer = document.getElementById("timer");
  var buttons = document.getElementById("timer_buttons");
  var clock = document.getElementById("t_clock");
  var time = document.getElementById("time");

  if (mode === 1){// reveal ui elements
      timer.style.display = "block";
      buttons.style.display = "block";
      clock.style.display = "block";
      time.style.display = "block";
      if (document.getElementById("start").disabled == true){
        timer.style.display = "none";
      }


  }else{    // hide ui elements
      timer.style.display = "none";
      buttons.style.display = "none";
      clock.style.display = "none";
      time.style.display = "none";
      if (document.getElementById("start").disabled == true){
        timer.style.display = "none";
            }
  }
}

//Reset button
function reset(){
  document.getElementById("start").removeAttribute("disabled");

  var hours = document.getElementById("hours");
  var minutes = document.getElementById("minutes");
  var seconds = document.getElementById("seconds");
  var timer = document.getElementById("timer");
  var clock = document.getElementById("t_clock");
  var time = document.getElementById("time");

  timer.style.display = "block";
  clock.style.display = "none";
  time.style.display = "none";

  hours.value = "";
  minutes.value = "";
  seconds.value = "";
}

var display = document.querySelector('#time');
//Start Button
function start(){
  document.getElementById("start").disabled = "true";

  var hours = document.getElementById("hours").value;
  var minutes = document.getElementById("minutes").value;
  var seconds = document.getElementById("seconds").value;

  var timer = document.getElementById("timer");
  var t_clock = document.getElementById("t_clock");
  t_clock.style.display = "none";
  timer.style.display = "none";

  var total_time_seconds = (hours * 360 * 10) + (minutes * 60) + seconds
  document.getElementById("t_clock").textContent =  startTimer(total_time_seconds, display);

}

var interval;
var paused = false;
var timeLeft;
function pause(){
  if(!paused){
    paused = true;
    clearInterval(interval);
    document.getElementById("pause").textContent = "Resume";
    timeLeft = diff;
  }
  else if(paused){
    paused = false;
    document.getElementById("pause").textContent = "Pause";
    document.getElementById("t_clock").textContent =  startTimer(timeLeft, display);
  }
}

//Handle buttons
document.getElementById("reset").onclick = reset;
document.getElementById("start").onclick = start;
document.getElementById("pause").onclick = pause;



var diff;
function startTimer(duration, display) {
  var start = Date.now(),
      hours,
      minutes,
      seconds;
  function timer() {
      // get the number of seconds that have elapsed since 
      // startTimer() was called
      diff = duration - (((Date.now() - start) / 1000) | 0);

      // does the same job as parseInt truncates the float
      hours = Math.floor((diff/(60*60)));
      minutes = Math.floor( (diff/60) % 60 );
      seconds = Math.floor( (diff) % 60 );

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = hours + ":" + minutes + ":" + seconds; 

      if (diff < 0){
        reset();
        clearInterval(interval);
        alert("Times is up")
      }
  };
  timer();
  interval = setInterval(timer, 1000);
}
