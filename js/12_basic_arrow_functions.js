/* The arrow function is a shorter form of:
let sum = function(a, b) {
  return a + b;
};
*/
let sum = (a, b) => a + b;
alert( sum(5 , 2) ); 

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }
  
//   ask(
//     "Are you a employee or director?",
//     function() { alert("employee"); },
//     function() { alert("director"); }
//   );
//OR
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Are you a employee or director?",
    () => alert("employee"),
    () => alert("director")
  );