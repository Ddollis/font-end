const http = require('http');
const fs = require('fs');

const app = http.createServer(function (req, res) {
  const data = fs.readFileSync(__dirname + '/test1.html');
  res.setHeader('Content-Type', 'text/html');
  res.write(data);
  res.end();
});
app.listen(3000);