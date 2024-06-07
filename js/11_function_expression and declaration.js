// function is a value , sayHi is a variable in which alert(sayHi); shows the function code.

function sayHi() {
    alert( "Hello" );
  }
let func = sayHi;
  func(); // Hello
  sayHi(); // Hello  


// callback functions

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
function show_yes() {
    alert( "You agreed." );
  }
function show_no() {
    alert( "You canceled the execution." );
  }
  
// functions show_yes, show_no are passed as arguments to ask and called callback functions.
  ask("Do you agree?", show_yes, show_no);


// important
// A Function Expression is created when the execution 
// reaches it and is usable only from that moment and after 
// all Function Declarations are processed, the code is executed.

sayHii("hey");
function sayHii(name) {
  alert( `Hello, ${name}` );
}
// sayHi("John");
// let sayHi = function(name) {  // (*) no magic any more
//   alert( `Hello, ${name}` );
// };
// because function is created when execution reaches it.



// In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.
let age = 5; // take 5 as an example
if (age < 18) {
welcome();               
  function welcome() {   // runs because we have declared   
    alert("Hello!");     
  }                       
welcome();    // (runs) 

} else {
  function welcome() {
    alert("Greetings!");
  }
}
// welcome(); // Error: welcome is not defined

// good way is

let checkage = prompt("What is your age?", "");
let welcome;
if (checkage < 18) {
welcome = function() {
    alert("Hello!");
  };
} else {
  welcome = function() {
    alert("Greetings!");
  };

}


// or
let yourage = prompt("What is your age?", 18);
let welcome1 = (yourage < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };
welcome1();