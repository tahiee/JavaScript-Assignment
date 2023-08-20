document.getElementById('varab').innerHTML =('2 : What will be the output in variables a, b & result after execution of the following script')
document.getElementById('a').innerHTML =('a = 1')
document.getElementById('b').innerHTML =('a = 2')
document.getElementById('result1').innerHTML =('Result is = 3')

document.getElementById('q3').innerHTML =('3 : Write a program that takes input a name from user &greet the user.')
var Hi = 'Good Afternoon'
alert(Hi)

document.getElementById('q5').innerHTML =('5 : question Anaswer')
var num = prompt("Enter Number", "5")
var num = parseInt(num);{ 
}
var i = 5;
document.write('<table border="1" cellspacing="5">');
for (i = 1; i < 10; i++) {
    document.write("<tr><td>" + num + " x " + i + " = " + num * i + "</td></tr>");
}
document.getElementById('q6').innerHTML =('6 : Subject Total Marks : Obtained Marks  : & Percentage ')
var english = 100
var urdu = 100
var maths = 100
var total = english + urdu + maths
document.getElementById('A2').innerHTML =(total)
var obt1 = 54
var obt2 = 54
var obot3 = 48
var obtans = obt1 + obt2 + obot3
document.getElementById('A3').innerHTML =(obtans)
document.getElementById('A4').innerHTML =(obtans / total * 100 + '%')




