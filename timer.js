"use strict";

 
// Hides timer UI
function hideTimer(mode) {
  var timer = document.getElementById("timer");
  var buttons = document.getElementById("timer_buttons");
  var time = document.getElementById("time");

  if (mode === 1){// reveal ui elements
      timer.style.display = "block";
      buttons.style.display = "block";
      if (document.getElementById("start").disabled == true){
        timer.style.display = "none";
        time.style.display = "block";
      }else{
        time.style.display = "none";
      }


  }else{    // hide ui elements
      timer.style.display = "none";
      buttons.style.display = "none";
      time.style.display = "none";            
  }
}

//Reset button
function reset(){
  clearInterval(interval);
  document.getElementById("start").removeAttribute("disabled");

  paused = false;
  document.getElementById("pause").textContent = "Pause";

  var hours = document.getElementById("hours");
  var minutes = document.getElementById("minutes");
  var seconds = document.getElementById("seconds");
  var timer = document.getElementById("timer");
  var time = document.getElementById("time");

  timer.style.display = "block";
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
  var time = document.getElementById("time");


  var timer = document.getElementById("timer");
  timer.style.display = "none";
  time.style.display = "block";

  var total_time_seconds = (hours * 360 * 10) + (minutes * 60) + seconds
  startTimer(total_time_seconds, display);

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
    startTimer(timeLeft, display);
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

      hours = Math.floor((diff/(60*60)));
      minutes = Math.floor( (diff/60) % 60 );
      seconds = Math.floor( (diff) % 60 );

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = hours + ":" + minutes + ":" + seconds; 

      if (diff < 0){
        alert("Times is up")

        document.getElementById("reset").click();
        document.getElementById("timerButton").click();

      }
  };
  timer();
  interval = setInterval(timer, 1000);
}
