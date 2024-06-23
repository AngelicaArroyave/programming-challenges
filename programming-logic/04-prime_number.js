function main() {
    for(let i = 1; i <= 100; i++) {
        const message = validateNumber(i)
        console.log(`${i} ${message}`);
    }
}

function validateNumber(number) {
    let cont = 0

    for(let i = 1; i <= number; i++) {
        if(number % i === 0) cont++
    }

    if(cont === 2) return 'Es un número primo'

    return 'No es un número primo'
}

main()