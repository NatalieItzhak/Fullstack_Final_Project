const ModelUse = require('../models/model');

const getPost = async (req, res) => {
    const body = req.body;
    const newPost = new ModelUse(body);
    try {
        await newPost.save();
        res.status(200).json(newPost)
    } catch (error) {
        res.status(404).json({ message: Error.message })
    }
}

const creatPost = async (req, res) => {
    try {
        const ModelUse = await ModelUse.find();
        console.log(ModelUse);
        res.status(200).json(ModelUse)
    } catch (error) {
        res.status(404).json({ message: Error.message })
    }
}

module.exports = {
    getPost,
    creatPost
}