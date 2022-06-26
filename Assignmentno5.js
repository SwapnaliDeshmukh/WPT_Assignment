const express = require('express');

const app = express();

app.use(express.static("sf"));
let dbparams=
{
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'jadhav',
	port:3306
}; 


const mysql = require('mysql2'); 
const con=mysql.createConnection(dbparams);
app.get("/EmpInfo", (req, resp) => {
        let accname = req.query.accname;
     
        let details = { status: false, details1: {} }
        con.query('select accname from bank  where accno=?', [accname],
            (error, accnameRow) => {
             // 
                if (error) {
                  
                    console.log( error);
                }
                else if(accnameRow.length>0){
                    details.details1.status = true;
                    details.details1.sal =accnameRow[0];
                }
               resp.send(details);
    
                
    
            }
        );
        
        
    });
    app.listen(1500, function () {
        console.log("Server connect to  port......... 1500");
    
    });