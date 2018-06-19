var t = setInterval(move, 10);

// starting position
var pos = 0; 
//our box element
var box = document.getElementById("box");

function move() {
  if(pos >= 150) {
    clearInterval(t);
  }
  else {
    pos += 1;
    box.style.left = pos+"px";
  }
}

function show() {
  alert("Hi there");
}

function change() {
 var x = document.getElementById("name");
 x.value= x.value.toUpperCase();
}

var btn = document.getElementById("demo");
btn.addEventListener("click", myFunction);

function myFunction() {
  alert(Math.random());
  btn.removeEventListener("click", myFunction);
}

var images = [
   "images/a.jpg", 
   "images/c.jpg",
   "images/d.jpg", 
   "images/e.jpg",
   "images/h.jpg", 
   "images/i.jpg",
   "images/j.jpg", 
   "images/q.jpg",
   "images/r.jpg", 
   "images/s.jpg",
   "images/x.jpg", 
   "images/y.jpg",
   "images/z.jpg"
];
 var num = 0;

function next() {
  var slider = document.getElementById("slider");
  num++;
  if(num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
  }

function prev() {
  var slider = document.getElementById("slider");
  num--;
  if(num < 0) {
    num = images.length-1;
  }
  slider.src = images[num];
}

function validate() {
  var n1 = document.getElementById("num1");
  var n2 = document.getElementById("num2");
  if(n1.value != "" && n2.value != "") {
    if(n1.value == n2.value) {
      return true;
    }
  }
  alert("The values should be equal and not blank");
  return false;
}