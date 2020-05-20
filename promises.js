const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([2, 3, 4]);
    }, 2000);
})

doWorkPromise.then(() => {
    console.log("oh !! it was success");
})
