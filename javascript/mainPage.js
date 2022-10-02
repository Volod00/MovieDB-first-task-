let numberOfFilms = +prompt("How many movies have you already watched?","");
let movieName = prompt("which movie did you watch last?",""),
     rank = +prompt("Please rank it"),
     movieNameTwo = prompt("which movie did you watch last?",""),
     rankTwo = +prompt("Please rank it");

const personalMovieDB = {
        count:numberOfFilms,
        movie:{},
        actors:{},
        genres:[],
        private:false
};

personalMovieDB.movie[movieName] = rank;
personalMovieDB.movie[movieNameTwo] = rankTwo;

console.log(personalMovieDB)