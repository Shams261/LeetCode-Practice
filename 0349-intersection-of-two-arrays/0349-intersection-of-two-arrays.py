class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        nums1.sort()
        nums2.sort()
        n1=len(nums1)
        n2=len(nums2)
        i=0
        j=0
        result=[]
        while i < n1 and j<n2:
            if nums1[i]<nums2[j]:
                i+=1
            elif nums2[j]<nums1[i]:
                j+=1
            else:
                if not result or result[-1] != nums1[i]: 
                    result.append(nums1[i])
                i+=1
                j+=1
        return result
