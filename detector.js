let result = 5 && "qwerty";
console.log(result);

// Первое значение: 5 — это число и оно считается "истинным", поэтому мы продолжаем к следующему значению.
// Второе значение: "qwerty" — это непустая строка, которая также считается "истинной".
// Оба значения "истинные", && возвращает последнее значение, то есть "qwerty".
// Ожидаемый результат: "qwerty".