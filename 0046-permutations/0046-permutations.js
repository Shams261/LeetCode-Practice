/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = []
    let backtrack  = (path) =>{
        if(path.length===nums.length){
            result.push([...path])
        }
        for(let i = 0;i <nums.length;i++){
            if(!path.includes(nums[i])){
                path.push(nums[i])
                backtrack(path)
                path.pop()
            }
        }
    }
    backtrack([])
    return result
    
};

// nums = [5,6,7] => n =3
// 3*2 = 6

//         []

//     [5] [6] [7]
// [5,6] [5,7] [6,7] [6,5] [7,5] [7,6]

// [5,6,7] [5,7,6] [6,7,5] [6,5,7] [7,5,6] [7,6,5] => 6

// t O(n!)*o(n)
