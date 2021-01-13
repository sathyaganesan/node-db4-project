const express = require("express");

const Recipe_Ingredients = require("../model/recipe_ingredients");

const router = express.Router();


router.get("/recipe/:id/ingredients", async (req, res, next) => {
    try {
        const ingredients = await Recipe_Ingredients.getShoppingList(req.params.id)
        // if (!req.params.id) {
        //     return res.status(404).json({
        //         Message: "Recipe with specific id does not exsist"
        //     })
        // }
        res.json(ingredients);
    } catch (err) {
        next(err);
    }
})

module.exports = router;