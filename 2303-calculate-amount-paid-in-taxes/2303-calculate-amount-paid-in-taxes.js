/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function(brackets, income){
    if (income === 0)return 0

    let totalTax= 0
    let prevUpper = 0

    for(let[upper,percentage] of brackets){
        let currentslablimit = Math.min(income,upper)

        let taxableAmount = currentslablimit - prevUpper

        if(taxableAmount < 0) break

        totalTax = totalTax + (taxableAmount * percentage) / 100 

        prevUpper = upper
    }
    return totalTax
    
};
