const e = require("express");
var express = require("express");
var router = express.Router();
var movis = [
    {id: 101, name: "How to get away with murder", year: 1999, rating: 8.1},
    {id: 102, name: "The king", year: 1998, rating: 8.7},
    {id: 103, name: "La Révolution", year: 1997, rating: 9}

];

module.exports = router;

router.get("/", function(req, res){
    res.json(movies);
});

router.get("/:id([0-9]{3,})", function(req, res){//{3,} more than 3 char
    var currMovie = movies.filter(function(movie){
        if(movie.id == req.params.id){
            return true;
        }
    });
    if(currMovie.length == 1){
        res.json(currMovie[0])
    } else{
        res.status(404);
        res.json({message: "Not Found"})
    }
});

router.post("/", function(req, res){
    if( !req.body.name || 
        !req.body.year.toString().match(/^[0-9]{4}$/g) || 
        !req.body.rating.toString().match(/^[0-9]\.[0-9]$/g)){
            
        res.status(400);
        res.json({message: "Bad Request"});    
    }else{
        var newId = movies[movies.length-1].id+1;
        movies.push({
            id: newId,
            name: req.body.name,
            year: req.body.year,
            rating: req.body.rating
            
        });
        res.json({message: "New movie created.", location: "/movies/" + newId});

    }
});

router.put('/:id', function (req, res) {
    if (!req.body.name ||
        !req.body.year.toString().match(/^[0-9]{4}$/g) ||
        !req.body.rating.toString().match(/^[0-9]\.[0-9]$/g) ||
        !req.params.id.toString().match(/^[0-9]{3,}$/g)) {

        res.status(400)
        res.json({ message: "Bad Request" });
    } else {
        var updateIndex = movies.map(function (movie) {
            return movie.id;
        }).indexOf(parseInt(req.params.id));
        if (updateIndex === -1) {
            movies.push({
                id: req.params.id,
                name: req.body.name,
                year: req.body.year,
                rating: req.body.rating
            });
        } else {
            movies[updateIndex] = {
                id: req.params.id,
                name: req.body.name,
                year: req.body.year,
                rating: req.body.rating
            };
            res.json({
                message: "Movie id" + req.params.id + " updated.",
                location: "/movies/" + req.params.id
            });

        }

    }

});


router.delete("/:id", function(req, res){
    console.log(req.params.id);
    var removeIndex = movies.map(function(movie){
        return movie.id;
    }).indexOf(parseInt(req.params.id));
    console.log(removeIndex);
    if(removeIndex === -1){
        res.json({message:"Not Found"});
    } else {
        movies.splice(removeIndex, 1);
        res.send({message: "Movies id" + req.params.id + " removed."});
}
});

module.exports = router;