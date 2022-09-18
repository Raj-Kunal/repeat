const mongoose = require('mongoose')
exports.detailsScehma = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    responses: {
        type: [String],
        required: true
    },
    name: {
        type: String,

    },
    transactions: {
        type: Number,
        required: true
    },
    callDuration:{
        type:String,
        required:true
    }
         
},
{
    timestamps:true
}
)