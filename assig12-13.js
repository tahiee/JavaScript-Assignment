// 1. Question
/*var A = 65
var Z = 90
var a = 97
var z = 122
var check = prompt('Check Given Number is UpperCase or LowerCase')
if(check >= A && check <= Z){
alert('UpperCase')
} else if (check >= a && check <= z){
alert('LowerCase')
} else{
    alert('Try Again')
}*/


// 2. question
/*var num1 = 10
var num2 = 10
if(num1 > num2){
console.log(num1 + 'is larger than' + num2 )
} else if (num1 < num2) {
    console.log(num2 + 'is Smaller than' + num1 )
} else {
    console.log('Both Values are Equal')
}*/

// 3. question
/*var a = 0
var b = 0
var c = -1
var checkvalue = prompt('Input a number or Zero or Negitive')
if (checkvalue > a){
alert("This is a Number")
} else if (checkvalue < c){
alert('This is a Negitive Value')
} else if (checkvalue == b ){
alert('This is a Zero')
} else{
    alert('Try Again')
}
*/


// 4.question
/*var vowel = 'a' || 'e' || 'i' || 'o' || 'u'
var check = prompt('check the vowel')
if(check === vowel){
alert('This is a Vowel')
} else{
   alert('not a vowel')
}*/

//  5.question
/*var pass1 = 'abc1'
var pass2 = 'abc1'
var enter1 = prompt('Please Enetr a Password')
var enter2 = prompt('Please Enetr a Password')
if (enter1 === pass1 + (enter2 === pass2)){
alert('Your Password is Correct')
} 
else if (enter1 !== pass1){
alert('inCorrect')
} 
// else if (enter2 || enter2 === pass2){
// alert('Your Password is Correct')
// } 
else if (enter2 !== pass2){
alert('Inccorect')
} 
else if (pass1 !== pass2){
alert('Both Pssword is Not Matched')
} 
else if(enter1 !== pass1 + (enter2 !== pass2)){
alert('Both Pssword is Not Matched')
} 
else {
alert('Try Again')
}
*/

// 6. question
/*
var greeting;
var hour = 13;
if (hour > 18) {
alert(greeting = "Good day");
}else {
 alert(greeting = "Good evening");
}
*/

// 7.question
var insert = +prompt('Please insert a Time')
var time = 1900
var fix = 0
var time1 = 1200
var time2 = 1700
var time3 = 2100
var time4 = 2359
console.log(insert, typeof insert)
// if (insert >= 0 && insert < 1200)
if (insert >= fix && insert < time1) {
    alert('Good Morning')
    // if (insert >= 1200 && insert <= 1700)
} else if (insert >= time1 && insert <= time2 ){
    alert('Good Afternoon')
    // if (insert >= 1700 && insert <= 2100)
} else if (insert >= time2 && insert <= time3 ){
    alert('Good Evening')
}
    // if (insert >= 2100 && insert <= 2359)
 else if (insert >= time3 && insert <= time4 ){
    alert('Good Night')
}