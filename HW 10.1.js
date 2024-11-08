var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];


const emailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@((gmail\.com)|(yahoo\.com))$/; // Регулярний вираз
// для перевірки email


const trustedEmails = arr.filter(item => emailRegex.test(item.email)); // Фільтруємо масив, залишаючи
//  лише правильні email-адреси

console.log(trustedEmails);
