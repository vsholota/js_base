/*  
2.  Создать программу, выполняющую вставку элемента в массив после элемента, 
    значение которого укажет пользователь.
*/

var arr=['Element 1','Element 2','Element 3','Element 4'];
var elem;

elem = prompt('Введтіь номер після якого ви хочете вставити новий елемент\nуже є:\n' + arr.join('\n') );
arr.splice(elem, 0, 'myElement');
console.log(arr);
