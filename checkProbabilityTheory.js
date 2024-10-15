function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        let randomNum = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        if (randomNum % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    let totalCount = evenCount + oddCount;
    let evenPercentage = (evenCount / totalCount) * 100;
    let oddPercentage = (oddCount / totalCount) * 100;

    console.log("Кількість згенерованих чисел:", totalCount);
    console.log("Парних чисел:", evenCount);
    console.log("Не парних чисел:", oddCount);
    console.log("Відсоток парних:", evenPercentage.toFixed(2) + "%");
    console.log("Відсоток непарних:", oddPercentage.toFixed(2) + "%");
}


for (let i = 10; i <= 1000; i += 100) {
    console.log(`\nТест з count = ${i}:`);
    checkProbabilityTheory(i);
}
