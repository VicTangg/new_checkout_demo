const asyncHandler = require('express-async-handler')

// @desc   Get goals
// @route  GET /api/goals
// @access Private
const getGoals =  asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "Get goals"
    })
})

const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    console.log(req.body)
    res.status(200).json({
        message: "Set goals"
    })
})

module.exports = {
    getGoals, setGoal
}