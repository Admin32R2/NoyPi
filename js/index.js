//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* This code checks the navigation buttons and from the divs in which to select to show or hide  */
const navLinks = document.querySelectorAll('.top_nav a');
// Add click event listener to each link
navLinks.forEach(link => link.addEventListener('click', toggleActiveLink01));
// Function to toggle the 'active' class and corresponding div visibility
function toggleActiveLink01(event) {
  event.preventDefault(); // Prevent default anchor behavior
  const clickedLink01 = event.target; // Get the clicked link
  // Check if the clicked link is already active
  if (clickedLink01.classList.contains('active')) {
    clickedLink01.classList.remove('active'); // Deactivate the clicked link
  } else {
    // Deactivate all links and hide all content divs
    navLinks.forEach(link => link.classList.remove('active'));
    // Activate the clicked link and show the corresponding div
    clickedLink01.classList.add('active'); 
  }
} 

document.querySelectorAll('.top_nav ul li a').forEach((link) => {
    let hoverTimeout;

    link.addEventListener('mouseenter', () => {
        hoverTimeout = setTimeout(() => {
            link.classList.add('hover-active'); // Add hover effect after 2 seconds
        }, 500); // 2000ms = 2 seconds
    });

    link.addEventListener('mouseleave', () => {
        clearTimeout(hoverTimeout); // Cancel the hover effect if mouse leaves early
        link.classList.remove('hover-active'); // Remove the hover effect
    });
});

/* This code checks the navigation buttons and from the divs in which to select to show or hide  */
const navLinks02 = document.querySelectorAll('.Purchase a');
// Add click event listener to each link
navLinks02.forEach(link => link.addEventListener('click', toggleActiveLink021));
// Function to toggle the 'active' class and corresponding div visibility
function toggleActiveLink021(event) {
  event.preventDefault(); // Prevent default anchor behavior
  const clickedLink021 = event.target; // Get the clicked link
  // Check if the clicked link is already active
  if (clickedLink021.classList.contains('active')) {
    clickedLink021.classList.remove('active'); // Deactivate the clicked link
  } else {
    // Deactivate all links and hide all content divs
    navLinks02.forEach(link => link.classList.remove('active'));
    // Activate the clicked link and show the corresponding div
    clickedLink021.classList.add('active'); 
  }
} 


