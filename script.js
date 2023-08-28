let promise1 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    });
})
let promise2 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(-12);
    });
})

Promise.all([promise1, promise2])
.then((values) => {
    let sum = values.reduce((sum1, sum2) => sum1 + sum2);
    console.log(sum);
});

