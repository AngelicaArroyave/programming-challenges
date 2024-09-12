function deleteCharacters(str1, str2) {
    let out1 = str1.split('').filter(char => !str2.includes(char))
    let out2 = str2.split('').filter(char => !str1.includes(char))

    return [out1.join(''), out2.join('')]
}

console.log(deleteCharacters('hola', 'mundo'))
console.log(deleteCharacters('und', 'hola'))