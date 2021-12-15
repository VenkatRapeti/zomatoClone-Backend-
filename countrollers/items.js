const items = require("../models/items");

exports.getItemsByResId = (req, res) => {
    const { resId } = req.params;
    items.find({ restaurantId: resId })
        .then(response => {
            res.status(200).json({
                message: 'Restaurant fetched successfully',
                restaurants: response
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}
