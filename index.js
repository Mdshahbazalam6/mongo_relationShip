const mongoose = require("mongoose")

const BlogSchema = new mongoose.Schema({
    _id :{
        type:Number,
        required:true
    },
    Title:{
        type:String,
        required:true
    },
    Body:String,
    Category_ids:[Object]

})

const BlogModel = mongoose.model("blog",BlogSchema)

const userSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    social_profile:Object,
    Addresses:[Object],
    Blog_id :[Object],

})

const userModel = mongoose.model("user",userSchema)

const CategorySchema = ({
    _id:Number,
    Name:{
        type:String,
        required:true
    }
})

const CatetgoryModel = mongoose.model("category",CategorySchema)

const CommentsSchema = new mongoose.Schema({
    _id: ObjectId(),
   Blog_id: {
    type:mongoose.Types.ObjectId,
    ref:BlogModel
   },
   User_id: {
    type:mongoose.Types.ObjectId,
    ref:userModel
   },
   Message:{
    type:String,
    required:true
   },
   Rating:Number

})

const CommentModel = mongoose.model("comment",CommentsSchema)