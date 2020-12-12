/* 
2. Создать функцию, возводящую число в степень, число и сама степень вводится пользователем
*/

function pow(a,p){
   return (p<1) ? 1 : pow(a,p-1) * a; 
}

let a;
let p;
a = +prompt("Enter a number");
p = +prompt("Enter the power")
console.log(pow(a,p));