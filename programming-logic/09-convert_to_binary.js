function convert(number) {
    let copyNumber = number
    let binary = ""

    while (copyNumber != 0) {
        binary += `${parseInt(copyNumber % 2)}`
        copyNumber = Math.floor(copyNumber / 2)
    }

    return binary.split("").reverse().join("")
}

console.log(convert(20))