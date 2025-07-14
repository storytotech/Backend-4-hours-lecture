import express from "express"
import morgan from "morgan";
const app = express();

const PORT = 3000;


app.set("view engine" , "ejs")
app.use(morgan("dev"))
app.use(morgan("combined"))

app.get("/",(req,res)=>{res.send("helllo")
})

// app.get("/ejs",(req,res)=>{res.render('index')
// })

app.get("/ejs", (req,res,next)=>{morgan("combined")(req,res,next)},(req,res)=>{res.render('index')
})

app.get("/ee", (req,res,next)=>{morgan("combined");next()},(req,res)=>{res.render('index')
})
app.listen(PORT,()=>{console.log(`the server is running on the port of ${PORT}`)})