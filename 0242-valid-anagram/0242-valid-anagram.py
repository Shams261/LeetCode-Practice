class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s)!= len(t):
            return False
        map_s={}
        map_t={}
        for ch_s,ch_t in zip(s,t):
            map_s[ch_s] = map_s.get(ch_s,0)+1
            map_t[ch_t] = map_t.get(ch_t,0)+1
        if map_s != map_t:
            return False
        return True        