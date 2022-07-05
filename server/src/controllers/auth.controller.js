

const apiResponseHelper = require('./../helpers/api-response.helper');
const services = require('./../services/index');

module.exports = {
    register: async (req, res) => {
        try {
            const {
                firstName,
                lastName,
                email,
                password
            } = req.body;

            const isExists = await services.userService.findByEmail(email);
            if (isExists) {
                return apiResponseHelper.badRequestResponseErrorWithData(res, "User already exists!");
            }

            const user = await services.userService.save({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            });

            return apiResponseHelper.successResponseWithData(res, "Registered successfully!", user);
        } catch (error) {
            console.log(error);
            return apiResponseHelper.errorResponse(res, "Something went wrong!");
        }
    }
};