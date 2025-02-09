const mongoose = require('mongoose');

// name or Id of sender
// what is content
// reference to the chat


const messageModel = mongoose.Schema({
    sender: {type:mongoose.Schema.Types.ObjectId, ref: "User"},
    content: {type: DOMStringList, trim: true},
    chat:{type: mongoose.Schema.Types.ObjectId, ref: "Chat"},
},
{
    timestamps: true,
}
);

const Message = mongoose.model("Message", messageModel);

module.exports = Message;