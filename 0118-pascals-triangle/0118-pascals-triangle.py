class Solution:
    def generateRow(self,row):
        ans=1
        Rowans = []
        Rowans.append(1)
        for col in range (1,row):
            ans= ans * (row-col)
            ans = ans // col
            Rowans.append(ans)
        return Rowans
    def generate(self, numRows: int) -> List[List[int]]:
        pascalTriangle= []

        for row in range(1,numRows+1):
            pascalTriangle.append(self.generateRow(row))
        return pascalTriangle
        