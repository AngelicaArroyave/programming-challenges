const SEARCH_MULTIPLES = [3, 5]

function main() {
    for (let i = 1; i <= 100; i++) {
        const validateMultiply3 = i % SEARCH_MULTIPLES[0] === 0
        const validateMultiply5 = i % SEARCH_MULTIPLES[1] === 0
    
        validateFirstForm(validateMultiply3, validateMultiply5, i)
        // validateFirstForm(validateMultiply3, validateMultiply5, i)
    }
}

function validateFirstForm(validateMultiply3, validateMultiply5, number) {
    if(validateMultiply3 && validateMultiply5) {
        console.log('fizzbuzz');
    } else if(validateMultiply3) {
        console.log('fizz');
    } else if(validateMultiply5) {
        console.log('buzz');
    } else console.log(number);
}

// En cuanto a complejidad es mejor este método
function validateSecondForm(validateMultiply3, validateMultiply5, number) {
    let information

    if(validateMultiply3) information += 'fizz'
    if(validateMultiply5) information += 'buzz'

    console.log(information || number);
}

main()