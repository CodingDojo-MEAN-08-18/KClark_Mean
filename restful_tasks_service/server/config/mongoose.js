// server/config/mongoose.js

// Note: this was confusing me so I referred to the work of 
// a classmate, Amanda Demetrio, to get the syntax right:
// https://github.com/amandademetrio/RestfulTaskAngularExpressNode/blob/master/server/config/mongoose.js

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