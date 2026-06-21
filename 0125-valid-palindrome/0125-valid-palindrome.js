/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    s = s.toLowerCase()

    let filteredString = ""
    let rev = ""
    for(let i=0;i<s.length;i++){
        if(s[i].match(/[a-z0-9]/i)){
            filteredString = filteredString + s[i]
            rev = s[i] + rev
        }
    }
    return filteredString===rev
    
};


//s =  " a man, a plan, a canal: Panama"

//convert all into the loxercase
//remove the space or alphanumeric char then reverse it and check whether it is palindrome or not 

// converting into the lowercase

// let filteredString = ""
// let rev= ""

//T = 0(n)
//s = o(n)

// filterredstring = aman
// rev = nama