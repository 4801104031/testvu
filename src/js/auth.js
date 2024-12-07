document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (!form) return;

    const inputs = form.querySelectorAll('input');
    const submitButton = form.querySelector('button[type="submit"]');

    // Function to validate phone number
    function isValidPhone(phone) {
        return /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/.test(phone);
    }

    // Function to validate password
    function isValidPassword(password) {
        return password.length >= 6;
    }

    // Function to validate form
    function validateForm() {
        let isValid = true;
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                isValid = false;
            }
            if (input.type === 'tel' && !isValidPhone(input.value)) {
                isValid = false;
            }
            if (input.type === 'password' && !isValidPassword(input.value)) {
                isValid = false;
            }
        });
        submitButton.disabled = !isValid;
    }

    // Add event listeners to inputs
    inputs.forEach(input => {
        input.addEventListener('input', validateForm);
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log('Form data:', data);
        // Here you would typically send the data to your server
        alert('Form submitted successfully!');
    });
});