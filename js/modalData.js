/* ====================================================================
Project:  Portfolio Website Version 3
Description:  For documention of personal web development projects. 
Module: modalData.js

===== *** =====

The modalData.js module:
- stores data for each modal window.   
- exports function that accesses data for use in modal.js.
========================================================================= */

/**
 * An array stores objects containing data for each of the modal windows. 
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


/**
 * Exports the data for the modal windows. 
 * @return — Data for the modal windows.
*/
export const accessData = () => {
    let data = portfolioProjects;
    console.log(data); // Works. Logs all objects in one array.
    return data;
};