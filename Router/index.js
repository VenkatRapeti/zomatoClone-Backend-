const express = require("express");

const locationsCountroller = require("../countrollers/locations");
const mealtypesCountroller = require("../countrollers/mealtypes");
const restaurantsCountroller = require("../countrollers/restaurants");
const usersCountroller = require("../countrollers/users");
const itemsCountroller = require("../countrollers/items");
const paymentCountroller = require("../countrollers/payment");

const route = express.Router();

route.get('/locations', locationsCountroller.getLocations);
route.get('/mealtypes', mealtypesCountroller.getMealTypes);
route.get('/restaurants/:locId', restaurantsCountroller.getRestaurantByLocId);
route.post('/register', usersCountroller.userRegister);
route.post('/login', usersCountroller.userLogin);
route.post('/filter', restaurantsCountroller.filterRestaurants);
route.get('/restaurant/:restId', restaurantsCountroller.getRestaurantDetailsById);
route.get('/menuitems/:resId', itemsCountroller.getItemsByResId);

route.post('/payment', paymentCountroller.payment);
route.post('/callback', paymentCountroller.callback);

module.exports = route;