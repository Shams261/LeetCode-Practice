/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    let newSet = new Set()
    for(let i=0; i<nums.length;i++){
        if(newSet.has(nums[i])){
            return true
        }else{
            newSet.add(nums[i])
        }
    }
    return false
    
    
};


// nums = [6,7,2,8,6]

// true  = duplicates
// false = no duplicates

// new set = new set()
// 6,7,2,
// return true 
// o(n) o(n)