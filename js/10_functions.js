// let userName = 'yash';
// function showMessage() {
//   userName = "jay";

//   let message = 'Hello, ' + userName;
//   alert(message);
// }

// alert( userName ); // yash be
// showMessage();
// alert( userName );

// //important

// let username = 'John';
// function showMessage() {
//   let username = "Bob"; // declare a local variable

//   let message = 'Hello, ' + username; // Bob
//   alert(message);
// }
// // the function will create and use its own username
// showMessage();
// alert( username );

// // parameter
// function showMessage(from, text) {
//     from = '*' + from + '*'; // make "from" look nicer
//     alert( from + ': ' + text );
//   }
//   let from = "Ajay";
//   showMessage(from, "Hello"); // *Ajay*: Hello
//   // the value of "from" is the same, the function modified a local copy
//   alert( from ); // Ajay

//   // note:If a function is called, but an argument is not provided, then the corresponding value becomes undefined.
//   // A function with an empty return or without it returns undefined

//   function showCount(count) {
//     // if count is undefined or null, show "unknown"
//     alert(count ?? "unknown");
//   }
//   showCount(0); // 0
//   showCount(null); // unknown
//   showCount(); // unknown
  

//   function checkAge(age) {
//     if (age >= 18) {
//       return true;
//     } else {
//       return confirm('Do you have permission from your parents?');
//     }
//   }
//   let age = prompt('How old are you?', 18);
//   if ( checkAge(age) ) {
//     alert( 'Hello' );
//   } else {
//     alert( 'Hey' );
//   }

//  // to find prime numbers upto n;
//  function showPrimes(n) {
//     for (let i = 2; i < n; i++) {
//       if (!isPrime(i)) continue;
//         alert(i);  // a prime
//     }
//   }
//   function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//       if ( n % i == 0) return false;
//     }
//     return true;
//   }

  // 
  function pow(a,b) {
    let result = a;
    for (let i = 1; i < b; i++) {
        result *= a;
    }
    return result;
  }
  let a = prompt("x?", '');
  let b = prompt("b?", '');

    alert( pow(a,b) );
