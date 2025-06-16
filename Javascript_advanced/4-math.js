function divideBy(firstNumber) {
    return function (secondNumber){
        return secondNumber / firstNumber 
    }
}
function addBy(firstNumber) {
    return function (secondNumber){
        return secondNumber + firstNumber
    }
}
const addBy100 = addBy(100)
console.log(addBy100(20))
const divideBy10 = divideBy(10) 
console.log(divideBy10(20));
const divideBy100 = divideBy(100)
console.log(divideBy100(200))
const addBy1000 = addBy(1000)
console.log(addBy1000(20));