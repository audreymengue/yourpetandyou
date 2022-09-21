const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const memoriesSchema = new Schema({
    username : { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true
});

const Memories = mongoose.model("User", memoriesSchema);

module.exports = Memories;

