const mongoose = require('mongoose');

const DBConnection = mongoose.connect('mongodb://127.0.0.1:27017/DEV_CHATTER_APP/')
                            .then((success)=>{
                                console.log('Chatter API is connected to database...');
                            })
                            .catch((error)=>{
                                console.log('Database connection failed : ',error);
                            });

module.exports = DBConnection;