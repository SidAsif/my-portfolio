const links = document.querySelectorAll(".links a");

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    links.forEach((link) => link.classList.remove("active"));
    event.target.classList.add("active");
  });
});

// loader
// document.addEventListener("DOMContentLoaded", function () {
//   var loader = document.querySelector(".loader");
//   loader.style.display = "block";

//   setTimeout(function () {
//     loader.style.display = "none";

//     var content = document.getElementById("details");
//     content.style.display = "block";
//   }, 2500);
// });

// sidebar
const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");
const closeBtn = document.querySelector(".close_btn");
const menuItems = document.querySelectorAll(".dropdown_menu li a");
toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
};
closeBtn.onclick = function () {
  dropDownMenu.classList.remove("open");
  toggleBtnIcon.classList = "fa-solid fa-bars";
};
menuItems.forEach((item) => {
  item.addEventListener("click", function () {
    dropDownMenu.classList.remove("open");
    toggleBtnIcon.classList = "fa-solid fa-bars";
  });
});

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
const textElements = document.querySelectorAll(".text");
const heroImg = document.getElementById("hero-img");
const header = document.getElementById("header");
const prevButton = document.getElementById("prevPage");
const nextButton = document.getElementById("nextPage");
const gridItems = document.querySelectorAll(".grid-item");
const modeToggle = document.getElementById("modeToggle");
const moonIcon = document.querySelector(".fa-solid.fa-moon");
const sunIcon = document.querySelector(".fa-solid.fa-sun");
const floatBtn = document.querySelector(".floating-btn");
const logoImgs = document.getElementsByClassName("logo-img");
const tooltips = document.querySelectorAll(".contact_icon .tooltip");
const dropLine = document.getElementById("drop-line");

const setButtonColor = (buttons, color) => {
  buttons.forEach((button) => (button.style.backgroundColor = color));
};

// Set initial button colors
setButtonColor([prevButton, nextButton, closeBtn], "#EB455F");

const setColors = (
  textColor,
  headerBgColor,
  headerTextColor,
  buttonColor,
  dropLineColor,
  logoSrc,
  tooltipColor,
  heroImgSrc,
  svgSrc
) => {
  textElements.forEach((text) => (text.style.color = textColor));
  header.style.backgroundColor = headerBgColor;
  header.style.color = headerTextColor;
  setButtonColor([prevButton, nextButton, closeBtn], buttonColor);
  dropLine.style.borderColor = dropLineColor;
  Array.from(logoImgs).forEach((logo) => (logo.src = logoSrc));
  tooltips.forEach((tooltip) => (tooltip.style.color = tooltipColor));
  heroImg.src = heroImgSrc;
  document.getElementById("svg").setAttribute("data", svgSrc);
};

modeToggle.onclick = () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    // Dark mode
    floatBtn.style.backgroundColor = "#08c391";
    floatBtn.style.boxShadow = "0 10px 25px -5px rgba(32, 255, 195)";
    setColors(
      "#08C391",
      "#212830",
      "#ffffff",
      "#08C391",
      "white",
      "Images/Untitled_design__2_-removebg-preview.png",
      "white",
      "Images/Untitled_design__2_-removebg-preview.png",
      "wave2.svg"
    );
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
    moonIcon.style.display = "none";
    sunIcon.style.display = "inline";
  } else {
    // Light mode
    floatBtn.style.backgroundColor = "#eb455f";
    floatBtn.style.boxShadow = "";
    setColors(
      "#EB455F",
      "#ffffff",
      "#000000",
      "#EB455F",
      "black",
      "Images/Untitled_design-removebg-preview.png",
      "black",
      "Images/Untitled_design-removebg-preview.png",
      "wave1.svg"
    );
    document.documentElement.style.setProperty(
      "--light-gradient1",
      "rgba(41,45,62,1)"
    );
    document.documentElement.style.setProperty(
      "--light-gradient2",
      "rgba(235,69,95,1)"
    );
    document.documentElement.style.setProperty(
      "--scrollbar-thumb-color",
      "#EB455F"
    );
    moonIcon.style.display = "inline";
    sunIcon.style.display = "none";
  }
};

// pagination
let currentPage = 1;
const projects = document.querySelectorAll(".grid-item");

const showPage = (page) => {
  const projectsPerPage = getProjectsPerPage();
  const startIndex = (page - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;

  projects.forEach((project, index) => {
    project.style.display =
      index >= startIndex && index < endIndex ? "block" : "none";
  });
};

const goToPreviousPage = () => {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
};

const goToNextPage = () => {
  const totalPages = Math.ceil(projects.length / getProjectsPerPage());
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
  }
};

const getProjectsPerPage = () => (window.innerWidth <= 768 ? 2 : 3);

// Show the first page initially
showPage(currentPage);

document.getElementById("prevPage").addEventListener("click", goToPreviousPage);
document.getElementById("nextPage").addEventListener("click", goToNextPage);

window.addEventListener("resize", () => showPage(currentPage));

// Floating button functionality
document.querySelector(".floating-btn").addEventListener("click", () => {
  document.querySelector(".element-container").classList.toggle("open");
  document.querySelector(".floating-container").classList.toggle("expanded");
});
