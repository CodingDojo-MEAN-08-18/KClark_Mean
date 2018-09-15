// server/config/mongoose.js

module.exports = function(db) {

    const mongoose = require('mongoose'),
        path = require('path'),
        fs = require('fs'),
        models_path = path.join(__dirname, './../models')

    mongoose.connect(db, { useNewUrlParser: true });

    fs.readdirSync(models_path).forEach(function(file) {
    if(file.endsWith('.js')) {
        require(models_path + '/' + file);
       }
    })

}