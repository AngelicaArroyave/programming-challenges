function validatePalindrome(text) {
    let cleanText = text.trim().toLowerCase()
    cleanText = cleanText.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z]/g, '')
    const reversedText = cleanText.split('').reverse().join('')
    
    return cleanText === reversedText
}

console.log(validatePalindrome('Ana lleva al oso la avellana'))
console.log(validatePalindrome('Ana lleva al oso y la tortuga'))