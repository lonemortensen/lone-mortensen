/* ====================================================================
Project:  Portfolio Website Version 3
Description:  For documention of personal web development projects. 
Module: Modal.
========================================================================= */

/**
 * Imports. 
*/
// Imports function that accesses data for the Modals:
import {accessData} from "./modalData.js";


/** 
 * Global variables.
*/
// The modalBackdrop and modalWindow variables must be accessible to the closeModalWindow function.
let modalBackdrop; // Variable is uninitialized to control when to create the html element in the DOM.
let modalWindow; // Variable is uninitialized to control when to create the html element in the DOM.


/* ===== MODEL ===== */

/**
 * Collects Modal data. 
 * Stores and returns data for the selected Modal's window as an object.
 * @param type — The type of Modal to get data for: 'new', 'next', or 'previous'.
 * @param selectedModalId — The id attribute value of the Modal selected by the user. 
 * @return — The object contains the data for the selected Modal window.
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

const getModalData = (type, selectedModalId) => {
	// Calls function to access data and assigns returned data to new variable:
	let modalData = accessData(); // To hold onto the returned result, assign the function to a variable.
	console.log(modalData); // Works. Logs all objects in ONE array.
	console.log(type); // Works. Logs type correctly.
	console.log(selectedModalId); // Works.

	// Stores data for the selected Modal's window:
	let modalWindowData = {};
	console.log(modalWindowData);

	// Gets and stores the index of the Modal based on the Modal's id:
	// - note: Gets the currently open Modal's index when user selects 'previous' or 'next' modal.
	let modalWindowIndex = modalData.findIndex(modal => modal.id == selectedModalId);
	console.log(modalWindowIndex); // Works. Logs the index of the 'new' OR currently open Modal. 
	
	// Adds data for the selected Modal ('new', 'previous', or 'next') to the modalWindowData object:
	// @param selectedModal - The data for the selected Modal.
	const addModalWindowData = (selectedModal) => {   // Works. Adds selected Modal data to object.
		for (let key in selectedModal) {
			modalWindowData[key] = selectedModal[key];
		}
	};	

	// Gets data for a 'new' Modal window: 
	if (type == 'new') { 
		// Q: Do I need a loop that will stop (break out) when it gets the requested modal's id - vs. going through them all?
		// Loops through each object in the Modal data array: 
		for (let modal of modalData) {
			//console.log(modal); // Works. Logs key-values of each object in the Modal data array.
			// Loops through the keys of the object to check if the id key matches the id of the Modal:
			for (let key in modal) {
				//console.log(key, modal[key]); // Works. Logs key-value pairs of each object.
				//console.log(key); // Works. Isolates and logs each key of each object on separate line.
				//console.log(modal[key]); // Works. Logs values of each object.
				if (modal[key] == selectedModalId) {
					// console.log(modal[key]); // Works. Logs the value as passed by function call. 
					let newModal = modal;
					console.log(newModal);  // Works. Logs the full object of the selected modal.
					addModalWindowData(newModal);
				}
			}
		} 
	}

	//Gets data for the 'previous' Modal window:
	if (type == 'previous') {
		// Gets the data for the 'previous' Modal window based on the index of the currently open Modal:
		// @param currentModal - The index of the currently open Modal (modalWindowIndex).
		// @param modalArray - The modal data array (modalData).
		// @return - The data for the Modal that comes before the current Modal.
		// Note: the function accesses the array in a circular manner, accessing the last modal if the current modal is the first one.
		const getPreviousModal = (currentModal, modalArray) => {
			let i = currentModal - 1;
			let n = modalArray.length;
			return modalArray[(i % n + n) % n];
		};

		let previousModal = getPreviousModal(modalWindowIndex, modalData);
		console.log(previousModal); // Works. Logs modal in index 2 ("project-3").

		// Calls function to add data for the 'previous' Modal to modalWindowData object:
		addModalWindowData(previousModal); // Works. Logs modal in index 2 ("project-3").
	}

	// Gets data for the 'next' Modal window: 
	if (type == 'next') {
		// Gets the data for the 'next' Modal based on the index of the currently open Modal:
		// @param currentModal - The index of the currently open Modal (modalWindowIndex).
		// @param modalArray - The modal data array (modalData).
		// @return - The data for the Modal that comes after the current Modal.
		// - note: the function accesses the array in a circular manner, accessing the first modal if the current modal is the last one.
		const getNextModal = (currentModal, modalArray) => {
			let i = currentModal + 1;
			let n = modalArray.length;
			return modalArray[(i % n + n) % n];
		};

		let nextModal = getNextModal(modalWindowIndex, modalData);
		console.log(nextModal); // Works. Logs modal in index 0 ("project-1").

		// Calls function to add data for the 'next' Modal to modalWindowData object:
		addModalWindowData(nextModal); // Works. Logs modal in index 0 ("project-1").
	}

	// Returns the data for the selected Modal's window:
	return modalWindowData; // Works.
};


/* ===== VIEW ===== */

