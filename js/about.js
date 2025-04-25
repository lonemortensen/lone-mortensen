/* ====================================================================
Project:  Portfolio Website Version 3.0
Description:  For documention of personal web development projects. 
Module: About section.

===== *** =====

// NOTE: Adjust module description since adding circle positioning function!

The about.js module:
- animates the appearance of sliders and 'yellow dot' in About section.
- starts animation on intersection with viewport.  
- applies animation CSS styling.
- exports:
    -- function that handles monitoring and animation for use in main.js.
========================================================================= */

/**
 * Global variables. 
 * Select target html elements for observation, animation, and positioning.
*/ 
// Target element: first About slider:
const aboutSliderOne = document.querySelector(".about-slider-1");
// Target element: second About slider:
const aboutSliderTwo = document.querySelector(".about-slider-2");
// Target element: About circle:
const aboutCircle = document.querySelector(".about-circle");

/**
 * Initiates animation. 
 * Uses the Intersection Observer API to watch for intersection changes for 'slider' html target elements. 
 * Runs callback function to initiate animations when targets intersect with the viewport (root).   
*/
export const animateAboutSection = () => {
    // Target element: first About slider:
    // const aboutSliderOne = document.querySelector(".about-slider-1");
    // Target element: second About slider:
    // const aboutSliderTwo = document.querySelector(".about-slider-2");
    // Target element: About circle:
    // const aboutCircle = document.querySelector(".about-circle");

    // Creates intersection observers and sets options for sliders:
    const observerSliderOne = () => {
        // Options object contains settings for the observer:
        const options = {
            root: null, // Root element set to viewport
            rootMargin: "0px",
            threshold: 1
        };
        //Creates new observer, passing callback function and observer options.
        const observer = new IntersectionObserver(startAboutAnimation, options);
        // Passes target element to observer:
        observer.observe(aboutSliderOne);
    };

    // Creates intersection observers and sets options for sliders:
    const observerSliderTwo = () => {
        // Options object contains settings for the observer:
        const options = {
            root: null, // Root element set to viewport
            rootMargin: "0px",
            threshold: 0.3
        };
        // Creates new observer, passing callback and observer options.
        const observer = new IntersectionObserver(startAboutAnimation, options);
        // Passes target element to observer:
        observer.observe(aboutSliderTwo);
    };

    // Callback function handles animation on intersection for both sliders.
    // Initiates circle animation. 
    // Initiates circle position on page.
    // @param entries - Array of IntersectionObserverEntry objects to determine visibility and intersection status of targets.
    // @param observer - The IntersectionObserver instance allows for interaction with the observer.
    const startAboutAnimation = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (entry.target.id === "slider-1") {
                    observer.disconnect();
                    entry.target.classList.remove("hide-about-content"); 
                    entry.target.classList.add("about-slide-left");  
                } else if (entry.target.id === "slider-2") {
                    observer.disconnect();
                    entry.target.classList.remove("hide-about-content");  
                    entry.target.classList.add("about-slide-right"); 
                    revealAboutCircle();
                }
            }
        });
    };

    observerSliderOne();
    observerSliderTwo();
    // Initiates circle position on page:
    adjustCirclePosition(aboutSliderOne, aboutCircle);
};

/**
 * Reveals About circle after second About slider is in place. 
*/
const revealAboutCircle = () => {
    const showCircle = () => {
        aboutCircle.classList.remove("hide-about-content");
        aboutCircle.classList.add("about-drop-top");
    };
    setTimeout(showCircle, 2500);
};

/**
 * Adjusts circle position dynamically to stay in place when window resizes. 
 * Gets the positions and sizes of the first About slider and the About circle.
 * Calculates the circle's position relative to the first slider.
 * Applies styling to adjust the circle's position as screen resizes. 
 * @param parent - The first About slider.
 * @param child - The About circle.
*/
const adjustCirclePosition = (parent, child) => {
    // Gets the slider's position and size:
    const parentSizeAndPosition = parent.getBoundingClientRect();
  
    // Gets the circle's height:
    const childHeight = child.getBoundingClientRect().height;

    // Gets the circle's width:
    const childWidth = child.getBoundingClientRect().width;
  
    // Calculates circle's position from top of slider:
    let positionTop = parentSizeAndPosition.height - (childHeight / 2);
  
    // Calculates circle's position from left (horizontally) of slider:
    let positionLeft = (parentSizeAndPosition.width - childWidth) / 2;
    
    // Adds styling to move circle into position as screen size changes:
    child.style.top = `${positionTop}px`;
    child.style.left = `${positionLeft}px`;  
};

/**
 * Detects when window has been resized.
 * Calls event handler to adjust position of circle.
*/
window.addEventListener("resize", () => {
    adjustCirclePosition(aboutSliderOne, aboutCircle);
});

/*
 * NOTE: Can I m ove this inside animateAboutSection to be called? 
 * Detects when window loads.
 * Calls event handler to initialize page.
*/
// window.addEventListener("load", () => {
//     adjustElementPosition(aboutSliderOne, aboutCircle);
// });
  