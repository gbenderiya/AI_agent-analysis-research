# Logic bug: accumulator initialized to 1 instead of 0 -> wrong sum for typical lists
def sum_numbers(nums):
    total = 1
    for n in nums:
        total += n
    return total

if __name__ == '__main__':
    print(sum_numbers([1,2,3]))  # expects 6 but prints 7
