/* ====================================================================
Project:  Portfolio Website  
Description:  For documention of personal web development projects. 

===== *** =====

This document contains JavaScript code that:

- Automatically updates the copyright year in the footer of 
the website.

- Makes the scroll-to-top button interactive so that: 
a) it is visible only when the user scrolls on the page, and 
b) it scrolls to the top of the page when the user clicks the button.
==================================================================== */

/* -------- MOBILE NAVIGATION -------- */ 

// Mobile navigation icon: 
const mobileNavIcon = document.querySelector(".mobile-bar-wrapper");
// Mobile navigation menu: 
const mobileNavMenu = document.querySelector(".mobile-nav");
// Mobile navigation menu links:
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

// Toggles the mobile nav menu and the close menu button:

const openMobileNav = () => {
  mobileNavIcon.classList.toggle("open");
  mobileNavMenu.classList.toggle("hide-mobile-nav-menu");
}

// Detects when user clicks on the mobile nav icon:
mobileNavIcon.addEventListener("click", openMobileNav);

// Closes the mobile nav menu when user clicks on the menu links:

const closeMobileNav = (n) => {
  mobileNavIcon.classList.remove("open");
  mobileNavMenu.classList.add("hide-mobile-nav-menu");
}

// Detects when user clicks on the nav menu links:
mobileNavLinks.forEach(n => n.addEventListener("click", closeMobileNav));
 

/* -------- UPDATE COPYRIGHT YEAR -------- */ 

// Automatically updates copyright year in the website footer:

const copyrightYear = document.querySelector(".copyright-year");

let date = new Date();
let year = date.getFullYear();
copyrightYear.innerHTML = `<p>Copyright ${year}</p>`;


/* -------- SCROLL BUTTON -------- */

//Scroll-to-top button:
const scrollToTopButton = document.querySelector(".scroll-top-button");
//Root element of the document (for offset values):
const rootElement = document.documentElement;

//Shows or hides the scroll-to-top button:

const handleScroll = () => {
    //Calculates max pixels that can be scrolled vertically:
    const totalScrollLength = rootElement.scrollHeight - rootElement.clientHeight;
    //Shows button based on number of pixels user has scrolled vertically:
    if ((rootElement.scrollTop / totalScrollLength) > 0.30 ) {
        scrollToTopButton.classList.remove("hide-scroll-top-button");
    } else {
        scrollToTopButton.classList.add("hide-scroll-top-button");
    }
}; 

//Scrolls to the top of the page:

const scrollToTop = () => {
    //Specifies the position to scroll to:
    rootElement.scrollTo({
        top: 0, 
        behavior: "smooth"  
    })
};

//Detects when user scrolls on page:
document.addEventListener("scroll", handleScroll);

//Detects when user clicks the scroll-to-top button:
scrollToTopButton.addEventListener("click", scrollToTop);

