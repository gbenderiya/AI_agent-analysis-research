# Performance antipattern: building strings in a loop (quadratic cost)
def build_sentence(words):
    s = ''
    for w in words:
        s += w + ' '
    return s.strip()

if __name__ == '__main__':
    print(build_sentence(['word']*10000))
