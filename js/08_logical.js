let hour = 12;
let minute = 30;
if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}

alert( !!"non-empty string" ); // true
alert( !!null ); // false

alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false

// AND returns the first falsy value while OR returns the first truthy one.
true || alert("not printed");
false || alert("printed");
// In the first line, the OR || operator stops the evaluation immediately upon seeing true, so the alert isn’t run.
alert( 1 && 2 && null && 3 ); // null

alert( alert(1) && alert(2) );