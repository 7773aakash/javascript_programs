alert("Glow"> "Glee");
// o is greater than e in unicode.

alert("01" == 1); // "01" converts into 1

let a = 0;
alert( Boolean(a) ); // false
let b = "0";
alert( Boolean(b) ); // true  because "0" converts into 0
alert(a == b); // true!

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

// because in >= null is converted in to zero and undefined into NaN

null == "\n0\n" // false
null === +"\n0\n" // false