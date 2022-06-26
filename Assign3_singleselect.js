let data={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"jadhav",
    port:3306
};
let resourceId=101;
const mysql=require("mysql2");
const con=mysql.createConnection(data);
con.query("select resourceId,resourcename,status from resource where resourceId=?",[resourceId],(err,rows)=>{

    if(err){
        console.log(err);
    }else{
        if(rows.length>0){
            console.log("Succeed: "+rows[0].resourceId+" "+rows[0].resourcename+" "+rows[0].status);
        }else{
            console.log("None rows  return");
        }
    }
});