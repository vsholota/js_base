/*  
2.  Создать программу, выполняющую вставку элемента в массив после элемента, 
    значение которого укажет пользователь.
    
    Например, у вас есть массив:
    var cars = ["Mitsubishi", "Honda", "Toyota", "Suzuki", "Audi", "BMW", "Mercedes"];
    далее, пользователь вводит какое-то значение, которое вам необходимо найти в массиве выше (а точнее индекс элемента) 
    и после того элемента добавить какое-то значение (на ваше усмотрение) и потом все остальные данные
        Т.е. если изначально у нас есть массив как сверху, пользователь ввел Audi, вам необходимо в этом массиве, 
    после значения Audi вставить еще что то, к примеру, Pontiac
        В конечном счете, должен выйти следующий массив:
    ["Mitsubishi", "Honda", "Toyota", "Suzuki", "Audi", "Pontiac", "BMW", "Mercedes"];
    */

var arr=["Mitsubishi", "Honda", "Toyota", "Suzuki", "Audi", "BMW", "Mercedes"];
var elemAfter,myElement;

elemAfter = prompt('Введтіь елемент після якого ви хочете вставити новий елемент\nуже є:\n' + arr.join('\n') );
myElement = prompt('Введіть значеннч свого елементу');
console.log('Before: ' + arr);
if(arr.indexOf(elemAfter)>=0) {
    arr.splice(arr.indexOf(elemAfter)+1, 0, myElement);
}else {
    console.log('Немає такого елементу');
}
console.log('After: ' + arr);
