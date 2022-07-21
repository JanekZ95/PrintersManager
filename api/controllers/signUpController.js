import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import dotenv from "dotenv";

dotenv.config();

export const signUp = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username: username });

    if (existingUser) {
      res.status(400).send(`Username ${username} already exists`);
    } else {
      const user = await User.create({
        username: username,
        password: password,
        role: "User",
      });

      const token = jwt.sign(
        {
          userInfo: {
            username: user.username,
            role: user.role,
          },
        },
        process.env.TOKEN_SECRET,
        { expiresIn: "1h" }
      );

      res.status(200).json({
        username: username,
        token: token,
      });
    }
  } catch (err) {
    next(err);
  }
};
