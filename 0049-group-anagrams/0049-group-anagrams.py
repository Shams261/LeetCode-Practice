class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hasmap ={}
        n = len(strs)
        for i in range(n):
            sorted_str = ''.join(sorted(strs[i]))
            if sorted_str in hasmap:
                hasmap[sorted_str].append(strs[i])
            else:
                hasmap[sorted_str] = [strs[i]]
        return list(hasmap.values())
