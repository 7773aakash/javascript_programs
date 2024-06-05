"use strict";

let message;
message = "Hello";
alert(message);  // Displays "Hello"

let admin, name1;
name1 = "John";
admin = name1;
message = "Hey";
alert(admin);  // Displays "John"

// We should not declare two variables with the same name
// like, let message = "a"
//       let message = "b"
// This gives an error

const myBirthday = "15.05.1989";
// myBirthday cannot be reassigned
