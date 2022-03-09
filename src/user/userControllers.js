
const jwt = require("jsonwebtoken");
const User = require("./userModel");

exports.addUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        const token = await jwt.sign({_id: newUser._id}, process.env.SECRET);
        res.status(200).send({user: newUser.username, token});
    } catch (error) {
        console.log(error);
        res.status(500).send({err: error.message});
    }
};

exports.login = async (req, res) => {
    try {
        res.status(200).send({ user: req.user.username });
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
}
exports.updatePassword = async (req, res) => {
    try {
        req.user
        req.body.password
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
};


exports.decrypPassword = async (req, res, next) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
}