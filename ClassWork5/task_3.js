/* 
3. Проверьте, классифицировано ли значение как логический примитив. Верните true или false.
*/

function booWho(bool) {
    return (typeof(bool) === 'boolean') ? true: false;
}
console.log(booWho(false));   