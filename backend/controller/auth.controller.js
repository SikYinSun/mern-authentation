import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

// req is the data that we are getting from the client
// res is the data that we sent back to the client
export const signup = async (req, res) => {
  const {username, email, password} = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({username, email, password : hashedPassword});
  try {
    await newUser.save(); // telling JS to stay in this code until the result happen
    res.status(201).json({message: "User created successfully"});
  } catch (error) {
    res.status(500).json(error.message);
  }
};