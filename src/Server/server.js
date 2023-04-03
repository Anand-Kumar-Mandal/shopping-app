var mongoClient = require("mongodb").MongoClient;
var express = require("express");
var cors = require("cors");
var connectionString = "mongodb://127.0.0.1:27017";

var app = express();
app.use(cors());

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

//to get users Details from api
app.get("/users", (request, response)=>{
    mongoClient.connect(connectionString).then((clientObject)=>{
        var database = clientObject.db("shopper");
        database.collection("users").find({}).toArray().then((documents)=>{
            response.send(documents);
        })
    })
});
//to post users Details in api
app.post("/registeruser", (request, response)=>{
    var user = {
         "UserId": request.body.UserId,
         "UserName": request.body.UserName,
         "Password": request.body.Password, 
         "Email": request.body.Email,
         "Age": parseInt(request.body.Age),
        "Mobile": request.body.Mobile,
         
    }
    mongoClient.connect(connectionString).then(clientObject=>{
         var database = clientObject.db("shopper");
         database.collection("users").insertOne(user).then(result=>{
            console.log("Record Inserted");
            response.redirect("/users");
         })
    })
});

//to get all products details 
app.get("/Products", (req, res) => {
    mongoClient.connect(connectionString).then(clientObject => {
        var database = clientObject.db("shopper");
        database.collection("products").find({}).toArray().then(documents => {
            res.send(documents);
            res.end();
        })
    })
})
//to get products through categories
app.get("/products/category/:catName", (req, res) => {
    var cat = req.params.catName;
    mongoClient.connect(connectionString).then(clientObject => {
        var database = clientObject.db("shopper");
        database.collection("products").find({category:cat}).toArray().then(documents => {
            res.send(documents);
            res.end();
        })
    })
})

//to get details of specific products by id
app.get("/details/:id", (req, res) => {
    var iD = parseInt(req.params.id);
    mongoClient.connect(connectionString).then(clientObject => {
        var database = clientObject.db("shopper");
        database.collection("products").find({ id: iD }).toArray().then(document => {
            res.send(document);
            res.end();
        })
    })
});

//to add new products in database
app.post("/addproducts", (req, res) => {
    mongoClient.connect(connectionString).then(clientObject => {
        var database = clientObject.db("shopper");
        var product = {
            "id": parseInt(req.body.id),
            "title": req.body.title,
            "price": req.body.price,
            "description": req.body.description,
            "category": req.body.category,
            "rating": { "rate": req.body.rating.rate, "count": req.body.rating.count },
            "image":req.body.image
        };
        database.collection("products").insertOne(product).then(result => {
            console.log("Record Inserted");
            res.redirect("/products");
            res.end();
        })
    })
});

//to update the product details
app.put("/updateproduct", (req, res) => {
    mongoClient.connect(connectionString).then(clientObject => {
        var database = clientObject.db("shopper");
        var findQuery = {id: parseInt(req.body.id) };
        var updateQuery = { $set: { title: req.body.title, price: parseFloat(req.body.price),description:req.body.description,category:req.body.category,rating:{rate:req.body.rating.rate,count:req.body.rating.count},image:req.body.image }};
        database.collection("products").updateOne(findQuery, updateQuery).then(result => {
            console.log("Record Updated");
            res.redirect("/products");
            res.end();
        })
    })
});

//to delete products
app.delete("/deleteproduct/:id", (req, res) => {
    var iD = parseInt(req.params.id);
    mongoClient.connect(connectionString).then(clientObject => {
        var database = clientObject.db("shopper");
        database.collection("products").deleteOne({ id: iD }).then(result => {
            res.redirect("/products");
            res.end();
        })
    })
})

app.listen(5000);
console.log("Server Started : http://127.0.0.1:5000");
