let result = (+null == false) < 1 ** 5; 
console.log(result); 

// +null преобразует null в число, результат будет 0.
// 0 == false равно true.
// 1 ** 5, что равно 1.
// true < 1.
// 1 < 1, что возвращает false.
// Ожидаемый результат: false
