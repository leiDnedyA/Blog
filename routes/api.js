const express = require("express");
const router = express.Router();
const articleRoute = require("./articles");

router.use('/articles', articleRoute);

router.get('/', (req, res) => {
    res.json({message: "please try /articles"})
});

router.post('/', (req, res) => { });

module.exports = router;