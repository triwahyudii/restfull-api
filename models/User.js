const mongoose = require("mongoose");

const User = mongoose.Schema({
    id:{
        type: Number,
        require: true
    },
    kota_id:{
        type: Number,
        require: true
    },
    nama:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model("User", User);