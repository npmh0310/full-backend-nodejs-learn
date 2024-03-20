const express = require('express')
const path = require('path')
const app = express()
const port = 8080

// khai báo route 
app.get('/', (req, res) => {
    res.send('Hello World!') // trả về 1 chuỗi spring
})


app.get('/test', (req, res) => {
    res.render('sample');
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})