const popupContent = document.getElementById('popup-content');
const menuItems = document.querySelectorAll('.menu-item');
const btnPrev = document.getElementById('btn-prev-drinks');
const btnNext = document.getElementById('btn-next-drinks');

let currentIndex = 0; // Tracks the currently visible menu-item

// Function to update the background color of the popup
const updateBackgroundColor = () => {
  const activeItem = menuItems[currentIndex];
  const color = activeItem.getAttribute('data-color');
  popupContent.style.backgroundColor = color;
};

// Function to show the current menu-item and hide others
const updateMenuDisplay = () => {
  menuItems.forEach((item, index) => {
    item.style.display = index === currentIndex ? 'block' : 'none';
  });
  updateBackgroundColor();
};

// Event listeners for navigation buttons
btnPrev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length; // Circular navigation
  updateMenuDisplay();
});

btnNext.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % menuItems.length; // Circular navigation
  updateMenuDisplay();
});

// Initialize the menu display
updateMenuDisplay();
