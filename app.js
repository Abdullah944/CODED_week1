// make var to store value in it:

let fName = "abdullah";
let lName = "alrashed";
let birthday = 1990;

function printAllInfo() {
  // you can use the var by putting them un `${varName}`:
  console.log(
    `my name is ${fName} ${lName} and i'm ${2022 - birthday} years old`
  );
  alert("check the console !!!");
}
//const unchangeable var : * img should be const*:
const country = "kuwait";
const img = "some baby img";

// operators are && = AND  / || = OR most commend use in >> if statement :

function question() {
  if (fName === "abdullah") {
    alert(" nice name my man!!");
  }
  // else if : Will auto be the opposite of the if condition before:
  else if (fName === "adel") {
    alert("best second name ^_^");
  } else {
    alert(`you should change it to ${fName}`);
  }
}
