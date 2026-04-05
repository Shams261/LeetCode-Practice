/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let result = []
    let map = new Map()
    let minSum = Infinity

    for(let i = 0; i<list1.length ;i++){
        map.set(list1[i],i)
    }

    for(let j=0;j<list2.length;j++){
        if(map.has(list2[j])){
            let sum = map.get(list2[j]) + j
            if(sum < minSum){
                minSum = sum
                result.length = 0
                result.push(list2[j])
            }else if(sum===minSum){
                result.push(list2[j])
            }
        }
    }
    return result


    
};

// list 1 = ["shams" , "tabrez" , "rahil" ,"tim"]
//             0           1           2       3
// list2 = ["tabrez" , "rahil", "shams"]

//             0           1       2

// shams = 0 + 2 => 2
// tabrez = 1+ 0 => 1
// rahil = 2+ 1 => 1  

// map {
//     shams:0
//     tabrez:1
//     rahil:2
//     tim:3
// }
