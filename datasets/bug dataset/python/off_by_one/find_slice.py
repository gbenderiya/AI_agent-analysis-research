# Off-by-one: wrong slice end causes missing last item
def last_n(items, n):
    # intended to return last n items inclusive, but slice start wrong
    start = len(items) - n + 1
    return items[start:]

if __name__ == '__main__':
    print(last_n([1,2,3,4,5], 2))  # expects [4,5] but prints [5]
