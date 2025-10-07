/* Logic bug: forgetting to return inside callback leads to multiple responses in Express handlers */
const express = require('express')
const app = express()

app.get('/maybe', (req, res) => {
  someAsyncCheck((err, ok) => {
    if (err) res.status(500).send('err')
    if (ok) res.send('ok') // should return after sending
  })
})

function someAsyncCheck (cb) {
  setTimeout(() => cb(null, true), 10)
}

app.listen(3000)
