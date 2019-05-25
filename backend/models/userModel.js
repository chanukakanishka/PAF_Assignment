const seq = require('sequelize');
const db = require('../helper/dbconnection');

const User = db.seq.define('user',
    {
        email: {
            type: seq.STRING
        },
        Name: {
            type: seq.STRING
        },
        
        Address: { 
            type : seq.STRING
        },
        PhoneNumber: {
            type: seq.STRING
        },
        type: {
            type: seq.STRING
        },
        password: {
            type:seq.STRING
        }


    },
    {
        timestamps: false
    }
);

User.sync({force:false});
module.exports = User;