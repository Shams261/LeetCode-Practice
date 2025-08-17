class Solution:
    def reverse(self, x: int) -> int:
        reverse_num=0
        is_negative = x<0
        x= abs(x)
        while x>0:
            digit = x%10
            reverse_num = (reverse_num * 10) + digit
            x = x // 10
            if reverse_num > 2**31 - 1:
                return 0
        return -reverse_num if is_negative else reverse_num
        