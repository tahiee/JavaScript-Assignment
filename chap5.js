var num1 = 5
var num2 = 3
var sum = num1 + num2 

document.getElementById('demo').innerHTML = ('The Sum of\n' + num1 + '\nand\n' + num2 + '\nis\n' + sum)
// console.log('The Sum of' + num1 + 'and' + num2 + 'is' + sum)

var num1 = 5
var num2 = 3
var num3 = 4
var num4 = 2
var subtract = num1 - num2 
var multiply = subtract * num3 
var disivion = multiply / num4 
document.getElementById('demo2').innerHTML = ('The Subtract of\n' + num1 + '\nand\n' + num2 + '\nis\n' + subtract + '\nand' + '\nmultiply\n' + multiply + '\nand\n' + 'division\n' + disivion )


document.getElementById('demo3').innerHTML = ('Value after Variable declaration is undefined')
var initial = 5 
initial++
document.getElementById('demo4').innerHTML = ('Value after incerenment is :\n' + initial )
var num5 = 7
var sum2 = initial + num5
document.getElementById('demo5').innerHTML = ('Value after addicition is :\n' + sum2 )
sum2--
document.getElementById('demo6').innerHTML = ('Value after addicition is :\n' + sum2-- )
var num6 = 3
var sum3 = num6 / sum2--
document.getElementById('demo7').innerHTML = ('The Reminder is :\n' + sum3 )


var num7 = 5
var num8 = 600
var sum4 = num7 * num8
document.getElementById('demo8').innerHTML = ('Total Cost to buy 5 Tickets to a movie is ' + sum4 + 'PKR' )


document.getElementById('demo9').innerHTML = ('Table of 4')
var num9 = 4
var multi = num9 * 1 
document.getElementById('demo10').innerHTML = ('4x1 =\n' + multi)
var multi2 = num9 * 2
document.getElementById('demo11').innerHTML = ('4x2 =\n' + multi2)
var multi3 = num9 * 3
document.getElementById('demo12').innerHTML = ('4x3 =\n' + multi3)
var multi4 = num9 * 4
document.getElementById('demo13').innerHTML = ('4x4 =\n' + multi4)
var multi5 = num9 * 5
document.getElementById('demo14').innerHTML = ('4x5 =\n' + multi5)
var multi6 = num9 * 6
document.getElementById('demo15').innerHTML = ('4x6 =\n' + multi6)
var multi7 = num9 * 7
document.getElementById('demo16').innerHTML = ('4x7 =\n' + multi7)
var multi8 = num9 * 8
document.getElementById('demo17').innerHTML = ('4x8 =\n' + multi8)
var multi9 = num9 * 9
document.getElementById('demo18').innerHTML = ('4x9 =\n' + multi9)
var multi10 = num9 * 10
document.getElementById('demo19').innerHTML = ('4x10 =\n' + multi10)


var fan = 77
var temp1 = fan - 32 
var temp2 = 5 / 9 
var temp3 =  temp1 * temp2
document.getElementById('Temp').innerHTML = ( temp3 + '<sup>0</sup>' + 'C' + '\nis\n' + fan + '<sup>0</sup>' + "F"  )

var cel = 21.1
var multix = 9 / 5
var temp4 = cel * 9 / 5
var plus5 = 32
var temp6 =  temp4 + plus5
document.getElementById('cel1').innerHTML = ( temp6 + '<sup>0</sup>' + 'F' + '\nis\n' + cel + '<sup>0</sup>' + "C"  )

document.getElementById('shopping').innerHTML = ('Shopping Cart')

var itemprice1 = 650
document.getElementById('p1').innerHTML = ('Price of Item 1 is\n' + itemprice1)
var quantity1 = 3
document.getElementById('q1').innerHTML = ('Quantity of Item 1 is\n' + quantity1)
var total = itemprice1 * quantity1

var itemprice2 = 100
document.getElementById('p2').innerHTML = ('Price of Item 2 is\n' + itemprice2)
var quantity2 = 7
document.getElementById('q2').innerHTML = ('Quantity of Item 2 is\n' + quantity2)
var total2 = itemprice2 * quantity2


document.getElementById('shipping').innerHTML = ('Shipping Charges is\n 100')
var shipping = 100

var final = total + total2 + shipping
document.getElementById('total3').innerHTML = ('Total Order of your Cost is\n' + final )


document.getElementById('Marks').innerHTML = ('8: Marks Sheet')

var marks = 980
var obtained = 804
document.getElementById('tmarks').innerHTML = ('Total Marks is \n 980')
document.getElementById('obt').innerHTML = ('Obtanined Mark is \n 840')
var totalmarks = obtained / marks 
var totalper = totalmarks * 100
document.getElementById('Per').innerHTML = ('Percentage is:\n' + totalper + '%' )

document.getElementById('Currency').innerHTML = (' 9: Currency in PKR')
var usdollar = 104.80 * 10
var sar = 25 * 28
var combine = usdollar + sar
document.getElementById('totalc').innerHTML = ('Total Currency in PKR:\n' + combine)

var program = 5 * 10 / 2
document.getElementById('Pro').innerHTML = ('10: Program intlize values is:\n' + program )


document.getElementById('DOB').innerHTML = ('11: Age Calculator')
var CurrentYear = 2016
var BirthYear = 1992
var Age = CurrentYear - BirthYear
document.getElementById('result').innerHTML = ('Your age is\n' + Age )

document.getElementById('geo').innerHTML = ('12: The Geometrizer' )
var Radiouscircle = 10
document.getElementById('circle').innerHTML = ('Radious of circle is : 10' )
var thecircum = 125.699999999999
document.getElementById('circum').innerHTML = ('The Circumference is : 125.67999999999999' )
var areais = Radiouscircle * thecircum
document.getElementById('area').innerHTML = ('The area is :' + areais )

document.getElementById('chocla').innerHTML = ('13: The Lifetime Supply Calculator' )
var currectage = 15
document.getElementById('age').innerHTML = ('Current age is : 15')
var maxage = 65
document.getElementById('maxage').innerHTML = ('The Max age is : 65' )
var snackperday = 3
document.getElementById('snack').innerHTML = ('The Snack Per day : 3' )
var actual = 50
var totalcholcate = snackperday * actual
document.getElementById('resultchocho').innerHTML = ('you will need\n ' + totalcholcate + '\nchoclate snack to the last you untill the ripe old age of ' + maxage  )