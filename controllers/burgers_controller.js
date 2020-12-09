var express = require("express");
const burger = require("../models/burger.js");

// Import the model
var cat = require("../models/burger.js");

var router = express.Router();


// creat all our routes

router.get("/", function(req,res) {
    burger.selectAll(function(data){
        let sAllObject ={
            burgers: data
        };
        console.log(sAllObject);
        res.render("index",sAllObject);
    });
});

router.post("/api/burgers", function(req, res){
    burger.insertOne([
        "burger_name","devoured"
    ],
    [
        req.body.burger_name, 

        req.body.devoured

    ],
     function(result){
        //send back new ID
        res.json(
            {
                id:result.insertId
            }
        );
    })
});

router.put("/api/burgers/:id", function(req,res) {
    let condition = "id =" + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result){
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    })
});


router.deleteOne("/api/burgers/:id", function(req,res) {
    let condition = "id =" + req.params.id;

    burger.deleteOne( condition, function(result){
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    })
});

//export routes

module.exports = router;