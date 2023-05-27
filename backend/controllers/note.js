const Note = require('../model/Note')

exports.create = async (req, res, next) => {
    const {title, content} = req.body
    // if(!title || !content) return res.status(400).send('Please fill out all fields') TODO: implement title when full note card will be added
    try{
        const noteObj = {title, content}
        const note = await new Note(noteObj).save()
        return res.status(200).json(note)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

exports.get = async (req, res, next) => {
    try {
        const note = await Note.findById(req?.note?._id)
        if(!note) return res.status(400).send('Note not found')
        return res.status(200).json({...note})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// TODO: note update