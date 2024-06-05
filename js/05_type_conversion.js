// numeric conversion:
alert("4"/"2");   // it automatically convert string into number because of / operator


let s ="Aakash"+ " "+"Sharma";
alert(s);

alert("1"+2);
alert(1+"2")

alert(2+5+"5");   //75
alert("2"+5+5);   //255

alert(5-"1"); //4


// unary operator converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0

// increment and decrement:++ and --
let a=2;
counter++;
alert(counter);  //3

let counter = 0;
counter++;
++counter;
alert( counter );   //2

let c = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(c + b); // 3 otherwise it 12