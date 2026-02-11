/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let cnt = 0
    let max_cnt= 0
    for (let i =0;i<nums.length;i++){
        if(nums[i] ===1){
            cnt = cnt + 1
            max_cnt = Math.max(max_cnt,cnt)
        }else{
            cnt = 0
        }
    }
    return max_cnt
    
};