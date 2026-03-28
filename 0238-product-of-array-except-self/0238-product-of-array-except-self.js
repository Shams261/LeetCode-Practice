/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length
    let left = new Array(n)
    let right = new Array(n)
    let result = new Array(n)

    left[0]=1
    for(let i =1 ; i<n;i++){
        left[i] = left[i-1] * nums[i-1]
    }
    right[n-1] =1 
    for(let i = n-2 ; i>=0 ;i--){
        right[i] = right[i+1] * nums[i+1]
    }
    for(let i=0;i<n;i++){
        result[i] = left[i] * right[i]
    }
    return result
};




// nums [2,3,4,5]

// o/p = [60,40,30,24]

// left half and the right then in the final it ewould that will the mul tipplication of left and right

// 2,3,4,5
// left[0] = 2> = 1,
// 3> 2
// 4> 6
// 5>24
// left = 1,2,6,24

// right [n-1] =1
// n-2 : 5
// n-3 : 20
// n-4 : 60

// right = 60,20,5,1

// result = left * right 

// o(n), o(n))
//  [60,40,30,24]