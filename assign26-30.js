// 1) question
/*
var num = 3.45214
console.log(num)
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))
*/

// 2) question
/*
var num = +prompt(-2.673)
console.log(num)
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))
*/

// 3)question
/*
var num = -7.75
var num2 = 5
console.log(Math.abs(num))
console.log(Math.abs(num2))
*/

// 4) question

// var dice = Math.floor( Math.random() * 6 ) + 2;
// alert('You rolled a ' + dice);


// 5) question
/*
var tails = 1
var head = 2
var coin = Math.trunc(Math.random()*6);
if(coin === head){
    alert('Random coin Value Heads ' + coin)
}else if(coin === tails){
alert('Random coin value Tails '+ coin)
}
// console.log(coin)
*/

// 6) question
/*
var randomNum = Math.trunc(Math.random() * 100)
console.log(randomNum)
*/

// 7) question yea sir sy pochna hoga
/*
var userinput = prompt('Enter your Weight in Kilograms');
var userweight; 
var cleanedInput = userinput.replace(/[^0-9.]/g, '');

var parsedWeight = parseFloat(cleanedInput);

if (!isNaN(parsedWeight)) {
  userweight = parsedWeight;
  alert('Your weight is ' + userweight + ' kilograms');
} else {
  alert('Try again');
}
*/

// 8) question
/*
var randomnum = Math.trunc(Math.random()*10)
var userinput = +prompt('Input a Number 10 to 10')
if(randomnum === userinput){
alert('Congrats your number matched '+ userinput)
}else{
    alert('Try Again the secret number is '+ randomnum)
}
*/