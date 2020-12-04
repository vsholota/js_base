/* 
 2. Построить прямоугольный треугольник состоящий из символа "*".
*/

var i,j, str, strEnd='*';
const N=10;

console.log('*');
document.write('*<br/>');
for(i=1;i<N-1;i++)
{   str = '*';
    document.write('*');
    for(j=1;j<i;j++)
    {
        str += '  ';
        document.write('&nbsp&nbsp&nbsp'); 
    }
    console.log(str + '*');
    document.write('&nbsp*<br/>');
    strEnd += ' *'; 
}
console.log(strEnd);
document.write(strEnd+'&nbsp*');