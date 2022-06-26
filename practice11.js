let dbparams = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "jadhav",
  port: 3306,
};

const mysql = require("mysql2");
const connection = mysql.createConnection(dbparams);

const express = require("express");
const app = express();

app.use(express.static("sf"));

app.get("/employeeDetails", (req, res) => {
  let input = req.query.empno;
  connection.query(
    "select empno,empname,mobileno from emp where empno=?",
    [input],
    (err, rows) => {
      let output = {
        status: false,
        empdetail: { empno: 0, empname: "", mobileno: 0 },
      };
      if (err) {
        console.log("error");
      } else {
        if (rows.length > 0) {
          output.status = true;
          output.empdetail = rows[0];
        }
      }
      res.send(output);
    }
  );
});

app.listen(1110, function () {
  console.log("server listening at port 1111...");
});
