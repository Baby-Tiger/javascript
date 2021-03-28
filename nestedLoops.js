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

// nested loop in javascript

for (let number = 1; number <= 50; number = number+5) {
    for (let num = number; num <= number + 5; num++) {
        document.write(num + " ");
    }
    document.write("<br>");
}
document.write("<br>");

for (let number = 1; number <= 5; number++){
    for (let num = 1; num <= number; num++) {
       document.write(num + " ");
    }
   document.write("<br>")
}
document.write("<br>");

// array practicing

for (let number = 1; number <= 5; number++) {
    for (let num = 1; num <= number; num++) {
        document.write(number + " ");
    }
    document.write("<br>");
}
