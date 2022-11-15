//When a user inputs a number
let userNumber = parseInt(prompt("Please enter a number:", ))

//Loop from 1 to the entered number
for (let i = 1; i <= userNumber; i++) {
//If the current number is divisible by 3 and 5 then print "FizzBuzz"
if (i % 3 && i % 5 === 0) {
  console.log("FizzBuzz");
//If the current number is divisible by 5 then print "Buzz"
} else if (i % 5 === 0) {
  console.log("Buzz");
//If the current number is divisible by 3 then print "Fizz"
} else if (i % 3 === 0) {
  console.log("Fizz");
//Otherwise print the current number
} else {
  console.log(i);
}
}
