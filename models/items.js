const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    restaurantId: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('items', itemsSchema, 'items');