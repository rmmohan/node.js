var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, "public")));

app.get("/people", function(req, res) {
    var people = [
        {first_name: "Rammohan", last_name: "Vadlamani", age: 31, gender: "male"},
        {first_name: "Yogesh", last_name: "Patil", age: 28, gender: "male"},
        {first_name: "Aruna", last_name: "Vadlamani", age: 27, gender: "female"}
    ]
    
    res.json(people);
});

app.get("/download", function(req, res) {
    res.download(path.join(__dirname, "/download/sample.pdf"));
});

app.get("/about", function(req, res) {
    res.redirect("/about.html");
})

app.post("/subscribe", function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    console.log(name + " has subsribed with " + email);
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
});
