import mongoose from "mongoose";
const Schema= mongoose.Schema

const userinfoSchema= new Schema({
    username: {type:String,required:true},
    pwhash:   {type:String,required:true},
})

const UserInfo=mongoose.model('user',userinfoSchema)

export default UserInfo     