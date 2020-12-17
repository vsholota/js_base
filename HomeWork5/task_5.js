/* 
    5. Для задания 3 создать метод, позволяющий отсортировать массив сотрудников по одному из свойств: name, sName, age, occupation, salary.
       Параметр для сортировки принимается от пользователя.
       После выполнения функции — вывести информацию о сотрудниках.

*/
/* 
function randomName(len){
    let arr = [];
    for(i=0; i<len; i++)  arr.push(Math.floor(Math.random()*50+65));
    return String.fromCharCode(...arr);
}
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
staff.sortByFld = function (field){
    this.sort((a, b) => a[field] > b[field] ? 1 : -1);
}
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
/* 
    employee.name = randomName(5);
    employee.sName = randomName(7);
    employee.age = Math.floor(Math.random()*50+18);
*/  
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
staff.sortByFld("name");

console.log("List of staff:");
for(let i = 0; i < staff.length; i++){
    console.log("\nEmployee " + (i+1));
    staff[i].show();
}

console.log(staff);
