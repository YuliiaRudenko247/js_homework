// Створюємо об'єкт з трьома властивостями
var obj = {
    title: "Я бачу, вас цікавить пітьма",
    author: "Илларіон Павлюк",
    year: 2020,
    

    getInfo: function() {
        for (var key in this) {
            if (typeof this[key] !== "function") { // Перевірка, що не є методом
                console.log(key + ": " + this[key]); // Вивід ключа та значення
            }
        }
    }
};

// + нові властивісті
obj.newProperty = "Це нова властивість!";
obj.genre = "Психологічний трилер з елементами містики";
obj.publisher = "Видавництво СТАРОГО ЛЕВА";
obj.pages = 350;
obj.summary = "Це захоплююча історія, що досліджує внутрішні переживання героїв та теми страху, самопізнання і темряви в людині.";


obj.getInfo(); //  Виводить всі властивості : title, author, year, genre, publisher


