/**
 * 
 */

(function(){
function pageLoad(){
	//botones para el 1er slide index
		var a = document.getElementById("b1"); 
		a.onclick = aClick;	
		
		var b = document.getElementById("b2");
		b.onclick= bClick;
		
	//botones para el 2ndo slide index
		var c = document.getElementById("b3"); 
		c.onclick = cClick;	
		
		var d = document.getElementById("b4");
		d.onclick= dClick;
		
	//botones para el 3er slide index
		var e = document.getElementById("b5"); 
		e.onclick = eClick;	
		
		var f = document.getElementById("b6");
		f.onclick= fClick;
	
		//botones - navegación - turismo
		var g = document.getElementById("b7"); 
		g.onclick = gClick;	

		var h = document.getElementById("b8"); 
		h.onclick = hClick;

		var i = document.getElementById("b9"); 
		i.onclick = iClick;

		var j = document.getElementById("b10"); 
		j.onclick = jClick;

		var k = document.getElementById("b11"); 
		k.onclick = kClick;
}

var slideIndex = 1;
showDivs(slideIndex);

var slideIndex2 = 1;
showDivs2(slideIndex2);

var slideIndex3 = 1;
showDivs3(slideIndex3);


// 1er Slide index
function aClick(){
	showDivs(slideIndex -= 1);
}

function bClick(){
		showDivs(slideIndex += 1);
}

//2nd Slide index
function cClick(){
	showDivs2(slideIndex2 -= 1);
}

function dClick(){
	showDivs2(slideIndex2 += 1);
}

// 3er Slide index
function eClick(){
	showDivs3(slideIndex3 -= 1);
}

function fClick(){
	showDivs3(slideIndex3 += 1);
}


//1er slide index
function showDivs(n) {
		var i;
		var x = document.getElementsByClassName("mySlides1");
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

//2ndo slide index
function showDivs2(n) {
	var i;
	var x = document.getElementsByClassName("mySlides2");
	if (n > x.length) {
		slideIndex2 = 1
	}
	if (n < 1) {
		slideIndex2 = x.length
	}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[slideIndex2-1].style.display = "block";
}



//3er slide index
function showDivs3(n) {
	var i;
	var x = document.getElementsByClassName("mySlides3");
	if (n > x.length) {
		slideIndex3 = 1
	}
	if (n < 1) {
		slideIndex3 = x.length
	}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[slideIndex3-1].style.display = "block";
}


//turismo nav
function gClick(){
	openCity('tour');
}

function hClick(){
	openCity('cajamarca');
}

function iClick(){
	openCity(inca);
}

function jClick(){
	openCity("collpa");
}

function kClick(){
	openCity('cumbe');
}


function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    document.getElementById(cityName).style.display = "block";  
}

	
window.onload = pageLoad;

})();






		