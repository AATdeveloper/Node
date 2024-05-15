// const rect = require("./rectangle");

// rect.area(10,20);
// console.log("perimetere of reactangle is :", rect.perimeter(5,4));


const express = require(`express`)
const app = express();




const routers =require("./Routes/v1/index")
app.use("/api/v1",routers)





app.listen(3000, () =>
    console.log("server is running on port 3000")
)