const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/regestrationdb");


// mongoose.connect("mongodb://127.0.0.1:27017/regestrationdb",{
// }).then(() => {
//     console.log("connectionis sucessfully done")
// }).catch((e) =>{
//     console.log("no connection");

// })
