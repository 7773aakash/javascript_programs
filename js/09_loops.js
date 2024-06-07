let i =5;
while (i) {   // means while i not becomes zero
    alert(i);
    i--;
}

let j = 5;
do {
    alert (j);
    j--;
} while (j);

let k =0;
for (k =0; k < 3; k++){
    alert(k);
}
alert(k);

let sum = 0;
while (true) {
  let value = +prompt("Enter a number", '');
  if (!value) break; // 
  sum += value;
}
alert( 'Sum: ' + sum );

for (let i = 0; i < 10; i++) {
// if true, skip the remaining part of the body
    if (i % 2 == 0) continue;
    alert(i); // 1, then 3, 5, 7, 9
  }

for (let i = 0; i < 10; i++) {
    if (i % 2) {
      alert( i );  // odd numbers 
    }
  }


// to find prime numbers between 2 to 15
let n = 15;
nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}

// switch statements;
let a = "2";
let b = 1;

switch (+a) {
  case b + 1:
    alert("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    alert("this doesn't run");
}

let arg = prompt("Enter a value?");
switch (arg) {
  case '0':
  case '1':
    alert( 'One or zero' );
    break;

  case '2':
    alert( 'Two' );
    break;

  case 3:
    alert( 'Never executes!' );
    break;
  default:
    alert( 'An unknown value' );
}  // beacuse result of prompt is string so it works for 0,1 and 2 not for 3.