var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function (req, res) {
    //console.log("req = "+req);
    res.redirect('/burger');
});

router.get('/burger', function (req, res) {
    selectAll(function (data) {
        var hbsObject = { burger: data };
        //console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.put('/burger/eaten/:id', function(req, res){
    var burgerID = 'id = ' + req.params.id;
    //console.log("/burger/eaten burgerID = "+ burgerID);
    burger.update({ devoured: req.body.devoured}, burgerID, function(){
        res.redirect('/burger');
    });

});

router.post('/burger/create', function (req, res) {
    burger.create(['burgerName', 'devoured'], [req.body.name, false], function () {
        res.redirect('/burger');
    });
});
module.exports = router;
