const express= require('express');
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
app.use(bodyParser.jason());

const testdb = require("./db");
db.connect((err)=>{
    if(err){
        console.log('unable to connect');
        process.exit(1);
    }
    else{
        app.listen(3000,()=>{
            console.log('you on!')
        })
    }
})