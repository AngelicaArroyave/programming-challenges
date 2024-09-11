const WORD = 'Hola mundo'

// Solución con métodos propios del lenguaje
// Forma 1
function withMethodsForm1() {
    let reverse = WORD.split('').reverse().join('')
    console.log(`La palabra ${WORD} invertida es ${reverse}`)
}

function withMethodsForm2() {
    let reverse = []
    
    for(let i = 0; i < WORD.length; i++) {
        reverse.unshift(WORD.charAt(i))
    }

    const newWord = reverse.join('')
    console.log(`La palabra ${WORD} invertida es ${newWord}`)
}

// Solución sin métodos propios del lenguaje
function withOutMethods() {
    let reverse = ''
    
    for(let i = WORD.length; i >= 0; i--) {
        reverse += WORD.charAt(i)
    }

    console.log(`La palabra ${WORD} invertida es ${reverse}`)
}

withMethodsForm1()
withMethodsForm2()
withOutMethods()