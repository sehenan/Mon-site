'use strict'
const {readFile} = require('fs');
const{promisify} = require('util');
const readFileAsync = promisify(readFile);

const readOption = {encoding: 'UTF-8'};
const index_url = "C:\monSite\page\monSite.html";

module.exports = async() =>{
    const contenu= await readFileAsync(index_url, readOption);

    return contenu;
}