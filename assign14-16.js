// 1 ; question
/*var array = ['']
console.log(array)

var arrayname = ['E' , 'M' , 'P' , 'T' , 'Y']
console.log(arrayname)

var arraynumber = [12345]
console.log(arraynumber)

var arrayboolean = ['===']
console.log(arrayboolean)

var arraymixed = ['tahir12=']
console.log(arraymixed)

var qual = ['Qualification:']
console.log(qual)
var array1 = ['1) SSC\n']
var array2 = ['2) HSC\n']
var array3 = ['3) BCS\n']
var array4 = ['4) BS\n']
var array5 = ['5) BCOM\n']
var array6 = ['6) MS\n']
console.log(array1 + array2 + array3 + array4 + array5 + array6)
*/

// 2: question
/*var name1 = ['micheal ']
var name2 = ['john ']
var name3 = ['tony ']
var score1 = [320 ]
var score2 = [230 ]
var score3 = [480]
var per1 = score1 / 500 * 100
var per2 = score2 / 500 * 100
var per3 = score3 / 500 * 100
console.log('Score of ' + name1  + 'is ' + score1  + ' Percentage ' +  per1  + '%')
console.log('Score of ' + name2  + 'is ' + score2  + ' Percentage ' +  per2  + '%')
console.log('Score of ' + name3  + 'is ' + score3  + ' Percentage ' +  per3  + '%')
*/

// 3. question
/*var ask = [prompt('Which color your Want sir / Ma am')]
var color1 = ['red']
var color2 = ['blue']
var color3 = ['yellow']
var color4 = ['white']
// if (ask == color1){
// document.write('your selected color is red')
// }else if (ask == color2){
//     document.write('your selected color is blue')
// } else{
//     alert('try again')
// }
color1.shift()
color4.pop()
    console.log(['This color is ' + ask])

console.log(color1 , color2 , color3 , color4)
*/


// 4. question
/*
var score = [320 , 230 , 480 , 120]
score.sort()
console.log(score)
*/


// 5.question
/*
var cities = ['karachi' , 'islamabad ' , 'lahore' , 'quetta' , 'peshawar']
var selectcity = cities.splice(2,2)
console.log(selectcity)
*/


// 6-question
/*
var arr = ['This' , 'is' , 'my' , 'cat']
var arr2 = arr.join()
console.log(arr2)
*/

// 7-question
/*
var devies = ['keyword' , 'mouse' , ' printer' , 'moniter']
var out = devies.slice(0,1)
var out2 = devies.slice(1,2)
var out3 = devies.slice(2,3)
var out4 = devies.slice(3,4)
console.log(devies)
console.log(out)
console.log(out2)
console.log(out3)
console.log(out4)
*/

// 8.question
/*
var devies = ['keyword' , 'mouse' , 'printer' , 'moniter']
var out = devies.slice(0,1)
var out2 = devies.slice(1,2)
var out3 = devies.slice(2,3)
var out4 = devies.slice(3,4)
console.log(devies)
console.log(out4)
console.log(out2)
console.log(out3)
console.log(out)
*/

// 9.question

var arrayfruits = ['apple', "banana", "grapes"];
document.write(
    `<select  >
            ${arrayfruits.map((fruit) => `<option value=${fruit}>${fruit}</option>`)}
    </select>`
)
