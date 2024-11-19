/* ====================================================================
Project:  Portfolio Website Version 3
Description:  For documention of personal web development projects. 
Module: Portfolio projects modal windows.  

===== *** =====

The modal.js module:
- processes user's selection of modal, incl.:
	-- detects and identifies modal selection, 
	-- finds the matching modal data, and 
	-- renders selected modal's data and it's html and css to web page.
- imports:
	-- function that accesses modal window data from modalData.js.
- exports:
	-- event handler that closes open modals for use in main.js. 
	-- function that adds event listeners to each modal html element 
	for use in main.js.
========================================================================= */

/**
 * Imports. 
*/
import {accessData} from "./modalData.js";


/** 
 * Global variables.
*/

// modalBackdrop and modalWindow: 
// Holds html mark-up for backdrop and modal window. 
// Values assigned in createModalWindow().
// Must be accessible to closeModalWindow(). 
let modalBackdrop; 
let modalWindow; 

// currentModalId:
// Value assigned in createModalWindow().
// Must be accessible to checkNavigationKey() for keyboard navigation.
let currentModalId; 


/* ===== MODEL ===== */

/**
 * Gets modal window data. 
 * Finds and returns data for the user-selected modal's window as an object.
 * @param type — Type of modal to get data for: 'new', 'next', or 'previous'.
 * @param selectedModalId — HTML id attribute value of the modal selected by the user. 
 * @return — Object containing the data for the selected modal's window.
*/

const getModalData = (type, selectedModalId) => {
	// Gets array with modal window data:
	let modalData = accessData(); 
	console.log(modalData); // Works. Logs all objects in ONE array.
	console.log(type); // Works. Logs type correctly.
	console.log(selectedModalId); // Works.

	// Stores data for the selected modal's window:
	let modalWindowData = {};
	console.log(modalWindowData);

	// Gets the index of the selected modal based on the modal's id:
	// - note: Gets the currently open modal's index when user selects 'previous' or 'next' modal.
	let modalWindowIndex = modalData.findIndex(modal => modal.id == selectedModalId);
	console.log(modalWindowIndex); // Works. Logs the index of the 'new' OR currently open Modal. 
	
	// Adds data for the selected modal to the modalWindowData object:
	// @param selectedModal - The data for the selected modal.
	const addModalWindowData = (selectedModal) => {   
		for (let key in selectedModal) {
			modalWindowData[key] = selectedModal[key];
		}
	};	

	// Gets data for a 'new' modal window: 
	if (type == 'new') { 
		// Loops through each modal object in the modal array: 
		for (let modal of modalData) {
			// Loops through object keys to check if their value match selectedModalId:
			for (let key in modal) {
				if (modal[key] == selectedModalId) {
					let newModal = modal;
					addModalWindowData(newModal);
				}
			}
		} 
	}

	// Gets data for the 'previous' modal window:
	if (type == 'previous') {
		// Gets data for 'previous' modal window based on index of currently open modal window.
		// @param currentModal - The index of the currently open modal (modalWindowIndex).
		// @param modalArray - The modal data array (modalData).
		// @return - Data for the modal that comes before the currently open modal.
		// - note: Function accesses array in a circular manner, accessing the last modal if the current modal is the first one.
		const getPreviousModal = (currentModal, modalArray) => {
			let i = currentModal - 1;
			let n = modalArray.length;
			return modalArray[(i % n + n) % n];
		};

		let previousModal = getPreviousModal(modalWindowIndex, modalData);
		console.log(previousModal); // Works. Logs modal in index 2 ("project-3").

		// Adds data for the 'previous' modal to modalWindowData object:
		addModalWindowData(previousModal); 
	}

	// Gets data for the 'next' modal window: 
	if (type == 'next') {
		// Gets data for the 'next' modal window based on index of currently open modal.
		// @param currentModal - The index of the currently open modal (modalWindowIndex).
		// @param modalArray - The modal data array (modalData).
		// @return - Data for the modal that comes after the currently open modal.
		// - note: Function accesses array in a circular manner, accessing the first modal if the current modal is the last one.
		const getNextModal = (currentModal, modalArray) => {
			let i = currentModal + 1;
			let n = modalArray.length;
			return modalArray[(i % n + n) % n];
		};

		let nextModal = getNextModal(modalWindowIndex, modalData);
		console.log(nextModal); // Works. Logs modal in index 0 ("project-1").

		// Adds data for the 'next' modal to modalWindowData object:
		addModalWindowData(nextModal); 
	}

	// Returns the data for the selected modal's window:
	return modalWindowData; 
};


