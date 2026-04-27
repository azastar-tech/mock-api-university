const express = require("express")
const app = express()

const PORT = process.env.PORT || 3002

app.use(express.json())
    .use("/", require("./routes"));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})