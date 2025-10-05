/* Performance antipattern: synchronous crypto operation in request handler blocks event loop */
const http = require('http');
const crypto = require('crypto');

http.createServer((req, res) => {
  const hash = crypto.pbkdf2Sync('password', 'salt', 100000, 64, 'sha512'); // heavy sync op
  res.end(hash.toString('hex'));
}).listen(4100);
