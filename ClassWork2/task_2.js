/* 
        Task 2:
            Перепишите if..else с использованием нескольких операторов '?'.
            Для читаемости рекомендуется разбить код на несколько строк.
            let message;
            if (login == 'Сотрудник') {
                message = 'Привет';
            } else if (login == 'Директор') {
                message = 'Здравствуйте';
            } else if (login == '') {
                message = 'Нет логина';
            } else {
                message = '';
            }
*/
var login;
login = prompt("Enter login:");

message = (login == 'Сотрудник') ? 'Привет':
    (login == 'Директор') ? 'Здравствуйте':
    (login == '') ? 'Нет логина':'';

console.log(message);
