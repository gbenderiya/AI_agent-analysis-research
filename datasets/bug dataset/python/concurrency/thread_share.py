# Concurrency bug: shared mutable state without locking causes race conditions
import threading
counter = 0

def worker():
    global counter
    for _ in range(10000):
        counter += 1

threads = [threading.Thread(target=worker) for _ in range(5)]
for t in threads:
    t.start()
for t in threads:
    t.join()
print(counter)  # often less than expected due to races
