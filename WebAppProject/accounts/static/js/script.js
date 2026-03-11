document.querySelectorAll('.toggle-password').forEach((toggleIcon) => {
    toggleIcon.addEventListener('click', () => {
        const passwordField = toggleIcon.previousElementSibling; // Get the associated password field

        // Password Visibility
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            toggleIcon.classList.replace('fa-eye-slash', 'fa-eye'); // Update icon to "eye"
        } else {
            passwordField.type = 'password';
            toggleIcon.classList.replace('fa-eye', 'fa-eye-slash'); // Update icon to "eye-slash"
        }
    });
});


// Show the modal   
function showModal() {
    document.getElementById('registrationModal').style.display = "block";
}

// Close the modal
function closeModal() {
    document.getElementById('registrationModal').style.display = "none";
}

// Clicks outside the modal
window.onclick = function(event) {
    var modal = document.getElementById("registrationModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
