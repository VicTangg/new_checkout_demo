// @desc   Get goals
// @route  GET /api/goals
// @access Private
const getGoals =  (req, res) => {
    res.status(200).json({
        message: "Get goals"
    })
}

const setGoal = (req, res) => {
    res.status(200).json({
        message: "Set goals"
    })
}

module.exports = {
    getGoals, setGoal
}