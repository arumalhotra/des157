// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");


    document.getElementById("mus").onclick = function() {
        var audio = document.getElementById("audio");
        audio.play();
    }

    document.getElementById("1").onclick = function() {
        document.getElementById("1995").style.visibility = "visible";
        document.getElementById("1995").style.display = "block";
    }

    document.getElementById("2").onclick = function() {
        document.getElementById("2000").style.visibility = "visible";
        document.getElementById("2000").style.display = "block";
        document.getElementById("1995").style.display = "none";
        document.getElementById("1995").style.display = "hidden";

    }

    document.getElementById("3").onclick = function() {
        document.getElementById("1995").style.visibility = "hidden";
        document.getElementById("2000").style.visibility = "hidden";
        document.getElementById("2005").style.visibility = "visible";
        document.getElementById("1995").style.display = "none";
        document.getElementById("2000").style.display = "none";
        document.getElementById("2005").style.display = "block";

    }
    document.getElementById("4").onclick = function() {
        document.getElementById("1995").style.visibility = "hidden";
        document.getElementById("2000").style.visibility = "hidden";
        document.getElementById("2005").style.visibility = "hidden";
        document.getElementById("2015").style.visibility = "visible";
        document.getElementById("1995").style.display = "none";
        document.getElementById("2000").style.display = "none";
        document.getElementById("2005").style.display = "none";
        document.getElementById("2015").style.display = "block";
    }
});
