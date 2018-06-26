const express = require('express');
const recipeRouter = express.Router();
const Recipe = require('../models/recipe');

recipeRouter.get('/', (req, res) => {
    Recipe.find((err, recipe) => {
        if(err) return res.status(500).send(err);
        return res.status(200).send(recipe);
    })
})

recipeRouter.post('/', (req, res) => {
    const newRecipe = new Recipe(req.body)
    newRecipe.save((err, newRecipe) => {
        if(err) return res.status(500).send(err);
        return res.status(201).send(newRecipe);
    })
})

recipeRouter.get('/:id', (req, res) => {
    Recipe.findById({_id: req.params.id }, (err, recipe) => {
        if(err) return res.status(500).send(err);
        return res.status(201).send(recipe);
    })
})

recipeRouter.put('/:id', (req, res) => {
    Recipe.findByIdAndUpdate(
        {_id: req.params.id },
        req.body,
        {new: true},
        (err, updateRecipe) => {
            if(err) return res.status(500).send(err);
            return res.send(updateRecipe);
        }
    )
})

recipeRouter.delete('/:id', (req, res) => {
    Recipe.findByIdAndRemove(
        req.params.id,
        (err, deletedRecipe) => {
            if(err) return res.status(500).send(err)
            return res.send({message: "recipe has been succesfully deleted", deletedRecipe})
        }
    )
})

module.exports = recipeRouter;