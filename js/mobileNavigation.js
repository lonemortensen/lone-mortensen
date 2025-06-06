/* ====================================================================
Project:  Portfolio Website Version 3.0
Description:  For documention of personal web development projects. 
Module: Mobile navigation menu.

===== *** =====

The mobileNavigation.js module:
- toggles and applies CSS styling for navigation open/close functionality. 
- adds event listeners for open/close functionality and menu links.  
- exports:
    -- function that activates mobile navigation functionality to main.js. 
========================================================================= */

export const activateMobileNavigation = () => {
    // Mobile navigation icon: 
    const mobileNavIcon = document.querySelector(".mobile-bar-wrapper");
    // Mobile navigation menu: 
    const mobileNavMenu = document.querySelector(".mobile-nav");
    // Mobile navigation menu links:
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

    // Toggles the mobile nav menu and the close menu button:
    const openMobileNav = () => {
        mobileNavIcon.classList.toggle("open-menu");
        mobileNavMenu.classList.toggle("hide-mobile-nav-menu");
    };

    // Detects when user clicks on the mobile nav icon:
    mobileNavIcon.addEventListener("click", openMobileNav);

    // Closes the mobile nav menu when user clicks on the menu links:
    const closeMobileNav = () => {
        mobileNavIcon.classList.remove("open-menu");
        mobileNavMenu.classList.add("hide-mobile-nav-menu");
    };

    // Detects when user clicks on the mobile nav menu links:
    mobileNavLinks.forEach(n => n.addEventListener("click", closeMobileNav));
};