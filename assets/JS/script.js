// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//global variables:
//Integer:
var passwordLength;
//Boolean:
var upperCase;
var lowerCase;
var number;
var special;

//prompt for password length
function getPasswordLength() {
    var length = prompt("Please enter a password length of 8-128");
}

//call funtions to get user's criteria
function getUserCriteria() {
    passwordLength = getPasswordLength();
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert("Not a valid number");
        passwordLength = getPasswordLength();
    }
    lowerCase = confirm("Do you want to use lowercase letters? /n ok-yes cancel-no");
    upperCase = confirm("Do you want to use uppercase letters? /n ok-yes cancel-no");
    useNumber = confirm("Do you want to use numbers? /n ok-yes cancel-no");
    useSpecial = confirm("Do you want to use special characters? /n ok-yes cancel-no");
}

//generate a password with user criteria
function generatePassword() {
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

