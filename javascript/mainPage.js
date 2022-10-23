
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

// // Do String:
// // console.log(typeof(String(5)));
// // console.log(typeof(String(null)));
// // console.log(typeof(`https://nads.gov.ua/+5`));

// // // To Number:
// // console.log(typeof(Number("5")));
// // console.log(typeof((+"5")));
// // console.log(typeof(parseInt("15px", 10)));

// // //to Boolean:
// // 0, null, '', undefined, NaN = false

// // let switcher = 0;
// // if (switcher){
// //         console.log("Working...");
// // }

// // let y = 1;
// // let x = y = 2;
// // console.log(x);
// // alert(x);

// // console.log(typeof([]+1+2));

// // alert("1"[0]);

// // console.log(2 && 1 && null && 0 && undefined);
// // console.log(typeof(!!(a && b));
// //  console.log(a && b);

// // alert( null || 2 && 3 || 4 ); 
// // let a = [1, 2, 3]; 
// // let b = [1, 2, 3]; 
// // console.log(a==b);

// // alert(+"infinity");

// // const a = "Ёжик"; 
// // const b = "яблоко";

// // console.log(a.length);
// // console.log(b.length);

// console.log(0 && 1|| 0 || NaN || undefined || true || false); 
