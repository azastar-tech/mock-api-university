const router = require("express").Router()
const { student, teachers } = require("./data")
const User = require("./src/models/users.model")

router.get("/student", async (req, res) => {
    const mtc = req.query?.matricule
    if (!mtc) return res.status(400).json({ error: true, msg: "Please provide matricul of user that you wwanna see" })
    const user = await User.findOne({ matricule: mtc }).select("-_id").lean()
    if (!user) return res.status(404).json({ error: true, msg: "User not found" })
    res.json({ error: false, user, msg: "Here is your student !" })
})


router.post("/student", (req, res) => {
    console.log("ulrich m'a call !")
    const { name, matricule, email, faculty, level, sex, birthdate, school } = req.body
    if (name || !matricule || !email || !faculty || !level || !sex || !birthdate || !school) return res.status(400).json({ error: true, msg: "Please provide all the informations of the user !" })
    if (typeof email !== "string" || !email.includes("@") || typeof level !== "number" || level > 8 || level < 1 || sex.length !== 1) return res.status(400).json({ error: true, msg: "Ta mmaman batard!!" })

    student.push({ id: student.length + 1, name, matricule, email, faculty, level, sex, birthdate, school })
    res.json({ error: false, msg: "User created successfully !", data: student })
})


router.get("/teacher", (req, res) => {
    const mtc = req.query?.matricule
    if (!mtc) return res.status(400).json({ error: true, msg: "Please provide matricul of user that you wwanna see" })
    const user = teachers.find(e => e.matricule == mtc)
    if (!user) return res.status(404).json({ error: true, msg: "User not found" })
    res.json({ error: false, user, msg: "Here is your student !" })
})

module.exports = router