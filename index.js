const express = require('express')
let ejs = require('ejs');

const app = express()
const port = 3000

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})