// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

document.getElementById("accept").onclick = function() {
        document.getElementById("screen2").style.visibility = "visible";
        document.getElementById("screen2").style.display = "block";
        document.getElementById("screen1").style.display = "none";
        document.getElementById("screen1").style.display = "hidden";

    }
});
