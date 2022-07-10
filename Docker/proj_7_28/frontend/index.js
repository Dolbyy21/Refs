const express = require('express');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');



const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({ type: 'text/html' }));

app.get('/' , (req,res) => {
    res.send("Hello World, Iam running successfully");
})

app.post('/index.js', (req,res) => {
    const name = req.body.name;
    res.send('Post method succesfull')
    console.log(name);
})

const PORT = process.env.port || 3000;

app.listen(PORT, () => {
    console.log("Server running successfully")
})