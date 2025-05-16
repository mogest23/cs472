const errorHandler = ((error, _, res, __) => {
    const status = error.statusCode || 500;
    const message = error.message || 'Server error.';

    res.status(status).json({ error: { message: message, code: status } });
});

const endpointNotFoundError = async (req, res) => {
    next({ statusCode: 404, message: 'ROUTE_NOT_FOUND' });
}

module.exports = { errorHandler, endpointNotFoundError };