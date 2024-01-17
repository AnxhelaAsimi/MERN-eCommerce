import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '30d' });

    //set jwt as http only cookie
    res.cookie('jwt', token, { httpOnly: true, secure: process.env.NODE_ENV !== 'development', sameSite: 'strict', maxAge: 1000 * 60 * 60 * 24 * 30});

}

export default generateToken;