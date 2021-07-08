const mongooose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const env = require('dotenv');


const userpostSchema = new mongooose.Schema({
    orgname: {
        type: String,
        required:true
    },
    jobtitle: {
        type: String,
        required:true
    },
    salary: {
        type: Number,
        required:true
    },
    location: {
        type: String,
        required:true
    },
})




const Job = mongooose.model('JOB', userpostSchema);
module.exports = Job;
