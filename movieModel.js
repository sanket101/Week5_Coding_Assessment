let mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    }
})

var Movie = module.exports = mongoose.model('Movie', movieSchema);

module.exports.get = function (callback, limit) {
    Movie.find(callback).limit(limit);
}