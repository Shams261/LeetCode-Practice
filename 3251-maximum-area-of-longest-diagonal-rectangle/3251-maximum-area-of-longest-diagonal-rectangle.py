from math import sqrt
class Solution:
    def areaOfMaxDiagonal(self, dimensions: List[List[int]]) -> int:
        max_diagonal=0
        max_area =0
        for length,width in dimensions:
            dg_length= sqrt(length*length + width * width)
            area= length * width

            if dg_length > max_diagonal:
                max_diagonal = dg_length
                max_area = area
            elif dg_length == max_diagonal:
                max_area = max(max_area,area)
        return max_area

        