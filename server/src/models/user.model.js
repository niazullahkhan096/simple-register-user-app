const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    active: { type: Boolean, required: true, default: 1 }
}, { timestamps: true });

UserSchema.statics.toResponse = (user) => {
    return {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        active: user.active
    };
};

const model = mongoose.model('user', UserSchema);

module.exports = model;