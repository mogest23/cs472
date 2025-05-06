// const isPrime = (n: number) => {
//     for (let i = 2, s = Math.sqrt(n); i <= s; i++)
//     if (n % i === 0) return false;
//     return n > 1;
//    };

// Async format
const isPrime = (n) => {
    return new Promise((resolve, reject) => {
        if (n <= 1) {
            reject({ prime: false });
            return;
        }

        for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
            if (n % i === 0) {
                reject({ prime: false });
                return;
            }
        }

        resolve({ prime: true });
    })
};

// console.log('start');
// isPrime(7)
//     .then(console.log)
//     .catch(console.error);
// console.log('end');

// Async format with try catch
console.log("start");
(async () => {
    try {
        const result = await isPrime(7);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
})();
console.log("end");