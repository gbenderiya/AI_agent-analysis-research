/* API misuse: using fs.readFileSync on request path without validation - blocking & insecure */
const fs = require('fs')
const http = require('http')

http
  .createServer((req, res) => {
    try {
      const data = fs.readFileSync('.' + req.url) // blocking and potential path traversal
      res.end(data)
    } catch (e) {
      res.statusCode = 404
      res.end('not found')
    }
  })
  .listen(4000)
