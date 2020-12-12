/* 
3.  Создать игру "Камень-Ножницы-Бумага".
        Выбор компьютера определяется строкой:  
        "var computerChoice = Math.random();
        alert(computerChoice);".
        Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера.
*/

// Функція повертає випадкове число в проміжку від 1 до n
function randomNum(n){
    return Math.floor(Math.random() * n + 1);
}

function gameSSP(){
    switch (randomNum(3)){
        case 1: alert('Камінь'); break;
        case 2: alert('Ножиці'); break;
        case 3: alert('Бумага'); break;
    }
}

gameSSP()
