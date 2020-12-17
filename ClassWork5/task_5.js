/* 
5. Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
*/

var user = {};

function isEmpty(obj){
    return Object.keys(obj).length === 0 ? true : false;
}


console.log(isEmpty(user));