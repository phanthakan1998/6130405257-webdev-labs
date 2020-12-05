var express = require("express");
const { url } = require("inspector");
var app = express();

app.set("view engine", "pug");
app.set("views", "./");
app.use(express.static("public"));

app.get("/static_files", function(req, res){
    res.render("static_view",{
    name: "Phanthakan Praeprasert",
    url: "https://www.facebook.com/eeeueiea.phanthakan",
    company1 :"https://www.en.aau.dk/"
    ,company1Name: "Alborg University"
    ,company2 :"https://www.visitcopenhagen.com/",
    company2Name:"VisitCopenhagen"
});
    
});

app.listen(3000);