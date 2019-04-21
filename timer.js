function start() {
    var countdownTimer = setInterval('timer()', 1000);
  }
  
  function timer() {
    var d = parseInt(document.getElementById("days").value, 0);
    var h = parseInt(document.getElementById("hours").value, 0);
    var m = parseInt(document.getElementById("minutes").value, 0);
    var s = parseInt(document.getElementById("seconds").value, 0);
  
    var now = new Date();
    var date = now.getTime();
  
    addDay = now.setDate(now.getDate() + d);
    addHour = now.setHours(now.getHours() + h);
    addMinute = now.setMinutes(now.getMinutes() + m);
    addSecond = now.setSeconds(now.getSeconds() + s);
  
    var then = new Date(addHour + addMinute + addSecond);
  
    if(d > 0 || h > 0 || m > 0 || s > 0){
      var final = then - date;
      var dd = Math.floor(final/ (1000 * 60 * 60 * 24));
      var hh = Math.floor((final / (1000 * 60 * 60)) % 24);
      var mm = Math.floor((final / 1000 / 60) % 60);
      var ss = Math.floor((final / 1000) % 60);
  
      document.getElementById("display").innerHTML = "Time Remaining: " + dd + "D     " + hh + "H " + mm + "M " + ss + "S";
  
      document.getElementById("message").innerHTML = then;
  
      if (final < 0) {
        clearInterval(countdownTimer);
        document.getElementById("message").innerHTML = "Expired";
      }
    }else{
      document.getElementById("display").innerHTML = " ";
      document.getElementById("message").innerHTML = "Countdown Not Started";
    }
  }