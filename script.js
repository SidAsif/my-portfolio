// sidebar
const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");
// let skills = document.getElementsByClassName("skill_list")[0];
// setTimeout(() => {
//     skills.style.display="block"
// }, 2000);
toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars ";
};

//hero content
var typed = new Typed(".role", {
  strings: ["Frontend Developer.", "Software Developer."],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

//  data-aos
AOS.init({
  offset: 250,
  duration: 1000,
});

// Scroll btn
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

//--------------Dark mode & light mode --------------
var icon = document.getElementById("icon");
var text = document.querySelectorAll(".text");
var hero_img = document.getElementById("hero-img");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "Images/sun.png";
    hero_img.src = "Images/output-onlinegiftools.gif";
    for (var i = 0; i < text.length; i++) {
      text[i].style.color = "#0ef";
    }
  } else {
    icon.src = "Images/moon.png";
    for (var i = 0; i < text.length; i++) {
      text[i].style.color = "#EB455F";
    }
  }
};

document.addEventListener("DOMContentLoaded", function () {
  var timelineSection = document.getElementById("timeline");
  var timelineLine = document.querySelector("#timeline::after");

  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function resetLineAnimation() {
    // Resetting the animation by setting animation to none and then back to moveline
    console.log("Resetting line animation");
    timelineLine.style.animation = "none";
    void timelineLine.offsetWidth; // Trigger reflow
    timelineLine.style.animation = "moveline 4s linear";
  }

  function checkTimelineInView() {
    if (isInViewport(timelineSection)) {
      resetLineAnimation();
      // Remove the scroll event listener once the timeline section is in view
      window.removeEventListener("scroll", checkTimelineInView);
    }
  }

  // Initial check when the page loads
  checkTimelineInView();

  // Check timeline visibility on scroll
  window.addEventListener("scroll", checkTimelineInView);
});
