/* 
 3.    Создать массив, который будет хранить в себе информацию о сотрудниках предприятия. Каждый элемент масива — объект,
       содержащий свойства: name, sName, age, occupation, и метод show, который выводит всю информацию о пользователе.
       Реализовать заполнение массива пользователем. По окончанию заполнения — вывести информацию о сотрудниках.
*/

var staff = [];
var value;

do {
    let employee = {
        name: null,
        sName: null, 
        age: null, 
        occupation: null, 
        show: function () {
            console.log("Name: " + this.name);
            console.log("Second name: " + this.sName);
            console.log("Age: " + this.age);
            console.log("Occupation: " + this.occupation);
        }
    };    
    value = prompt("Enter name");
    if (value) employee.name = value; 
    else break;
    value = prompt("Enter second name");
    if (value) employee.sName = value; 
    else break;
    value = +prompt("Enter age");
    if (value) employee.age = value; 
    else break;
    value = prompt("Enter occupation");
    if (value) employee.occupation = value; 
    else break;
    staff.push(employee);
    
} while(value)

console.log("List of staff:");
for(let i = 0; i < staff.length; i++){
    console.log("\nEmployee " + (i+1));
    staff[i].show();
}

console.log(staff);