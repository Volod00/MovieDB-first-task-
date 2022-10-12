
const personalMovieDB = {
        count: 0,
        movies:{},
        actors:{},
        genres:[],
        private:false,

        start: function () {
                personalMovieDB.count = +prompt("How many movies have you already watched?","");
        
                while(personalMovieDB.count == '' || personalMovieDB.count == null|| isNaN(personalMovieDB.count)) {
                        personalMovieDB.count = +prompt("How many movies have you already watched?",""); 
                }
        },
        rememberMyFilms: function (){
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
                           }
                },
        
        writeYourGenres: function (){
                        for(let i = 1; i<=3; i++){
                         let favGenre = prompt(`"Which movie genre do you like at number ${i}?"`," ");
                         if(favGenre =='' && favGenre == null){
                                console.log("your data are not correct!")
                                i--;
                         } else {
                         personalMovieDB.genres[i-1]=favGenre;
                         }
                    }
                    personalMovieDB.genres.forEach((element, i)=>{
                        console.log(`your favourite genre is ${i+1}:${element}`)
                    });

                 },
        showMyDB: function (hidden){
                        if(!hidden){
                              return console.log(personalMovieDB);
                        }
                   },
        toggleVisibleMyDB: function(){
                if (personalMovieDB.private){
                        personalMovieDB.private = false;
                        
                } else {
                        personalMovieDB.private = true;
                }
        },
        detectLevel: function () {
                        if (personalMovieDB.count < 10){
                        console.log("You wathced not many movies");
                } else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30){
                        console.log("You are classic cinema viewer");
                } else if (personalMovieDB.count >= 30){
                        console.log("You are movie fan");
                } else {
                        console.log("Error");
                }
          },
};
console.log(personalMovieDB);

console.log(Object.keys(personalMovieDB).length);
