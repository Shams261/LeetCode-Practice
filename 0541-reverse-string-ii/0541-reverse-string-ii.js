/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {

    s = s.split("") // splitted into array

    for(let x = 0 ; x < s.length ; x = x +(2*k)){ // traversing in 2k block size

        let n = Math.min(k,s.length-x) // (3,4) =>3
        let mid = Math.floor(n/2)
        for(let i=0; i<mid;i++){
            let temp = s[x+i]
            s[x+i] = s[x+n-1-i]
            s[x+n-1-i] = temp
        }
    }
    return s.join("")
    
};


// i/p :  "abcdefghij"

// k=3 : 2k =6 

// blcok 1 = a b c d e f g h i j => c b a d e f 
//         0 1 2 3 4 5 6 7 8 9

//  o / p : block =2 : c b a d e f i h g j

// 0 :
// 2k :
// 4k 
// x=0 
// x. = x+ 2* k