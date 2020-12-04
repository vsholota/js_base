/* 
 4. Получить от пользователя данные о пользователе: имя, фамилию, возраст. Обработать их и вывести на экран.
*/

console.log('\n\ntask 4\n');
var firstName,lastName,age;
firstName = prompt('Enter your first name');
lastName = prompt('Enter your last name');
age = prompt('Enter your age');

console.log(firstName+' '+lastName+' is '+age+' years');
document.write(firstName+' '+lastName+' is '+age+' years');