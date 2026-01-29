/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let firstLargest = -1;
    let secLargest = -1;

    for (let i = 0; i < s.length; i++) {
  
        if (s[i] >= '0' && s[i] <= '9') {
            let val = parseInt(s[i], 10);

           
            if (val > firstLargest) {
                secLargest = firstLargest;
                firstLargest = val;
            } else if (val < firstLargest && val > secLargest) {
                secLargest = val;
            }
        }
    }
    
    return secLargest;
};