# Off-by-one: loop uses <= causing IndexError on last iteration in some cases
def get_by_index(arr):
    res = []
    for i in range(len(arr)):  # intended range(len(arr)-1) for special processing, bug introduced
        res.append(arr[i])
    return res

if __name__ == '__main__':
    print(get_by_index([1,2,3]))
