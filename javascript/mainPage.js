const numberOfFilms = +prompt("How many movies have you already watched?","");

const personalMovieDB = {
        count:numberOfFilms,
        movie:{},
        actors:{},
        genres:[],
        private:false
};
console.log(personalMovieDB)

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
   console.log(personalMovieDB);

if (personalMovieDB.count < 10){
        console.log("You wathced not many movies");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30){
        console.log("You are classic cinema viewer");
} else if (personalMovieDB.count >= 30){
        console.log("You are movie fan");
} else {
        console.log("Error");
};

