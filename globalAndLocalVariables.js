/*varaiables declared outside the function are global variables 
and variables decleared in the function are local variables*/

//Declarin global variable

let namme = "Ali";

function displayName(){

    document.write(namme);
    document.write("<br>")
}

//calling function 

displayName();


//again displaying name

document.write(namme);
document.write("<br>");

//initializing local variable

function displayNumber(){

    //declaring variable inside the function
    
    let number = 20;

    document.write(number);
    document.write("<br>")
}

displayNumber();

// using variable outside the function

document.write(number); 

/* error it will not work because local variable are accessble 
inside the function only */
