//alert box in javascript

let firstVariable = 11 , secoundVariable = 22;

if (firstVariable < secoundVariable) {

    alert("First variable is greater then secound !\n" + "FirstVariable ->" + firstVariable + ' ' + "SecoundVariable ->" +secoundVariable);

} else {
    
    alert("Secound variable is greater then firts");

}
// error resolved 

/*alertbox.js:5 Uncaught ReferenceError: secoundVariable is not defined
    at alertbox.js:5
(anonymous) @ alertbox.js:5
Error Seen Not loading script.
Its because its case sensitive.
speeling mistake caught >>>>>  in decleration it was decleared as 
secoundVAriable
and in the condition i used secoundVariable 
Small a after v 
error removed
run sucessfully
*/