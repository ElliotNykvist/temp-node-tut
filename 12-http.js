const http = require('http');

const server = http.createServer((req, res) => {
  if (req. url === '/') {
    res.end('Welcome to our homepage')
  }
  if (req.url === '/about') {
    res.end('here is about page')
  }
  res.end(`
    <h1>Oops!</h1>
    <p>we cant seem to find the page you are looking for</p>
    <a href="/">back home</a>`)
})


server.listen(5000)