/* ====================================================================
Project:  Portfolio Website Version 3
Description:  For documention of personal web development projects. 
Module: year.js
========================================================================= */

export const updateCopyrightYear = () => {
    const copyrightYear = document.querySelector(".copyright-year");
    
    let date = new Date();
    let year = date.getFullYear();
    copyrightYear.innerHTML = `<p>Copyright ${year}</p>`;
};