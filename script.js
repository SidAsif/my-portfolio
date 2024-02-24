// sidebar
const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars ";
};

//hero content
var typed = new Typed(".role", {
  strings: ["Frontend Developer.", "Technology Enthusiast."],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
//

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
var header = document.getElementById("header");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "Images/sun.png";
    hero_img.src = "Images/output-onlinegiftools.gif";
    for (var i = 0; i < text.length; i++) {
      text[i].style.color = "#eb455f";
    }
    header.style.backgroundColor = "#1f242d"; // Change to the desired color
    header.style.color = "#ffffff";
  } else {
    icon.src = "Images/moon.png";
    for (var i = 0; i < text.length; i++) {
      text[i].style.color = "#EB455F";
    }
    header.style.backgroundColor = "#ffffff"; // Change to the desired color
  }
};

// Number of projects per page
var currentPage = 1;
var projects = document.querySelectorAll(".grid-item");

function showPage(page) {
  var projectsPerPage = getProjectsPerPage();
  var startIndex = (page - 1) * projectsPerPage;
  var endIndex = startIndex + projectsPerPage;

  projects.forEach(function (project, index) {
    if (index >= startIndex && index < endIndex) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
}

function goToPreviousPage() {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
}

function goToNextPage() {
  var totalPages = Math.ceil(projects.length / getProjectsPerPage());
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
  }
}

function getProjectsPerPage() {
  // Set projects per page dynamically based on screen size
  return window.innerWidth <= 570 ? 1 : 3;
}

// Show the first page initially
showPage(currentPage);

// Attach event listeners to pagination buttons
document.getElementById("prevPage").addEventListener("click", goToPreviousPage);
document.getElementById("nextPage").addEventListener("click", goToNextPage);

// Update the number of projects per page when the window is resized
window.addEventListener("resize", function () {
  showPage(currentPage);
});

// Function to observe the skill section
function observeSkillSection() {
  const mySkillsSection = document.querySelector("#my_skills");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // Change the threshold as per your requirement
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startFillAnimation(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, options);

  observer.observe(mySkillsSection);
}
// Function to start the fill-bar animation
function startFillAnimation(section) {
  const fillBars = section.querySelectorAll(".fill-bar");
  fillBars.forEach((fillBar) => {
    fillBar.classList.add("animate");
  });
}

observeSkillSection();
