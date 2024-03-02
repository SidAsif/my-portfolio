// loader
document.addEventListener("DOMContentLoaded", function () {
  var loader = document.querySelector(".loader");
  loader.style.display = "block";

  setTimeout(function () {
    loader.style.display = "none";

    var content = document.getElementById("details");
    content.style.display = "block";
  }, 2500);
});
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
var prevButton = document.getElementById("prevPage");
var nextButton = document.getElementById("nextPage");
const gridItems = document.querySelectorAll(".grid-item");

// Function to handle hover effect
function handleHover(event) {
  event.target.style.backgroundColor = "#292D3E";
}

// Function to handle mouseout event
function handleMouseOut(event, color) {
  event.target.style.backgroundColor = color; // Reset to default background color
}

// Set initial button colors
prevButton.style.backgroundColor = "#EB455F";
nextButton.style.backgroundColor = "#EB455F";

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "Images/sun.png";
    hero_img.src = "Images/output-onlinegiftools.gif";
    for (var i = 0; i < text.length; i++) {
      text[i].style.color = "#08C391";
    }
    header.style.backgroundColor = "#1f242d"; // Change to the desired color
    header.style.color = "#ffffff";
    prevButton.style.backgroundColor = "#08C391";
    nextButton.style.backgroundColor = "#08C391";
    document.documentElement.style.setProperty(
      "--light-gradient1",
      "rgba(2,0,36,1)"
    );
    document.documentElement.style.setProperty(
      "--light-gradient2",
      "rgba(32,255,195,1)"
    );
    document.documentElement.style.setProperty(
      "--scrollbar-thumb-color",
      "#08C391"
    );
  } else {
    icon.src = "Images/moon.png";
    for (var i = 0; i < text.length; i++) {
      text[i].style.color = "#EB455F";
    }
    header.style.backgroundColor = "#ffffff";
    prevButton.style.backgroundColor = "#EB455F";
    nextButton.style.backgroundColor = "#EB455F";
    document.documentElement.style.setProperty(
      "--light-gradient1",
      "rgba(41,45,62,1))"
    );
    document.documentElement.style.setProperty(
      "--light-gradient2",
      "rgba(235,69,95,1)"
    );
    document.documentElement.style.setProperty(
      "--scrollbar-thumb-color",
      "#EB455F"
    );
  }
};

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

// pagination
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
  return window.innerWidth <= 768 ? 1 : 3;
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

//floating menu // Get all menu from document
// document.querySelectorAll(".fabTrigger").forEach(OpenMenu);

// // Menu Open and Close function
// function OpenMenu(active) {
//   if (active.classList.contains("fabTrigger") === true) {
//     active.addEventListener("click", function (e) {
//       e.preventDefault();

//       if (this.parentElement.classList.contains("active") === true) {
//         // Close the clicked dropdown
//         this.parentElement.classList.remove("active");
//       } else {
//         // Close the opend dropdown
//         closeMenu();
//         // add the open and active class(Opening the DropDown)
//         this.parentElement.classList.add("active");
//       }
//     });
//   }
// }

// // Close the openend Menu
// function closeMenu() {
//   // remove the open and active class from other opened Moenu (Closing the opend Menu)
//   document.querySelectorAll(".fab").forEach(function (container) {
//     container.classList.remove("active");
//   });
// }
