/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
 let map = {}
 for(let i = 0; i < nums.length ;i++){
    if(map[nums[i]]){
        ++map[nums[i]]
    }else{
        map[nums[i]] =1
    }
     }
    let entries = Object.entries(map)
    entries.sort((a,b)=>b[1]-a[1])
    let topK = entries.slice(0,k)
    let result = topK.map(e=>Number(e[0]))
    return result











    
};

// nums = [2,2,4,6,2,2,3,3,2,2,2,5,7,6,6,1] , k =2


// hashmap{
//  1:1
//  2:7          > sort it in des frequency => take the top k freq element in this k =2
//                     2,6
//  3:2
//  4:1
//  6:3
//  7:1
// }
// sp = o(n)

// time = o{n}+onlogn = > o(nlogn)


