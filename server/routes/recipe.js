const express = require('express');
const recipeRouter = express.Router();
const Recipe = require('../models/recipe');

recipeRouter.get('/', (req, res) => {
    Recipe.find({user: req.user._id}, (err, recipes) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(recipes);
    })
})

recipeRouter.post('/', (req, res) => {
    const newRecipe = new Recipe(req.body);
    newRecipe.user = req.user._id;
    newRecipe.save((err, newRecipe) => {
        if (err) return res.status(500).send(err);
        return res.status(201).send(newRecipe);
    })
})

recipeRouter.get('/:id', (req, res) => {
    Recipe.findOne({ _id: req.params.id, user: req.user._id }, (err, recipe) => {
        if(err) return res.status(500).send(err);
        if (!recipe) return res.status(404).send("No recipes found.")
        return res.status(201).send(recipe);
    })
})

recipeRouter.put('/:id', (req, res) => {
    Recipe.findOneAndUpdate(
       {_id: req.params.id, user: req.user._id},
       req.body,
        {new: true},
        (err, updatedRecipe) => {
            if (err) return res.status(500).send(err);
            return res.send(updatedRecipe);
        }
    )
})

recipeRouter.delete('/:id', (req, res) => {
    Recipe.findOneAndRemove(
        {_id: req.params.id, user: req.user._id},
        (err, deletedRecipe) => {
            if (err) return res.status(500).send(err)
            return res.send({message: "recipe has been succesfully deleted", deletedRecipe})
        }
    )
})

module.exports = recipeRouter;