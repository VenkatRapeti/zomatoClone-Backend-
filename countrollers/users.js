const user = require("../models/users");

exports.userRegister = (req, res) => {
    const { email, password, name, number } = req.body;
    const newUserDetails = new user({
        email,
        password,
        name,
        number
    })
    newUserDetails.save().then(response => {
        res.status(200).json({
            message: "User Registered successfully",
            user: response
        })
    })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}



exports.userLogin = (req, res) => {
    const { email, password } = req.body
    user.findOne({
        email,
        password
    }).then(response => {
        if (response) {
            res.status(200).json({
                message: 'User Validated successfully',
                isAuthenticated: true,
                user: response
            })
        }
        else {
            res.status(200).json({
                message: 'User not Validated successfully',
                isAuthenticated: false,
                user: response
            })
        }

    }).catch(err => {
        res.status(500).json({ error: err })
    })
}