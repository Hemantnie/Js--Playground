// const doWork = () => {

// }

// console.log(doWork());

const doWork = async () => {
    return 'Hemant'
    // throw new Error('Some thing is wrong')
}

console.log(doWork());

doWork().then((res) => {
    console.log('Result', res);
}).catch(e => {
    console.log('Err', e);

})


const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    });
}

const someWork = async () => {
    const v = await add(1 + 99);

}


