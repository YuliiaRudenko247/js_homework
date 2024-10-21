var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
}; // створили об'єкт який має послуги та їх вартість

// Додаємо нову "послугу" в обʼєкт послуги services
services['Розбити скло'] = "200 грн";

// Перший метод - Метод, який обчислює та повертає загальну вартість "наданих послуг"
// Для цього ми перебираємо всі властивості об'єкта і сумуємо їх вартість.
services.price = function() {
    let total = 0;
    for (let key in this) {
        if (typeof this[key] === "string") {
            total += parseInt(this[key]); // Преобразовуємо значення в число
        }
    }
    return total + " грн";
};

// Другий - Метод, який повертає мінімальний price
// знаходить мінімальну вартість серед послуг, збираючи всі ціни в масив і використовуючи функцію Math.min().
services.minPrice = function() {
    let prices = [];
    for (let key in this) {
        if (typeof this[key] === "string") {
            prices.push(parseInt(this[key])); // Збираємо ціни в масив
        }
    }
    return Math.min(...prices) + " грн"; // Знаходимо мінімальне значення
};

// Третій - Метод, який повертає максимальний price, як і в попередньому
services.maxPrice = function() {
    let prices = [];
    for (let key in this) {
        if (typeof this[key] === "string") {
            prices.push(parseInt(this[key])); // Збираємо ціни в масив
        }
    }
    return Math.max(...prices) + " грн"; // Знаходимо максимальне значення
};

console.log("Загальна вартість послуг:", services.price()); // загальна вартість : стрижка 60, гоління 80, миття 100, розб скло 200 = 440 грн
console.log("Мінімальна вартість послуг:", services.minPrice()); //  мінімальна вартість : в нашому випадку минімальна вартість це стрижка за 60 грн
console.log("Максимальна вартість послуг:", services.maxPrice()); //  максимальна вартість : ще розбите скло 200 грн
