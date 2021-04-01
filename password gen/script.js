// Assignment Code
var generateBtn = document.querySelector("#generate");

//password components
var captital = ["A","B","C","D","E","F","G","H","I","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","t","u","v","w","x","y","z"];
var special = ["!","@","$","%","&","#","*","+","-","_","=","/","~"];
var num = ["1","2","3","4","5","6","7","8","9","0"];
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  var userInput = getUserInput()
  console.log(userInput); 
  
  var userOptions = [];
  if (userInput.capitalAsk) {
    userOptions = userOptions.concat(captital);
  }
  if (userInput.specialAsk) {
    userOptions = userOptions.concat(special);
  }
  if (userInput.lowerAsk) {
    userOptions = userOptions.concat(letters);
  }
  if (userInput.numAsk) {
    userOptions = userOptions.concat(num);
  }
  let password = "";
  for (var i = 0; i < userInput.lengthAsk; i++) {
    var item = userOptions[Math.floor(Math.random() * userOptions.length)];
    password = password + item;
  }
  
  
  

  passwordText.value = password;

}

//prompts to obtain user input
function getUserInput() {
  var lengthAsk = window.prompt("Length of password? Please choose no less than 8 and no greater than 128 characters.");
  
  if (!lengthAsk) {
    window.alert("Please enter a password length.");
    var lengthAsk = window.prompt("Length of password? Please choose no less than 8 and no greater than 128 characters.");

  } else if (lengthAsk < 8 || lengthAsk > 128) {
    window.alert("Please choose a length no less than 8 and no greater than 128.");
    var lengthAsk = window.prompt("Length of password? Please choose no less than 8 and no greater than 128 characters.");

  } 
    var capitalAsk = window.confirm("Do you Want to include capital letters?");
    var specialAsk = window.confirm("Do you want to include special characters?");
    var lowerAsk = window.confirm("Do you want lower case letters?");
    var numAsk = window.confirm("Do you want to include numbers?");
  if (!capitalAsk && !specialAsk && !lowerAsk && !numAsk) {
    getUserInput();
  }
return {
  lengthAsk: parseInt(lengthAsk),
  capitalAsk: capitalAsk,
  specialAsk: specialAsk,
  lowerAsk: lowerAsk,
  numAsk: numAsk
};
}

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);