let numberOfFilms;

function start() {
        numberOfFilms = +prompt("How many movies have you already watched?","");

        while(numberOfFilms == '' || numberOfFilms == null|| isNaN(numberOfFilms)) {
                numberOfFilms = +prompt("How many movies have you already watched?",""); 
        }
}

start();

const personalMovieDB = {
        count:numberOfFilms,
        movies:{},
        actors:{},
        genres:[],
        private:false
};


function rememberMyFilms(){
        for (let i = 0; i < 2; i++){
                const  movieName = prompt("which movie did you watch last?",""),
                       rank = +prompt("Please rank it",'');
             
                       if (movieName.length < 50 && movieName != "" && rank !="" && movieName != null && rank != null){
                                personalMovieDB.movies[movieName] = rank;
                                console.log('done');
                } else {
                        i--;
                        console.log('error');
                }
           };
}

rememberMyFilms();

function detectLevel(){
                if (personalMovieDB.count < 10){
                console.log("You wathced not many movies");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30){
                console.log("You are classic cinema viewer");
        } else if (personalMovieDB.count >= 30){
                console.log("You are movie fan");
        } else {
                console.log("Error");
        };
  }
detectLevel(); 



