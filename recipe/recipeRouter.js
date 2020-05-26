const express = require("express");

const recipe = require("./recipeDb");

const router = express.Router();

// The endpoints
router.get("/", (req, res) => {
  recipe
    .getRecipes()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message, stack: err.stack });
    });
});

router.get("/:id/shoppingList", (req, res) => {
  const { id } = req.params;
  recipe
    .getShoppingList(id)
    .then((meal) => {
      if (meal) {
        res.status(200).json(meal);
      } else {
        res.status(404).json({ message: `error getting list for this recipe` });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error.message, stack: error.stack });
    });
});

// export the router
module.exports = router;
