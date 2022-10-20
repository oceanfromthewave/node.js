const express = require("express"); //'express'가 일종의 서버
const mysql = require("mysql2");
const app = express();

require("dotenv").config({ path: "mysql/.env" }); // yarn add dotenv

app.get("/", (req, res) => { // '=>' function의 람다식 표현
  // request, response
  const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  });

  let body = "<h1>single row</h1>"; // 한 줄 출력
  connection.query(
    // 비동기 전송
    "SELECT * FROM topic WHERE id = ?", [1],
    (err, results, fields) => { // '=>' function의 람다식 표현
      console.log(err, results, fields);
      let [row] = results; // let row = result[0];
      body += `<h2>${row.title}</h2>`;
      body += row.description;

      body += "<h1>multi row</h1>"; // 여러 줄 출력
      connection.query(
        // 비동기 전송
        "SELECT * FROM topic",
        [1],
        (err, results, fields) => { // '=>' function의 람다식 표현
          console.log({err, results, fields});
          for (let {title, description} of results) {
            body += `<h2>${title}</h2>`;
            body += description;
          }
          res.send(body);
        }
      );
    }
  );
});

app.listen(3000, function () {
  console.log(process.env);
  console.log("Listening: http://localhost:3000");
});
