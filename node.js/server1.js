const http = require('http');

http.createServer((req,res)=>{
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
  res.write('<h1>hello Node!</h2>');
  res.end('<p>Hello Server!');
})
.listen(8080,()=>{
  console.log('http://localhost:8080 서버 대기 중 입니다');
});
