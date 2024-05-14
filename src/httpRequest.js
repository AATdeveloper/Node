const http = require("http");
const url = require("url")
const fs = require("fs")

const server = http.createServer((req, res) => {
    const method = req.method.toLowerCase();
    const path = url.parse(req.url, true).pathname;
    const datapath = "./src/asset/data/data.json";

    if (method === "get" && path === "/institute") {
        const id = url.parse(req.url, true).query.id;

        fs.readFile(datapath, "utf-8", (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ error: err.message }))
            }
            if (id) {
                const alldata = JSON.parse(data);
                const obj = alldata.find((v) => v.id == id);

                if (obj) {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(obj));
                    res.end()
                } else {
                    res.writeHead(404, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: "data not found" }));
                    res.end()
                }
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' })
                res.write(JSON.stringify(data))
                res.end()
            }
        })
    } else if (method === "post" && path === "/institute") {
        let body = '';

        req.on("data", (chunk) => {
            body += chunk
        });

        fs.readFile(datapath, "utf-8", (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ error: err.message }))

            }

            console.log(body);


            const alldata = JSON.parse(data)
            alldata.push(JSON.parse(body))
            console.log(alldata);

            fs.writeFile(datapath, JSON.stringify(alldata), (err) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'application/json' })
                    res.end(JSON.stringify({ error: err.message }))

                }

                res.end(JSON.stringify({ message: "Data Send Successfully" }))
            })
        })
    } else if (method === "delete" && path === "/institute") {


    }
})
server.listen(3000, () =>
    console.log("server is running on port 3000")
)




// 14-05-24_node_institute