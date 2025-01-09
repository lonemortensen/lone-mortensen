/* ====================================================================
Project:  Portfolio Website Version 3.0
Description:  For documention of personal web development projects.
Module: JavaScript entry point.

===== *** =====

The main.js module:
- acts as the websites' JavaScript entry point and connects to index.html. 
- adds event listeners and calls functions when the script first runs.
- imports:
  -- functions and event handlers from other modules used in the script.  
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

// Imports for Copyright Year Update:
import {updateCopyrightYear} from "./year.js";


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

/**
 * Calls function in year.js to automatically update copyright year in the website footer.
*/
updateCopyrightYear();
