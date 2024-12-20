// Select all pop-ups, triggers, close buttons, and the specific purchase links
const popupTriggers = document.querySelectorAll('.popup-trigger');
const closeButtons = document.querySelectorAll('.close-btn');
const popups = document.querySelectorAll('.popup');
const purchaseLinks = document.querySelectorAll('.Purchase ul li a'); // Select the Dine in, Take out, and Reserve links

// Selectors for menu items cycling
const menuItems = document.querySelectorAll('.menu-item'); // Select menu divs
const displayDiv = document.getElementById('menu-display');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

// Order button toggle
const orderButton = document.getElementById('order-button');
const menuList = document.querySelector('.menu-items');
const payrollPopup = document.getElementById('payroll-popup');

let currentIndex = 0; // Track current item index

// Function to hide all pop-ups
function hideAllPopups() {
    popups.forEach(popup => popup.classList.add('hidden'));
}

// Function to reset active state on all purchase links
function resetActiveLinks() {
    purchaseLinks.forEach(link => {
        link.classList.remove('active'); // Remove active class
    });
}

// Show specific pop-up when a trigger is clicked
popupTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        resetActiveLinks(); // Reset the active state on all links
        const targetPopupId = trigger.getAttribute('data-popup'); // Get the target pop-up ID
        const targetPopup = document.getElementById(targetPopupId);
        if (targetPopup) {
            targetPopup.classList.remove('hidden'); // Show the target pop-up
            trigger.classList.add('active'); // Add active class to the clicked link
        }
    });
});

// Close pop-up when the close button is clicked
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        hideAllPopups(); // Hide the pop-up
        resetActiveLinks(); // Remove active state from the links
        menuList.classList.add('hidden'); // Ensure menu is hidden
        payrollPopup.classList.add('hidden'); // Ensure payroll is hidden
    });
});

// Purchase links event listener
purchaseLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        resetActiveLinks(); // Reset the active state on all links
        link.classList.add('active'); // Mark the clicked link as active
    });
});

// Function to update the display with the current menu item
function updateDisplay() {
    const currentItem = menuItems[currentIndex];
    displayDiv.textContent = currentItem.textContent;
}

// Event listeners for next/previous buttons
btnNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % menuItems.length; // Cycle forward
    updateDisplay();
});

btnPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length; // Cycle backward
    updateDisplay();
});

// Toggle menu list visibility and sync payroll visibility
orderButton.addEventListener('click', function (event) {
    event.preventDefault();
    const isMenuVisible = !menuList.classList.contains('hidden'); // Check current visibility

    // Toggle menu visibility
    menuList.classList.toggle('hidden');

    // Toggle payroll visibility based on menu visibility
    if (isMenuVisible) {
        payrollPopup.classList.add('hidden'); // Hide payroll if menu is hidden
    } else {
        payrollPopup.classList.remove('hidden'); // Show payroll if menu is shown
    }
});

// Initial display update for menu items cycling
updateDisplay();
