/* We will learn how to code with using functions.
Fucntion can reduce code and run time of the program.
Do not use meaningless  function name. "\n" can not be use between function name.
Necessary to call function*/

// declaring first function
function firstWord() {

    document.write("Hello");
    
}

//calling function

firstWord();

document.write("<br>");

//Declaring secound function

function secoundWord() {

    document.write("Umer");
    document.write("<br>")
    
}

// calling secound function

secoundWord();

/*----------------------------------------------------------------------------------*/
//////////////////////////////////////////////////////////////////////////////////////
/*__________________________________________________________________________________*/

/* functions with parameters 
function functionName(Parametr1, Parameter2){
    statement
}
Calling function
functionName(argument1, argument2);
*/

// declaring function with parameters

// with string concatenation 

let number , parameter1, parameter2;
function addition(parameter1 , parameter2) {
    number  = ( "First Parameter is&nbsp" + parameter1 + "<br>" + "Secound Parameter is&nbsp" + parameter2 + "<br>" +"Total Sum is" +(parameter1 + parameter2));
    document.write(number);
}

// calling function

addition(10, 20);

// displaying user name

 let firstName, lastName, fullName;
 function userName(firstName, lastName) {
     document.write("<br>");
     document.write("Hey!" +firstName + " " +lastName);
 }

 // calling displaying function

 userName("Ali", "Khan");

 /*Error was caught in calling function because
 1.userName(Ali, Khan);
 2.userName("Ali","Khan");
  in this case first statement is wrong because it takes string argument*/
  