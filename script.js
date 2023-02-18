'use strict';

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?")

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

for (let i = 0; i < 2; i++) {
    let film1 = prompt('Один из последних просмотренных фильмов?')
    let someCount1 = +prompt('На сколько оцените его?')
    if (film1 != null && someCount1 != null && film1 != "" && someCount1 != "" && film1.length < 50) {
        personalMovieDB.movies[film1] = someCount1 
    } else i--;

    if (personalMovieDB.count < 10) {
        console.log("Просмотрено мало фильмов")
    }else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log("Просмотрено мало фильмов")
    }else console.log("Вы киноман")
}


