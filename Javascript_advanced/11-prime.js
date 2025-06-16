function countPrimeNumbers() {
    let count = 0

    for (let i = 2; i <= 100; i++) {
        let isPrime = true
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false
                break
            }
        }
        if (isPrime) {
            count += 1
        }
    }
    return count
}
setTimeout(() => {
    let before = performance.now()
    for (let k = 0; k < 100; k++){
    countPrimeNumbers()
}
    let after = performance.now()
     console.log(`Execution time of calculating prime numbers 100 times was ${after - before} milliseconds.`)
}, 0)