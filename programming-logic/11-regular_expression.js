const REGULAR_EXPRESSION = { '{': '}', '[': ']', '(': ')' }

function searchFor(expression) {
    let expressionOpen = []
    let expressionClose = []

    for (const element of expression) {
        expressionOpen.push(Object.keys(REGULAR_EXPRESSION).find(key => REGULAR_EXPRESSION[key] === element))
        expressionClose.push(REGULAR_EXPRESSION[element])
    }

    return [clearExpressions(expressionOpen), clearExpressions(expressionClose)]
}

function clearExpressions(expressions) {
    return expressions.filter(element => element !== undefined)
}

function isValidExpression(expression) {
    const [expressionOpen, expressionClose] = searchFor(expression)
    return expressionOpen.length === expressionClose.length
}

console.log(isValidExpression('{ [ a * ( c + d ) ] - 5 }'))
console.log(isValidExpression('{ a * ( c + d ) ] - 5 }'))