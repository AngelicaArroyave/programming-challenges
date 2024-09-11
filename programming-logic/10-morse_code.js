const DICTIONARY = {
    'A': '.-',      'B': '-...',    'C': '-.-.',    'CH': '----',
    'D': '-..',     'E': '.',       'F': '..-.',    'G': '--.',
    'H': '....',    'I': '..',      'J': '.---',    'K': '-.-',
    'L': '.-..',    'M': '--',      'N': '-.',      'Ñ': '--.--',
    'O': '---',     'P': '.--.',    'Q': '--.-',    'R': '.-.',
    'S': '...',     'T': '-',       'U': '..-',     'V': '...-',
    'W': '.--',     'X': '-..-',    'Y': '-.--',    'Z': '--..',
    '0': '-----',   '1': '.----',   '2': '..---',   '3': '...--',
    '4': '....-',   '5': '.....',   '6': '-....',   '7': '--...',
    '8': '---..',   '9': '----.',   '.': '.-.-.-',  ',': '--..--',
    '?': '..--..',  '"': '.-..-.',  '/': '-..-.'
}

function validateInformation(chain) {
    chain = chain.toUpperCase()

    if (/[A-Za-z]/.test(chain)) return transformToMorseCode(chain)
    return transformToChain(chain)
}

function transformToMorseCode(chain) {
    let morseCode = ''

    for (const element of chain) {
        const result = DICTIONARY[element]
        morseCode += (typeof result === 'undefined') ? ' ' : result
    }
    
    return morseCode
}

function transformToChain(morseCode) {
    let chain = ''
    morseCode = morseCode.split(' ')

    for (const element of morseCode) {
        chain += Object.keys(DICTIONARY).find(key => DICTIONARY[key] === element)
    }
    
    return chain
}

console.log(validateInformation('Hello world'))
console.log(validateInformation('.... . .-.. .-.. ---'))