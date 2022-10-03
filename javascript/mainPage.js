<<<<<<< HEAD
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
=======
const numberOfFilms = +prompt("How many movies have you already watched?","");

const personalMovieDB = {
        count:numberOfFilms,
        movie:{},
        actors:{},
        genres:[],
        private:false
};

for (let i = 0; i < 2; i++){
        let  movieName = prompt("which movie did you watch last?",""),
             rank = +prompt("Please rank it",'');
     if (movieName.length < 50 && movieName != "" && rank !="" && movieName != null && rank != null){
                        personalMovieDB.movie[movieName] = rank;
                        console.log('done');
        } else {
                i--;
                console.log('error');
        }
   };


if (personalMovieDB.count < 10){
        console.log("You wathced not many movies");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30){
        console.log("You are classic cinema viewer");
} else if (personalMovieDB.count >= 30){
        console.log("You are movie fan");
} else {
        console.log("Error");
};

>>>>>>> d1a5d9a76b76f19d045ccfff40f513057956fe4c
