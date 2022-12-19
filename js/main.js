/* =========== SHOW MENU ========== */
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

/* Validate if constant exist */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu")
    navToggle.classList.add("hide-toggle")
    navClose.classList.add("show-close")

  })
}

/* ============= MENU HIDDEN ========== */
/* Validate if constant exist */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu")
    navClose.classList.remove("show-close")
    navToggle.classList.remove("hide-toggle")
  })
}

/* =========== REMOVE MENU MOBILE ========== */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
    navClose.classList.remove("show-close")
    navToggle.classList.remove("hide-toggle")
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/* =========== SCROLL HEADER ========== */
const scrollHeader = () =>{
  const header = document.getElementById('header')
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50 ? header.classList.add('scroll-header') 
                     : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* =========== COPYRIGHT YEAR ========== */
const yearSpan = document.querySelector("#currentYear");
const currentYear = new Date();
yearSpan.innerText = currentYear.getFullYear();