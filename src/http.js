const http = require("http")

const server = http.createServer((req,res) => {
    console.log(req.method);
    console.log(req.url);
    console.log(req.headers);


    res.writeHead(200,{'content-type'  : 'application/json'})  
    res.write("Done")
    res.end()
}) 
 
server.listen(3000, () =>
    console.log("server is running on port 3000")
)