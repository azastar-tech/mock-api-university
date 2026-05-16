const express = require("express");
const connectDB = require("./src/config/db");
const app = express()

const PORT = process.env.PORT || 3002

app.use(express.json())
    .use("/seed", require("./src/seeds/route"))
    .use("/", require("./routes"));

connectDB()
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})