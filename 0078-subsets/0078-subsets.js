/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = []
    let backtrack = (path,start) =>{
        result.push([...path])
        for(let i= start ; i<nums.length;i++){
            path.push(nums[i])
            backtrack(path,i+1)
            path.pop()

        }
    }
    backtrack([],0)
    return result
};


// constraint = unique
// order coule be any

// nums  = [46],5, => 2^n = 8

// [[]=>[4]=>[5]=>[6]=>[4,5]=>[4,6]=>[4,5,6]=>[5,6]]

//            []
    
//      [4]         [5]         [6]

// [4,5] [4,6]      [5,6]

// [4,5,6]

// T = O(2^n.n)
// s = O(2^n)