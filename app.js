import express from "express"
import morgan from "morgan";
import { modelDb } from "./models/user.js";
import connectDb from "./db/db.js";
import mongoose from "mongoose"
const app = express();

const PORT = 3000;

app.use(express.urlencoded({extended : true}))
app.set("view engine" , "ejs")
app.use(express.static("public"))
// app.use(morgan("dev"))
// app.use(morgan("combined"))

// app.get("/",(req,res)=>{res.send("helllo")
// })

// app.get("/ejs",(req,res)=>{res.render('index')
// })

// app.get("/ejs", (req,res,next)=>{morgan("combined")(req,res,next)},(req,res)=>{res.render('index')
// })

// app.get("/ee", (req,res,next)=>{morgan("combined");next()},(req,res)=>{res.render('index')
// })


//   new 
app.use(morgan("dev"))
connectDb()
// app.post("/register",(req,res)=>{res.render("register")})
// ...existing code...

// let allFormData = []; // sabhi form submissions yahan store honge

app.post("/register", async (req, res) => {
    // allFormData.push(req.body); // naya data array mein add karo
   const {username,email,password} = req.body
 const user =  await modelDb.create({
    username : username,
    email : email,
    password : password
   })
   res.send(user)
    // current + sabhi data bhejo
});
app.get("/read",(req,res)=>{
  modelDb.find({
    username : "fwfe"
  }).then((users)=>{
    res.send(users)
  }).catch((error)=>{
    console.log(error);
    
  })
})

app.get("/update",async (req,res)=>{
 await modelDb.findOneAndUpdate({
    username : "fwfe"
  },{email : "fauz@gmail.com"}).then((users)=>{res.send("users updated")}).catch(()=>{})
})
app.get("/register",(req,res)=>{res.render("register")})
// app.get("/showAll", (req, res) => {
//     res.render("register", { data: null, allData: allFormData }); // sirf sabhi data dikhao
// });

// ...existing code...


app.get("/",(req,res)=>{res.render("index")})
app.post("/getData",(req,res,next)=>{morgan("dev");next()},(req,res)=>{
	console.log(req.body);
	res.render("showData", { data: req.body });
})
app.listen(PORT,()=>{console.log(`the server is running on the port of ${PORT}`)})