/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let map = {}

    for (let i = 0; i< strs.length ;i++){
        let sortStr = strs[i].split("").sort().join("")
        if(!map[sortStr]){
            map[sortStr] = [strs[i]]
        }else{
            map[sortStr].push(strs[i])
        }
    }
    return Object.values(map)
    
};



// strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// str => sorted => [aet,aet,ant,aet,ant,abt]


// map {
//     aet : [eat,tea,ate]
//     ant :[tan,ant]
//     abt:[bat]
// }
// return map(values)

// S = nlogn  * m
// S = n * m