// HAMBURGER ICON
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

});

// DARK MODE
var moon = document.getElementById("moon");
var body = document.body;
var isDarkMode = localStorage.getItem("dark_mode") === "true";

  if(isDarkMode) {
    body.classList.add("dark_mode");
    moon.src = "img/sun.png";
  }else {
    body.classList.remove("dark_mode");
    moon.src = "img/moon.png";
  }

  moon.onclick = function(){
  body.classList.toggle("dark_mode");
  isDarkMode = body.classList.contains("dark_mode");
  localStorage.setItem("dark_mode", isDarkMode);

    if(isDarkMode){
      moon.src = "img/sun.png";
    }else{
      moon.src = "img/moon.png";
    }
};


// NAVBAR SCROLL UP SHOW AND SCROLL DOWN HIDE
var prevScrollpos = window.scrollY;
    window.onscroll = function() {
      var currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        // Scrolling up, show the navbar
        document.getElementById("navbar").style.top = "0";
      } else {
        // Scrolling down, hide the navbar
        document.getElementById("navbar").style.top = "-80px";
      }
      prevScrollpos = currentScrollPos;
    }


    
// Save the scroll position in the session storage before the page is reloaded
  window.onbeforeunload = function() {
    sessionStorage.setItem('scrollPosition', window.scrollY);
  };

  // Restore the scroll position after the page has loaded
  window.onload = function() {
    var scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition !== null) {
      window.scrollTo(0, scrollPosition);
      sessionStorage.removeItem('scrollPosition'); // Clean up the session storage
    }
  };


// NABVAR LINKS HOVER UNDERLINE  
const navbarLinks = document
.querySelectorAll('.navbar_links');

navbarLinks.forEach(link => {
  link.addEventListener('click',  function() {
    navbarLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});




// Function to check if an element is in the viewport
  function isElementInViewport(elem) {
    var $elem = $(elem);
    var scrollElem = window;
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(scrollElem).height();
    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();
    return elemTop < viewportBottom && elemBottom > viewportTop;
  }

  // Function to show the element when it is in the viewport
  function showElementWhenInViewport() {
    $(".animated-text").each(function() {
      if (isElementInViewport(this)) {
        $(this).addClass("show");
      }
    });
  }

  // Check for elements in viewport on initial page load
  $(document).ready(function() {
    showElementWhenInViewport();
  });

  // Check for elements in viewport on scroll
  $(window).on("scroll resize", function() {
    showElementWhenInViewport();
  });



  // script.js
const animationContainer = document.getElementById('animation-container');
const textElement = document.querySelector('.fade-in-left');

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 1 &&
    rect.left >= 1 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function fadeInLeftOnScroll() {
  if (isElementInViewport(animationContainer)) {
    textElement.style.opacity = '1';
    textElement.style.left = '0';
  }
}

// Add the event listener to trigger the animation on scroll
document.addEventListener('scroll', fadeInLeftOnScroll);
