/*
    Contains functions to allow the user to customize the application
*/
"use strict";

/*
    Carries out changes in settings for the application
*/
function updateApplication() {
    var background = document.getElementById("background_select").value;
    var bColor = "black";   //background color
    setBackground(background, bColor);

    setTimeout(updateApplication, 100); // update the background
}

/* 
    Changes the background of an image
*/
function setBackground(image_url, background_color) {
    if (image_url == 0) {   // get rid of background image
        document.body.style.backgroundImage = "";
    }
    else {  // add background image
        document.body.style.backgroundColor = background_color;
        document.body.style.backgroundImage = image_url;  
    }
}

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
  
/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

updateApplication();