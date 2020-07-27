const express = require("express");
const router = express.Router();

router.post("/login", auth.login);
router.post("/register", auth.register);

router.get("*", function (req, res, next) {
  res.status(404).send("Route Not Found. Valid Routes - /register, /login");
});

module.exports = router;