/**
 * Adds event listeners to Modal html elements.
 * Calls event handler to prepare a Modal. 
 * @param modalELements - Contains Modal html elements. 
*/

export const addModalEventListener = (modalElements) => {
	for (const element of modalElements) {
		element.addEventListener("click", prepareModalWindow);
	}	
};

// TEST CODE for addModalEventListener():
// const prepareModalWindow = () => {
// console.log("Event listener works"); // works
// };


/**
 * Creates and displays a Modal.
 * Adds backdrop to web page to blur the page behind the Modal.  
 * Adds html mark-up for Modal UI.
 * Adds event listeners to the Modal's arrow buttons and close button. 
 * Adds Modal data for the requested Modal to the html mark-up.
 * Accesses the id attribute of the currently open Modal. 
 * @param selectedModalData — Contains the object with the data for the selected Modal.
 * @arg currentModalId - The id attribute value of the currently open Modal. 
*/

const createModalWindow = (selectedModalData) => {
	console.log(selectedModalData);

	// Closes currently open Modal if applicable:
	closeModalWindow();

	// Selects body and main elements:
	const bodyElement = document.querySelector("body"); // Stay here or move inside function? Need for variable? 
	//const mainElement = document.querySelector("main"); // Stay here or move inside function? Need for variable? 
	// NOTE: CHECK if it's possible to still use the main element (vs header):
    const mainElement = document.querySelector("header"); 

	/* Modal backdrop: */  
	modalBackdrop = document.createElement("div");
	modalBackdrop.classList.add("backdrop-blur");
	bodyElement.insertBefore(modalBackdrop, mainElement); // Works! 
	modalBackdrop.addEventListener("click", closeModalWindow); 

	/* Modal window:*/
	modalWindow = document.createElement("div");
	modalWindow.setAttribute("id", selectedModalData['id']); 
	modalWindow.classList.add("modal-window");
	bodyElement.insertBefore(modalWindow, mainElement);
	// Gets and stores the id of the currently open modal:
	const currentModalId = document.getElementById(selectedModalData['id']).id;
	console.log(currentModalId); // Logs the value of the id attribute. 

	/* Modal wrapper:*/
	const modalWrapper = document.createElement("div");
	modalWrapper.classList.add("modal-wrapper");
	modalWindow.appendChild(modalWrapper);

	/* Modal image:*/
	const modalImage = document.createElement("figure");
	modalImage.classList.add("modal-image");
	const image = modalImage.appendChild(document.createElement("img"));
	image.src = selectedModalData['image'];
	modalWrapper.appendChild(modalImage);

	/* Modal content:*/
	const modalContent = document.createElement("div");
	modalContent.classList.add("modal-content");
	modalWrapper.appendChild(modalContent);

	/* Modal title:*/
	const modalTitle = document.createElement("h2");
	modalTitle.innerText = selectedModalData['title']; // Works! Logs the title of the passed object.
	//console.log(selectedModalData);
	modalTitle.classList.add("modal-title");
	modalContent.appendChild(modalTitle);

	/* Modal description:*/
	const modalDescription = document.createElement("div");
	modalDescription.classList.add("modal-description");
	const descriptionText = modalDescription.appendChild(document.createElement("p"));
	descriptionText.classList.add("modal-description-text");
	descriptionText.innerText = selectedModalData['description'];
	modalContent.appendChild(modalDescription);

	/* Modal links:*/	
	const modalLinks = document.createElement("div");
	modalLinks.classList.add("modal-links");
	
	/* - link 1:*/
	const link_1 = modalLinks.appendChild(document.createElement("div"));
	const linkUrl_1 = link_1.appendChild(document.createElement("a"));
	linkUrl_1.innerText = "View Live Site";
	linkUrl_1.setAttribute("href", selectedModalData["firstLink"]);
	linkUrl_1.setAttribute("target", "_blank");
	linkUrl_1.classList.add("modalLink-1");

	/* - link 2:*/
	const link_2 = modalLinks.appendChild(document.createElement("div"));
	const linkUrl_2 = link_2.appendChild(document.createElement("a"));
	linkUrl_2.innerText = "View GitHub Repo";
	linkUrl_2.setAttribute("href", selectedModalData["secondLink"]);
	linkUrl_2.setAttribute("target", "_blank");
	linkUrl_2.classList.add("modalLink-2");
	
	modalContent.appendChild(modalLinks);

	/* Modal navigation buttons:*/
	// - note: Button element needs attribute: .setAttribute('type', 'button');
	const modalNavigation = document.createElement("div");
	modalNavigation.classList.add("modalNavigation");
	
	/* - arrow buttons:*/
	const arrowButtons = modalNavigation.appendChild(document.createElement("ul"));
	arrowButtons.classList.add("arrowButtons");

	/* - previous and next arrow:*/
	/*NOTE: May not need classes arrowPrevious and arrowNext...*/
	const arrowPrevious = arrowButtons.appendChild(document.createElement("li"));
	arrowPrevious.classList.add("arrowPrevious", "circle");
	const arrowNext = arrowButtons.appendChild(document.createElement("li"));
	arrowNext.classList.add("arrowNext", "circle");
	
	const previousModal = arrowPrevious.appendChild(document.createElement("button"));
	previousModal.setAttribute("type", "button");
	previousModal.setAttribute("data-navigation", "previous");
	previousModal.classList.add("previousModal");
	// Font Awesome 'previous' arrow icon:
	const arrowIconPrevious = previousModal.appendChild(document.createElement("i"));
	arrowIconPrevious.classList.add("fa-solid", "fa-chevron-left");
	// Adds event listener to 'previous' button and passes the id of the currently open Modal:
	previousModal.addEventListener("click", (event) => {
		prepareModalWindow(event, currentModalId);
	}); 
	
	const nextModal = arrowNext.appendChild(document.createElement("button"));
	nextModal.setAttribute("type", "button");
	nextModal.setAttribute("data-navigation", "next");
	nextModal.classList.add("nextModal");
	// Font Awesome 'next' arrow icon:
	const arrowIconNext = nextModal.appendChild(document.createElement("i"));
	arrowIconNext.classList.add("fa-solid", "fa-chevron-right");
	// Adds event listener to 'next' button and passes the id of the currently open Modal:
	nextModal.addEventListener("click", (event) => {
		prepareModalWindow(event, currentModalId);
	});
	
	/* - close button:*/
	const closeButton = modalNavigation.appendChild(document.createElement("div"));
	closeButton.classList.add("closeButton");
	const closeModal = closeButton.appendChild(document.createElement("button"));
	closeModal.setAttribute("type", "button");
	closeModal.innerText = "Close";
	closeModal.classList.add("project-button-style");
	closeModal.addEventListener("click", closeModalWindow); 

	modalWrapper.appendChild(modalNavigation);
};


