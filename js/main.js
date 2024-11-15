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

// Imports for Scroll to Top functionality:
import {handleScroll} from "./scrollTop.js";




/* -------- MOBILE NAVIGATION -------- */ 

/**
 * Calls function in mobileNavigation.js to activate mobile navigation menu and functionality. 
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
 * Calls function in about.js to animate the About section. 
*/
animateAboutSection();


/* -------- SCROLL BUTTON -------- */

/**
 * Detects when user scrolls on page.
 * Calls event handler in scrollTop.js to show or hide scroll-to-top button. 
*/
document.addEventListener("scroll", handleScroll);


/* -------- UPDATE COPYRIGHT YEAR -------- */ 

// Automatically updates copyright year in the website footer:

const copyrightYear = document.querySelector(".copyright-year");

let date = new Date();
let year = date.getFullYear();
copyrightYear.innerHTML = `<p>Copyright ${year}</p>`;