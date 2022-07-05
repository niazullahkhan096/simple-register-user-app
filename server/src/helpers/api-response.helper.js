
const response = (res, status, code, message, data={}) => {
    return res.status(status).json({
        code: code,
		message: message,
		data: data
    });
};

exports.successResponse = (res, message) => {
    return response(res, 200, 1, message);
};

exports.successResponseWithData = (res, message, data) => {
    return response(res, 200, 1, message, data);
};

exports.errorResponse = (res, message) => {
    return response(res, 500, 0, message);
};

exports.notFoundResponse = (res, message) => {
    return response(res, 404, 0, message);
};

exports.badRequestResponseErrorWithData = (res, message, data) => {
    return response(res, 400, 0, message, data);
};

exports.unauthorizedResponse = (res, message) => {
    return response(res, 401, 1, message);
};