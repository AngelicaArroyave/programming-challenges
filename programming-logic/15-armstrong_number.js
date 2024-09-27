const NUMBER = 153

function isArmstrongNumber(number) {
    number = String(number)
    const size = number.length
    let result = 0

    for(let i = 0; i < size; i++) {
        result += Math.pow(Number(number[i]), size)
    }
    
    return result === Number(number)
}

function printResult(result) {
    if (result) {
        console.log(`${NUMBER} is an Armstrong number`)
        return
    }
    
    console.log(`${NUMBER} is not an Armstrong number`)
}

printResult(isArmstrongNumber(NUMBER))