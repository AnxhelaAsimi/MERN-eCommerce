import jwt from 'jsonwebtoken';
import asycnHandler from './asyncHandler.js';
import User from '../models/userModel.js';

//protect routes
const protect = asycnHandler(async (req, res, next) => {
    let token;
    //Read the JWT from the cookie
    token = req.cookies.jwt;

    if(token){
        try{
            //verify the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            //console.log(decoded);
            //get the user details
            req.user = await User.findById(decoded.id).select('-password');
            next();
        }
        catch(error){
            console.error(error);
            res.status(401);
            throw new Error('Not authorized, token failed');
        }
    }
    else{
        res.status(401);
        throw new Error('Not authorized, no token');
    }

});


//Admin middleware
const admin = (req, res, next) => {
    if(req.user && req.user.isAdmin){
        next();
    }
    else{
        res.status(401);
        throw new Error('Not authorized as an admin');
    }
};

export { protect, admin }