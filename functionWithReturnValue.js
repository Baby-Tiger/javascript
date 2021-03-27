/* If we do not want to write the value of of the function
 or u can use function value by retun it. 
// Decalring
 
function function name(parameter1, parametr2){
     statement
     return value
 }

// Calling Function

let value = functionName(argument1, argument2);
*/

let value, returnValue, firstName, lastName, fullName;
function userName(firstName, lastName) {
    
    returnValue = ("Hey!&nbsp" +firstName + " " +lastName);
    return returnValue;
}

// storing function value in a value variable

value = userName("Hamza","Shah");
document.write(value)
document.write("<br>");

/* It will not display on html page without calling the value in which function value
is stored */

// making with some advance

let totalpercentage, totalMarks, marks, science, math, biology; 
function totalSubjectMarks (science,math,biology) {
    marks = science + math + biology;
    return marks;
}
totalMarks = totalSubjectMarks(10,20,30);
document.write(totalMarks);

document.write("<br>");

function totalPercentage(totalMarks) {
    totalpercentage = (totalMarks/300)*100;
    return totalpercentage;
}
percentage = totalPercentage(totalMarks);
document.write(percentage);




