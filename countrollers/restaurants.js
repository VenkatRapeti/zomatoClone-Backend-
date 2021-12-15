const Restaurants = require('../models/restaurants');

exports.getRestaurantDetailsById = (req, res) => {
    const { restId } = req.params;
    Restaurants.findById(restId)
        .then(response => {
            res.status(200).json({
                message: "Restaurant Fetched Succesfully",
               restaurants: response
           })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
        
}

exports.getRestaurantByLocId = (req, res) => {
    const { locId } = req.params;
    Restaurants.find({ location_id: locId }).then(response => {
        res.status(200).json({
            message: 'Restaurants fetched successfully',
            restaurants: response
        })
    }).catch(err => {
        res.status(500).json({ error: err })
    })
}


exports.filterRestaurants = (req, res) => {
    let { mealtype, location, cuisine, lcost, hcost, page, sort, RestPerPage } = req.body;

    sort = sort ? sort : 1;
    page = page ? page : 1;

    RestPerPage = RestPerPage ? RestPerPage : 2;

    let startIndex = page * RestPerPage - RestPerPage;
    let endIndex = page * RestPerPage;

    let filterObj = {};

    mealtype && (filterObj["mealtype_id"] = mealtype);
    location && (filterObj["location_id"] = location);
    cuisine && (filterObj["cuisine_id"] = { $in: cuisine });
    lcost && hcost && (filterObj["min_price"] = { $gte: lcost, $lte: hcost });

    Restaurants.find(filterObj).sort({ min_price: sort })
        .then(response => {
            const filteredResponse = response.slice(startIndex, endIndex);
            res.status(200).json({
                message: "Restaurants Fetched Succesfully",
                restaurants: filteredResponse,
                forPagination : response
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}



