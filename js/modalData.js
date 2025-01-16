/* ====================================================================
Project:  Portfolio Website Version 3.0
Description:  For documention of personal web development projects. 
Module: Data for portfolio projects modal windows. 

===== *** =====

The modalData.js module:
- stores data for each modal window.   
- exports:
    -- function that accesses modal window data for use in modal.js.
========================================================================= */

/**
 * An array stores objects containing data for each of the modal windows. 
*/
const portfolioProjects = [ 
    { 
        id: "project-1", 
        image: "img/supervillain-trading-card-screenShot.png",
	    title: "Supervillain Trading Cards",
	    description: "The user inputs card data in an HTML form on the front end and the data is stored in an SQL database. The app, built with Flask, uses a REST API and JavaScript for routing and rendering data.",
        firstLink: "https://replit.com/@lonemortensen/skillcrush-py-cl02-ls10-villain-cards-restAPI-flask-final#main.py",
	    secondLink: "https://github.com/lonemortensen/villain-trading-cards-api" 
    },
	{ 
        id: "project-2", 
	    image: "img/portfolio-filter-image-1200.png",
	    title: "Portfolio Gallery Filter",
        description: "Users click on filter buttons to select which projects to view. JavaScript accesses HTML data attributes storing custom project data to create filter buttons and update the UI based on user selections.",
        firstLink: "https://lonemortensen.github.io/portfolio-filter/",
        secondLink: "https://github.com/lonemortensen/portfolio-filter?tab=readme-ov-file" 
    },
	{ 
        id: "project-3", 
        image: "img/super-sticky-notes-image-1200.png",
        title: "Super Sticky Notes",
        description: "Using React JS, this app handles dynamic content based on user input, offering real-time create, delete, edit, and search functionalities. Notes are saved to the browser's local storage between sessions.",
        firstLink: "https://bn2qgl.csb.app/",
        secondLink: "https://github.com/lonemortensen/super-sticky-notes" 
    }, 
    { 
        id: "project-4", 
        image: "img/github-repo-gallery-image-1200.png",
        title: "GitHub Repo Gallery",
        description: "The gallery utilizes JavaScript and the GitHub REST API to fetch, display, and enable interaction with public GitHub repos. It pulls user and repo data and features a dynamic search function.",
        firstLink: "https://lonemortensen.github.io/github-repo-gallery/",
        secondLink: "https://github.com/lonemortensen/github-repo-gallery" 
    },
    { 
        id: "project-5", 
        image: "img/modal-windows-image-1200.png",
        title: "More Modal Windows",
        description: "Two separate modal window components are featured on the same web page. JavaScript ES6 modules allow for modal window functionality to be reused and applied to both. Use mouse or keyboard to navigate.",
        firstLink: "https://lonemortensen.github.io/modal-window/",
        secondLink: "https://github.com/lonemortensen/modal-window" 
    },
    { 
        id: "project-6", 
        image: "img/guess-the-word-image-1200.png",
        title: "Guess the Word Game",
        description: "JavaScript and an API call are used to fetch random words from a text file and track game progress. The game validates player input and tracks letters and guesses while displaying messages on the UI.",
        firstLink: "https://lonemortensen.github.io/guess-the-word/",
        secondLink: "https://github.com/lonemortensen/guess-the-word" 
    }  
];


/**
 * Exports the data for the modal windows. 
 * @return — Data for the modal windows.
*/
export const accessData = () => {
    let data = portfolioProjects;
    return data;
};