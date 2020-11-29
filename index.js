//importing packages
var chalk=require("chalk");
var emoji=require("node-emoji");
var readlineSync=require("readline-sync");
//Ask name and welcome the user
console.log(chalk.yellow.bold.underline("Let me check my Math! "+emoji.get("coffee")))
var userName=readlineSync.question(chalk.blue("\nMay I have your Name? "))
console.log("\nHi! "+chalk.cyanBright(userName.toUpperCase())+". I can tell if your date of birth is a prime number.\n")

var isPrime=true;

//checking if date is prime or not
  function xyz(){
    //Ask user their DOB
    var userDob=readlineSync.question(chalk.green("Enter your Date of Birth in DD/MM format "));
    //split the user date from month
    var split=userDob.split("/");  //returns array,split=[DD,MM]
    var date=split[0];
    //checking if date valid or not
 if(isNaN(date) || date<=0 || date>31  ){
    console.log(chalk.red("Please enter a valid number!\n"))
      return xyz();
     } 
  
  if(date==1){
  console.log(chalk.bgBlue("\nYour DOB is neither prime nor composite!\nThank\'s alot for helping me to test my Math "+userName+"!!"));
} //checking if date prime or not
 else if(date>=2 && date<=31){
      for(var i=2;i<date;i++){
      if(date%i==0){
        isPrime=false;
      console.log(chalk.bgBlue("\nYour DOB is not a prime number!\nThank\'s alot for helping me to test my Math "+userName+"!!"));
      break;
      }
      }
 }
 if(isPrime==true && date!=1){
   console.log(chalk.bgCyan("\nYour DOB is a prime number!\nThank\'s alot for helping me to test my Math "+userName+"!!"));
 }}xyz();