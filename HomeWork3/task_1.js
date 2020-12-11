/*  
    1. Сделать собственные примеры методов применяемых для массивов.
*/

// Модель роботи черги
var newElem;
var myQueue = [];
//myQueue.length=5;
do{
    newElem = prompt('Введіть новий елемент\nЧерга на 5 елементів, зараз в черзі:\n' + myQueue.join('\n'));
    if(newElem === null) break; 
    myQueue.push(newElem);    
    if(myQueue.length > 5){
        myQueue.shift();
    }
}
while(newElem)
console.log(myQueue);

// Видалити з черги 3-ій елемент
console.log('Черга до: ' + myQueue);
myQueue.splice(2,1);
console.log('Черга після: ' + myQueue);

// Вставити на місце 2-го елента два інших з значеннями 0
console.log('Черга до: ' + myQueue);
myQueue.splice(1,1,0,0);
console.log('Черга після: ' + myQueue);

// Переставити останній елмент на початок масива без використання індексів
myQueue.unshift(myQueue.pop());
console.log(myQueue);

// Повернути усі елементи починаючи з 3-го
console.log(myQueue.slice(2,));

//Відсортувати числовий масив
console.log('Matrix befor ' + myQueue);
myQueue.sort((a,b) => a-b);
console.log('Matrix after sort ' + myQueue);

//Переписати масив останній -> перший
myQueue.reverse();
console.log('Matrix after reverse ' + myQueue);

