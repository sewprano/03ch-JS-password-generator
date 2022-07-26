// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Integer:
var passwordLength = 0;
//Boolean:
var useUppercase;
var useLowercase;
var useNumbers;
var useSpecial;

//character set arays:
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8",  "9",];
const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "?"];

//prompt for password length
function getPasswordLength() {
    var length = prompt("Please enter a password length of between 8-128");
    return length;
}

//call funtions to get user's criteria
function getUserCriteria() {
    passwordLength = getPasswordLength();
    
    //validate password length
    while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert(`${passwordLength} is not a valid number \n please try again`);
        passwordLength = getPasswordLength();
    }

    useLowercase = confirm("Do you want to use lowercase letters? \n ok-yes cancel-no");
    useUppercase = confirm("Do you want to use uppercase letters? \n ok-yes cancel-no");
    useNumbers = confirm("Do you want to use numbers? \n ok-yes cancel-no");
    useSpecial = confirm("Do you want to use special characters? \n ok-yes cancel-no");

    //validate at least one character type
    while (!useLowercase && !useUppercase && !useNumbers && !useSpecial){
        alert("you must select at least one character type \n please try again");

        useLowercase = confirm("Do you want to use lowercase letters? \n ok-yes cancel-no");
        useUppercase = confirm("Do you want to use uppercase letters? \n ok-yes cancel-no");
        useNumbers = confirm("Do you want to use numbers? \n ok-yes cancel-no");
        useSpecial = confirm("Do you want to use special characters? \n ok-yes cancel-no");
    }
}

//generate a password with user criteria
function generatePassword() {
    
    var passwordOptions = [];

    var password = "";
    getUserCriteria();
    //add each selected character type to password options
     if (useLowercase) { passwordOptions = passwordOptions.concat(lowercase); }
     if (useUppercase) { passwordOptions = passwordOptions.concat(uppercase); }
     if (useNumbers) { passwordOptions = passwordOptions.concat(numbers); }
     if (useSpecial) { passwordOptions = passwordOptions.concat(specialCharacters); }

    console.log(passwordOptions);

     //generate password
     var password = "";
     for (i= 0; i < passwordLength; i++) { 
        password += passwordOptions[Math.floor(Math.random() * passwordOptions.length)];
    }

    return password;

}



