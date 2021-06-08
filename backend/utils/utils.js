import jwt from 'jsonwebtoken';

export const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
};
export const getDayinMm = (day) => 24 * 60 * 60 * 1000 * day;
