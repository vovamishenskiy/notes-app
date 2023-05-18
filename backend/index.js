const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Spring Notes homepage</h1>')
})

const port = 3010
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})