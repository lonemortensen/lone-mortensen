/* ====================================================================
Project:  Portfolio Website Version 3.0
Description:  For documention of personal web development projects.

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

// Imports for Portfolio Modal Windows:
import {addModalEventListener, closeModalWindow} from "./modal.js"; 
// Imports for Skills Panel:
import {tabsList, handlePageLoad, handleTabSelection} from "./panel.js";
// Imports for About Sliders:
import {animateAboutSection} from "./about.js";

/* -------- MOBILE NAVIGATION -------- */ 

// Mobile navigation icon: 
const mobileNavIcon = document.querySelector(".mobile-bar-wrapper");
// Mobile navigation menu: 
const mobileNavMenu = document.querySelector(".mobile-nav");
// Mobile navigation menu links:
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

/**
 * Toggles the mobile nav menu and the close menu button:
*/
const openMobileNav = () => {
  mobileNavIcon.classList.toggle("open");
  mobileNavMenu.classList.toggle("hide-mobile-nav-menu");
}

/**
 * Detects when user clicks on the mobile nav icon:
*/
mobileNavIcon.addEventListener("click", openMobileNav);

/**
 * Closes the mobile nav menu when user clicks on the menu links:
*/
const closeMobileNav = (n) => {
  mobileNavIcon.classList.remove("open");
  mobileNavMenu.classList.add("hide-mobile-nav-menu");
}

/**
 * Detects when user clicks on the mobile nav menu links:
*/
mobileNavLinks.forEach(n => n.addEventListener("click", closeMobileNav));
 

/* -------- INTRODUCTION ANIMATION -------- */

/**
 * Reveals introduction title with animation.
 * Reveals introduction text.
 * Adds styling to introduction text.
*/
const INTRO = (function () {
    // Introduction title:
    const introductionTitle = document.querySelector(".reveal-introduction-title");
    // Introduction text:
    const introductionText = document.querySelector(".reveal-introduction-text");
    // Span that changes text styling in introduction text:
    const textStyle = document.querySelector(".text-style");
    
    //Reveals introduction title with typing effect when page has loaded:
    const revealIntroTitle = () => {
      introductionText.classList.remove("show-introduction-text");
      let titleText = introductionTitle.textContent;
      introductionTitle.textContent = "";
      let i = 0;
      const typingEffect = setInterval (() => {
        introductionTitle.textContent += titleText.charAt(i); 
        i++;
        if (i === titleText.length) {
          clearInterval(typingEffect);
          revealIntroText();
        }
      }, 100);
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

/** 
 * Detects when page loads.
 * Adds event listener to the Window.
 * Calls event handler to close any open modal windows.
*/
window.addEventListener("load", closeModalWindow); 

/** 
  * Selects and stores html elements for the modal window component.
  * Calls function to add event listener to each modal html element.
  * @arg modalElements - Modal html elements. 
*/
const MODAL = (function() {
  const modalElements = document.querySelectorAll('.view-project'); 
  addModalEventListener(modalElements); 
})();


/* -------- SKILLS PANEL -------- */

/**
 * Detects when page loads:
*/
window.addEventListener("load", handlePageLoad);

/**
 * Detects when user clicks on a tab.
 * Calls event handler to add event listeners to each tab html element.
*/
const addTabEventListener = () => {
  for (let i = 0; i < tabsList.length; i++) {
    let tab = tabsList[i];
    console.log(tab); //logs all <a>, i.e. tabs - this means main.js connects to panel.js
    tab.addEventListener("click", handleTabSelection);
  };
};

addTabEventListener();


/* -------- ABOUT SLIDERS -------- */

/**
 * !!!! START HERE: 
 * Make sure elements are visible if JS is not enabled by browser: https://webdesign.tutsplus.com/animate-on-scroll-with-javascript--cms-36671t
 * https://webdesign.tutsplus.com/animate-on-scroll-with-javascript--cms-36671t
 */

const ABOUT = (function () {
  animateAboutSection();
  // // Target element: first About slider:
  // const aboutSliderOne = document.querySelector(".about-slider-1");
  // // Target element: second About slider:
  // const aboutSliderTwo = document.querySelector(".about-slider-2");
  // // Target element: About circle:
  // const aboutCircle = document.querySelector(".about-circle");

  // /**
  //  * Creates intersection observers and sets options for sliders.
  //  */
  // const observerSliderOne = () => {
  //   // Options object contains settings for the observer:
  //   const options = {
  //     root: null, // Root element set to viewport
  //     rootMargin: "0px",
  //     threshold: 1
  //   };
  //   //Creates new observer, passing callback function and observer options.
  //   const observer = new IntersectionObserver(startAboutAnimation, options);
  //   // Passes target element to observer:
  //   observer.observe(aboutSliderOne);
  // };

  // const observerSliderTwo = () => {
  //   // Options object contains settings for the observer:*/
  //   const options = {
  //     root: null, // Root element set to viewport
  //     rootMargin: "0px",
  //     threshold: 0.3
  //   };
  //   // Creates new observer, passing callback and observer options.
  //   const observer = new IntersectionObserver(startAboutAnimation, options);
  //   // Passes target element to observer:
  //   observer.observe(aboutSliderTwo);
  // };

  // /**
  //  * Callback handles animation on intersection for both sliders.
  //  * Initiates circle animation. 
  //  * @param entries Array of IntersectionObserverEntry objects to determine visibility and intersection status of targets.
  //  * @param observer The IntersectionObserver instance allows for interaction with the observer.
  //  */
  // const startAboutAnimation = (entries, observer) => {
  //   entries.forEach((entry) => {
  //     console.log(entry);
  //     if (entry.isIntersecting) {
  //       if (entry.target.id === "slider-1") {
  //         console.log("we're intersecting slide 1"); // Works
  //         observer.disconnect();
  //         entry.target.classList.remove("hide-about-content"); // Works 
  //         entry.target.classList.add("about-slide-left"); // Works - "slider 1" slides in. 
  //       } else if (entry.target.id === "slider-2") {
  //           console.log("we're intersecting slide 2"); // Works
  //           observer.disconnect();
  //           entry.target.classList.remove("hide-about-content"); // Works 
  //           entry.target.classList.add("about-slide-right"); // Works - "slider 2" slides in.
  //           revealAboutCircle();
  //       }
  //       // revealAboutCircle();
  //     }
  //   });
  // };

  // /**
  //  * Reveals circle after second slider is in place. 
  //  */
  // const revealAboutCircle = () => {
  //   const showCircle = () => {
  //     aboutCircle.classList.remove("hide-about-content");
  //     aboutCircle.classList.add("about-drop-top");
  //   };
  //   setTimeout(showCircle, 2500);
  // };

  // observerSliderOne();
  // observerSliderTwo();
})();


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