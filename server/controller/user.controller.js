const userModel = require("../model/user.model");
const bcrypt = require("bcrypt");
require("dotenv").config();

const signUp = async (req, res) => {
  const { name, email, password, phoneNumber } = req.body;
  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });
    const hashedPassword = await bcrypt.hash(password, 8);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
    });
    await newUser.save();

    res
      .status(201)
      .json({ message: "User registered successfully", newUser: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { signUp };
