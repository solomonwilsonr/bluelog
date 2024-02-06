import express from "express";
//import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";
//import pg from "pg";
const myDirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

/*const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "world",
    password: "33377777",
    port: 5432,
  });
  
  db.connect();
  

  
app.use(bodyParser.urlencoded({extended:true}));*/

app.get("/",(req,res)=>{
res.sendFile(myDirname + "/bluelog.html")
});

app.get("/electronics.html",(req,res)=>{
    res.sendFile(myDirname + "/electronics.html")
    });

app.get("/clothes.html",(req,res)=>{
    res.sendFile(myDirname + "/clothes.html")
});

app.get("/musicalinstr.html", (req,res)=>{
    res.sendFile(myDirname + "/musicalinstr.html")
});

app.get("/custreg.html", (req,res)=>{
    res.sendFile(myDirname + "/custreg.html")
});

app.get("/test.html", (req,res)=>{
    res.sendFile(myDirname + "/test.html")
});

app.get("/test2.html", (req,res)=>{
    res.sendFile(myDirname + "/test2.html")
});

app.get("/bluelog.html", (req,res)=>{
    res.sendFile(myDirname + "/bluelog.html")
});

app.get("/order.html", (req,res)=>{
    res.sendFile(myDirname + "/order.html")
});

app.get("/order1.html", (req,res)=>{
    res.sendFile(myDirname + "/order1.html")
});

app.get("/storeg.html", (req,res)=>{
    res.sendFile(myDirname + "/storeg.html")
});

app.get("/iphone14pro.html", (req,res)=>{
    res.sendFile(myDirname  + "/iphone14pro.html")
});

app.get("/aboutus.html", (req,res)=>{
    res.sendFile(myDirname  + "/aboutus.html")
});
app.get("/contactus.html", (req,res)=>{
    res.sendFile(myDirname + "/contactus.html")
});    


/*app.post("/registration.html/register", (req,res)=>{
     console.log(req.body)
});*/


app.listen(port, ()=>{
console.log(`listening on port ${port}`)
});