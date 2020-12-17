/* 
6. Напишите функцию, которая принимает один аргумент - количество кофейных зерен.
    По условию - из 5 кофейных зерен можно сделать 1 чашку кофе.
    Если зерен на чашку кофе не хватает - попросите у пользователя еще.
    Верните количество чашек с кофе, которые можно сделать из того кол-ва зерен, что у вас уже имеется.
    Те зерна, которые остались должны быть учтены при следующей готовке
    
    Например:
    doCoffee(10)  return 2;  осталось зерен: 0
    doCoffee(4)    попросить еще зерна (например, 3)  return 1, осталось зерен: 2
    doCoffee(3)    return 1;
*/

var beans = 7;
var firstTime = true;
// напочатку бункер кавоварки пустий, в подальшому до залшку лолається кількість зерен які передані в параметрі
function doCoffee(f_beans){
    if (!firstTime)  {
        f_beans += beans;
    }
    firstTime = false;
    if(f_beans < 5) {
        console.log("Not enough Coffee beans, please add at least " + (5-f_beans) + " beans")
    }
    beans = f_beans % 5;
    console.log(beans + " coffee beans left");
    return Math.floor(f_beans / 5);
}

    doCoffee(3);
    console.log(doCoffee(3) + " caps of coffee has made");

