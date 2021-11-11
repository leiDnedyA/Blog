const express = require("express");
const router = express.Router();
const Article = require("../models/Article");

router.get('/', async (req, res) => {
    console.log(`GET REQUEST AT: ${req.originalUrl}`)
    try {
        const posts = await Article.find().limit(12);
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
        console.log("couldn't find articles")
    }

})

router.post('/', async (req, res) => {

    const article = new Article({
        title: req.body.title,
        bodyText: req.body.bodyText,
        author: req.body.author,
        date: req.body.date
    })

    console.log(article)

    try {
        const savedArticle = await article.save();
        res.json(savedArticle);
    } catch (err) {
        res.json({message: err});
    }
})

router.get('/:articleId', (req, res) => { });


module.exports = router;