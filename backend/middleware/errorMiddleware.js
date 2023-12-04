const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

const errorHandler = (err, req, res, next) => {
    // Sometimes we get a 200 status code even though there is an error
    // We want to make sure we get a 500 status code if there is an error
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;
    
    // Check for mongoose bad object id
    if(err.name === 'CastError' && err.kind === 'ObjectId'){
        message = 'Resource not found';
        statusCode = 404;
    }

    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};

export {notFound, errorHandler };
