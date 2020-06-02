const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Сервер запущен");
});

module.exports = router;