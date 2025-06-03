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
 * executed in a given timeframe. 
 * @param callFunction - The callback function. 
 * @param delay - The wait time in milliseconds before the callback is executed again. 
*/
// export const limitFunctionCalls = (callFunction, delay) => {
//     let lastCall = 0;
//     let currentTime = Date.now();
//     console.log(currentTime);
    
//     if (currentTime - lastCall >= delay) {
//         callFunction();
//         lastCall = currentTime;
//     }
// };

// NOTE: Start here. Throttle function needs rewriting!

let lastCall = 0;
console.log(lastCall);

export const limitFunctionCalls = (callFunction, delay) => {
    // let lastCall = 0;
    let currentTime = Date.now();
    
    
    if (currentTime - lastCall >= delay) {
        callFunction();
        lastCall = currentTime;
    }
};
