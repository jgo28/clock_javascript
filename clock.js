function time() {
    // retrieve current time and store into variables
    var current_time = new Date();
    var hours = current_time.getHours();
    var minutes = current_time.getMinutes();
    var seconds = current_time.getSeconds();
    // the time will be set to either AM or PM, by default it will be set to AM
    var peroid = "AM"; 
    if (current_time.getHours() > 12) {
        hours = hours - 12;
        period = "PM"
    }
    var complete_time = hours + ":" + minutes + ":" + s + " " + period;
    document.getElementById("display_time").innerText = complete_time;
    document.getElementById("display_time").textContent = complete_time;
}
time();

