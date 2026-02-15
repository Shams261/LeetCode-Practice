/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = 0
    let sumOfN=0
    let res
    for(let i=0;i<nums.length;i++){
        sum = sum + nums[i]
        sumOfN = Math.floor((nums.length*(nums.length+1)) / 2)
        res = sumOfN - sum
    }
    return res
    
};