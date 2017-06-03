/**
 * 
 */
(function(){
function pageLoad(){
	
		var a = document.getElementById("b1"); 
		a.onclick = aClick;	
		
		var b = document.getElementById("b2");
		b.onclick= bClick;		
}


var slideIndex = 1;
showDivs(slideIndex);


function aClick(){
	showDivs(slideIndex -= 1);
}

function bClick(){
		showDivs(slideIndex += 1);
}

function showDivs(n) {
		var i;
		var x = document.getElementsByClassName("mySlides");
		if (n > x.length) {
			slideIndex = 1
		}
		if (n < 1) {
			slideIndex = x.length
		}
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";
		}
		x[slideIndex-1].style.display = "block";
	}
	
window.onload = pageLoad;

})();


		