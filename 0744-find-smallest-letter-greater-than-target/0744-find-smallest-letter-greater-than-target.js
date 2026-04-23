/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let n= letters.length
    let left = 0
    let right =n-1
    while (left<=right){
        let mid = Math.floor((left+right) /2)

        if(letters[mid] > target){
            right = mid-1
        }else{
            left = mid+1
        }
    }
    return letters[left % n]
    
};


// letters = ["c","f","h"] , target = "d" : o/p : "f"

// letters = ["f","g","h"] , target ="z" : o/p: "f"
// letters = ["c","f","h"]
// left =0
// right =2
// mid =1

// while left<=right

// i =0 , left =0 : f , right :h, mid:1:f > mid>target =yes > right = mid-1 : 0
// i=1, left:0, right:0:mid:0 : left = mid+1 =1

// return letters mid%n