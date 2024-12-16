//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* This code checks the navigation buttons and from the divs in which to select to show or hide  */
const navLinks = document.querySelectorAll('.top_nav a');
// Add click event listener to each link
navLinks.forEach(link => link.addEventListener('click', toggleActiveLink01));

// Add click event listener to each link
navLinks.forEach(link => link.addEventListener('click', handleNavigation));
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
/////////////////////////////////

// Function to scroll to the corresponding section
function handleNavigation(event) {
  event.preventDefault(); // Prevent default anchor behavior

  // Get the target section id from the data-target attribute
  const targetId = event.target.getAttribute('data-target');
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    const navbarHeight = document.querySelector('.top_nav').offsetHeight;

    // Use `getBoundingClientRect` for better precision with responsive units
    const sectionPosition = targetElement.getBoundingClientRect().top + window.scrollY;

    // Scroll to the target section smoothly, adjusting for navbar height
    window.scrollTo({
      top: sectionPosition - navbarHeight, // Account for navbar
      behavior: 'smooth',
    });

    // Optional: Highlight the clicked link
    const navLinks = document.querySelectorAll('.top_nav a');
    navLinks.forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
  }
}


/////////////////////////////////
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




// Disable navigation links
function disableNavLinks() {
  navLinks.forEach(link => {
      link.classList.add('disabled');
      link.style.pointerEvents = 'none'; // Disable clicks
  });
}

// Re-enable navigation links
function enableNavLinks() {
  navLinks.forEach(link => {
      link.classList.remove('disabled');
      link.style.pointerEvents = 'auto'; // Enable clicks
  });
}

// Listen for custom event or class change to disable/enable nav links
document.body.addEventListener('classChange', () => {
  if (document.body.classList.contains('disabled')) {
      disableNavLinks();
  } else {
      enableNavLinks();
  }
});



