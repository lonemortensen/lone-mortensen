/* ====================================================================
Project: Portfolio Website Version 3.0
Description:  For documention of personal web development projects. 
Module: Rate control utility functions.  

===== *** =====

The rateControl.js module:
- contains reuseable functions for throttling, debouncing. Incl.:  
    -- throttle function. 
    -- debounce (fallback)) function.
- uses: scroll, resize, mouse events, etc.
========================================================================= */

/**
 * Throttle function.
 * Limits the frequency with which the callback function is 
 * executed within a given time interval. 
 * @param callFunction - The callback function. 
 * @param delay - The wait time in milliseconds before the callback is executed again. 
*/
export const limitFunctionCalls = (callFunction, delay) => {
    let lastCall = 0; // Tracks and preserves timing in-between calls 

    return function (...args) {
        const currentTime = Date.now();
        if (currentTime - lastCall >= delay) {
            callFunction.apply(this, args);
            lastCall = currentTime;
        }
    };
};

/**
 * Debounce (fallback) function. 
 * Postpones execution of original callback function and ensures callback runs 
 * once after the event ends. 
 * If used with throttled function: in case an event is missed, the fallback ensures 
 * the throttled function runs one more time after the event ends.   
 * @param callFunction - The callback function. 
 * @param delay - The wait time in milliseconds before the callback is executed again. 
 * @return - New debounced version of callback function that controls when the original callback runs. 
*/
export const debounceFunction = (callFunction, delay) => {
    let timeoutDuration; // Sets and preserves wait time in-between calls
    
    return(...args) => {
        console.log("Fallback runs at scroll end"); // Delay works; runs auto after set timeout/delay
        clearTimeout(timeoutDuration);
        timeoutDuration = setTimeout(() => {
            callFunction.apply(this, args); // Calls original callback function after delay
        }, delay);
    };
};