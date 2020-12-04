/* 
4. Дано два числа A и B где (A<B). 
    Выведите на экран суму всех чисел расположенных в числовом промежутке от А до В. 
    Выведите на экран все нечетные значения, расположенные в числовом промежутке от А до В.   
*/

// Я вважаю що для будь якого Х Є (А;В) справедливо А > X > В

var i,j,sumVal=0;
const A = 11 , B = 20;

for(i=A+1; i<B; i++)
    {
        sumVal += i; 
    }
console.log('Sum of Numerical Interval between '+A+' and '+B+' =',sumVal);

console.log('Odd Digits of Numerical Interval between '+A+' and '+B+' :');
for(i=A+1+A%2,j=1;i<B;i+=2,j++)
{
    console.log('Digit ' + j + ' = ' + i);
}