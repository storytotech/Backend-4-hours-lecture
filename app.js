const http = require("http")

const PORT = 3000

const server = http.createServer((req,res)=> {
    console.log(req.url);
    res.end("hello") }
)

server.listen(PORT,()=> console.log("this server is running of theport of " + PORT)
) 