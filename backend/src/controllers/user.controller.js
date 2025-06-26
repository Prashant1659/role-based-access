const User = require('../models/user.models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = async (req,res) => {
    // console.log(req);
    try {
        const {name,password,email,role='user'} = req.body;
        if(!email || !password) res.status(400).json({message:"Email and password can't be empty"});
        const hassedPass = await bcrypt.hash(password,10);
        const user = await User.create({
            name,
            email,
            password:hassedPass,
            role
        });
    
        const savedUser = await User.findOne(user._id).select("-password");
    
        if(!savedUser) res.status(500).json("Something went wrong while registering user, try again");
    
        res.status(200).json(savedUser);
    } catch (error) {
        console.log('error in registering user',error.message);
        res.status(400).json({message:error.message});
    }
}

const loginUser = async(req,res) => {
    try {
        const {email,password} = req.body;
        if(!email || !password) res.status(400,"Email and password required");
    
        const user = await User.findOne({email});
        
        if(!user) res.status(400,"User not found, try using correct email");

        const checkPass = await bcrypt.compare(password,user.password);
    
        if(!checkPass) {
            res.status(401).json("Incorrect Password");
            return;
        }
        const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
        );
        res.status(200).json({token});
    } catch (error) {
        console.log('Error in login',error.message);
        res.status(400).json({message:error.message});
    }
}

module.exports = {
    registerUser,
    loginUser,
}