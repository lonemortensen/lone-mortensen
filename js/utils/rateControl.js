/* ====================================================================
Project: Portfolio Website Version 3.0
Description:  For documention of personal web development projects. 
Module: Rate control utility functions.  

===== *** =====

The rateControl.js module:
- contains reuseable functions for throttling, debouncing. Incl.:  
    -- throttle function. 
- exports:
    -- throttle function to main.js for use with scroll event.
========================================================================= */

/**
 * Throttle function.
 * Limits the frequency with which the callback function is 
 * executed within a given time interval. 
 * @param callFunction - The callback function. 
 * @param delay - The wait time in milliseconds before the callback is executed again. 
*/
export const limitFunctionCalls = (callFunction, delay) => {
    let lastCall = 0; 
    
    return function (...args) {
        const currentTime = Date.now();
        if (currentTime - lastCall >= delay) {
            callFunction.apply(this, args);
            lastCall = currentTime;
        }
    };
};
