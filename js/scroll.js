function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

//ss

/* function disableScroll() {
  // Get the current page scroll position
  scrollTop =
  window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft =
  window.pageXOffset || document.documentElement.scrollLeft,

      // if any scroll is attempted,
      // set this to the previous value
      window.onscroll = function() {
          window.scrollTo(scrollLeft, scrollTop);
      };
}

function enableScroll() {
  window.onscroll = function() {};
}

document.onload = disableScroll();{} 
*/
//

var snd = document.getElementById("sound"); {
function playAudio() { 
snd.play(); 
} 
function pauseAudio() { 
snd.pause(); 
}}