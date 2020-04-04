const foo = (data, callback) => {
    setTimeout(() => {
        const d = {
            'name': 'Hemant',
            'LName': 'Kumar'
        };
        callback(d);
    }, 2000);
}

foo('ok', (d) => {
    console.log(d);
})

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (a, b, callback) => {
    const d = a + b
    setTimeout(() => callback(d), 2000);
}


add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
});



