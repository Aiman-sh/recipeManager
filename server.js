const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) =>{
    res.render('index')
});


app.set('view engine', 'ejs');
app.listen(3001,()=>{
    console.log('server is running on port 3001')
})
