const express = require("express")
const router = express.Router()
const { getAllRecipes, getSingleRecipe, createRecipe, updateRecipe, deleteRecipe } = require("../controllers/recipe.controller")

router.get("/", getAllRecipes)
router.get("/:id", getSingleRecipe)
router.post("/", createRecipe)
router.put("/:id", updateRecipe)
router.delete("/:id", deleteRecipe)

module.exports = router