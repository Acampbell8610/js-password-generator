// Assignment code here
// code global variables
function generatePassword(){
  var numericCharacters =['0','1','2','3','4', '5','6','7','8','9'];
  var uppercaseCharacters=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var lowercaseCharacters=['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var specialCharacters=["~","`","!","#",'$','%','^','&','*','(',')',"-",'_','=','+','{','}','[','}',':',';','<','>','?','/'];
  var passwordCharacters=[];

 //numeber of characters
 characterNumber = window.prompt("How many character would you like in your password? Choose between 8-128");
 if (characterNumber < 8 || characterNumber > 128){
    return "Please choose a correct number of characters.";
 ;
 }
 else if(isNaN(characterNumber)){
   characterNumber = window.prompt("Please choose a correct number of characters.");
 }else{
  
   window.alert("You have "+ characterNumber +" characters in your password.");
 }
 
   //uppercase letters
   haveUppercase= window.confirm("Would you like uppercase letters?");
   if (haveUppercase){
     window.alert("Your password will contain uppercase letters");
   }else{
     window.alert("Your password will not contain uppercase letters.");
   }
   //lowercase letters
  haveLowercase = window.confirm("Would you like lowercase letters?");
  if(haveLowercase){
    window.alert("Your password will contain lowercase letters.");
  } else{
    window.alert("Your password will not contain lowercase letters.");
  }
 //special characters
 haveSpecial = window.confirm("Would you like special characters?");
 if (haveSpecial){
   window.alert("Your password will contain special characters.");
 }else{
   window.alert("Your passoword will not contain special characters.");
 }
 //Numbers
 haveNumber = window.confirm("Would you like numbers?");
 if (haveNumber){
   window.alert("Your password will contain a number.");
 }else{
   window.alert("Your password will not conatain a number.");
 }
 //if selected no to all 
 if(haveUppercase === false && haveLowercase ===false && haveSpecial===false && haveNumber === false){
  return "Please select a character type.";
};

 //combining the characters selected
 if(haveUppercase){
  passwordCharacters = passwordCharacters.concat(uppercaseCharacters);
 }
 if(haveLowercase){
   passwordCharacters = passwordCharacters.concat(lowercaseCharacters);
 }
 if(haveSpecial){
   passwordCharacters = passwordCharacters.concat(specialCharacters);
 }
 if(haveNumber){
   passwordCharacters = passwordCharacters.concat(numericCharacters);
 }
//final password call
 var finalPassword = ""
 for( i = 0; i < characterNumber; i++) {
  var passNum = [Math.floor(Math.random() * passwordCharacters.length)];
  finalPassword = finalPassword + passwordCharacters[passNum];   
  }
  return finalPassword;
};

 
 
 // Get references to the #generate element
 var generateBtn = document.querySelector("#generate");
 
 // Write password to the #password input
 function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");
 
   passwordText.value = password;
 
 }
 
 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);