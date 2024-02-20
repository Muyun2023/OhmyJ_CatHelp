// Function to open the modal
function openModal() {
    const modal = document.getElementById('subscribeModal');
    const emailError = document.getElementById('emailError');
    const confirmEmailError = document.getElementById('confirmEmailError');

    // Clear any previous error messages and reset their styles
    emailError.innerText = '';
    emailError.style.color = 'red';
    confirmEmailError.innerText = '';
    confirmEmailError.style.color = 'red';

    modal.style.display = 'block';

    // Add event listener to close the modal with Esc key
    window.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
}

// Function to close the modal
function closeModal() {
    document.getElementById('subscribeModal').style.display = 'none';
}

// Function to validate the form
function validateForm() {
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirmEmail').value;
    const emailError = document.getElementById('emailError');
    const confirmEmailError = document.getElementById('confirmEmailError');

    // Clear any previous error messages and reset their styles
    emailError.innerText = '';
    emailError.style.color = 'red';
    confirmEmailError.innerText = '';
    confirmEmailError.style.color = 'red';

    // Check if both email and confirmEmail are filled
    if (email === '') {
        emailError.innerText = 'Email is a required field';
        return false;
    }

    if (confirmEmail === '') {
        confirmEmailError.innerText = 'Confirm Email is a required field';
        return false;
    }

    // Check if email contains "@"
    if (!email.includes('@')) {
        emailError.innerText = 'Email must contain "@" symbol';
        return false;
    }

    // Check if email and confirmEmail match
    if (email !== confirmEmail) {
        confirmEmailError.innerText = 'Email and Confirm Email must match';
        return false;
    }

    // If all validations pass, you can submit the form to '/subscribe'
    alert('Form submitted to /subscribe');
    closeModal(); // Close the modal
    return true;
}

// Function to validate email and confirmEmail fields when their values change
function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    emailError.innerText = '';

    if (email === '') {
        emailError.innerText = 'Email is a required field';
    } else if (!email.includes('@')) {
        emailError.innerText = 'Email must contain "@" symbol';
    }
}

function validateConfirmEmail() {
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirmEmail').value;
    const confirmEmailError = document.getElementById('confirmEmailError');
    confirmEmailError.innerText = '';

    if (confirmEmail === '') {
        confirmEmailError.innerText = 'Confirm Email is a required field';
    } else if (email !== confirmEmail) {
        confirmEmailError.innerText = 'Email and Confirm Email must match';
    }
}

// Add event listeners for input field changes
document.getElementById('email').addEventListener('input', validateEmail);
document.getElementById('confirmEmail').addEventListener('input', validateConfirmEmail);

// Function to toggle the mobile menu
function toggleMenu() {
    var nav = document.querySelector('nav ul');
    var menuIcon = document.querySelector('.menu-icon');
    var isExpanded = menuIcon.getAttribute('aria-expanded');

    if (isExpanded === 'true') {
        nav.style.display = 'none';
        menuIcon.setAttribute('aria-expanded', 'false');
    } else {
        nav.style.display = 'block';
        menuIcon.setAttribute('aria-expanded', 'true');
    }
}

// Function to handle keyboard events for the hamburger icon
function handleMenuKeydown(event) {
    if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault();
        toggleMenu(); // Toggle the menu when Space or Enter key is pressed
    }
}

// Add a keyboard event listener to the hamburger icon
const menuIcon = document.querySelector('.menu-icon');
menuIcon.addEventListener('keydown', handleMenuKeydown);

