'use strict'
const express= require('express');
const PORT = 300;

// creer une  application express
const app= express();
const genererPage= require('./essai.index-get.js')

app.get('/',async(req, res) =>{
    const indexHtml =  await genererPage();
    res.send(indexHtml);
})

app.listen(PORT, ()=>{
    console.log(`le serveur est demarré :http://localhost:${PORT}`);
})