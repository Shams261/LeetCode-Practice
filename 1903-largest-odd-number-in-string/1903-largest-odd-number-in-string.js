/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    
    let n= num.length - 1
    while(n>=0){
        if(Number(num[n]) % 2 === 1){
            return num.substring(0,n+1)
        }
        n--
    }
    return ""
};


// num = "54678"

// num = " 678320"

// num[i] % 2 === 1 : Odd 

// num.substring(0,num)

// (0,4) => 0,1,2,3 > 6783