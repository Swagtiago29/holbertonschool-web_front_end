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
    console.log(count)
    return count
}
t0 = performance.now()
numbers = countPrimeNumbers()
t1 = performance.now()
console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`)