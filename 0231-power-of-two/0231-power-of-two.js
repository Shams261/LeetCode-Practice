/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n <=0) return false
    let power = 1
    while(power < n){
         power = power *2
    }
    return power === n
    
};