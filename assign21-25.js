// 1) question
/*
var ask = prompt('First Name?')
var ask2 = prompt('Last Name?')
var fullname = (ask+ask2)
console.log('Full name is ' + fullname)
*/

// 2) question
/*
var userinput = prompt('Write your favouite Mobile Model')
console.log(userinput.length)
*/


// 3) qauestion
/*
var pakname = 'pakistan'
console.log(pakname.indexOf('n'))
*/

// 4) question
/*
var pakname = 'Hello World'
console.log(pakname.lastIndexOf('l'))
*/


// 5) question
/*
var pakname = 'pakistani'
console.log(pakname.indexOf('i'))
*/


// 6) question
/*
var you = 'I am Pakistani '
var from = ' I am from Karachi'
console.log(you.concat('&' + from))
*/


// 7)question
/*
var city = 'Hyderabad'
console.log(city.replace('hyderabad' , 'islama'))
*/


// 8) question
/*
var message = `“Ali and Sami are best friends. They play cricket and football together.`;
console.log(message.replaceAll('and' , '&'))
*/


// 9) question
/*
var num1 = '472'
console.log(Number(num1))
*/


// 10) question
/*
var myname = 'my name is Tahir'
console.log(myname.toUpperCase())
*/

// 11) question   kuch problem haa/
/*
var myname = prompt('Your Name?');

if (myname.length > 0) {
  var uppercaseName = myname.toUpperCase();
  console.log(uppercaseName);
} else {
  console.log('You did not enter a name.');
}
*/

// 12 )   question
/*
var num = 35.36
var tost = num.toString()
console.log(tost.replaceAll('.',''))
*/


// 13) question   is may be problem hai
/*
var arrofchar = ['@', '.', ',', '!'];
var userinput = prompt('Input Your UserName');

for (var i = 0; i < userinput.length; i++) {
  if (arrofchar.includes(userinput[i])) {
    alert('Please input a valid username');
    break;
  }
else{
    console.log(userinput + ' This User is Valid')
}
}  
*/


// 14) question
/*
var A = ['cake', 'applepie', 'cookie', 'chips', 'patties'];
var ask = prompt('Welcome to ABC Bakery. How can I help you, Sir/Ma\'am?');

ask = ask.toLowerCase();

var iteamfoud = false;

for(var i = 0; i < A.length ; i++){
if(ask === A[i]){
iteamfoud = true
alert(ask + 'iteam is Avaiable in our Bakkery')
break
}
}if(iteamfoud){
    alert(ask + 'is available in bakkery')
}else{
    alert(ask + " its not available")
}
*/


// 15) question

// var userpass = prompt('Please input a Passowrd\n (a). It should contain alphabets and numbers\n (b). It should not start with a number\n (c). It must at least 6 characters long')
// var alpa = 'a-z'
// var alpa2 = 'A-Z'
// var number = Number('0-9')

// for(var i= 0; i < userpass; i++){
// if(userpass === alpa + alpa2 + number)
// alert('Entered Password: ' + userpass)
// }

/*
var userpass = prompt('Please input a Password\n (a). It should contain alphabets and numbers\n (b). It should not start with a number\n (c). It must be at least 6 characters long');
var AlphaandNum = /[a-zA-Z].*\d|\d.*[a-zA-Z]/.test(userpass);
var doesNotStartWithNum = /^[^0-9]/.test(userpass);
var LeastSixChar = userpass.length <= 6;

if (AlphaandNum && doesNotStartWithNum && LeastSixChar) {
  alert('Entered Password: ' + userpass);
} else {
  alert('Invalid Password. Please follow the password criteria.');
}
*/


// 16) question
/*
var university = "University of Karachi";
var universityArray = university.split('');

for (var i = 0; i < universityArray.length; i++) {
  console.log(universityArray[i]);
}

*/

// 17) question
/*
var username = prompt('UserName?')
console.log(username.charAt(7))
*/


// 18) question

var string = 'The quick brown fox jumps over the lazy dog';
var lowerString = string.toLowerCase();
var theWord = 'the';
var count = 0;

for (let i = 0; i < lowerString.length; i++) {
  if (lowerString.slice(i, i + 3) === theWord) { 
    count++;
  }
}
console.log('There are ' + count + ' occurrences of the word "' + theWord + '".');