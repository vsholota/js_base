/* 
Task 3:
             Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
            «Включительно» означает, что значение переменной age может быть равно 14 или 90. 
            Значение вводит пользователь
*/

var age;
age = prompt("Enter your age");
if(age>13 && age<91) alert("Your age is correct");
else alert("Your age is not correct");