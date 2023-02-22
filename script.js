'use strict';
//start();

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?")

    while(personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?")
    }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let film1 = prompt('Один из последних просмотренных фильмов?')
            let someCount1 = +prompt('На сколько оцените его?')
            if (film1 != null && someCount1 != null && film1 != "" && someCount1 != "" && film1.length < 50) {
                personalMovieDB.movies[film1] = someCount1 
            } else i--;
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено мало фильмов")
        }else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log("Просмотрено мало фильмов")
        }else console.log("Вы киноман")
    },
    showMyDB: function() {
        if(personalMovieDB.private == false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for(let i = 1; i <= 3; i++) {
            let favouriteGenre = prompt(`Ваш любимый жанр под номером ${i}`);
            if(favouriteGenre == null || favouriteGenre == "") {
                i--;
            } else {
                personalMovieDB.genres[i - 1] = favouriteGenre;
            }
        }
        console.log(personalMovieDB);

        personalMovieDB.genres.forEach(item, i => {
            console.log(`Любимый жанр под номером ${i}: ${item}`)
        });
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.private) {
            personalMovieDB.private = false;
        }else {
            personalMovieDB.private = true;
        }
        console.log(personalMovieDB.private)
    }

}

personalMovieDB.toggleVisibleMyDB();


//rememberMyFilms();

//detectPersonalLevel();

//writeYourGenres();




