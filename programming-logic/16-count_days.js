const DATE_1 = '01/01/2022'
const DATE_2 = '01/01/2023'

function validateDate(date) {
    return (/[a-zA-Z]/g).test(date)
}

function test(date1, date2) {
    if(validateDate(date1)) return 'Invalid date'
    if(validateDate(date2)) return 'Invalid date'

    let newDate1 = new Date(date1)
    let newDate2 = new Date(date2)
    
    return Math.abs(newDate2.getTime() - newDate1.getTime()) / (1000 * 60 * 60 * 24)
}

const result = test(DATE_1, DATE_2)
console.log(result)
console.log(typeof result)