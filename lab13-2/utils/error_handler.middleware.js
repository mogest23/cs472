const errorHandler = (error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message || 'Server error.';

    res.status(status).json({ error: { message: message, code: status } });
};

const endpointNotFoundError = (req, res, next) => {
    const error = { statusCode: 404, message: 'ROUTE_NOT_FOUND' };
    next(error);
}

exports.API_ENDPOINT_NOT_FOUND_ERR = "Api endpoint not found";

exports.SERVER_ERR = "Something went wrong";

exports.AUTH_HEADER_MISSING_ERR = "Auth header is missing";

exports.AUTH_TOKEN_MISSING_ERR = "Missing token";

exports.JWT_DECODE_ERR = "Invalid token";

module.exports = { errorHandler, endpointNotFoundError };