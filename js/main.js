
 
// Toggle the menu open/close
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    const hamburger = document.getElementById("hamburger"); 

    navLinks.classList.toggle("active");
    hamburger.classList.toggle("open");
}

// Close the navigation menu when a link is clicked
function closeMenu() {
    const navLinks = document.getElementById("navLinks");
    const hamburger = document.getElementById("hamburger");

    // Remove active and open classes to close the menu
    navLinks.classList.remove("active");
    hamburger.classList.remove("open");
}

document.querySelectorAll('#navLinks .nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
});



// Js code to open and close the modal
var modalparent = document.getElementsByClassName("modal_multi");
var modal_btn_multi = document.getElementsByClassName("learnMore-btn"); 
var span_close_multi = document.getElementsByClassName("close_multi");

function setDataIndex() {
	for (i = 0; i < modal_btn_multi.length; i++)
		{
			modal_btn_multi[i].setAttribute('data-index', i);
			modalparent[i].setAttribute('data-index', i);
			span_close_multi[i].setAttribute('data-index', i);
		}
	}

function toggleBodyScroll(enable) {
	if (enable) {
		document.body.style.overflow = "auto"; // Enable scrolling
	} else {
		document.body.style.overflow = "hidden"; // Disable scrolling
	}
}

for (i = 0; i < modal_btn_multi.length; i++){

	modal_btn_multi[i].onclick = function() {
		var ElementIndex = this.getAttribute('data-index');
		modalparent[ElementIndex].style.display = "block";
		toggleBodyScroll(false); 
	}; 
	span_close_multi[i].onclick = function() {
		var ElementIndex = this.getAttribute('data-index');
		modalparent[ElementIndex].style.display = "none";
		toggleBodyScroll(true);
	}; 
}

window.onload = function() { 
	setDataIndex();
}; 

var modal = document.getElementById('myModal'); 
var btn = document.getElementById("btn2"); 
var span = modal.getElementsByClassName("close")[0];  
btn.onclick = function() {
	modal.style.display = "block";
	toggleBodyScroll(false); 
}
span.onclick = function() {
	modal.style.display = "none";
	toggleBodyScroll(true); 
}
