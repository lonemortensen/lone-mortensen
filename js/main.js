/* ====================================================================
Project:  Portfolio Website  
Description:  For documention of personal web development projects 

===== *** =====

This document contains JavaScript code that:
- Opens and closes the hamburger navigation menu in mobile view.
- Manages the animation of the introduction title and text on page load.
- Makes the scroll-to-top button interactive so that: 
    a) it is visible only when the user scrolls on the page, and 
    b) it scrolls to the top of the page when the user clicks the button.
- Automatically updates the copyright year.
==================================================================== */

/* -------- IMPORTS -------- */

/* Imports for Portfolio Modals: */
import {addModalEventListener, closeModalWindow} from "./modal.js"; 

/* Imports for Skills Panel: */
import {tabsList, handlePageLoad, handleTabSelection} from "./panel.js";


/* -------- SKILLS PANEL -------- */


// import {tabsList, handlePageLoad, handleTabSelection} from "./panel.js";

// /**
//  * Detects when page loads:
// */
// window.addEventListener("load", handlePageLoad);


// /**
//  * Detects when user clicks on a tab:
// */
// const addTabEventListener = () => {
//   for (let i = 0; i < tabsList.length; i++) {
//     let tab = tabsList[i];
//     console.log(tab); //logs all <a>, i.e. tabs - this means main.js connects to panel.js
//     tab.addEventListener("click", handleTabSelection);
//   };
// };

// addTabEventListener();



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
 

/* -------- INTRODUCTION ANIMATION -------- */

const INTRO = (function () {
    //Introduction title:
    const introductionTitle = document.querySelector(".reveal-introduction-title");
    //Introduction sub-title:
    const introductionText = document.querySelector(".reveal-introduction-text");
    //Span that changes text styling in introduction sub-title:
    const textStyle = document.querySelector(".text-style");
    
    //Reveals introduction title with typing effect when page has loaded:
    const revealIntroTitle = () => {
      introductionText.classList.remove("show-introduction-text");
      introductionTitle.textContent = "";
      const titleText = "Hello there!"; 
      let i = 0;
      const typingEffect = setInterval (() => {
        introductionTitle.textContent += titleText.charAt(i); 
        i++;
        if (i === titleText.length) {
          clearInterval(typingEffect);
          revealIntroText();
        }
      }, 85);
    };

    //Reveals introduction text after title has finished typing: 
    const revealIntroText = () => {
      const showText = () => {
        introductionText.classList.add("show-introduction-text");
      };
      setTimeout(showText, 1000);
    };
  
    //Changes styling for text span in introduction text:  
    const changeTextStyle = () => {
      textStyle.classList.add("change-text-style");
    };
  
    // Detects when web page has loaded:
    window.addEventListener("load", revealIntroTitle);
  
    // Detects when introduction text animation is completed:
    introductionText.addEventListener("animationend", changeTextStyle) 
})();


/* ===== PORTFOLIO MODALS ===== */

// /**
//  * Imports. 
// */

// // Imports event handlers:
// import {addModalEventListener, closeModalWindow} from "./modal.js"; 


/** 
 * Detects when page loads.
 * Adds event listener to the Window.
 * Calls event handler to check if a Modal window is currently open. If so, the Modal Window will be closed. 
*/
window.addEventListener("load", closeModalWindow); // Works. Modal + background disappears on page re-load.


/* NOTE: The 'modal' IIFE runs every time the script loads. If there are mutiple Modal components on the web page, 
event listeners are added to all of the components. When Modal components are added (or removed) from the 
web page, the modal IIFE needs updating.
*/ 
const modal = (function() {

    /** 
     * Gets and stores Modal html elements.
     * Selects elements for all Modal components on the web page.
     * Calls event handler to add an event listener to each Modal html element.
     * @arg modalElements - Contains Modal html elements. 
    */
    const modalElements = document.querySelectorAll('.view-project'); // Works. Selects both project and gallery elements.
    console.log(modalElements);
    addModalEventListener(modalElements); 

})();



/* -------- SKILLS PANEL -------- */


// import {tabsList, handlePageLoad, handleTabSelection} from "./panel.js";

/**
 * Detects when page loads:
*/
window.addEventListener("load", handlePageLoad);


/**
 * Detects when user clicks on a tab:
*/
const addTabEventListener = () => {
  for (let i = 0; i < tabsList.length; i++) {
    let tab = tabsList[i];
    console.log(tab); //logs all <a>, i.e. tabs - this means main.js connects to panel.js
    tab.addEventListener("click", handleTabSelection);
  };
};

addTabEventListener();




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