let Movie = require('./movieModel');

exports.create = function(req, res){
    
    console.log("Came inside save method");
    let movie = new Movie();
    movie.name = req.body.name;
    movie.genre = req.body.genre;
    movie.rating = req.body.rating;

    movie.save(function(err){
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status:'SUCCESS',
            data: movie
        });
    })
    
};

exports.listAll = function(req,res){
    console.log("Came inside listAll method");
    Movie.get(function (err, movie) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Messages retrieved successfully",
            data: movie
        });
    });
};

exports.findById = function(req, res){
    console.log("Came inside listAll method");

    Movie.findById(req.params.id, function (err, movie) {
        if (err)
            res.send(err);
        res.json({
            message: 'Movie details loading..',
            data: movie
        });
    });
};
