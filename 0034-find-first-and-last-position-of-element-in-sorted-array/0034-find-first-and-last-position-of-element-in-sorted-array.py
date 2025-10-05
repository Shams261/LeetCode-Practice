class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        first = self.findFirstOccurrence(nums, target)
        last = self.findLastOccurrence(nums, target)
        return [first, last]

    def findFirstOccurrence(self,nums,target):
        n = len(nums)
        low = 0
        high = n-1
        ans = -1
        while low <= high:
            mid = (low+high)//2
            if nums[mid] == target:
                ans = mid
                high = mid -1
            elif nums[mid]<target:
                low = mid+1
            else:
                high = mid-1
        return ans
    def findLastOccurrence(self,nums,target):
        n = len(nums)
        low = 0
        high = n-1
        ans = -1
        while low <= high:
            mid = (low+high)//2
            if nums[mid] == target:
                ans = mid
                low = mid+1
            elif nums[mid]>target:
                high = mid-1
            else:
                low = mid+1
        return ans
