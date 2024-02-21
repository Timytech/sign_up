document.addEventListener("DOMContentLoaded", function() {
    var confirmPasswordInput = document.getElementById("confirm_password");
    confirmPasswordInput.addEventListener("input", validatePassword);
});

function validatePassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;
    var errorMessage = document.getElementById("password_error_message");
    var confirmPassInput = document.getElementById("confirm_password");

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        confirmPassInput.classList.add("error-border");
        return false;
    } else {
        errorMessage.textContent = ""; // Clear error message if passwords match
        confirmPassInput.classList.remove("error-border");
    }
    return true;
}
