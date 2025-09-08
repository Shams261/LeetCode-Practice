class Solution:
    def rearrangeArray(self, nums: List[int]) -> List[int]:
        n=len(nums)
        ans=[0]*n
        posIndex=0
        negIndex=1
        for i in range(n):
            if nums[i]<0:
                ans[negIndex]=nums[i]
                negIndex+=2
            else:
                ans[posIndex]=nums[i]
                posIndex +=2
        return ans
        