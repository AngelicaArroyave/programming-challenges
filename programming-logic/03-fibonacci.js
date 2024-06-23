function main() {
    let num1 = 0
    let num2 = 1
    let aux = 0

    console.log(num1)
    console.log(num2)
    
    for(let i  = 1; i <= 10; i++) {
        aux = num1 + num2
        num1 = num2
        num2 = aux
        console.log(aux)
    }
}

main()