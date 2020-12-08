const express = require("express");
const bodyParser = require("body-parser");


const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json());


app.post('/bodyexample', (req, res) => {
    console.log(req.body)
})

app.post('/v1/', (req, res) => {
    res.send("Got a post request")
})

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})

app.use('/songs', express.static('public/songs'))

app.use('/static', express.static('public/static'))
// app.use(express.static('public'))
// app.use('/', express.static('public'))

app.listen(port, () => {
    console.log('Express app is listening at the http://localhost:', port)
})
