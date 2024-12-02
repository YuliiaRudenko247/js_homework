const regex = /^[^aA]{6,}$/;

console.log(regex.test("Wonderful"));  // true
console.log(regex.test("Joyful"));     // true
console.log(regex.test("Happiness"));  // false
console.log(regex.test("Time"));       // false
console.log(regex.test("Task"));       // false
console.log(regex.test("Apple"));      // false