/* 
 2. Обменять значения двух переменных, используя третью (буферную) переменную.
*/
console.log('\n\ntask 2\n');

var a,b,c;
a = 'First';
b = 'Second';

console.log ('Before\na = '+a+'\nb = '+b);
c=b; b=a; a=c;
console.log ('After\na = '+a+'\nb = '+b);
