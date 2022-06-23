const { response } = require('express');
const express=require('express');
const app=express();
const mysql=require('mysql2');
app.use(express.static("sf"));
app.listen(560);

app.get('/getbookname',(req,res)=>{
    console.log("ajax func call");
    console.dbobject={
        host:'localhost',
        user:'root',
        password:'cdac',
        database:'indore',
        post: '3306'
    }
    const conn=mysql.createConnection(dbobject);
    let output={status:false, detail:{bookid:0, areaname:""}}
    let bookid=req.query.bookid;
    conn.query('select bookid, bookname from book where book id= ?',[bookid],
    (error, row) => {
        if (error){
            console.log("error");
        }
        else{
            if(row.length>0){
                output.status=true;
                output.detail=row[0];
            }
            else{
                console.log("no book with this bookid")
            }
        }
        console.log(output);
        response.send(output);
    });

});

app.get('/updatebookname'), (req, resp)=>{
    console.log('ajax function called');
}
const dbobject= {
    host:'localhost',
        user:'root',
        password:'cdac',
        database:'indore',
        post: '3306'


}

const conn= mysql.createConnection(dbobject);
let output={status:false}
let bookid=req.query.bookid;
let bookname=req.query.bookname;
console.log("bookid");
conn.query('update location set araname = ? where bookid=?', [bookname, bookid],
(error, res) => {
    if (error){
        console.log("error");
    }
    else{
        if(res.affectedRows>0){
            output.status=true;
            
        }
        else{
            console.log("didn't update")
        }
    }
    console.log(output);
    response.send(output);
});

