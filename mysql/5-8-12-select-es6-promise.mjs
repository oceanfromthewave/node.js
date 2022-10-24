import dotenv from 'dotenv';
import express from 'express';
import mysql from 'mysql2';
const app = express();

dotenv.config({path: 'mysql/.env'});//yarn add dotenv

app.get("/", (req, res) => { // '=>' function의 람다식 표현
  // request, response
  const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  }).promise(); // Promise를 사용

  let body = '<h1>single row</h1>';
  let queryPromise = connection.query('SELECT * FROM topic WHERE id = ?', [1]);
  queryPromise
  .then((value)=>{
    let [results,fields] = value;
    console.log({results,fields});
    let [row] = results; // let row = results[0];
    body += `<h2>${row.title}</h2>`;
    body += row.decription;
    return connection.query('SELECT * from topic');
  })
  .then(([results, fields])=>{
    console.log({results, fields});
    body += '<h1>multi row</h2>';
    //for (let row of results){
      //let title = row.title, description = row.description
      results.forEach(({title,description})=>{
        body += `<h2>${title}</h2>`;
        body += description;
      });
      res.send(body);
    })
    .catch(console.error)
    .finally(() => connection.destroy());
  });



app.listen(3000, () => {
  console.log(process.env);
  console.log("Listening: http://localhost:3000");
});
