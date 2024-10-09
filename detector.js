let result = false && true || true; 
console.log(result);


// Сначала выполняется часть false && true. Потому что  && 
// имеет более высокий приоритет, чем оператор ||.
// false является ложным (falsy).
// Если один ложен, результат  false && true будет false.
// Теперь у нас есть false || true.
// true является истинным (truthy).
// Поэтому false || true будет true.
// Ожидаемый результат: true

