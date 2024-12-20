// Select all pop-ups, triggers, close buttons, and the specific purchase links
const popupTriggers = document.querySelectorAll('.popup-trigger');
const closeButtons = document.querySelectorAll('.close-btn');
const popups = document.querySelectorAll('.popup');
const purchaseLinks = document.querySelectorAll('.Purchase ul li a'); // Select the Dine in, Take out, and Reserve links

// Selectors for menu items cycling
const menuItems = document.querySelectorAll('.menu-item'); // Select menu divs
const displayDiv = document.getElementById('menu-display'); // The display area for the selected menu item
const btnPrev = document.getElementById('btn-prev'); // Previous button
const btnNext = document.getElementById('btn-next'); // Next button
// For main popup
const mainMenuItems = document.querySelectorAll('#main-popup .menu-item');



let currentIndex = 0; // Track the current item index

// Function to hide all pop-ups
function hideAllPopups() {
    popups.forEach(popup => popup.classList.add('hidden')); // Hide all pop-ups
}

// Function to reset active state on all purchase links
function resetActiveLinks() {
    purchaseLinks.forEach(link => {
        link.classList.remove('active'); // Remove active class
    });
}

// Purchase links event listener
purchaseLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior

        // Check if the clicked link is already active
        const isAlreadyActive = link.classList.contains('active');

        // Reset all links and hide all pop-ups
        resetActiveLinks();
        hideAllPopups();

        // Toggle the clicked link's active state
        if (!isAlreadyActive) {
            link.classList.add('active'); // Mark as active
            const targetPopupId = link.getAttribute('data-popup'); // Get the target pop-up ID
            const targetPopup = document.getElementById(targetPopupId);

            if (targetPopup) {
                targetPopup.classList.remove('hidden'); // Show the corresponding pop-up
            }
        }
    });
});



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
    });
});



// Function to update the display with the current menu item
function updateMainDisplay() {
    mainMenuItems.forEach((item, index) => {
        if (index === currentIndex) {
            item.style.display = 'block'; // Show the current item
        } else {
            item.style.display = 'none'; // Hide other items
        }
    });

    // Update the display area
    displayDiv.textContent = mainMenuItems[currentIndex].querySelector('span').textContent;
}


// Event listeners for next/previous buttons
btnNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % mainMenuItems.length; // Cycle forward within main menu
    updateMainDisplay();
});

btnPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + mainMenuItems.length) % mainMenuItems.length; // Cycle backward within main menu
    updateMainDisplay();
});

// Initial display update for the main menu
updateMainDisplay();


// Toggle menu list visibility and sync payroll visibility
const orderButton = document.getElementById('order-button');
const menuList = document.querySelector('.menu-items');
const payrollPopup = document.getElementById('payroll-popup');

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

// Select the dessert and drinks menu items, and their respective display areas and buttons
const dessertItems = document.querySelectorAll('#dessert-popup .menu-item');
const drinksItems = document.querySelectorAll('#drinks-popup .menu-item');
const displayDessertDiv = document.getElementById('menu-display-dessert');
const displayDrinksDiv = document.getElementById('menu-display-drinks');
const btnPrevDessert = document.getElementById('btn-prev-dessert');
const btnNextDessert = document.getElementById('btn-next-dessert');
const btnPrevDrinks = document.getElementById('btn-prev-drinks');
const btnNextDrinks = document.getElementById('btn-next-drinks');


let currentDessertIndex = 0;
let currentDrinksIndex = 0;

// Function to update the display with the current menu item (for desserts)
function updateDessertDisplay() {
    dessertItems.forEach((item, index) => {
        if (index === currentDessertIndex) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    const img = dessertItems[currentDessertIndex].querySelector('img');
    displayDessertDiv.textContent = img ? img.alt : dessertItems[currentDessertIndex].textContent;
}

// Function to update the display with the current menu item (for drinks)
function updateDrinksDisplay() {
    drinksItems.forEach((item, index) => {
        if (index === currentDrinksIndex) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    const img = drinksItems[currentDrinksIndex].querySelector('img');
    displayDrinksDiv.textContent = img ? img.alt : drinksItems[currentDrinksIndex].textContent;
}

// Event listeners for next/previous buttons (for desserts)
btnNextDessert.addEventListener('click', () => {
    currentDessertIndex = (currentDessertIndex + 1) % dessertItems.length;
    updateDessertDisplay();
});

btnPrevDessert.addEventListener('click', () => {
    currentDessertIndex = (currentDessertIndex - 1 + dessertItems.length) % dessertItems.length;
    updateDessertDisplay();
});

// Event listeners for next/previous buttons (for drinks)
btnNextDrinks.addEventListener('click', () => {
    currentDrinksIndex = (currentDrinksIndex + 1) % drinksItems.length;
    updateDrinksDisplay();
});

btnPrevDrinks.addEventListener('click', () => {
    currentDrinksIndex = (currentDrinksIndex - 1 + drinksItems.length) % drinksItems.length;
    updateDrinksDisplay();
});

// Initial display updates for desserts and drinks
updateDessertDisplay();
updateDrinksDisplay();
