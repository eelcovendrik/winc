for (let i = 0; i <= 20; i++) {
    console.log(`Is ${i} even or odd?`);
    remainder = i % 2;
    if (remainder == 0) {
        console.log(i + ' is even');
    } else {
        console.log(i + ' is odd');
    };
}
