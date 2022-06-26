const url="";
let data={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"jadhav",
    port:3306
};
const mysql=require("mysql2");
const con=mysql.createConnection(data);
let category="Office";
let itemno=50;
con.query("update item set category=? where itemno=?",[category,itemno],(err,res)=>{
    if(err){
        console.log("Update  failed");
    }else{
        if(res.affectedRows===0){
            console.log("update failed")
        }else{
        console.log("Update succeed"+res.affectedRows);}
    }
});