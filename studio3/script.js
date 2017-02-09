document.addEventListener("DOMContentLoaded", function(event) {
	console.log("DOM fully loaded and parsed");

  var book=document.getElementById('book');
	var pen = document.getElementById('pen');
	var laptop = document.getElementById('laptop');
	var earphone = document.getElementById('earphone');
	var mobile = document.getElementById('mobile');

	var close = document.getElementsByClassName('close');

	var items = [pen, book, laptop, mobile, earphone];


    document.getElementById("upper").onclick = function() {
	    document.getElementById("laptop").style.visibility = "visible";
	    document.getElementById("book").style.visibility = "visible";
}

	document.getElementById("lower").onclick = function(){
		document.getElementById("mobile").style.visibility = "visible";
	    document.getElementById("pen").style.visibility = "visible";
	    document.getElementById("earphone").style.visibility = "visible";
}



 for (a = 0; a < items.length; a++) {
        items[a].addEventListener('click', function() {
            var id = this.getAttribute('id') + 'Info';
            var elem = document.getElementById(id);
            elem.style.display = "block";
        })
    }

    for (i = 0; i < close.length; i++) {
        close[i].addEventListener('click', function() {
            this.parentElement.style.display = "none";
        })

    }

});
