var mongoose = require("mongoose");

var artistSchema = new mongoose.Schema({
    name: String,
    logo: String,
    blurb: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }]
});

module.exports = mongoose.model("Artist", artistSchema);