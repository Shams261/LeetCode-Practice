class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq = {}
        for num in nums:
            freq[num] = freq.get(num,0)+1

        n = len(nums)
        buckets = [[] for _ in range (n+1)]

        for num, count in freq.items():
            buckets[count].append(num)

        result = []
        for i in range(n,0,-1):
            for num in buckets[i]:
                result.append(num)
                if len(result)==k:
                    return result
        return result
