/* 
    4. Для предыдущего задания создайте функцию, которая будет принимать в себя массив объектов-сотрудников, и каждому из объектов
       будет добавлять новое свойство "salary", хранящее зарплату сотрудника. 
       Зарплата расчитывается, исходя из значения свойства "occupation" следующим образом:
           • "director" — 3000;
           • "manager" — 1500;
           • "programmer" — 2000;
           • для остальных значений — 1000.
       После выполнения функции — вывести информацию о сотрудниках.

*/

function addSalary(arr){
    for(i = 0; i < arr.length; i++){
        switch(arr[i].occupation) {
            case "director": arr[i].salary = 3000; break;
            case "manager": arr[i].salary = 1500; break;
            case "programmer": arr[i].salary = 2000; break;
            default: arr[i].salary = 1000;
        }
    }
}

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
            console.log("Salary: " + this.salary);
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
    value = prompt("Enter occupation:\ndirector\nmanager\nprogrammer\nother ...");
    if (value) employee.occupation = value; 
    else break;
    staff.push(employee);
    
} while(value)

addSalary(staff);
console.log("List of staff:");
for(let i = 0; i < staff.length; i++){
    console.log("\nEmployee " + (i+1));
    staff[i].show();
}

console.log(staff);