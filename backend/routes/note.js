const Router = require('express')
const noteController = require('../controllers/note')
const router = Router({strict: true})

router.post('/note', noteController.create)
router.get('/note', noteController.get)

module.exports = router