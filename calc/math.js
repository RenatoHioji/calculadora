export function sum(total, number){
    return total += number;
}
export function subtract(total, number){
    return total-number;
}
export function multiply(total, number){
    return total*number;
}

export function divide(total, number){
    if (number === 0) {
        return 0; 
    }
    return total/number;
}