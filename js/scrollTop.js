/* ====================================================================
Project:  Portfolio Website Version 3.0
Description:  For documention of personal web development projects. 
Module: Scroll-to-top button. 

===== *** =====

The scrollTop.js module:
- displays or hides scroll-to-top button when user scrolls on page. 
- adds event listener to scroll-to-top button. 
- scrolls to top of web page when user clicks scroll-to-top button.
- exports:
    -- event handler that displays scroll-to-top button to main.js for use 
    with throttle function.
========================================================================= */

// Scroll-to-top button:
const scrollToTopButton = document.querySelector(".scroll-top-button");
// Root element of the document (for offset values):
const rootElement = document.documentElement;

/**
 * Shows or hides the scroll-to-top button based on how far 
 * the user has scrolled vertically.
*/
export const displayScrollButton = () => {
    // Pixels user has scrolled vertically:
    const pixelsScrolled = window.scrollY;
    // Calculates max pixels that can be scrolled vertically:
    const totalScrollLength = rootElement.scrollHeight - rootElement.clientHeight;
    // Calculates user's current position as a percentage:
    const percentScrolled = (pixelsScrolled / totalScrollLength) * 100;
    // Shows button based on percentage user has scrolled vertically:
    if (percentScrolled > 25) {
        scrollToTopButton.classList.remove("hide-scroll-top-button");
    } else {
        scrollToTopButton.classList.add("hide-scroll-top-button");
    }
    console.log(`Scrolled to: ${percentScrolled.toFixed(1)}%`);
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