/* ===== VIEW ===== */

/**
 * Adds event listeners to modal html elements.
 * Calls event handler to prepare a modal window. 
 * Exports function for use in main.js.
 * ! NOTE: Do not remove eventlistener on modal html elements as this prevents 
 * user from clicking (opening) the same modal more than once unless the 
 * page reloads and an event listener is added again. 
 * @param modalELements - Modal html elements. 
*/
export const addModalEventListener = (modalElements) => {
	for (const element of modalElements) {
		element.addEventListener("click", prepareModalWindow);
	}
};


/**
 * Creates and displays a modal window:
 * Adds blurred backdrop to web page.  
 * Adds html mark-up and css styling for modal window UI.
 * Adds event listener to body element for keyboard navigation.
 * Adds event listeners to the modal window arrow and close buttons. 
 * Adds data for the selected modal to the html mark-up.
 * Accesses the html id attribute of the currently open modal. 
 * @param selectedModalData — Object with data for the selected modal.
 * @arg currentModalId - Html id attribute value of the currently open modal window. 
*/
const createModalWindow = (selectedModalData) => {
	closeModalWindow();

	// Selects body and header element for insertion of modal backdrop and modal window:
	const bodyElement = document.querySelector("body");
	const headerElement = document.querySelector("header"); 
	
	// Adds event listener to body element for modal window keyboard navigation:
	bodyElement.addEventListener("keyup", checkNavigationKey); 

	/* Modal backdrop: */  
	modalBackdrop = document.createElement("div");
	modalBackdrop.classList.add("backdrop-blur");
	bodyElement.insertBefore(modalBackdrop, headerElement); 
	modalBackdrop.addEventListener("click", closeModalWindow, {once: true}); 

	/* Modal window:*/
	modalWindow = document.createElement("div");
	modalWindow.setAttribute("id", selectedModalData['id']); 
	modalWindow.classList.add("modal-window");
	bodyElement.insertBefore(modalWindow, headerElement);
	// Gets and stores the html id attribute value of the currently open modal window:
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
	modalTitle.innerText = selectedModalData['title']; 
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
	linkUrl_1.innerText = "View live site";
	linkUrl_1.setAttribute("href", selectedModalData["firstLink"]);
	linkUrl_1.setAttribute("target", "_blank");
	linkUrl_1.classList.add("modalLink-1");
	// Font Awesome external link icon:
	const externalLinkIcon_1 = linkUrl_1.appendChild(document.createElement("i"));
	externalLinkIcon_1.classList.add("fa-solid", "fa-arrow-right");

	/* - link 2:*/
	const link_2 = modalLinks.appendChild(document.createElement("div"));
	const linkUrl_2 = link_2.appendChild(document.createElement("a"));
	linkUrl_2.innerText = "View GitHub repo";
	linkUrl_2.setAttribute("href", selectedModalData["secondLink"]);
	linkUrl_2.setAttribute("target", "_blank");
	linkUrl_2.classList.add("modalLink-2");
	// Font Awesome external link icon:
	const externalLinkIcon_2 = linkUrl_2.appendChild(document.createElement("i"));
	externalLinkIcon_2.classList.add("fa-solid", "fa-arrow-right");
	
	modalContent.appendChild(modalLinks);

	/* Modal navigation buttons:*/
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
	// Adds event listener to 'previous' button and passes id attrute value of currently open modal:
	previousModal.addEventListener("click", (event) => {
		prepareModalWindow(event, currentModalId, {once: true});
	}); 
	
	const nextModal = arrowNext.appendChild(document.createElement("button"));
	nextModal.setAttribute("type", "button");
	nextModal.setAttribute("data-navigation", "next");
	nextModal.classList.add("nextModal");
	// Font Awesome 'next' arrow icon:
	const arrowIconNext = nextModal.appendChild(document.createElement("i"));
	arrowIconNext.classList.add("fa-solid", "fa-chevron-right");
	// Adds event listener to 'next' button and passes id attribute value of currently open modal:
	nextModal.addEventListener("click", (event) => {
		prepareModalWindow(event, currentModalId, {once: true});
	});
	
	/* - close button:*/
	const closeButton = modalNavigation.appendChild(document.createElement("div"));
	closeButton.classList.add("closeButton");
	const closeModal = closeButton.appendChild(document.createElement("button"));
	closeModal.setAttribute("type", "button");
	closeModal.innerText = "Close";
	closeModal.classList.add("project-button-style");
	closeModal.addEventListener("click", closeModalWindow, {once: true}); 

	modalWrapper.appendChild(modalNavigation);
};


