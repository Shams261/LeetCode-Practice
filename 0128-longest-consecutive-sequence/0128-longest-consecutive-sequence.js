/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    let set = new Set(nums)
    let maxLength = 0

    for(let num of set){
        if(!set.has(num-1)){
            let currentNum = num
            let currentLength = 1

            while(set.has(currentNum+1)){
                currentNum++
                currentLength++
            }
            maxLength = Math.max(maxLength,currentLength)
        }
    }
    return maxLength
    
};

// nums = [400,2,8,1,99,3]
// consecutive seq = 1>2>3 : 3

// set = {400,2,8,1,99,3}

// start = num-1 => 399
// num+1 = 401
// cueer = 3
