let eligibility;

let age = prompt("how old are you","");
// if (age>= 18) {
//     eligibility = true;
// } else {
//     eligibility = "false"
// }
// alert(eligibility);

//or

let eligible = (age >= 18) ? true : false;
alert (eligible);

//
// let cur_status;
// let login = prompt("What is yor post","");
// if (login == 'Employee') {
//   cur_status = 'Hello';
// } else if (login == 'Director') {
//   cur_status = 'Greetings';
// } else if (login == '') {
//   cur_status = 'No login';
// } else {
//   cur_status = '';
// }
// alert(cur_status);

let login = prompt("what is your post",'')
let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';

  