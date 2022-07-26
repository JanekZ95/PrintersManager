import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/userModel.js';

dotenv.config();

export const signIn = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!username || !password || !user || user.password != password) {
            res.status(401).send('Invalid username or password');
        } else {
            const token = jwt.sign(
                {
                    userInfo: {
                        username: user.username,
                        role: user.role,
                    },
                },
                process.env.TOKEN_SECRET,
                { expiresIn: '1h' }
            );

            res.status(200).json({
                username,
                token,
            });
        }
    } catch (err) {
        next(err);
    }
};
