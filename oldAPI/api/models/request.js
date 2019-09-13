'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ContactSchema = new Schema({
  
    userId: {
        type: String,
        required: " required"
    },
    
    servicemanId: {
        type: String,
        required: " required"
    },
	
    budget: {
        type: String,
        required: " required"
    },
    
    deadline: {
        type: String,
        required: " required"
    },
     
    description:{
        type: String,
        required: " required"
    },

    status:{
        type: String,
        
    }
	}, {
    versionKey: false
	
});



module.exports = mongoose.model('requests', ContactSchema);