/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let n = nums.length
    let left = 0
    let right = n-1
    let ans=[-1,-1]
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(nums[mid] === target){
            ans[0] = mid
            right = mid-1
        }else if(nums[mid] < target){
            left = mid+1
        }else{
            right = mid-1
        }
    }
    left =0
    right =n-1
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(nums[mid] === target){
            ans[1] = mid
            left = mid+1
        }else if(nums[mid] < target){
            left = mid+1
        }else{
            right = mid-1
        }
    }
    return ans
};


// nums=[4,6,7,8,8,2,9] => target = 8
//       0 1 2 3 4 5 6

//     o/p: [1,4]

//     if there is none then will have to return the [-1,-1]


// nums= [4,6,7,8,8,2,9]
//        0 1 2 3 4 5 6
// left = 0
// right = 6
// ans = [-1,-1]
// mid = 3 => 8
// left =0,right =2
// mid=1>6

