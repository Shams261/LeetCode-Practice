class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        res = []

        def backtrack(s,openCount,closeCount):
            if len(s) == 2*n:
                res.append(s)
                return

            if openCount<n:
                backtrack(s+ "(" , openCount+1,closeCount)

            if closeCount<openCount:
                backtrack(s + ")" , openCount,closeCount+1)

        backtrack("",0,0)
        return res
        


# n = 2 : 2*n=4

# open =2
# close =2

# opne<n
# close < open

# s = []
# n= 