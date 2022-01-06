// This is a single line comment

/* This code 
   creates an 
   alert box */

function myFunction() {
  alert("Calling a Function!");
}

myFunction();
//Alerts "Calling a Function!"

function sayHello(name) {
   alert("Hi, " + name);
}

sayHello("Marco");
//Alerts "Hi, Marco"

alert("Hello\nHow are you?");

var user = prompt("Please enter your name", "name");
alert(user);

var result = confirm("Do you really want to leave this page?");
if (result == true) {
  alert("Thanks for visiting");
}
else {
  alert("Thanks for staying with us");
}

var x = 100;
document.write(x + "<br />");

var price = 55.55;
document.write(price + "<br />");

var sayHello = 'Hello world! \'I am a JavaScript programmer.\' ';
document.write(sayHello + "<br />");

var y = 56%3;
document.write(y + "<br />");

for (i=1; i<=5; i++) {
   document.write(i + "<br />");
}

var i=0;
while (i<=10) {
   document.write(i + "<br />");
   i++;
}

var sum=0; 
while(sum<6) {
  sum++;
}
document.write(sum);

function test(number)
{
   while(number < 5) {
      number++;
   }
   return number;
}
alert(test(2));

var n = prompt("Enter a number", "");
var answer = Math.sqrt(n);
alert("The square root of " + n + " is " + answer);
