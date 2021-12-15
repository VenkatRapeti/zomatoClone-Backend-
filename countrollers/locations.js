const locations = require('../models/locations');

exports.getLocations = (req, res) => {
    locations.find().then(response => {
        res.status(200).json(
            {
                message: 'locations fetched successfully',
                locations: response
            }
        )
    }).catch(err => {
        res.status(500).json({
            error: err
        })
    })

}