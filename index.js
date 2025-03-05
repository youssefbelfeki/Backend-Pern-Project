
const express = require('express')
const bookRouter = require('./app/routes/book.routes')
const { connect } = require('./app/config/database')
const app = express()

app.use(require('body-parser').json())

app.get('/', (req, res) => {
    res.send('Hello from Express!');
})

connect()
app.use(bookRouter)
app.listen(3000, () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
