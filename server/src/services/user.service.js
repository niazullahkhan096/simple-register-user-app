
const bcrypt = require('bcrypt');
const UserModel = require('../models/user.model');

const service = {

    findByEmail: async (email) => {
        return await UserModel.findOne({ email: email });
    },

    save: async (user) => {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(user.password, salt);
        const userModel = new UserModel({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: hashPassword,
            active: 1
        });
        const savedUser = await userModel.save();
        return UserModel.toResponse(savedUser);
    }
};

module.exports = service;