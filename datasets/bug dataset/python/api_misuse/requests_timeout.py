# API misuse: not specifying timeout on requests.get; can hang in production
import requests

def fetch_json(url):
    resp = requests.get(url)  # missing timeout
    return resp.json()

if __name__ == '__main__':
    # when used against slow endpoints this may block indefinitely
    print(fetch_json('https://httpbin.org/delay/3'))
