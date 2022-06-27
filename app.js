let firstName = document.querySelector("#first-n");
let lastName = document.querySelector("#last-n");
let email = document.querySelector("#email");
let phoneNumber = document.querySelector("phone");
let password = document.querySelector("#password");
let passwordError = document.querySelector("#passwordError");
let confirmPassword = document.querySelector("#confirm-password");
let passwordConfirmError = document.querySelector("#passwordConfirmError");
let submitButton = document.querySelector("#create-account");

confirmPassword.addEventListener("input", e => {
    if (password.value !== confirmPassword.value) {
        passwordConfirmError.textContent = "Passwords do not match";
    } else passwordConfirmError.textContent = "";
});
password.addEventListener("input", () => {validPassword(password.value)});

// Function to check if password is valid
function validPassword(pw){
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let nums = /[0-9]/g;
    let specialChars = /[!@#\$%\^\&*\)\(+=._-]/g;
    let errorMessage = "";

    if (pw.length < 6) {
        errorMessage = "At least 6 char";
        errorMessage += "\n";
    } else passwordError.textContent = "";
    // check for non Capital
    if (!pw.match(lowerCaseLetters)) {
        errorMessage += "Missing 1 lowercase";
        errorMessage += "\n";
    }
    // check for Capital
    if (!pw.match(upperCaseLetters)) {
        errorMessage += "Missing 1 uppercase";
        errorMessage += "\n";
    }
    // check for num
    if (!pw.match(nums)) {
        errorMessage += "Missing 1 number ";
        errorMessage += "\n";
    }
    // check for special char
    if (!pw.match(specialChars)) {
        errorMessage += "Missing 1 special character ";
        errorMessage += "\n";
    }
    passwordError.setAttribute('style', 'white-space: pre;');
    passwordError.textContent = errorMessage;
}

