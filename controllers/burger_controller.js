const express = require("express");
var burger = require("../models/burger");

var router = express.Router();


router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        console.log(data);
        res.render(data);
    });
});

router.post("/api/insert", function (req, res) {
    let burgerName = req.body.burgerName;
    let ifDevoured = req.body.ifDevoured;

    burger.insertOne(burgerName, ifDevoured, function (data) {
        console.log(data);
        res.render(data);
    });
});

router.put("/api/update", function (req, res) {
    let burgerName = req.body.burgerName;
    let ifDevoured = req.body.ifDevoured;

    burger.updateOne(burgerName, ifDevoured, function (data) {
        console.log(data);
        res.status(200).end();
    });
});

module.exports = router;