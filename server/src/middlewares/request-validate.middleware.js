
const apiResponseHelper = require('./../helpers/api-response.helper');

exports.validate = (schema) => (req, res, next) => {
    const {
        error
    } = schema.validate(req.body);

    if (error) {
        const { details } = error;
        const message = details.map(i => i.message).join(',');
        console.log("error", message);
        return apiResponseHelper.badRequestResponseErrorWithData(res, "Bad request! " + message);
    } else {
        next();
    }
};