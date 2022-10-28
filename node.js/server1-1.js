const http = require('http');

const server = http.createServer ((req,res)=>{
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
  res.write('<h1>hello Node!</h1>');
  res.end('<p>Hello Server!');
});

server.listen(8080);

server.on('listening',()=>{
  console.log('http://localhost:8080 8080번 포트에서 서버 대기 중입니다!');
});
server.on('error', (error)=>{
  console.error(error);
});
