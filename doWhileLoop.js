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

// DO while loop in javascript

/*
let number = 7
do{
    document.write("JameBOnd")
}while(number a <=7)

*/

let number = 1;

// using Html tags

document.writeln("<ul>");
do{
    document.write("<li>"+" Ali Khan "+"</li>");
    number +=1;
}while (number <=7);

document.write("</ul>");


