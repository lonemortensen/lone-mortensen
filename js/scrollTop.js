/* ====================================================================
Project:  Portfolio Website Version 3.0
Description:  For documention of personal web development projects. 
Module: Scroll-to-top button. 

===== *** =====

The scrollTop.js module:
- detects user scroll on page and displays or hides scroll-to-top button. 
- throttles the function that displays or hides scroll-to-top button. 
- adds event listener to scroll-to-top button and scrolls to top of web page.
- exports:
    -- throttler for scroll event to main.js.
    -- event handler that displays button to main.js.
========================================================================= */

// Scroll-to-top button:
const scrollToTopButton = document.querySelector(".scroll-top-button");
// Root element of the document (for offset values):
const rootElement = document.documentElement;

// NOTE: Remove commented out code in scroll related code in main.js and update function comments.

/**
 * Throttle function for scroll event.
 * Limits the frequency with which the displayScrollButton function is 
 * called in a given timeframe when the user scrolls. 
 * @param callFunction - The function that shows or hides the scroll-to-top button.
 * @param delay - The wait time in milliseconds before the function is called again. 
*/
export const limitFunctionCalls = (callFunction, delay) => {
    let lastCall = 0;
    let currentTime = Date.now();
    console.log(currentTime);
    
    if (currentTime - lastCall >= delay) {
        callFunction();
        lastCall = currentTime;
    }
};

/**
 * Shows or hides the scroll-to-top button based on far 
 * the user has scrolled vertically.
*/
export const displayScrollButton = () => {
    // Pixels user has scrolled vertically:
    const pixelsScrolled = window.scrollY;
    console.log(pixelsScrolled);
    // Calculates max pixels that can be scrolled vertically:
    const totalScrollLength = rootElement.scrollHeight - rootElement.clientHeight;
    console.log(totalScrollLength);
    // Calculates user's current position as a percentage:
    const percentScrolled = (pixelsScrolled / totalScrollLength) * 100;
    console.log(percentScrolled);
    // Shows button based on percentage user has scrolled vertically:
    if (percentScrolled > 25) {
        scrollToTopButton.classList.remove("hide-scroll-top-button");
    } else {
        scrollToTopButton.classList.add("hide-scroll-top-button");
    }
}; 

/**
 * Scrolls to the top of the page. 
*/
const scrollToTop = () => {
    // Specifies the position to scroll to:
    rootElement.scrollTo({
        top: 0, 
        behavior: "smooth"  
    })
};

/**
 * Detects when user clicks the scroll-to-top button.
*/
scrollToTopButton.addEventListener("click", scrollToTop);