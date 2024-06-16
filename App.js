const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('express test')
})

app.listen(3013, () => {
    console.log('server is running')
})