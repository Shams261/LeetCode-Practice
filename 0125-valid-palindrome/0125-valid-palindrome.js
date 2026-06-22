/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

//race - a - Car


    s = s.toLowerCase() // race - a - car
    let i =0
    let j = s.length-1
    while(i<j){
        if(!s[i].match(/[a-z0-9]/i)){
            i++
        }
        else if (!s[j].match(/[a-z0-9]/i)){
            j--
        }
        else if(s[i] === s[j]){
            i++
            j--
        }
        else{
            return false
        }
            
        
    }
    return true
    
};


// s = race - a - car
// i =0 (first index)
// j = s.length-1 (last index)

// if (s[i] === s[j])
//     i++
//     j--

//     s = race - a - car
//     i=r,j=r => i++ and j--
//     i=a,ja => i++,j--
//     i=c,jc,i++,j--
//     i=e ,j--,j--,j--
//     i=e,j=a, return false