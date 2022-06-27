let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");
let submitButton = document.querySelector("#create-account");
let errorList = document.querySelector("#error-messages");

// Check if password is valid
function validPassword(pw){
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var nums = /[0-9]/g;
    var specialChars = /[!@#\$%\^\&*\)\(+=._-]/g;

    if (pw.length < 6) {
        displayError("Length too short");
    } else displayError("Length OK!")

    // check for non Capital
    if (sample.match(lowerCaseLetters)) {
        displayError("Contains at least 1 lower case letter")
    } else displayError("Requires at least 1 lower case letter");

    // check for Capital
    if (sample.match(upperCaseLetters)) {
        displayError("Contains at least 1 upper case letter")
    } else displayError("Requires at least 1 upper case letter");

    // check for num
    if (sample.match(nums)) {
        displayError("Contain at least 1 number")
    } else displayError("Requires at least 1 number");

    // check for special char
    if (sample.match(specialChars)) {
        displayError("Contains at least 1 special character")
    } else displayError("Requires at least 1 special character");
}

// Check if values are the same


// displays error message
function displayError(message) {
    var errorMessage = document.createElement("li");
    errorMessage.appendChild(document.createTextNode(message));
    errorList.appendChild(errorMessage);
}

sample = "Hello1";



console.log(validPassword(sample));