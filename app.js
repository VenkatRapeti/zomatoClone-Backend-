const express = require("express");
const mongoose = require("mongoose");
const router = require("./Router/index");
const cors = require("cors");

const app = express();



const localDBUrl = 'mongodb://127.0.0.1:27017/zomato_clone';


app.use(cors());
app.use(express.json());
app.use('/api', router);


mongoose.set('useCreateIndex', true);

mongoose.connect(process.env.ATLAS_DB, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(response => {
        app.listen(process.env.PORT, () => {
            console.log("server")
        })
    }).catch(err => console.log(err));
