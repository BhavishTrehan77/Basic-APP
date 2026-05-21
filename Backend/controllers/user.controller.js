const ServiceData = require('../services/user.services')
const User = require('../models/user.models')

const signup = async(req, resp) => {

    const data = await ServiceData.Signup(req.body)

    resp.json(data)
}

const login = async(req, resp) => {

    const data = await ServiceData.Login(
        req.body.email,
        req.body.password
    )

    resp.json(data)
}

const dashboardController = async (req, res) => {

    try {

        const user = await User.findById(
            req.user.id
        ).select("-password");

        res.json({
            success: true,
            message: "Dashboard accessed",
            user
        });

    } catch (error) {

        res.json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    signup,
    login,
    dashboardController
}