import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).send();
    } else {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
            if (err) return res.sendStatus(403);
            req.user = decoded.userInfo.username;
            req.role = decoded.userInfo.role;
            next();
        });
    }
};
