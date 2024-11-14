/* ====================================================================
Project:  Portfolio Website Version 3
Description:  For documention of personal web development projects. 
Module: About.
========================================================================= */

export const animateAboutSection = () => {
    // Target element: first About slider:
    const aboutSliderOne = document.querySelector(".about-slider-1");
    // Target element: second About slider:
    const aboutSliderTwo = document.querySelector(".about-slider-2");
    // Target element: About circle:
    const aboutCircle = document.querySelector(".about-circle");

    /**
     * Creates intersection observers and sets options for sliders.
     */
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

    const observerSliderTwo = () => {
    // Options object contains settings for the observer:*/
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

    /**
     * Callback handles animation on intersection for both sliders.
     * Initiates circle animation. 
     * @param entries Array of IntersectionObserverEntry objects to determine visibility and intersection status of targets.
     * @param observer The IntersectionObserver instance allows for interaction with the observer.
     */
    const startAboutAnimation = (entries, observer) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
        if (entry.target.id === "slider-1") {
            console.log("we're intersecting slide 1"); // Works
            observer.disconnect();
            entry.target.classList.remove("hide-about-content"); // Works 
            entry.target.classList.add("about-slide-left"); // Works - "slider 1" slides in. 
        } else if (entry.target.id === "slider-2") {
            console.log("we're intersecting slide 2"); // Works
            observer.disconnect();
            entry.target.classList.remove("hide-about-content"); // Works 
            entry.target.classList.add("about-slide-right"); // Works - "slider 2" slides in.
            revealAboutCircle();
        }
        // revealAboutCircle();
        }
    });
    };

    /**
     * Reveals circle after second slider is in place. 
     */
    const revealAboutCircle = () => {
    const showCircle = () => {
        aboutCircle.classList.remove("hide-about-content");
        aboutCircle.classList.add("about-drop-top");
    };
    setTimeout(showCircle, 2500);
    };

    observerSliderOne();
    observerSliderTwo();
};