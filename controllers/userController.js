import validator from "validator";
import bcrypt from "bcrypt"
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";


const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

const loginUser = async (req, res) => {

}

const registerUser = async (req, res) => {

    try {
        const { name, email, password } = req.body;
        const exists = await userModel.findOne({ email })
        if (exists) {
            return res.json({ success: false, massage: "User Already exists" })
        }
        if (!validator.isEmail(email)) {

            return res.json({ success: false, massage: "Please Enter a valid email" })
        }
        if (password.length < 8) {

            return res.json({ success: false, massage: "Please enter a strong Password" })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })
        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({ success: true, token })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }

}

const adminLogin = async (req, res) => {

}

export { loginUser, registerUser, adminLogin }