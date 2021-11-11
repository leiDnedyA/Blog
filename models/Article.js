const mongoose = require("mongoose");

const ArticleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    bodyText: {
        type: String,
        required: true
    },
    author: {
        type: String, 
        defualt: "Ayden"
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Articles', ArticleSchema);