const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");


const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        //Check empty fields
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill all fields"
            });
        };

        //Check Existing User
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        //Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        //Create User
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })

        user.password = undefined

        res.status(201).json({
            success: true,
            message: "Registerd Successfully",
            user
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and Password are required"
            })
        }
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid Email",
            });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if (!isPasswordMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid password",
            });
        }

        const token = jwt.sign(
            {
                userId:user._id,
                role:user.role,
            },
            process.env.JWT_SECRET,
            {
                expiresIn : "7d"
            }
        );

        user.password = undefined;

        return res.status(200).json({
            success:true,
            message:"Login Successful",
            token,
            user
        })

    } catch (error) {
        return res.status(500).json({
      success: false,
      message: error.message,
    });
    }
}
module.exports = {
    registerUser,
    loginUser
}