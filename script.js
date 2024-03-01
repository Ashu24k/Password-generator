const passwordLoad = document.getElementById("password");
const lengtho = 10;

const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerCase = "qwertyuiopasdfghjklzxcvbnm";
const numbers = "1234567890";
const specialChars = "!@#$%^&*(-~)_=+[}{]<>/";

const allChars = upperCase + lowerCase + numbers + specialChars;

function generatePassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];

    while(lengtho > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordLoad.value = password;
}   

function copyPassword(){
    passwordLoad.select();
    document.execCommand("copy");
}