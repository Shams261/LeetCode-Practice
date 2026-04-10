/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let freq = new Map()
    for(let i=0;i<arr.length;i++){
        if(freq.has(arr[i])){
            freq.set(arr[i],freq.get(arr[i])+1)
        }else{
            freq.set(arr[i],1)
        }
    }
    let largest = -1
    for(let val of freq.keys()){
        let count = freq.get(val)
        if(val===count){
            if(val > largest){
                largest=val
            }
           
        }
    }
    return largest    
    
    
};



// nums = [6,6,5,3,4,3,3]

// 6 :2
// 5:1
// 4:1
// 3:3

// -1


// count = 
// 6:2
// 5:1
// 3:3
// 4;1

