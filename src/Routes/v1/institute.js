const express = require(`express`)
const router = express()

router.get(`/`, (req, res) => {
    res.send('Institute get method')
})
router.post(`/`, (req, res) => {
    res.send('Institute post method')
})
router.put(`/`, (req, res) => {
    res.send('Institute put method')
})
router.delete(`/`, (req, res) => {
    res.send('Institute delete method')
})

module.exports = router;