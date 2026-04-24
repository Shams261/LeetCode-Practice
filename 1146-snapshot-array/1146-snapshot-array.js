/**
 * @param {number} length
 */
var SnapshotArray = function(length) {

    this.snap_id = 0 // current snap id
    this.arr = new Array(length)

    for(let i=0;i<length;i++){
        this.arr[i] = [[0,0]]
    }
    
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {

    let history = this.arr[index]
    let last = history[history.length-1]

    if(last[0] === this.snap_id){
        last[1] = val
    }else{
        history.push([this.snap_id,val])
    }
    
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    return this.snap_id++
    
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */

 //binary search for latest snap_id
SnapshotArray.prototype.get = function(index, snap_id) {
    let history = this.arr[index]
    let left =0
    let right = history.length-1
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(history[mid][0] <= snap_id){
            ans = history[mid][1]
            left = mid+1
        }else{
            right = mid-1
        }
    }
    return ans
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */


//  length =3 = > [0,0,0]
//  set(0,5) =>[5,0,0]
//  snap() => id=0
//  snap(0) => [5,0,0]
//  snapid =1
//  set(0,6) => [6,0,0]
//  get(0,0) => 5
//  [
//     [5,0,0],
//     [6,0,0],
//     [8,0,0]
//  ]

// at each = [snap_id,value]

// [0,0,0],[0,0,0],[0,0,0]


// set(0,5)
// index[0] =>[0,5]
// snap()
// snap_id =0
// nextsnap id = 1

// set(0,6)
// index 0 => [[0,5],[1,6]]

// set =snapid+value