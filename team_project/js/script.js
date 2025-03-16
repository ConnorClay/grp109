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

const carousel = document.querySelector('.carousel');
const counter = document.querySelector('.counter');


let intervalId;
let elapsedTime = 0;


let activeIndex = 0;


const images = carousel.querySelectorAll('img');


images[activeIndex].classList.add('active');


function playSound1() {
    const audio = new Audio('');
    audio.play();
}


function playSound2() {
    const audio = new Audio('https://jmp.sh/s/2UgRIeUmHlZVOLcLo1UD');
    audio.play();
}


function rewindCarousel() {
    playSound1();
    activeIndex = (activeIndex - 1 + images.length) % images.length;
    updateCarousel();
}

l
function advanceCarousel() {
    playSound2();
    activeIndex = (activeIndex + 1) % images.length;
    updateCarousel();
}


function updateCarousel() {
    
    images.forEach((image) => image.classList.remove('active'));

    
    images[activeIndex].classList.add('active');

   
    elapsedTime = 0;
    clearInterval(intervalId);
    startInterval();
}


function startInterval() {
    intervalId = setInterval(() => {
        elapsedTime++;
        counter.textContent = `Elapsed Time: ${elapsedTime} seconds`;
        if (elapsedTime >= 3) {
            advanceCarousel();
        }
    }, 1000);
}


startInterval();


carousel.addEventListener('click', (event) => {
    const rect = carousel.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const width = rect.width;

    if (x < width / 2) {
        rewindCarousel();
    } else {
        advanceCarousel();
    }
});

const names = ['daniel c', 'Jconner c',  'olivia z'];


const namesElement = document.getElementById('names');


let currentNameIndex = 0;
namesElement.textContent = names[currentNameIndex];


function updateName() {
    currentNameIndex = (currentNameIndex + 1) % names.length;
    namesElement.textContent = names[currentNameIndex];
}


setInterval(updateName, 2000);
