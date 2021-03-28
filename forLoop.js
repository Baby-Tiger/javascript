/* Loop is divided in three parts
1. Initialization a variable through wihch loop run
2. Condition True Or False
if  False then loop will break and if true 
it will go to next line statment in the loop
3. increment or decrement in the loop
loops in javascript
while loop,
do/while loop,
for loop,
for/inloop(objects),
forEach loop(arrays)
*/

// for loop in javascript

/*
for(number =1; number<=7;number++){
    document.write("James");
}
*/

let number = 1;

// initializing for loop with continue function

for (let number = 1; number <= 7; number++) {
    if (number == 5) {
        document.write("Lucky<br>");
        continue;
    }
    document.write("Number : "+ number +" <br>")
}

// getting even and odd numbers
document.writeln("<ul>");

for (let number = 1; number <= 100; number++) {
    if (number % 2 == 0) {
        document.write(number +" is even <br>"); 
    } else {
        document.write(number+ " is odd <br>") ;
    }  
}
document.writeln("</ul>");
