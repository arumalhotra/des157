// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

document.getElementById("screen1").onclick = function() {
        document.getElementById("screen2").style.visibility = "visible";
    }

document.getElementById("screen2").onclick = function() {
        document.getElementById("screen3").style.visibility = "visible";
    }

document.getElementById("screen3").onclick = function() {
        document.getElementById("screen4").style.visibility = "visible";
    }

document.getElementById("screen4").onclick = function() {
        document.getElementById("screen5").style.visibility = "visible";
    }

document.getElementById("screen5").onclick = function() {
        document.getElementById("screen6").style.visibility = "visible";
    }

