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

// export the router
module.exports = router;
