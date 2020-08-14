const express = require("express");
var burger = require("../models/burger");

var router = express.Router();


router.get("/index", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObj = {
            burgers: data
        };

        res.render("index", hbsObj);
    });
});

router.post("/api/add", function (req, res) {
    let burgerName = req.body.burger_name;
    let ifDevoured = req.body.devoured;

    burger.insertOne(burgerName, ifDevoured, function (data) {
        res.status(200).end();
    });
});

router.put("/api/update", function (req, res) {
    let burgerID = req.body.id;

    burger.updateOne(burgerID, function (data) {
        res.status(200).end();
    });
});

module.exports = router;