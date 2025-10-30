import express from'express'
import helmet from "helmet"
 

const app=express()
//const PORT =3001

app.get("/",(req,res)=> {
    res.send("Hello from the backend");
});

app.listen(3001,()=>{
    console.log(`Server is running on port 3001` )
})