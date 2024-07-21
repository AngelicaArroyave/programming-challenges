const PHRASE = 'Hola, mi nombre es Angie. Mi nombre completo es Angie Arias'
let cleanPhrase = PHRASE.replace(/[^\w\s]|_/g, '').toLowerCase().split(' ')
let cont = 0
let response = []

// Solución con métodos propios del lenguaje
function withMethods() {
    for(let i = 0; i < cleanPhrase.length; i++) {
        let result = cleanPhrase.filter(word => word === cleanPhrase[i])
        response.push(`${cleanPhrase[i]}: ${result.length}`)
    }

    return printResult(response)
}

// Solución sin métodos propios del lenguaje
function withOutMethods() {
    for(let i = 0; i < cleanPhrase.length; i++) {
        for(let j = 0; j < cleanPhrase.length; j++) {
            if(cleanPhrase[i] === cleanPhrase[j]) cont++
        }
    
        response.push(`${cleanPhrase[i]}: ${cont}`)
        cont = 0
    }
    return printResult(response)
}

function printResult(response) {
    return response.filter((chain, index) => response.indexOf(chain) === index)
}

const resultWithOutMethods = withOutMethods()
console.log(resultWithOutMethods);
response = []

const resultWithMethods = withMethods()
console.log(resultWithMethods);