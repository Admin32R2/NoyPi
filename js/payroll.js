document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    const orderSummary = document.getElementById('order-summary');
    const totalPriceEl = document.getElementById('total-price');
    let totalPrice = 0;

    menuItems.forEach(item => {
        const price = parseInt(item.getAttribute('data-price'));
        const quantityEl = item.querySelector('.quantity');
        const addButton = item.querySelector('.add');
        const subtractButton = item.querySelector('.subtract');

        addButton.addEventListener('click', () => {
            let quantity = parseInt(quantityEl.textContent);
            quantity++;
            quantityEl.textContent = quantity;

            updateOrder(item, quantity, price);
        });

        subtractButton.addEventListener('click', () => {
            let quantity = parseInt(quantityEl.textContent);
            if (quantity > 0) {
                quantity--;
                quantityEl.textContent = quantity;

                updateOrder(item, quantity, price);
            }
        });
    });

    function updateOrder(item, quantity, price) {
        const itemName = item.querySelector('img').alt; // Get name from alt attribute
        const existingItem = orderSummary.querySelector(`[data-name="${itemName}"]`);

        if (quantity > 0) {
            if (existingItem) {
                // Update quantity and total if the item already exists
                existingItem.querySelector('.item-quantity').textContent = quantity;
                existingItem.querySelector('.item-total').textContent = quantity * price;
            } else {
                // Create a new list item if it doesn't exist
                const li = document.createElement('li');
                li.setAttribute('data-name', itemName);
                li.innerHTML = `<div>${itemName}</div><div class="item-quantity">${quantity}</div> x ${price} PHP = <div class="item-total">${quantity * price}</div> PHP`;
                orderSummary.appendChild(li);
            }
        } else if (existingItem) {
            existingItem.remove(); // Remove the item if quantity is 0
        }

        calculateTotal();
    }

    function calculateTotal() {
        totalPrice = 0;
        const items = orderSummary.querySelectorAll('li');
        items.forEach(item => {
            const itemTotal = parseInt(item.querySelector('.item-total').textContent);
            totalPrice += itemTotal;
        });
        totalPriceEl.textContent = totalPrice;
    }
});
