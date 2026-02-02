/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if (!nums || nums.length <= 1) return nums;
     const n = nums.length;
     for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(nums, n, i);
    }

    // 2. Extract elements from heap one by one
    for (let i = n - 1; i > 0; i--) {
        // Move current root (largest) to the end
        [nums[0], nums[i]] = [nums[i], nums[0]];
        // Call max heapify on the reduced heap
        heapify(nums, i, 0);
    }


    return nums;
    function heapify(arr, heapSize, rootIndex) {
    let largest = rootIndex;
    let leftChild = 2 * rootIndex + 1;
    let rightChild = 2 * rootIndex + 2;

    // If left child is larger than root
    if (leftChild < heapSize && arr[leftChild] > arr[largest]) {
        largest = leftChild;
    }

    // If right child is larger than largest so far
    if (rightChild < heapSize && arr[rightChild] > arr[largest]) {
        largest = rightChild;
    }

    // If largest is not root, swap and continue heapifying down
    if (largest !== rootIndex) {
        [arr[rootIndex], arr[largest]] = [arr[largest], arr[rootIndex]];
        heapify(arr, heapSize, largest);
    }
}
};