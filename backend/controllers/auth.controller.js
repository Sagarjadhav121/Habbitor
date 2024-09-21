import User from "../models/user.model.js";
import bcrypt from "bcrypt";
export const register = async (req, res, next) => {
  const { username, email, password } = req.body;
  const validateEntry = await User.findOne({ email: email });
  if (validateEntry) {
    return res.status(409).json({
      error: "Conflict",
      message: "User with this email already exists.",
    });
  }
  //hashing password (encryption)
  const hashedPassword = await bcrypt.hashSync(password, 10); // 10 is salt avalue
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("user created successfully");
  } catch (e) {
    next(e);
  }
};
