/* ====================================================================
Project:  Portfolio Website Version 3
Description:  For documention of personal web development projects. 
Module: Introduction section.

===== *** =====

The intro.js module: 
- reveals introduction title with animation.
- reveals introduction text.
- adds styling to introduction text.
- exports:
  -- event handler that reveals introduction title to main.js.
========================================================================= */

// Introduction title:
const introductionTitle = document.querySelector(".reveal-introduction-title");
// Introduction text:
const introductionText = document.querySelector(".reveal-introduction-text");
// Span that changes text styling in introduction text:
const textStyle = document.querySelector(".text-style");


/**
 * Reveals introduction title with typing effect when page has loaded:
*/
export const revealIntroTitle = () => {
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


/**
 * Reveals introduction text after title has finished typing: 
*/
const revealIntroText = () => {
  const showText = () => {
    introductionText.classList.add("show-introduction-text");
  };
  setTimeout(showText, 1000);
};


/**
 * Changes styling for text span in introduction text:  
*/
const changeTextStyle = () => {
  textStyle.classList.add("change-text-style");
};


/**
 *  Detects when introduction text animation is completed:
*/
introductionText.addEventListener("animationend", changeTextStyle); 