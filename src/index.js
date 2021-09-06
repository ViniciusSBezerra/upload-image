const express = require('express');
const multer = require('multer');
const app = express();

const multerConfig = require('./middlewares/upload');

app.use(express.json())

app.post('/upload',  multer(multerConfig).single('image'), (req, res)=>{

    return res.json ({
        data: req.file
    })


})

app.listen(3333)