


document.getElementById('contact-form').addEventListener('submit', function (event) {
    let valid = true;

    // Name validation
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('name-error');
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        valid = false;
    } else {
        nameError.textContent = '';
    }

    // Email validation
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    if (!isValidEmail(emailInput.value)) {
        emailError.textContent = 'Invalid email format';
        valid = false;
    } else {
        emailError.textContent = '';
    }

    // Problem validation
    const problemInput = document.getElementById('problem');
    const problemError = document.getElementById('problem-error');
    if (problemInput.value.trim() === '') {
        problemError.textContent = 'Message is required';
        valid = false;
    } else {
        problemError.textContent = '';
    }

    if (!valid) {
        event.preventDefault(); // Prevent form submission if there are errors
    }
});

// accordion
function toggleAccordion(accordionName) {
    var accordionContent = document.getElementById(accordionName);
    if (accordionContent.style.display === "block") {
        accordionContent.style.display = "none";
    } else {
        accordionContent.style.display = "block";
    }
}

function showNotification(message) {
    alert(message);
}



// JavaScript Objects and Properties
const phones = [
    { name: 'Samsung Galaxy A14 Smartphone 6GB/128GB Black', price: 84308, image: 'images/phone-2' },
    { name: 'IPhone 14 PRO 256 GB', price: 565572, image: 'images/64508108931102.jpg' },
    { name: 'Samsung Galaxy S22 Ultra 12 GB/256 GB Black Smartphone 2', price: 424350, image: 'images/phone-3.jpg' },
    { name: 'Mobile phone Nokia 105 2019 DS', price: 9621, image: 'images/phone-4.jpg' },
    { name: 'Mobile phone Nokia 150 DS', price: 17011, image: 'images/phone-5.jpg' },
    { name: 'Mobile phone Nokia 106 gray', price: 11108, image: 'images/phone-6.jpg' },
];



// Function to open the modal and show product details
function openModal(productName) {
    const modal = document.getElementById('productModal');
    const modalContent = document.getElementById('modalContent');
    
    // Replace the content of the modal with the product details
    modalContent.innerHTML = `<h2>${productName}</h2>
                            <p>${productName} ADDED TO YOUR CARD.</p>
                            <button onclick = 'closeModal()'>Close</button>`;
    
    modal.style.display = 'block';
    const notificationSound = document.getElementById('notification-sound');
    if (notificationSound) {
        notificationSound.play();
    }
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
}

// Add a click event listener to the product card buttons
const addButtons = document.querySelectorAll('.btn-primary');
addButtons.forEach((button) => {
    button.addEventListener('click', function () {
        const productName = this.getAttribute('data-product-name');
        openModal(productName);
    });
});


function bounceElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.animation = 'bounce 0.5s';
        element.addEventListener('animationend', () => {
            element.style.animation = ''; // Reset the animation after it ends
        });
    }
}







// Function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}





