/**
 * 
 */
(function(){
	function pageLoad(){
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
		
		
		
		
		// slide turismo
		var l = document.getElementById("a1");
		l.onclick = lClick;
		
		var m = document.getElementById("a2");
		m.onclick = mClick;
		
		var n = document.getElementById("a3");
		n.onclick = nClick;
		
		var o = document.getElementById("a4");
		o.onclick = oClick;
		
		var p = document.getElementById("a5");
		p.onclick = pClick;
		
		var q = document.getElementById("a6");
		q.onclick = qClick;
		
		var r = document.getElementById("a7");
		r.onclick = rClick;
		
		var s = document.getElementById("a8");
		s.onclick = sClick;
	}

	//Slide Turismo
	var slideIndex4 = 1;
	showDivs4(slideIndex4);

	var slideIndex5 = 1;
	showDivs5(slideIndex5);

	var slideIndex6 = 1;
	showDivs6(slideIndex6);

	var slideIndex7 = 1;
	showDivs7(slideIndex7);	
	
	
	//slide turismo

	function lClick(){
		showDivs4(slideIndex4 -= 1);
	}

	function mClick(){
		showDivs4(slideIndex4 += 1);
	}

	function nClick(){
		showDivs5(slideIndex5 -= 1);
	}

	function oClick(){
		showDivs5(slideIndex5 += 1);
	}

	function pClick(){
		showDivs6(slideIndex6 -= 1);
	}

	function qClick(){
		showDivs6(slideIndex6 += 1);
	}

	function rClick(){
		showDivs7(slideIndex7 -= 1);
	}

	function sClick(){
		showDivs7(slideIndex7 += 1);
	}

	//turismo Slide

	function showDivs4(n) {
		var i;
		var x = document.getElementsByClassName("mySlides4");
		if (n > x.length) {
			slideIndex4 = 1
		}
		if (n < 1) {
			slideIndex4 = x.length
		}
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";
		}
		x[slideIndex4-1].style.display = "block";
	}

	function showDivs5(n) {
		var i;
		var x = document.getElementsByClassName("mySlides5");
		if (n > x.length) {
			slideIndex5 = 1
		}
		if (n < 1) {
			slideIndex5 = x.length
		}
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";
		}
		x[slideIndex5-1].style.display = "block";
	}

	function showDivs6(n) {
		var i;
		var x = document.getElementsByClassName("mySlides6");
		if (n > x.length) {
			slideIndex6 = 1
		}
		if (n < 1) {
			slideIndex6 = x.length
		}
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";
		}
		x[slideIndex6-1].style.display = "block";
	}

	function showDivs7(n) {
		var i;
		var x = document.getElementsByClassName("mySlides7");
		if (n > x.length) {
			slideIndex7 = 1
		}
		if (n < 1) {
			slideIndex7 = x.length
		}
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";
		}
		x[slideIndex7-1].style.display = "block";
	}

	
	//turismo nav
	function gClick(){
		openCity('tour');
	}

	function hClick(){
		openCity('cajamarca');
	}

	function iClick(){
		openCity('inca');
	}

	function jClick(){
		openCity('collpa');
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