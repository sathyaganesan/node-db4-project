const express = require("express");
const Recipe = require("../model/recipe");

const router = express.Router();

router.get("/recipe", async (req, res, next) => {
    try {
        const recipe = await Recipe.getRecipes()
        res.json(recipe)
    } catch (err) {
        next(err);
    }
})

router.get("/recipe/:id", async (req, res, next) => {
    try {
        const recipe = await Recipe.getRecipeById(req.params.id)
        if (!recipe) {
            return res.status(404).json({
               Message: "Recipe Not found",
           }) 
        }
        res.json(recipe);
    } catch (err) {
        next(err);
    }
})

router.get("/recipe/:id/instruction", async (req, res, next) => {
    try {
        const instruction = await Recipe.getInstructions(req.params.id)
        res.json(instruction);
    } catch (err) {
        next(err);
    }
})

module.exports = router;