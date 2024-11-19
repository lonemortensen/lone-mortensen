/* ====================================================================
Project:  Portfolio Website Version 3
Description:  For documention of personal web development projects. 
Module: Tabbed panel for Skills section.

===== *** =====

The panel.js module:
- displays and adds styling to default tab-panel set on page load. 
- processes user's selection of tab, incl.:
	-- detects and identifies tab selection, 
	-- finds the matching panel, and 
	-- renders selected tab-panel set's html and css to web page.
- exports:
	-- event handler that displays default tab and panel to main.js.
========================================================================= */

/* ===== MODEL ===== */

/* Object stores tabs (keys) and their associated panels (values): */ 
let tabSets = {};


/* All tabs:*/
const tabsList = document.getElementsByClassName("tab-link"); 
/* All panels:*/ 
const panelsList = document.getElementsByClassName("panels"); 


/**
 * Loops through the tabs list and stores each tab as a property key and each 
 * associated panel link as a value in the tabSets object.
*/	
const getTabData = () => {
    for (let i = 0; i < tabsList.length; i++) {
        let tab = tabsList[i];
        let tabName = tab.id; 
        let panelLink = tab.hash; // Gets the anchor part of the href attribute value associated with current tab
        let panelLinkName = panelLink.replace("#", ""); // Removes # from the href attribute value
        tabSets[tabName] = panelLinkName;  
    };
};


/* ===== VIEW ===== */

/** 
 * Applies styling to hide all panels.
 * @param panels - The panelsList variable selecting all the panels.
*/
const hidePanels = (panels) => {
    for (let i = 0; i < panels.length; i++) {
        let panel = panels[i];
        panel.classList.add("hide-panels");
    };    
};


/**
 * Applies styling to remove highlight from all tabs.
 * @param tabs - The tabsList variable selecting all the tabs.
*/
const removeTabHighlight = (tabs) => {
    for (let i = 0; i < tabs.length; i++) {
        let tab = tabs[i];
        tab.classList.remove("highlight-tab"); 
    }; 
};


/** 
 * Applies styling to highlight and display only the default (first) tab and panel on page load.
 * Calls function to add a click event listener to each tab. 
 * @param defaultTab - The first (default) tab in the tabSets object.
 * @param defaultPanel - The panel that is stored as the value of the default (first) tab in the tabSets object.
*/
const displayDefaultTabSet = (defaultTab, defaultPanel) => { 
    // Compares the default tab's id to the tab id's in the tabsList variable. If there's a match,
    // highlight styling is added to the tab: 
    for (let i = 0; i < tabsList.length; i++) {
        let tab = tabsList[i];
        let tabName = tab.id; 
        if (defaultTab.toLowerCase() == tabName.toLowerCase()) {
            tab.classList.add("highlight-tab"); 
        }; 
    };

    // Finds and displays the panel that matches the default panel link: 
    for (let i = 0; i < panelsList.length; i++) {
        let panel = panelsList[i];
        let panelName = panel.id; 
        if (panelName.toLowerCase() == defaultPanel.toLowerCase()) {
            panel.classList.remove("hide-panels");
        };
    };
    addTabEventListener();
}; 


/**
 * Adds click event listeners to each tab html element.
 * Detects when user selects a tab.
 * Calls event handler in Controller to handle selection.
*/
const addTabEventListener = () => {
    for (let i = 0; i < tabsList.length; i++) {
      let tab = tabsList[i];
      console.log(tab); //logs all <a>, i.e. tabs 
      tab.addEventListener("click", handleTabSelection);
    };
  };
  

/** 
 * Applies styling to highlight user's selected tab and display the associated panel. 
 * @param selectedTab - The tab name that matches the user's selection.
 * @param selectedPanel - The panel that matches the user's selection. 
*/
const displaySelectedTabSet = (selectedTab, selectedPanel) => {
    // Finds matching tab in tabsList and adds highlight: 
    for (let i = 0; i < tabsList.length; i++) {
        let tab = tabsList[i];
        let tabName = tab.id;
        if (tabName.toLowerCase() == selectedTab.toLowerCase()) {
            tab.classList.add("highlight-tab"); 
        };
    };

    // Finds matching panel in panelsList and displays panel: 
    for (let i = 0; i < panelsList.length; i++) {
        let panel = panelsList[i];
        let panelName = panel.id;
        if (panelName.toLowerCase() == selectedPanel.toLowerCase()) {
            panel.classList.remove("hide-panels");
        };
    };
};


/* ===== CONTROLLER ===== */

/**
 * Listens for page load and calls View to apply styling to hide all panels. 
 * Calls Model to access tabSets object in order to get the default tab-panel set.
 * Calls View and passes the default tab and panel to highlight and display.
*/
export const handlePageLoad = () => {
    hidePanels(panelsList);
    getTabData();
    // Gets all tabs in the tabSets object:
    let tabsArray = Object.keys(tabSets);
    // Gets the first (default) tab in the tabSets object:
    let defaultTabName = tabsArray[0];
    // Gets the panel linked to the default tab:
    let defaultPanel = tabSets[defaultTabName];
    
    displayDefaultTabSet(defaultTabName, defaultPanel);
};


/**
 * Listens for user click on tab.
 * Calls Model to access the tabSets object.
 * Gets the name (id attribute value) of the selected tab from the event object.
 * Gets the panel that matches the selected tab from the tabSets object.
 * Calls View to remove styling from the default tab and panel, and passes the selected 
 * tab-panel set for highlight and display. 
 * @param e - The event object is used to access the id attribute value of the selected tab.  
*/
const handleTabSelection = (e) => {
    e.preventDefault();
    getTabData();
    let selectedTabName = e.target.id;
    console.log(selectedTabName);
    let selectedPanel = tabSets[selectedTabName];

    hidePanels(panelsList); 
    removeTabHighlight(tabsList); 
    displaySelectedTabSet(selectedTabName, selectedPanel);
};