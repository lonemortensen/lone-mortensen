/* ====================================================================
Project:  Portfolio Website Version 3
Description:  For documention of personal web development projects. 
Module: scrollTop.js
========================================================================= */

// Scroll-to-top button:
const scrollToTopButton = document.querySelector(".scroll-top-button");
// Root element of the document (for offset values):
const rootElement = document.documentElement;

//Shows or hides the scroll-to-top button:
export const handleScroll = () => {
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
export const scrollToTop = () => {
    //Specifies the position to scroll to:
    rootElement.scrollTo({
        top: 0, 
        behavior: "smooth"  
    })
};

//Detects when user clicks the scroll-to-top button:
scrollToTopButton.addEventListener("click", scrollToTop);