/* ===== CONTROLLER ===== */

/**
 * Closes open modal window and removes modal backdrop.
 * Exports function for use in main.js.
*/
export const closeModalWindow = () => {    
	if (modalWindow) {
		modalWindow.remove(); 
 	}
	if (modalBackdrop) {
		modalBackdrop.remove(); 
	}
};


/**
 * Checks key values for keyboard navigation in modal windows:
 * -- If user presses arrow keys: Calls prepareModalWindow() and passes id 
 * attribute value of the currently open modal (currentModalId).
 * -- If user presses escape key: Closes the modal window.
 * @param event - To get the key values for the arrow and escape keys. 
*/
const checkNavigationKey = (event) => {
	if (event.key == "ArrowLeft" || event.key == "ArrowRight") {
		// Prevents 'keyup' event listener from firing multiple times:
		let isKeyUpHandled = false;
		if (!isKeyUpHandled) {
			prepareModalWindow(event, currentModalId);
			isKeyUpHandled = true;		
		}
	} else if (event.key == "Escape") {
		closeModalWindow(); 
	}
};


/**
 * Requests and passes data for a modal window based on user selection:
 * -- If user selects 'new' modal: The modal id is obtained from the html id attribute via the event object.
 * -- If user selects 'previous' or 'next' modal: The currently open modal's html id attribute value (modalId) is  
 * passed in as a parameter and the open modal's index is later used to find the next or previous modal. 
 * @param event - To get the type and id values for the selected modal (click and keyboard events). 
 * @param modalId - The id attribute value for the currently open modal.  
 * @arg type — Type of modal to get data for: 'new', 'next', or 'previous'.
 * @arg selectedModalId — The modal id attribute value. Used to find data for 'new', 'previous', or 'next' modal.
 * @arg selectedModalData — The data for the selected modal.
*/
const prepareModalWindow = (event, modalId) => {
	// The id attribute value of the selected modal: 
	// (Re)assigns the value of the 'selectedModalId' variable based on user selection.
	let selectedModalId = event.currentTarget.id; 
	let openModalId = modalId;   
	
	if (openModalId) {
			selectedModalId = openModalId;
	} 

	// The type of modal selected:  
	// Checks and (re)assigns the value of the 'type' variable based on user selection.
	// Uses click and keyboard events to assign type for 'previous' and 'next' modal.  
	let modalType = event.currentTarget.dataset.navigation; 
	let arrowKey = event.key; 
		
	let type = 'new';
	if (modalType || arrowKey) {
		if (modalType === 'previous' || arrowKey === 'ArrowLeft') {
			type = 'previous';
		}
		else if (modalType === 'next' || arrowKey === 'ArrowRight') {
			type = 'next';
		}
	}

	// Requests data for selected modal:
	let selectedModalData = getModalData(type, selectedModalId);

	// Passes data for selected modal for rendering: 
	createModalWindow(selectedModalData);
};

