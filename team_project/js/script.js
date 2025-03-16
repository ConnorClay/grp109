document.addEventListener('DOMContentLoaded', function() {
    // Contact form logic 
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            formMessage.textContent = `Thanks, ${name}! Your fake message has been sent.`;
            formMessage.style.backgroundColor = '#d4edda';
            formMessage.style.color = '#155724';
            formMessage.classList.remove('hidden');
            form.reset();
        });
    }

    // Menu order calculator logic
    const quantities = document.querySelectorAll('.quantity');
    const orderList = document.getElementById('orderList');
    const orderTotal = document.getElementById('orderTotal');

    function updateOrder() {
        let total = 0;
        let orderItems = [];

        quantities.forEach(quantityInput => {
            const quantity = parseInt(quantityInput.value);
            const price = parseFloat(quantityInput.dataset.price);
            const itemName = quantityInput.previousElementSibling.previousElementSibling.textContent; // Get the item name

            if (quantity > 0) {
                total += quantity * price;
                orderItems.push(`<li>${itemName} x${quantity} - $${(quantity * price).toFixed(2)}</li>`);
            }
        });

        orderList.innerHTML = orderItems.join('');
        orderTotal.textContent = total.toFixed(2);
    }

    quantities.forEach(quantityInput => {
        quantityInput.addEventListener('change', updateOrder);
    });
});
