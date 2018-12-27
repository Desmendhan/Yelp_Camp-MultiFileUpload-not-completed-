var mongoose = require("mongoose");

var campgroundSchema = new mongoose.Schema({
    name:String,
    image:[String],
    video:String,
    description:String,
    price:String,
    location:String,
    lat:Number,
    lng:Number,
    author:{
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        username: String
    } ,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

module.exports =  mongoose.model("Campground", campgroundSchema);