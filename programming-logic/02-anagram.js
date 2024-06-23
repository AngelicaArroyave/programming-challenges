const wordOne = 'Llenaba'
const wordTwo = 'Ballena'

function main() {
    const sortWordOne = sortWord(wordOne)
    const sortWordTwo = sortWord(wordTwo)
    const validation = sortWordOne.includes(sortWordTwo)
    console.log('Validation:', validation)
}

function sortWord(word) {
    const text = word.toLowerCase().split('').sort()

    return text.join('')
}

main()