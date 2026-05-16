const SeedUsers = require("./users.seed")

const router = require("express").Router()

router.get("/", async (req, res) => {
    await SeedUsers()
    res.json({ err: false, msg: " Done boss !" })
})
module.exports = router