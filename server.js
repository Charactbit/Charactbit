const fs = require('fs');
const express = require('express');
const bodyParse = require('body-parser');
const app = express();
const port = process.env.PORT ||5000;



app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended : true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host : conf.host,
    user : conf.user,
    password : conf.password ,
    port : conf.port ,
    database: conf.database
});

connection.connect();

app.get('/api/hello' , (req , res) => {
    
    connection.query(
        "SELECT * FROM banking.client",
        (err,rows, fields) => {
            res.send(rows);
        }
    )

});

app.get('/api/viewcard' , (req , res) => {
    
    connection.query(
        "SELECT * FROM banking.client",
        (err,rows, fields) => {
            res.send(rows);
        }
    )

});

app.post('/api/viewcard2' , (req , res) => {

    console.log(req.body);
    console.log(req.body['cardId']);
    const {cardIId,temp} = req.body

    let sql = "SELECT * FROM banking.card where card_id like '"+req.body['cardId']+"'";
    console.log(sql);

    connection.query(
        sql,params={},
        (err,rows, fields) => {
            res.send(rows);
        }
    )

});

app.post('/api/mypage' , (req , res) => {

    console.log(req.body);
    console.log(req.body['client_registration_number']);
    const {cardIId,temp} = req.body

    let sql = "SELECT * FROM banking.client where client_registration_number like '"+req.body['client_registration_number']+"'";
    console.log(sql);

    connection.query(
        sql,params={},
        (err,rows, fields) => {
            res.send(rows);
        }
    )
});

app.post('/api/accountview' , (req , res) => {

    console.log(req.body);
    console.log(req.body['deposit_account_id']);
    const {cardIId,temp} = req.body

    let sql = "SELECT * FROM banking.deposit_account where deposit_account_id like '"+req.body['deposit_account_id']+"'";
    console.log(sql);

    connection.query(
        sql,params={},
        (err,rows, fields) => {
            res.send(rows);
        }
    )
});




app.listen(port , () => console.log(`Listening on port ${port}`));