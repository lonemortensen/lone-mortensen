/* ====================================================================
Project:  Portfolio Website Version 3.0
Description:  For documention of personal web development projects.
Module: main.js

===== *** =====

! UPDATE:

The main.js module:
- Opens and closes the hamburger navigation menu in mobile view.
- Manages the animation of the introduction title and text on page load.
- Makes the scroll-to-top button interactive so that: 
    a) it is visible only when the user scrolls on the page, and 
    b) it scrolls to the top of the page when the user clicks the button.
- Automatically updates the copyright year.
==================================================================== */

/* -------- IMPORTS -------- */

// Imports for Introduction Title and Text:
import {revealIntroTitle} from "./intro.js";

// Imports for Mobile Navigation:
import {activateMobileNavigation} from "./mobileNavigation.js";

// Imports for Portfolio Modal Windows:
import {addModalEventListener, closeModalWindow} from "./modal.js"; 

// Imports for Skills Panel:
import {handlePageLoad} from "./panel.js";

// Imports for About Sliders:
import {animateAboutSection} from "./about.js";

/* -------- MOBILE NAVIGATION -------- */ 

/**
 * Calls function in mobileNavigation.js that activates mobile navigation menu and functionality. 
*/
activateMobileNavigation();


/* -------- INTRODUCTION ANIMATION -------- */

/**
 * Detects when page loads.
 * Calls event handler in intro.js to reveal the introduction title. 
*/
window.addEventListener("load", revealIntroTitle);


/* -------- PORTFOLIO MODALS -------- */

/** 
 * Detects when page loads.
 * Adds event listener to the Window.
 * Calls event handler in modal.js to close any open modal windows.
*/
window.addEventListener("load", closeModalWindow); 


/** 
  * Selects and stores html elements for the modal window component.
  * Calls function in modal.js to add event listener to each modal html element.
  * @arg modalElements - Modal html elements. 
*/
const MODAL = (function() {
  const modalElements = document.querySelectorAll('.view-project'); 
  addModalEventListener(modalElements); 
})();


/* -------- SKILLS PANEL -------- */

/**
 * Detects when page loads.
 * Calls event handler in panel.js to highlight and display the default tab and panel.
*/
window.addEventListener("load", handlePageLoad);


/* -------- ABOUT SLIDERS ANIMATION -------- */

//!!!! START HERE: 
// Make sure elements are visible if JS is not enabled by browser: https://webdesign.tutsplus.com/animate-on-scroll-with-javascript--cms-36671t
// https://webdesign.tutsplus.com/animate-on-scroll-with-javascript--cms-36671t

/**
 * Calls function in about.js that animates the About section. 
*/
animateAboutSection();


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

/* -------- UPDATE COPYRIGHT YEAR -------- */ 

// Automatically updates copyright year in the website footer:

const copyrightYear = document.querySelector(".copyright-year");

let date = new Date();
let year = date.getFullYear();
copyrightYear.innerHTML = `<p>Copyright ${year}</p>`;