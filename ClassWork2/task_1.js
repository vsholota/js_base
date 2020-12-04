/* 
        Task 1:
            Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
            1, если значение больше нуля,
            -1, если значение меньше нуля,
            0, если значение равно нулю.
            Предполагается, что пользователь вводит только числа.
*/

var inputVal, alertVal;

inputVal = +prompt("Enter number");
if(inputVal>0) alertVal = 1;
else if(inputVal<0) alertVal = -1;
else alertVal = 0;

alert(alertVal);