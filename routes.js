const router = require("express").Router()
const { users, teachers } = require("./data")

router.get("/student", (req, res) => {
    const mtc = req.query?.matricule
    if (!mtc) return res.status(400).json({ error: true, msg: "Please provide matricul of user that you wwanna see" })
    const user = users.find(e => e.matricule == mtc)
    if (!user) return res.status(404).json({ error: true, msg: "User not found" })
    res.json({ error: false, user, msg: "Here is your student !" })
})

router.get("/teacher", (req, res) => {
    const mtc = req.query?.matricule
    if (!mtc) return res.status(400).json({ error: true, msg: "Please provide matricul of user that you wwanna see" })
    const user = teachers.find(e => e.matricule == mtc)
    if (!user) return res.status(404).json({ error: true, msg: "User not found" })
    res.json({ error: false, user, msg: "Here is your student !" })
})

module.exports = router