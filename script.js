const characters = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789!@#$%^&*";

let passList = [];
let passwordEl_1 = document.getElementById("pass1");
let passwordEl_2= document.getElementById("pass2");


function generatePassword(){
    var password = "";

    for(var i = 0; i < 8; i++){
        password += characters[randomIndex()];
    }
    return password;
}


function displayPassword(){
    passList.push(generatePassword(), generatePassword());
    passwordEl_1.textContent = passList[0];
    passwordEl_2.textContent = passList[1];
    passList = [];
}

function randomIndex(){
    var index = Math.floor(Math.random() * 65);
    return index;
}