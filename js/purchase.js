// Select all pop-ups, triggers, close buttons, and the specific purchase links
const popupTriggers = document.querySelectorAll('.popup-trigger');
const closeButtons = document.querySelectorAll('.close-btn');
const popups = document.querySelectorAll('.popup');
const purchaseLinks = document.querySelectorAll('.Purchase ul li a'); // Select the Dine in, Take out, and Reserve links

// Function to hide all pop-ups
function hideAllPopups() {
    popups.forEach(popup => popup.classList.add('hidden'));
    enableAllTriggers(); // Re-enable all triggers when pop-ups are hidden
    enablePurchaseLinks(); // Re-enable the purchase links when pop-ups are hidden
}

// Disable all <a> tags (including purchase links)
function disableAllTriggers() {
    popupTriggers.forEach(trigger => {
        trigger.classList.add('disabled');
        trigger.style.pointerEvents = 'none'; // Disable clicks
    });
}

// Disable the purchase links (Dine in, Take out, Reserve)
function disablePurchaseLinks() {
    purchaseLinks.forEach(link => {
        link.classList.add('inactive'); // Add inactive class
        link.style.pointerEvents = 'none'; // Disable clicks
    });
}

// Re-enable all <a> tags (triggers and purchase links)
function enableAllTriggers() {
    popupTriggers.forEach(trigger => {
        trigger.classList.remove('disabled');
        trigger.style.pointerEvents = 'auto'; // Enable clicks
    });
}

// Re-enable the purchase links
function enablePurchaseLinks() {
    purchaseLinks.forEach(link => {
        link.classList.remove('inactive'); // Remove inactive class
        link.style.pointerEvents = 'auto'; // Enable clicks
    });
}

// Reset active state on all purchase links
function resetActiveLinks() {
    purchaseLinks.forEach(link => {
        link.classList.remove('active'); // Remove active class
    });
}

// Show specific pop-up when a trigger is clicked
popupTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        if (trigger.classList.contains('disabled')) return; // Ignore if disabled
        resetActiveLinks(); // Reset the active state on all links
        const targetPopupId = trigger.getAttribute('data-popup'); // Get the target pop-up ID
        const targetPopup = document.getElementById(targetPopupId);
        if (targetPopup) {
            targetPopup.classList.remove('hidden'); // Show the target pop-up
            disableAllTriggers(); // Disable all triggers when pop-up is open
            disablePurchaseLinks(); // Disable the purchase links when pop-up is open
            trigger.classList.add('active'); // Add active class to the clicked link
        }
    });
});

// Close pop-up when the close button is clicked
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        hideAllPopups(); // Hide the pop-up
        resetActiveLinks(); // Remove active state from the links
    });
});




/// Selectors
const menuItems = document.querySelectorAll('.menu-item'); // Select menu divs
const displayDiv = document.getElementById('menu-display');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

let currentIndex = 0; // Track current item index

// Function to update the display with the current menu item
function updateDisplay() {
    const currentItem = menuItems[currentIndex];
    displayDiv.textContent = currentItem.textContent;
}

// Event listeners for buttons
btnNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % menuItems.length; // Cycle forward
    updateDisplay();
});

btnPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length; // Cycle backward
    updateDisplay();
});

// Initial display update
updateDisplay();


