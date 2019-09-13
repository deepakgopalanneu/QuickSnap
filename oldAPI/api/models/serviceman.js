'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ServicemanSchema = new Schema({
  
    firstname: {
        type: String,
        required: " required"
    },
    
    lastname: {
        type: String,
        required: " required"
    },

    profession: {
        type: String,
        required: " required"
    },
	
    email: {
        type: String,
        required: " required"
    },
    
    address: {
        type: String,
        required: " required"
    },
     
    city:{
        type: String,
        required: " required"
    },

    state:{
        type: String,
        required: " required"
    },

    zipcode:{
        type: String,
        required: " required"
    },

    password:{
        type: String,
        required: " required"
    },
    
	}, {
    versionKey: false
	
});



module.exports = mongoose.model('serviceman', ServicemanSchema);