const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            unique: true,
            trim: true,
            required: [true, 'Fill out the email'],
        },
        password: {
            type: String,
            trim: true,
            required: [true, 'Fill out the password']
        }
    },
    {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}}
)

module.exports = mongoose.model('User', userSchema)