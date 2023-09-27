// q1
/*
function showdate(date){
var showdate2 = new Date()
return showdate2
}
var result = showdate(new Date())
console.log(result)
*/

// q2
/*
function username(firstname, lastname) {
    var combineuser = firstname + lastname
    return combineuser
}
var result = username('Tahir ', 'Khan')
console.log(result)
*/

// q3
/*
function adduserinput(firstnumber, secnumber) {
    var addbothnumber = +prompt('define the number') + +prompt('sec number')
    return addbothnumber
}
var result = adduserinput(prompt + prompt)
console.log(result)
*/

// q4
/*
function performer(num1, num2, anopertor) {
    var result
    switch (anopertor) {
        case '+':
            result = num1 + num2
            break;

        case '-':
            result = num1 - num2
            break;

        case '*':
            result = num1 * num2
            break;

        case '/':
            if (num2 !== 0) {
                result = num1 / num2
            } else {   
                return ('devided by zero is not allowed')
            }
            break;
        }
        console.log(`Result ${num1} ${anopertor} ${num2} = ${result}`)
}
var num1 = 2
var num2 = 3
var anopertor = '+'
performer(num1,num2,anopertor)
*/


// q5
/*
function square(number,number2){
    var method = Math.pow(number,number2)
return method
}
var result = square(3,3)
console.log(result)
*/

// q6
/*
function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }
    else if(n > 1){
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }
    else{
      return "number has to be positive."
    }  
  }
  let n = +prompt('Write a Factorial number');
  answer = factorial(n)
  console.log("Factorial of " + n + " : " + answer);
  */


//   q7
/*
function processor(start, end) {
    if (isNaN(start) || isNaN(end)) {
        console.log('please input a valid number')
        return;
    }

    for (var i = start; i <= end; i++) {
        console.log(i);
    }
}
processor(1, 5)
*/


// q8
/*
function calculateSquare(x) {
    return x * x
}
function calculateHypotenuse(base, perpendicular) {

    var Hypotenuse = calculateSquare(base) + calculateSquare(perpendicular)
    return Hypotenuse
}
var bpresult = calculateHypotenuse(2, 2)
console.log(bpresult)
*/


// q9
/*
function rectangle(width,heigh){

var arguments = width * heigh
return arguments
}
var a = 3
var b = 2
var result = rectangle(a,b)
var result2 = rectangle(3,2)
console.log(result,result2)
*/

// q10
/*
function palindrome(passed){
    var abc = passed.split('').reverse().join('');
    
    if(abc === passed){
        alert('palindrome')
    }else{
        alert('its not a palindrome')
    }
}
var myuser = prompt('write about palindrome we will check')
console.log(myuser)
palindrome(myuser)
// console.log(abc)
*/


// q11
/*
function convert(expected) {
    expected = expected.split(' ')
    // console.log("1", expected)

    for (var i = 0; i < expected.length; i++) {
        expected[i] = expected[i].charAt(0).toUpperCase() + expected[i].slice(1)
        // console.log("*", expected)
    }
    // console.log("2", expected)
    expected = expected.join(" ")
    // console.log("3", expected)
    return expected
}
var expected = 'the quick brown fox'
const result = convert(expected)
console.log(result)
// split(" ") => ["the","quick"]
// var arr2 = expected.join('')
// console.log(arr2)
*/


/*
function convert(expected){
expected = expected.split(' ')

for(var i = 0; i < expected.length; i++){
expected[i] = expected[i].charAt(0).toUpperCase() + expected[i].slice(1)

var expected = expected.join(' ')
return expected
}
}
var expected = 'the quick brown fox'
var abc = convert(expected)
console.log(abc)
*/


// q12 is may sirf length aarhi hai
/*
function processor(expected){
var expectedsplit = expected.split(' ')
var logestword = 0
for(var i = 0; i < expectedsplit.length; i++ ){
    if(expectedsplit[i].length > logestword){
        logestword = expectedsplit[i].length
    }
}
return logestword
}
var result = processor('Web Development Tutorial')
console.log(result)
*/


// q13
/*
function findtheword(letter,word) {
    word = word.toLowerCase()
    letter = letter.toLowerCase()
    var count = '0'
    for (var i = 0; i < letter.length; i++) {
        if (letter[i] === word) {
            count++
        }
    }
    return count
}
letter = 'JSResourceS.com'
word = 'o'
var result = findtheword(letter,word)
console.log(`The letter "${word}" appears ${result} times in the string.`);
*/

// q14
// Function to calculate the circumference of a circle
/*
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    console.log(`The circumference is ${circumference}`);
  }
  
  // Function to calculate the area of a circle
  function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    console.log(`The area is ${area}`);
  }
  
  // Example usage:
  var radius = 5; 
  calcCircumference(radius);
  calcArea(radius);
*/






