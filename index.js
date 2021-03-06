//importing packages
const chalk=require("chalk");
const emoji=require("node-emoji");
const readlineSync=require("readline-sync");
//Ask name and welcome the user
console.log(chalk.yellow.bold.underline("Let me check my Math! "+emoji.get("coffee")))
const userName=readlineSync.question(chalk.blue("\nMay I have your Name? "))
console.log("\nHi! "+chalk.cyanBright(userName.toUpperCase())+". I can tell if your date of birth is a prime number.\n")

let isPrime=true;

//checking if date is prime or not
  function validityCheck(){
    //Ask user their DOB
    let userDob=readlineSync.question(chalk.green("Enter your Date of Birth in DD/MM format "));
    //split the user date from month
    let split=userDob.split("/");  //returns array,split=[DD,MM]
    let date=split[0];
    //checking if date valid or not
 if(isNaN(date) || date<=0 || date>31 ){
    console.log(chalk.red("Please enter a valid number!\n"))
       validityCheck();
     } 
  
  if(date==1){
  console.log(chalk.bgBlue("\nYour DOB is neither prime nor composite!\nThank\'s alot for helping me to test my Math "+userName+"!!"));
  keepPlaying();
} //checking if date prime or not
 else if(date>=2 && date<=31){
      for(let i=2;i<date;i++){
      if(date%i==0){
        isPrime=false;
      console.log(chalk.bgBlue("\nYour DOB is not a prime number!\nThank\'s alot for helping me to test my Math "+userName+"!!"));
      keepPlaying();
      break;
      }
      }
 }
 if(isPrime==true && date!=1){
   console.log(chalk.bgCyan("\nYour DOB is a prime number!\nThank\'s alot for helping me to test my Math "+userName+"!!"));
   keepPlaying();
   
 }}validityCheck();

 console.log("\n")
function keepPlaying(){
if(readlineSync.keyInYN("Would you like to check again?\n")){
  validityCheck();
}else{
  console.log("\nThank you!")
}
}
