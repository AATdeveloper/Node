const express = require(`express`)
const router = express()
 

const instituteroutes = require("./institute")
router.use("/institute",instituteroutes)

module.exports = router