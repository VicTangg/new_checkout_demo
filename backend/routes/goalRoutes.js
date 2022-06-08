const express = require('express')
const router = express.Router()
const { getGoals, setGoal} =  require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoal)

router.put('/:id', (req, res) => {
    res.status(200).json({
        message: `Update goal ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
    res.status(200).json({
        message: `Delete goal ${req.params.id}`})
})

module.exports = router