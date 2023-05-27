const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Fill out the title"],
        },
        content: {
            type: String,
        },
        important: {
            type: boolean,
            default: false
        }
    },
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
)

module.exports = mongoose.model("Note", noteSchema)