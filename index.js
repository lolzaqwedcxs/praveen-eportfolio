

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});




var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}


var slideIndex2 = [1,1];
var slideId2 = ["Slides1", "Slides2"]
showSlides2(1, 0);
showSlides2(1, 1);

function plusSlides2(n, no) {
  showSlides2(slideIndex2[no] += n, no);
}

function showSlides2(n, no) {
  var z;
  var y = document.getElementsByClassName(slideId2[no]);
  if (n > y.length) {slideIndex2[no] = 1}    
  if (n < 1) {slideIndex2[no] = y.length}
  for (z = 0; z < y.length; z++) {
     y[z].style.display = "none";  
  }
  y[slideIndex2[no]-1].style.display = "block";  
}


$(function() {
  $('.scroll-down').click (function() {
    $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
    return false;
  });
});


