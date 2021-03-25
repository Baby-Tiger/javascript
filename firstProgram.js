//if and else statement in javascript

let firstName = "Essa", lastName = "Khan";
if(firstName != "Essa" && lastName == "Khan"){
    document.write(firstName);
}
else{
    document.write("Welcome " + firstName + " " +lastName);
    // Adding netx line with HTML TAG
    document.write("<br>");
}

//For multi line comment use ( to start /* to ened */)
/*Ternary Operator with single condition
(condition)? First Statement : Secound Statement*/
let firstNumber = 10; secoundNumber = 20;
let display;

display = " THE NUMBERS ARE" +(firstNumber  == 10 && secoundNumber == 20 ? " TRUE" : " FALSE");
document.write(display);


