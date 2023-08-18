/*var age = 'i am 24 Years old'
var visit = 'you have visit this site 14 times'
alert(age)
alert(visit)*/

document.getElementById('demo').innerHTML = 'My Birth Date is 1998'
document.getElementById('demo1').innerHTML = 'date type is decleard variable is number'

/*neachy wala kam ka nhi
const buttonA = document.querySelector("#buttonA");
const headingA = document.querySelector("#headingA");
const headingB = document.querySelector("#headingB");
buttonA.onclick = () => {
const name1 = prompt("Name Please?");
alert(`Hello ${name1}, nice to see you!`);
const name2 = prompt("Your Product Title?");
alert(`Hello ${name2}, Please insert!`);
  headingA.textContent = `Welcome ${name1}`;
  headingB.textContent = `Your Product is ${name2}`;
}*/

text = "<b>John Deo</b>"
text2 = '\nordered'
text3 = "<b>\n5 T-Shirt(s)</b>"
text4 = '\non XYZ Clothes Store'
document.getElementById('headingA').innerHTML = text + text2 + text3 + text4 ;

var visitCount = JSON.parse(localStorage.getItem("visitCount"));
visitCount = visitCount + 1;
localStorage.setItem("visitCount", visitCount);
alert("You have visited this page " + visitCount + " time.");