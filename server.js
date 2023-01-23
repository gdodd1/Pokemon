const express = require('express')
const { env } = require('process')
const app = express()

app.get('/', (req, res) => {
    res.render('index.ejs',{})
})

app.listen(3000 || process.env.PORT, () => {
    console.log('Server is running on port 3000, https://localhost:{process.env.PORT}')
})