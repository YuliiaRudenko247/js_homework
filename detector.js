let result = false && (false || true); 
console.log(result); // Ожидаемый результат: false


// Сначала выполняется часть (false || true), поскольку 
// оператор || имеет более высокий приоритет, чем оператор &&.
// false является ложным (falsy), а true — истинным (truthy) поэтому (false || true) будет true.
// Теперь false && true.
// Поскольку первый ложен, результатом выражения false && true будет false.
// Ожидаемый результат: false

