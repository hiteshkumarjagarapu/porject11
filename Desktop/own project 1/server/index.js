const express=require('express');
const app=express();
const path=require("path")
const { open } = require("sqlite");
const sqlite3 = require("sqlite3").verbose();
const cors=require('cors');
app.use(cors())


app.use(express.json());


const dbpath=path.join(__dirname,"mydata.db");

const serverOn= async()=>{
    try{
        db=await open({
            filename:dbpath,
            driver:sqlite3.Database
        });
        app.listen(3001,()=>{
            console.log("started")
        });        
    }catch(e){
        console.log(`error is: ${e}`)
        process.exit(1);
    }
    
};

serverOn();


app.post('/createUser',async (request,response)=>{
    const {id}=request.params;
        const{name,email}=request.body;
        const postQuery=`INSERT INTO user(id,name,email)VALUES('${id}','${name}','${email}'); `;
        try{
            const res=await db.run(postQuery);
            response.send("done");

        }catch(e){
            console.log(e)
        }
        
})
