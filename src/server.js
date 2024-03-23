const express = require('express')
const path = require('path')
// Config dotenv để chạy file .env
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000; // nếu chưa khai báo port thì lấy port = 3000
const hostname = process.env.HOST_NAME


// config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// khai báo route 
app.get('/', (req, res) => {
    res.send('Hello World!') // trả về 1 chuỗi spring
})

app.get('/test', (req, res) => {
    res.render('sample');
})


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})