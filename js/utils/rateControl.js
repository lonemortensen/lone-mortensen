/* ====================================================================
Project: Portfolio Website Version 3.0
Description:  For documention of personal web development projects. 
Module: Rate control utility functions.  

===== *** =====

The rateControl.js module:
- contains reuseable functions for:  
    -- throttling 
    -- debouncing
- uses: scroll, resize, mouse events, etc.
========================================================================= */

/**
 * Throttle function.
 * Limits the frequency with which the callback function is 
 * executed within a given time interval when an event fires repeatedly. 
 * @param callFunction - The callback function. 
 * @param delay - The wait time in milliseconds before the callback is executed again. 
 * @return - New wrapped version of callback function that controls when the original callback runs based on timing.
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
 * Debounce function. 
 * Delays execution of the callback function for a set period of time when 
 * the event fires repeatedly. Then runs the callback once after the specified wait 
 * time has passed since the last event fired.
 * Resets the timer if the event fires again before the wait time has passed.  
 * @param callFunction - The callback function. 
 * @param delay - The wait time in milliseconds before the callback is executed again. 
 * @return - New wrapped version of callback function that controls when the original callback runs based on timing. 
*/
export const debounceFunction = (callFunction, delay) => {
    let timeoutDuration; // Sets and preserves wait time in-between calls
    
    return(...args) => {
        clearTimeout(timeoutDuration);
        timeoutDuration = setTimeout(() => { 
            callFunction.apply(this, args); // Calls original callback function after delay
        }, delay);
    };
};