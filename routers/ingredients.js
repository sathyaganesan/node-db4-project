const express = require("express");
const Ingredients = require("../model/ingredients");

const router = express.Router();

router.get("/ingredients", async (req, res, next) => {
    try {
        const ingredients = await Ingredients.find()
            res.json(ingredients)
    } catch(err) {
        next(err);
    }
})

router.get("/ingredients/:id", async (req, res, next) => {
    try {
        const ingredients = await Ingredients.findById(req.params.id)
        if (!ingredients) {
            return res.status(404).json({
                Message: "Ingredients not found",
            })
        }
        res.json(ingredients)
    } catch (err) {
        next(err);
    }
})

module.exports = router;