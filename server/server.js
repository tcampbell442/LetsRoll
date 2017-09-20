var express = require ("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

var mongoose = require("mongoose");
mongoose.Promise = require ("bluebird");
mongoose.connect('mongodb://localhost/letsRoll');

var Product = mongoose.model('Product', {name: String});

app.get("/", function (req, res) {
    Product.find(function (err, products){
        //console.log(products);
        res.send(JSON.stringify(products));
    })
})

app.post("/addProduct", function(req, res){
    var name = req.body.name;
    console.log(JSON.stringify(req.body));
    var product = new Product ({name:name});

    //Product.find()
    product.save(function(err){
        res.send();
    })



})

app.listen(3000);