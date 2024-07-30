const constants = require("../constants");

const errorHandler = (err, req, res, next) => {
    // Check if headers have already been sent
    if (res.headersSent) {
        return next(err); // Pass the error to the default Express error handler
    }

    // Set status code from the response or default to 500
    const statusCode = res.statusCode ? res.statusCode : 500;

    // Handle different types of errors
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.status(statusCode).json({
                title: "Validation Failed",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.NOT_FOUND:
            res.status(statusCode).json({
                title: "Not Found",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.UNAUTHORIZED:
            res.status(statusCode).json({
                title: "Unauthorized",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.FORBIDDEN:
            res.status(statusCode).json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants.SERVER_ERROR:
            res.status(statusCode).json({
                title: "Server Error",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        default:
            res.status(statusCode).json({
                title: "Error",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
    }
};

module.exports = errorHandler;
