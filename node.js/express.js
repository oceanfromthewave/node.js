const express = require('express');

express().get('/',(req,res)=>{
  res.send('<p>Hello Server!</p>');
})

.listen(8080,()=>{ // 서버 연결
  console.log('http://localhost:8080 서버 대기 중 입니다');
});
