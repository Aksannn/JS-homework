//task 1
let num = +prompt("Enter a number: ");
if (num % 2 === 0) {
    alert(num + " is even number");
} else {
    alert(num + " is odd number");
}
//task 2
let age = +prompt("What is your age?");
if (age >= 18) {
    alert("Yes, you can!");
} else {
    alert("Sorry, you are not can.");
}
//task 3 -i dont understand it very well
//task 4 -i dont understand it very well

//task 5

let Age = +prompt("Enter your age: ");
let minAge = +prompt("Minimum age requirement:");
if (age >= minAge && age > 18) {
    alert("You meet the minAge requirement.");
} else if (age < 18) {
    alert("You do not meet the minAge age requirement");
}