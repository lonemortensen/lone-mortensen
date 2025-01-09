/* ====================================================================
Project:  Portfolio Website Version 3.0
Description:  For documention of personal web development projects. 
Module: Automatic update of website copyright year.

===== *** =====

The year.js module:
- automatically updates and inserts the copyright year in footer.
- exports:
    -- function that initiates update to main.js. 
========================================================================= */

export const updateCopyrightYear = () => {
    const copyrightYear = document.querySelector(".copyright-year");
    
    let date = new Date();
    let year = date.getFullYear();
    copyrightYear.innerHTML = `<p>Copyright ${year}</p>`;
};