const MealTypes = require("../models/mealtypes");

exports.getMealTypes = (req, res) => {
    MealTypes.find().then(response => {
        res.status(200).json(
            {
                message: 'mealtypes fetched successfully',
                Mealtypes: response
            }
        )
    }).catch(err => {
        res.status(500).json({
            error: err
        })
    })
}