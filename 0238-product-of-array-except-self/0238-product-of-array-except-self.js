/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length
    let result = new Array(n)

    result[0] =1
    for(let i =1;i<n;i++){
        result[i] = result[i-1] * nums[i-1]
    }
    let right = 1
    for(let i=n-1; i>=0 ;i--){
        result[i] = result[i] * right
        right = right * nums[i]
    }
    return result

    
};




// nums [2,3,4,5]

// let result = [] 

// result[0]=1
// i<1;i<n;i++
// {
//     i = 1
//     result[i] = result[i-1]* nums[i-1]
//     result[1] = 1 * 2 = 2
//     result[2] = 2 *3 = 6
//     result[3] = 6 * 4 = 24
//     result = [1,2,6,24]
// }
// right = 1
// n-1;n>=0;i--{
//     reult[i] = result[i] * right
//     right = right * nums[i]
// }
// i = 3 , 
// result[3] = 24 * 1 = 24 => [1,2,6,24]
// right = 1 * 5 = 5

// result [2] = 6 * 5 = 30 => [1,2,30,24]
// right = 5 * 4 = 20

// result[1] = 2 * 20 =40 > [1,40,30,24]
// right = 20*3 =60

// i =0 => 1 * 60 => [60,40,30,24]
// rgiht = 60

// [[60,40,30,24]]