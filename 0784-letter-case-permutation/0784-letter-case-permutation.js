/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    
    let result = []

    function backtrack(index, path) {
        // base case
        if (index === s.length) {
            result.push(path)
            return
        }

        let char = s[index]

        // check if digit
        if (!isNaN(char)) {
            // sirf ek choice
            backtrack(index + 1, path + char)
        } else {
            // lowercase
            backtrack(index + 1, path + char.toLowerCase())

            // uppercase
            backtrack(index + 1, path + char.toUpperCase())
        }
    }

    backtrack(0, "")
    return result
};