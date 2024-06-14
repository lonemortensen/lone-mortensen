/* ====================================================================
Project:  Portfolio Website Version 3
Description:  For documention of personal web development projects. 
Module: Modal.
========================================================================= */

/**
 * Array stores objects containing data for each of the Modals. 
 * The data is for use in the Modal windows.
*/

const portfolioProjects = [ 
    { 
        id: "project-1", 
        image: "img/unplugged-retreat-image-1200.png",
	    title: "Unplugged Retreat",
	    description: "A multi-page website for a fictional client coded from a Photoshop design comp. The website is responsive, using Flexbox to automatically adjust to different screen sizes.",
        firstLink: "https://lonemortensen.github.io/206-unplugged-retreat/",
	    secondLink: "https://github.com/lonemortensen/206-unplugged-retreat" 
    },
	{ 
        id: "project-2", 
	    image: "img/super-sticky-notes-image-1200.png",
	    title: "Super Sticky Notes",
        description: "This is an interactive web app that lets users create, edit, delete, and search in sticky notes. Notes are saved to the browser's local storage between sessions. This project was built with React JS.",
        firstLink: "https://bn2qgl.csb.app/",
        secondLink: "https://github.com/lonemortensen/super-sticky-notes" 
    },
	{ 
        id: "project-3", 
        image: "img/guess-the-word-image-1200.png",
        title: "Guess the Word",
        description: "This project was built with JavaScript. The game fetches and displays a random word and the user has 8 attempts to guess the word.",
        firstLink: "https://lonemortensen.github.io/guess-the-word/",
        secondLink: "https://github.com/lonemortensen/guess-the-word" 
    }, 
    { 
        id: "project-4", 
        image: "img/name-tag-generator-image-1200.png",
        title: "Name Tag Generator",
        description: "An interactive app built with React JS. Users can create name tags based on their input. Name tags are saved to the browser's local storage between sessions.",
        firstLink: "https://1f6ixl.csb.app/",
        secondLink: "https://github.com/lonemortensen/name-tag-generator" 
    },
    { 
        id: "project-5", 
        image: "img/github-repo-gallery-image-1200.png",
        title: "GitHub Repo Gallery",
        description: "This project uses GitHub's API to pull data from a GitHub portfolio to create a gallery of repos.",
        firstLink: "https://lonemortensen.github.io/github-repo-gallery/",
        secondLink: "https://github.com/lonemortensen/github-repo-gallery" 
    },
    { 
        id: "project-6", 
        image: "img/supervillain-trading-card-screenShot.png",
        title: "Supervillain Trading Cards",
        description: "This project uses GitHub's API to pull data from a GitHub portfolio to create a gallery of repos.",
        firstLink: "https://replit.com/@lonemortensen/skillcrush-py-cl02-ls10-villain-cards-restAPI-flask-final#main.py",
        secondLink: "https://github.com/lonemortensen/villain-trading-cards-api" 
    }  
];
/*
const galleryItems = [ 
    { 
        id: "gallery-1", 
	    image: "img/modal-window-project-1-1200.png",
	    title: "Gallery #1",
	    description: "Gallery #1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        firstLink: "https://lonemortensen.github.io/portfolio-filter/",
	    secondLink: "https://lonemortensen.github.io/portfolio-filter/" 
    },
    { 
        id: "gallery-2", 
	    image: "img/modal-window-project-1-1200.png",
	    title: "Gallery #2",
	    description: "Gallery #2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        firstLink: "https://lonemortensen.github.io/portfolio-filter/",
	    secondLink: "https://lonemortensen.github.io/portfolio-filter/" 
    },
    { 
        id: "gallery-3", 
	    image: "img/modal-window-project-1-1200.png",
	    title: "Gallery #3",
	    description: "Gallery #3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        firstLink: "https://lonemortensen.github.io/portfolio-filter/",
	    secondLink: "https://lonemortensen.github.io/portfolio-filter/" 
    }
];
*/

/* NOTE: The accessData function could not be imported into and accessed from the modal.js 
when the function was placed in the main.js module. It is unclear what caused the error, 
but it may be somehow related to the issue of 'circular dependency' and the import chain 
when importing modules in JS. 
When placing the accessData function directly in the modal.js module and accessing the data 
from inside the modal.js module, the function works. To avoid the import chain problem 
(and to keep the modal.js module free of data), the accessData function is instead placed in 
the modalData.js module and imported into the modal.js module from where it is called.   
*/

/**
 * Accesses and exports the data for the Modals. 
 * Combines multiple Modal data arrays into one data array.
 * @return — The data for the Modals.
*/
export const accessData = () => {
	// Combines multiple arrays into one:
    //let data = [].concat(portfolioProjects, galleryItems);
    let data = [].concat(portfolioProjects);  
    //console.log(data); // Works. Logs all objects in one array.
    return data;
};