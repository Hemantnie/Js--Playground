function foo() {
    setTimeout(() => {
        console.log('Time Out is over');
    }, 10);
}

async function main() {
    await foo();
    console.log('I am late');
}

main();