/* ===== CONTROLLER ===== */

/**
 * Checks if a Modal is currently open.
 * Closes the open Modal and removes the modal backdrop.
*/

export const closeModalWindow = () => {    
	if (modalWindow) {
		modalWindow.remove(); // Element.remove() removes the element from the DOM.
 	}
	if (modalBackdrop) {
		modalBackdrop.remove(); // Element.remove() removes the element from the DOM.
	}
};


/**
 * Prepares data for a Modal window based on user selection.
 * For user selection of 'new' Modal: Gets the Modal id via html attribute from the event object.
 * - note: Use the currentTarget property as it always refers to the element to which the event handler has been attached (vs. event.target which identifies the element on which the event occurred).
 * For user selection of 'previous' or 'next' Modal: Gets the currently open Modal's id passed by the event listener.  
 * Calls Model to get data for the selected Modal, passing Modal type and id. 
 * Calls View to create a Modal, passing the data for selected Modal.  
 * @param event - The event object to get the type and id for the selected Modal.  
 * @param modalId - The id attribute value for the currently open Modal.  
 * @arg type — The Modal type to get data for ('new', 'previous', or 'next').
 * @arg selectedModalId — The Modal id attribute value. Used for finding data for 'new', 'previous', or 'next' Modal.
 * @arg selectedModalData — The data for the selected Modal.
 */

const prepareModalWindow = (event, modalId) => {
	console.log(event);
	console.log(modalId); 
	
	// Gets and stores the type of Modal selected ('new', 'previous', or 'next'):
	let modalType = event.currentTarget.dataset.navigation;
	//console.log(modalType);

	// Gets the id of the selected Modal (new Modal only):
	let selectedModalId = event.currentTarget.id;
	console.log(selectedModalId);// Works. Logs id value for 'new' modal, but NOTHING for prev/nxt modal. 
	
	// Assigns the id of the currently open Modal to a variable when user clicks 'previous' or 'next' buttons:
	let openModalId = modalId; 
	console.log(openModalId); // Works! 

	// Checks and reassigns the value of the 'type' variable based on user selection: 
	let type = 'new';
	if (modalType) {
		if (modalType === 'previous') {
			type = 'previous';
		}
		else if (modalType === 'next') {
			type = 'next';
		}
	}
	console.log(type); // Works! Logs 'new' as well as 'next'/'previous' when click on arrow buttons.

	// Checks and reassigns the value of the 'selectedModalId' variable when user clicks 'previous' or 'next' buttons:
	if (openModalId) {
		selectedModalId = openModalId;
	}
	console.log(selectedModalId); //Works! Logs the id of the OPEN modal (and View displays the previous modal in correct order)

	// Calls Model to get Modal data and stores the returned data:
	let selectedModalData = getModalData(type, selectedModalId);

	// Calls View and passes the data for the selected Modal: 
	createModalWindow(selectedModalData);

};

