// Q1)

// console.log(new Date())

// q2)
// var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var new1 = new Date()
// console.log(month[new1.getMonth()])


// q3)

// var day = ['sun','mon', 'tue', 'wed','thu','fri','sat']
// var day2 = new Date()
// console.log('today is '+ day[day2.getDay()])

// q4
/*
var day = new Date()

if (day.getDay() === 0 && 6){
alert('Its Fun Day')    
}else{
    alert('Today is '+ day)
}
*/

// Q5
/*
var month = new Date().getDate()

if(month < 16){
alert('First fifteen days of the month')
}else {
    alert('Last days of the Month')
}
*/

// Q6)
/*
var dayeinstant1 = new Date()
var dayeinstant2 = Date.now()
console.log(dayeinstant1)
console.log(dayeinstant2)
console.log(dayeinstant2*60)
*/

// Q7
/*
var checktheampm = new Date().getHours()
// console.log(checktheampm)
if(checktheampm >= 12){
alert('its pm')
}else if(checktheampm <=12 ){
    alert('its am')
}
*/

// Q8
/*
var laterdate = new Date('12-31-2023')

console.log(laterdate)
*/

// Q9
/*
var ramzanstartdate = new Date('03-22-2023')
var currentdate = new Date()
var lessthedates = currentdate - ramzanstartdate
var daydiffernece = Math.floor(lessthedates/(1000 * 60 * 60 * 24))
alert(daydiffernece +' days have been passed 1st ramadan')
*/

// Q10
/*
var startofdate = new Date('01-01-2023')
var currentdate = new Date()

var lessthe = currentdate - startofdate 
var passedsec = Math.floor(lessthe/(1000))
alert(passedsec)
*/

// Q11

// var currentdate = new Date()
// console.log(currentdate)
// backhour = currentdate.getHours()
// console.log(backhour-1 +' back Hour ago ')


// Q12
/*
var currentdate = new Date()
console.log(currentdate)

function subtractYears(date, years) {
    date.setFullYear(date.getFullYear() - years);
  
    return date;
}
var currentnow = subtractYears(new Date(),100)
console.log(currentnow)
*/

// Q13
/*
var age = +prompt('Your Age?');

var currentYear = new Date().getFullYear();

var birthYear = currentYear - age;

console.log("Your birth year is " + birthYear);
  */
 
// Q14
/*
var company = 'K-Electric Bill'
var name = 'TahirkHAN'
var duedate = new Date('09-19-2023')
var currentdate = new Date()
var currentmonth = new Date().getMonth()
var numberofunits = 410
var chargesofperunit = 16
var netpaybleamount = chargesofperunit * numberofunits
var latepaybleamount = 350
var gross = netpaybleamount + latepaybleamount

console.log( company)
console.log('Customer Name: '+name)
console.log('Month: '+ currentmonth)
console.log('Number of units: ' +numberofunits)
console.log('Charger per units: ' +chargesofperunit)
console.log('Net Amount Payable (within due date): ' + numberofunits * chargesofperunit)
console.log('Last Payment Surges is :' + latepaybleamount)
console.log('Gross Amount Paybale (after duedate) : '+ gross)

*/