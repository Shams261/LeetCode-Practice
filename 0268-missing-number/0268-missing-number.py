class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        for i in range(0,len(nums)+1):
            flag=0
            for j in range(0,len(nums)):
                if nums[j]==i:
                    flag=1
                    break
            if flag==0:
                return i
        