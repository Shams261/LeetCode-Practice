class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        i = n - 2
        
        # Step 1: find pivot
        while i >= 0 and nums[i] >= nums[i + 1]:
            i -= 1
        
        if i >= 0:  # pivot found
            j = n - 1
            while nums[j] <= nums[i]:
                j -= 1
            nums[i], nums[j] = nums[j], nums[i]
        
        # Always reverse from i+1
        nums[i + 1:] = reversed(nums[i + 1:])
 