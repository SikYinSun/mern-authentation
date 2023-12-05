import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username : {
    type: String,
    required: true, // require having a username to save into database
    unique: true, // unique username, cannot have duplicate name
  },
  email : {
    type: String,
    required: true, 
    unique: true, 
  },
  password : {
    type: String,
    required: true, 
  }
}, {timestamps: true}); // 2 extra information, time of creation and time of edition

const User = mongoose.model('User', userSchema);

export default User;