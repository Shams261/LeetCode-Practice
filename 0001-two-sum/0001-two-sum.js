/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let n= nums.length
    let map={}
    for(let i=0;i<n;i++){
        map[nums[i]]=i
    for(let i=0;i<n;i++){
        let diff = target - nums[i]
            if(diff in map && map[diff] !==i){
                return [i,map[diff]]
            }
        }
    }
};