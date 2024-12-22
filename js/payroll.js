// Wait until the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {

    // Select all menu items and relevant elements for the order summary and total price
    const menuItems = document.querySelectorAll('.menu-item');
    const orderSummary = document.getElementById('order-summary');
    const totalPriceEl = document.getElementById('total-price');
    let totalPrice = 0; // Initialize the total price to 0

    // Loop through each menu item to set up event listeners for quantity adjustments
    menuItems.forEach(item => {
        const price = parseInt(item.getAttribute('data-price')); // Get the price from the data-price attribute
        const quantityEl = item.querySelector('.quantity'); // Element displaying the quantity
        const addButton = item.querySelector('.add'); // Button to increase quantity
        const subtractButton = item.querySelector('.subtract'); // Button to decrease quantity

        // Event listener for the add button
        addButton.addEventListener('click', () => {
            let quantity = parseInt(quantityEl.textContent); // Get the current quantity
            quantity++; // Increment the quantity
            quantityEl.textContent = quantity; // Update the displayed quantity

            // Update the order summary with the new quantity and price
            updateOrder(item, quantity, price);
        });

        // Event listener for the subtract button
        subtractButton.addEventListener('click', () => {
            let quantity = parseInt(quantityEl.textContent); // Get the current quantity
            if (quantity > 0) { // Ensure the quantity doesn't go below 0
                quantity--; // Decrement the quantity
                quantityEl.textContent = quantity; // Update the displayed quantity

                // Update the order summary with the new quantity and price
                updateOrder(item, quantity, price);
            }
        });
    });

    // Function to update the order summary when quantities are adjusted
    function updateOrder(item, quantity, price) {
        const itemName = item.querySelector('img').alt; // Get the item name from the image's alt attribute
        const existingItem = orderSummary.querySelector(`[data-name="${itemName}"]`); // Check if the item is already in the order summary

        if (quantity > 0) { // If the quantity is greater than 0
            if (existingItem) {
                // Update the existing item's quantity and total price in the order summary
                existingItem.querySelector('.item-quantity').textContent = quantity;
                existingItem.querySelector('.item-total').textContent = quantity * price;
            } else {
                // Create a new entry in the order summary for the item
                const li = document.createElement('li');
                li.setAttribute('data-name', itemName); // Add a data-name attribute for easy identification
                li.innerHTML = `<div>${itemName}</div><div class="item-quantity">${quantity}</div> x ${price} PHP = <div class="item-total" style="color: black;">${quantity * price}</div> PHP`;
                orderSummary.appendChild(li); // Add the new item to the order summary
            }
        } else if (existingItem) {
            // If the quantity is 0, remove the item from the order summary
            existingItem.remove();
        }

        // Recalculate the total price
        calculateTotal();
    }

    // Function to calculate the total price of all items in the order summary
    function calculateTotal() {
        totalPrice = 0; // Reset the total price
        const items = orderSummary.querySelectorAll('li'); // Select all items in the order summary
        items.forEach(item => {
            const itemTotal = parseInt(item.querySelector('.item-total').textContent); // Get the total price for each item
            totalPrice += itemTotal; // Add the item's total price to the total price
        });
        totalPriceEl.textContent = totalPrice; // Update the displayed total price
    }
});
